import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from './Terminal';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mic, Camera, Monitor, StopCircle } from 'lucide-react';
import { toast } from 'sonner';

const MultimodalAPI = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [logs, setLogs] = useState([]);
  const videoRef = useRef(null);

  const startRecording = async (mediaType) => {
    try {
      let stream;
      switch (mediaType) {
        case 'audio':
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          break;
        case 'video':
          stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          break;
        case 'screen':
          stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          break;
        default:
          throw new Error('Unsupported media type');
      }
      
      setMediaStream(stream);
      setIsRecording(true);
      addLog(`Started ${mediaType} recording`);
      toast.success(`${mediaType} recording started`);
    } catch (error) {
      console.error('Error accessing media devices:', error);
      toast.error(`Failed to start ${mediaType} recording: ${error.message}`);
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
      addLog('Stopped recording');
      toast.info('Recording stopped');
    }
  };

  const addLog = (message) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaStream]);

  return (
    <div className="space-y-4 p-4">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Multimodal Live API Demo</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <Button
            onClick={() => startRecording('audio')}
            disabled={isRecording}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Mic className="h-4 w-4" />
            Record Audio
          </Button>
          
          <Button
            onClick={() => startRecording('video')}
            disabled={isRecording}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Camera className="h-4 w-4" />
            Record Video
          </Button>
          
          <Button
            onClick={() => startRecording('screen')}
            disabled={isRecording}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Monitor className="h-4 w-4" />
            Screen Capture
          </Button>
          
          {isRecording && (
            <Button
              onClick={stopRecording}
              variant="destructive"
              className="flex items-center gap-2"
            >
              <StopCircle className="h-4 w-4" />
              Stop Recording
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="h-[300px] overflow-auto">
            <Terminal commands={logs} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MultimodalAPI;