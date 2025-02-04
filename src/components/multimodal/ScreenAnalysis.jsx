import React from 'react';
import { Monitor } from 'lucide-react';
import { Button } from '../ui/button';

const ScreenAnalysis = ({ isRecording, startRecording, activeDemo }) => {
  return (
    <Button
      onClick={() => startRecording('screen')}
      disabled={isRecording}
      variant={activeDemo === 'screen' ? "default" : "outline"}
      className="flex items-center gap-2 min-w-[160px] transition-all duration-300 hover:scale-105"
    >
      <Monitor className="h-4 w-4" />
      Website Analysis
    </Button>
  );
};

export default ScreenAnalysis;