import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'zaidistudio_chat_session';

export const useChatState = () => {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [userContext, setUserContext] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  // Initialize session
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setMessages(data.messages || []);
        setSessionId(data.sessionId);
        setUserContext(data.userContext || {});
      } catch (error) {
        console.error('Error loading chat session:', error);
      }
    }

    // Generate new session ID if none exists
    if (!sessionId) {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
    }

    // Add welcome message if no messages exist
    if (messages.length === 0) {
      const welcomeMessage = {
        id: `msg_${Date.now()}`,
        text: "👋 Hello! I'm ZaidiStudio's AI Assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date().toISOString(),
        type: "welcome"
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (sessionId && messages.length > 0) {
      const dataToStore = {
        sessionId,
        messages,
        userContext,
        lastActivity: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
    }
  }, [messages, sessionId, userContext]);

  const addMessage = useCallback((message) => {
    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      ...message
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const updateUserContext = useCallback((context) => {
    setUserContext(prev => ({ ...prev, ...context }));
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
  }, []);

  const getRecentMessages = useCallback((count = 5) => {
    return messages.slice(-count).map(msg => ({
      text: msg.text,
      sender: msg.sender,
      timestamp: msg.timestamp
    }));
  }, [messages]);

  return {
    messages,
    sessionId,
    userContext,
    isTyping,
    isConnected,
    setIsTyping,
    setIsConnected,
    addMessage,
    updateUserContext,
    clearChat,
    getRecentMessages
  };
};
