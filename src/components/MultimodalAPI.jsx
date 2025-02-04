import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from './Terminal';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mic, Video, Monitor, StopCircle, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { pipeline } from '@huggingface/transformers';

const MultimodalAPI = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [logs, setLogs] = useState([]);
  const [activeDemo, setActiveDemo] = useState(null);
  const [classifier, setClassifier] = useState(null);
  const videoRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Initialize image classification model
    const initClassifier = async () => {
      try {
        const imageClassifier = await pipeline(
          'image-classification',
          'onnx-community/mobilenetv4_conv_small.e2400_r224_in1k',
          { device: 'webgpu' }
        );
        setClassifier(imageClassifier);
      } catch (error) {
        console.error('Error initializing classifier:', error);
        toast.error('Failed to initialize image classifier');
      }
    };
    initClassifier();
  }, []);

  const getVideoFrame = () => {
    if (!videoRef.current) return null;
    
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0);
    
    // Convert to base64 JPEG
    return canvas.toDataURL('image/jpeg', 0.8);
  };

  const processVideoFrame = async () => {
    if (!videoRef.current || !classifier || !isRecording) return;

    try {
      const frameData = getVideoFrame();
      if (!frameData) return;

      const results = await classifier(frameData);
      if (results && results.length > 0) {
        const topResult = results[0];
        setLogs(prev => [...prev, `🎯 Detected: ${topResult.label} (${Math.round(topResult.score * 100)}% confidence)`]);
      }
    } catch (error) {
      console.error('Error processing video frame:', error);
      toast.error('Error processing video frame');
    }

    if (isRecording) {
      requestAnimationFrame(processVideoFrame);
    }
  };

  const startSpeechRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        
        if (event.results[event.results.length - 1].isFinal) {
          setLogs(prev => [...prev, `🎤 Transcribed: "${transcript}"`]);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        toast.error('Speech recognition error: ' + event.error);
      };

      recognitionRef.current.start();
    } else {
      toast.error('Speech recognition is not supported in this browser');
    }
  };

  const startRecording = async (mediaType) => {
    try {
      let stream;
      setActiveDemo(mediaType);
      
      switch (mediaType) {
        case 'audio':
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          startSpeechRecognition();
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
        if (mediaType === 'video') {
          requestAnimationFrame(processVideoFrame);
        }
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
      if (recognitionRef.current) {
        recognitionRef.current.stop();
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
      if (recognitionRef.current) {
        recognitionRef.current.stop();
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
          <Button
            onClick={() => startRecording('audio')}
            disabled={isRecording}
            variant={activeDemo === 'audio' ? "default" : "outline"}
            className="flex items-center gap-2 min-w-[160px] transition-all duration-300 hover:scale-105"
          >
            <Mic className="h-4 w-4" />
            Voice Analysis
          </Button>
          
          <Button
            onClick={() => startRecording('video')}
            disabled={isRecording}
            variant={activeDemo === 'video' ? "default" : "outline"}
            className="flex items-center gap-2 min-w-[160px] transition-all duration-300 hover:scale-105"
          >
            <Video className="h-4 w-4" />
            Visual Analysis
          </Button>
          
          <Button
            onClick={() => startRecording('screen')}
            disabled={isRecording}
            variant={activeDemo === 'screen' ? "default" : "outline"}
            className="flex items-center gap-2 min-w-[160px] transition-all duration-300 hover:scale-105"
          >
            <Monitor className="h-4 w-4" />
            Website Analysis
          </Button>
          
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
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
            {!isRecording && (
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6" />
                  <span>Start an analysis session</span>
                </div>
              </div>
            )}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="h-[300px] bg-gray-900 rounded-lg overflow-hidden">
            <Terminal commands={logs} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MultimodalAPI;