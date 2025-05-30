import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatState } from './hooks/useChatState';
import { sendMessageToAI, simulateTypingDelay, formatMessageForDisplay } from './utils/chatAPI';
import ChatHeader from './components/ChatHeader';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import MessageInput from './components/MessageInput';
import QuickReplies from './components/QuickReplies';

const ChatWindow = ({ onClose }) => {
  const {
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
  } = useChatState();

  const [isExpanded, setIsExpanded] = useState(true);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "end"
      });
    }
  }, [messages, isTyping]);

  // Hide quick replies after first user message
  useEffect(() => {
    const userMessages = messages.filter(msg => msg.sender === 'user');
    if (userMessages.length > 0) {
      setShowQuickReplies(false);
    }
  }, [messages]);

  const handleSendMessage = async (messageData) => {
    // Add user message immediately
    const userMessage = addMessage({
      text: messageData.text,
      sender: 'user',
      files: messageData.files || [],
      quickAction: messageData.quickAction,
      metadata: messageData.metadata
    });

    setIsTyping(true);
    setIsConnected(true);

    try {
      // Prepare data for AI
      const aiRequestData = {
        text: messageData.text,
        sessionId,
        timestamp: userMessage.timestamp,
        userContext,
        recentMessages: getRecentMessages(),
        quickAction: messageData.quickAction,
        files: messageData.files
      };

      // Send to AI with realistic delay
      const response = await sendMessageToAI(aiRequestData);
      
      if (response.success) {
        const formattedResponse = formatMessageForDisplay(response.data);
        
        // Simulate typing delay based on response length
        const typingDelay = simulateTypingDelay(formattedResponse.text);
        
        setTimeout(() => {
          addMessage({
            text: formattedResponse.text,
            sender: 'bot',
            type: formattedResponse.type,
            quickReplies: formattedResponse.quickReplies,
            buttons: formattedResponse.buttons,
            metadata: formattedResponse.metadata
          });
          setIsTyping(false);
        }, typingDelay);
      } else {
        // Handle error with fallback message
        setTimeout(() => {
          addMessage({
            text: response.fallbackMessage,
            sender: 'bot',
            type: 'error'
          });
          setIsTyping(false);
          setIsConnected(false);
        }, 1000);
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      setTimeout(() => {
        addMessage({
          text: "I'm experiencing technical difficulties. Please try again or contact us at hello@zaidistudio.com",
          sender: 'bot',
          type: 'error'
        });
        setIsTyping(false);
        setIsConnected(false);
      }, 1000);
    }
  };

  const handleQuickReply = (replyData) => {
    handleSendMessage(replyData);
  };

  const handleClearChat = () => {
    clearChat();
    setShowQuickReplies(true);
  };

  const handleExportChat = () => {
    const chatData = {
      sessionId,
      timestamp: new Date().toISOString(),
      messages: messages.map(msg => ({
        text: msg.text,
        sender: msg.sender,
        timestamp: msg.timestamp
      }))
    };

    const blob = new Blob([JSON.stringify(chatData, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zaidistudio-chat-${sessionId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReplyToMessage = (message) => {
    // Focus input and add reply context
    const replyText = `Regarding: "${message.text.substring(0, 50)}${message.text.length > 50 ? '...' : ''}"\n\n`;
    // This would need to be implemented in MessageInput component
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 w-full sm:w-96 md:w-[420px] flex flex-col max-w-[calc(100vw-2rem)] dark:bg-gray-900/95 dark:border-gray-700/50"
      style={{ 
        height: isExpanded ? '600px' : '60px',
        maxHeight: 'calc(100vh - 6rem)',
        transition: 'height 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <ChatHeader
        onClose={onClose}
        onToggleSize={() => setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
        isConnected={isConnected}
        onClearChat={handleClearChat}
        onExportChat={handleExportChat}
        messageCount={messages.length}
      />

      {/* Chat Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col min-h-0"
          >
            {/* Messages Area */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-1 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#cbd5e1 transparent'
              }}
            >
              {/* Welcome message and quick replies */}
              {showQuickReplies && messages.length <= 1 && (
                <QuickReplies 
                  onQuickReply={handleQuickReply}
                  disabled={isTyping}
                />
              )}

              {/* Messages */}
              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isLast={index === messages.length - 1}
                    onReply={handleReplyToMessage}
                  />
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <TypingIndicator isVisible={isTyping} />

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <MessageInput
              onSendMessage={handleSendMessage}
              disabled={isTyping}
              placeholder={
                !isConnected 
                  ? "Reconnecting..." 
                  : "Ask about our AI solutions..."
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChatWindow;
