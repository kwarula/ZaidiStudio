import React, { useRef } from 'react';
import { Mic } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const VoiceAnalysis = ({ isRecording, startRecording, activeDemo }) => {
  const recognitionRef = useRef(null);

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

  const handleStartVoice = async () => {
    await startRecording('audio');
    startSpeechRecognition();
  };

  return (
    <Button
      onClick={handleStartVoice}
      disabled={isRecording}
      variant={activeDemo === 'audio' ? "default" : "outline"}
      className="flex items-center gap-2 min-w-[160px] transition-all duration-300 hover:scale-105"
    >
      <Mic className="h-4 w-4" />
      Voice Analysis
    </Button>
  );
};

export default VoiceAnalysis;