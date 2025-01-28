import React from 'react';
import Terminal from './Terminal';

const DemoTerminal = () => {
  const demoCommands = [
    'npm install @zaidistudio/ai',
    'Initializing AI components...',
    'Setting up business automation...',
    'AI system ready for deployment!'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Terminal commands={demoCommands} />
    </div>
  );
};

export default DemoTerminal;