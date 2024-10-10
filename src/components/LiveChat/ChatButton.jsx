import React from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out"
    >
      {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
    </button>
  );
};

export default ChatButton;