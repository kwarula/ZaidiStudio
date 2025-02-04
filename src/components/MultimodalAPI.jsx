import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from './Terminal';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { pipeline, env } from '@huggingface/transformers';
import VideoAnalysis from './multimodal/VideoAnalysis';
import VoiceAnalysis from './multimodal/VoiceAnalysis';
import ScreenAnalysis from './multimodal/ScreenAnalysis';
import VideoPreview from './multimodal/VideoPreview';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

const MultimodalAPI = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [logs, setLogs] = useState([]);
  const [activeDemo, setActiveDemo] = useState(null);
  const [classifier, setClassifier] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const initClassifier = async () => {
      try {
        console.log('Initializing classifier...');
        const imageClassifier = await pipeline(
          'image-classification',
          'Xenova/vit-base-patch16-224',
          { device: 'webgpu' }
        );
        console.log('Classifier initialized successfully');
        setClassifier(imageClassifier);
      } catch (error) {
        console.error('Error initializing classifier:', error);
        toast.error('Failed to initialize image classifier');
      }
    };
    initClassifier();
  }, []);

  const startRecording = async (mediaType) => {
    try {
      let stream;
      setActiveDemo(mediaType);
      
      switch (mediaType) {
        case 'audio':
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          toast.success("Voice recognition activated");
          break;
        case 'video':
          stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
              width: { ideal: 640 },
              height: { ideal: 480 }
            } 
          });
          toast.success("Video analysis started");
          break;
        case 'screen':
          stream = await navigator.mediaDevices.getDisplayMedia({ 
            video: { cursor: "always" },
            audio: false
          });
          toast.success("Screen analysis initiated");
          break;
        default:
          throw new Error('Unsupported media type');
      }
      
      if (videoRef.current && mediaType !== 'audio') {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      
      setMediaStream(stream);
      setIsRecording(true);
      setLogs([]);
      
    } catch (error) {
      console.error('Error accessing media devices:', error);
      toast.error(`Could not start ${mediaType} recording: ${error.message}`);
    }
  };

  const stopRecording = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setMediaStream(null);
      setIsRecording(false);
      setActiveDemo(null);
      toast.info('Recording stopped');
    }
  };

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaStream]);

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-blue-900">Experience AI in Action</h2>
        <p className="text-gray-600">Watch our AI analyze your input in real-time through voice, video, or screen sharing</p>
      </div>
      
      <Card className="p-6 bg-white/80 backdrop-blur shadow-xl">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <VoiceAnalysis 
            isRecording={isRecording}
            startRecording={startRecording}
            activeDemo={activeDemo}
          />
          
          <VideoAnalysis 
            isRecording={isRecording}
            videoRef={videoRef}
            classifier={classifier}
            setLogs={setLogs}
            startRecording={startRecording}
            activeDemo={activeDemo}
          />
          
          <ScreenAnalysis 
            isRecording={isRecording}
            startRecording={startRecording}
            activeDemo={activeDemo}
          />
          
          {isRecording && (
            <Button
              onClick={stopRecording}
              variant="destructive"
              className="flex items-center gap-2 min-w-[160px] animate-pulse"
            >
              <StopCircle className="h-4 w-4" />
              Stop Recording
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VideoPreview videoRef={videoRef} isRecording={isRecording} />
          <div className="h-[300px] bg-gray-900 rounded-lg overflow-hidden">
            <Terminal commands={logs} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MultimodalAPI;