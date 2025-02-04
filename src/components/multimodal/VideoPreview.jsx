import React from 'react';
import { Sparkles } from 'lucide-react';

const VideoPreview = ({ videoRef, isRecording }) => {
  return (
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
  );
};

export default VideoPreview;