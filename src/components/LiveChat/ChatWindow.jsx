import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import OpenAI from 'openai';

// Use Vite's import.meta.env to access environment variables
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

let openai;

if (apiKey) {
  openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // Note: This is not recommended for production
  });
}

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);
      setError('');

      if (!apiKey) {
        setError('OpenAI API key is not set. Please add your API key to the .env file.');
        setIsTyping(false);
        return;
      }

      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant for ZaidiStudio, an AI-powered business automation company." },
            ...messages.map(msg => ({ role: msg.sender === "user" ? "user" : "assistant", content: msg.text })),
            { role: "user", content: input }
          ],
        });

        const botReply = response.choices[0].message.content;
        setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
      } catch (error) {
        console.error('Error calling OpenAI:', error);
        setError('Error: ' + (error.message || 'Failed to connect to OpenAI. Please check your API key and try again.'));
      } finally {
        setIsTyping(false);
      }
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
        {error && (
          <div className="text-red-500 mt-2">{error}</div>
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