
import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, X, Image, Paperclip, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: "user", timestamp: new Date().toLocaleTimeString() };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);

      try {
        const response = await fetch('https://hook.eu2.make.com/7u74c3kmr7esrqsywh8c4bv8f9kmytii', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const text = await response.text();
        setMessages(prev => [...prev, { 
          text, 
          sender: "bot", 
          timestamp: new Date().toLocaleTimeString() 
        }]);
      } catch (error) {
        console.error('Error calling webhook:', error);
        setMessages(prev => [...prev, { 
          text: "Sorry, I'm having trouble connecting. Please try again later.", 
          sender: "bot",
          timestamp: new Date().toLocaleTimeString()
        }]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 h-[28rem] flex flex-col"
    >
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <h3 className="font-bold text-lg">Live Chat</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-white hover:text-gray-200 transition-colors"
          >
            <Image size={20} />
          </button>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white"
          >
            {messages.map((message, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`rounded-full p-2 ${
                    message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'
                  } transition-all duration-300 hover:scale-110`}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    } shadow-sm`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{message.timestamp}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2"
              >
                <div className="bg-gray-200 p-2 rounded-full">
                  <Bot size={16} />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSend} className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex items-center space-x-2">
          <div className="flex-grow relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full border rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Paperclip size={18} />
              </button>
              <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Smile size={18} />
              </button>
            </div>
          </div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-2 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ChatWindow;
