import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ChatButton onClick={toggleChat} isOpen={isOpen} />
      {isOpen && <ChatWindow onClose={toggleChat} />}
    </div>
  );
};

export default LiveChat;