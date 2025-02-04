import React, { useRef } from 'react';
import { Video } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';

const VideoAnalysis = ({ 
  isRecording, 
  videoRef, 
  classifier, 
  setLogs, 
  startRecording, 
  activeDemo 
}) => {
  const getVideoFrame = () => {
    if (!videoRef.current) return null;
    
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    
    ctx.drawImage(videoRef.current, 0, 0);
    
    return new Promise(resolve => {
      canvas.toBlob(blob => {
        resolve(blob);
      }, 'image/jpeg', 0.8);
    });
  };

  const processVideoFrame = async () => {
    if (!videoRef.current || !classifier || !isRecording) return;

    try {
      const frameBlob = await getVideoFrame();
      if (!frameBlob) return;

      const results = await classifier(frameBlob);
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

  const handleStartVideo = async () => {
    await startRecording('video');
    requestAnimationFrame(processVideoFrame);
  };

  return (
    <Button
      onClick={handleStartVideo}
      disabled={isRecording}
      variant={activeDemo === 'video' ? "default" : "outline"}
      className="flex items-center gap-2 min-w-[160px] transition-all duration-300 hover:scale-105"
    >
      <Video className="h-4 w-4" />
      Visual Analysis
    </Button>
  );
};

export default VideoAnalysis;