import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Track user interaction for analytics
  useEffect(() => {
    if (isOpen && !hasInteracted) {
      setHasInteracted(true);
      // You could send analytics event here
      console.log('User opened chat for the first time');
    }
  }, [isOpen, hasInteracted]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ctrl/Cmd + K to toggle chat
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Escape to close chat
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Chat Window */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <ChatWindow onClose={closeChat} />
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <ChatButton onClick={toggleChat} isOpen={isOpen} />
      
      {/* Keyboard shortcut hint (only show on desktop) */}
      {!isOpen && (
        <div className="hidden lg:block text-xs text-gray-500 dark:text-gray-400 text-right mr-2 opacity-0 hover:opacity-100 transition-opacity">
          Press Ctrl+K to open chat
        </div>
      )}
    </div>
  );
};

export default LiveChat;
