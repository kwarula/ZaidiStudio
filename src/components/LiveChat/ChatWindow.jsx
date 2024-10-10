import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput('');
      // Simulate bot response (replace with actual backend integration later)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. A representative will be with you shortly.", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h3 className="font-bold">Live Chat</h3>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;