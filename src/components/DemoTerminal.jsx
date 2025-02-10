
import React from 'react';
import { Terminal } from './Terminal';

const DemoTerminal = () => {
  const demoCommands = [
    '> Initializing ZaidiStudio AI Automation System...',
    '> Connecting to business systems...',
    '> Starting automated customer service module',
    '✓ AI Chatbot activated - now handling 90% of customer queries',
    '> Deploying social media automation',
    '✓ Content generation activated - producing 30 posts/day',
    '> Launching inventory management system',
    '✓ Stock levels optimized - reducing costs by 30%',
    '> Activating sales pipeline automation',
    '✓ Lead qualification running - conversion rate +40%',
    '> System fully operational',
    '✓ All automation processes running efficiently'
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Watch AI Automation in Action
          </h2>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20"></div>
            <div className="relative">
              <Terminal commands={demoCommands} />
            </div>
          </div>
          <p className="text-gray-600 text-center mt-6">
            Experience real-time automation that transforms your business operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoTerminal;
