import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);

      try {
        const response = await fetch('https://hook.eu2.make.com/60y6rd1wmdxjeao5mog4bef562tg79hg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        // Parse the response and create a user-friendly message
        const botReply = parseResponse(data);
        setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
      } catch (error) {
        console.error('Error calling webhook:', error);
        setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: "bot" }]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const parseResponse = (data) => {
    // This function can be customized based on the actual structure of the webhook response
    if (typeof data === 'string') {
      return data;
    } else if (typeof data === 'object') {
      // Assuming the response has a 'message' field
      return data.message || JSON.stringify(data);
    } else {
      return "Received a response, but I'm not sure how to interpret it.";
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h3 className="font-bold">Live Chat</h3>
      </div>
      <div id="chat-messages" className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {message.text}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="text-gray-500 italic">Assistant is typing...</div>
        )}
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