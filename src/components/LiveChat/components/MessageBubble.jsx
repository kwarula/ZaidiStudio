
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bot, Copy, Check, MoreVertical, Reply } from 'lucide-react';
import { Button } from '../../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../ui/dropdown-menu';

const MessageBubble = ({ message, isLast, onReply }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.sender === 'user';
  const isBot = message.sender === 'bot';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy message:', error);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const renderMessageContent = () => {
    // Handle rich text formatting
    let content = message.text;
    
    // Convert **bold** to <strong>
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert *italic* to <em>
    content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert URLs to links
    content = content.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 underline">$1</a>'
    );

    return (
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-sm max-w-none"
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
      className={`flex group ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex items-start space-x-2 max-w-[85%] ${
        isUser ? 'flex-row-reverse space-x-reverse' : ''
      }`}>
        {/* Avatar */}
        <motion.div 
          className={`rounded-full p-2 flex-shrink-0 ${
            isUser 
              ? 'bg-gradient-to-br from-blue-500 to-violet-600 text-white' 
              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 dark:from-gray-700 dark:to-gray-800 dark:text-gray-300'
          } shadow-lg`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {isUser ? (
            <User size={16} />
          ) : (
            <img 
              src="/logos/ZaidiStudio_icon.png" 
              alt="ZaidiStudio" 
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* Message Content */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <motion.div
            className={`relative px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm ${
              isUser
                ? 'bg-gradient-to-br from-blue-500 to-violet-600 text-white rounded-br-md'
                : 'bg-white/90 text-gray-800 border border-gray-200/50 rounded-bl-md dark:bg-gray-800/90 dark:text-gray-200 dark:border-gray-700/50'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Message tail */}
            <div className={`absolute w-3 h-3 ${
              isUser 
                ? 'bg-gradient-to-br from-blue-500 to-violet-600 -bottom-1 -right-1 rounded-bl-full'
                : 'bg-white/90 border-l border-b border-gray-200/50 -bottom-1 -left-1 rounded-br-full dark:bg-gray-800/90 dark:border-gray-700/50'
            }`} />
            
            <div className="text-sm leading-relaxed">
              {renderMessageContent()}
            </div>

            {/* Message actions */}
            <div className={`opacity-0 group-hover:opacity-100 transition-opacity absolute ${
              isUser ? '-left-8' : '-right-8'
            } top-1/2 -translate-y-1/2`}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 rounded-full bg-white/80 hover:bg-white shadow-md dark:bg-gray-800/80 dark:hover:bg-gray-800"
                  >
                    <MoreVertical size={12} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isUser ? "end" : "start"}>
                  <DropdownMenuItem onClick={handleCopy} className="text-xs">
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
                  </DropdownMenuItem>
                  {isBot && onReply && (
                    <DropdownMenuItem onClick={() => onReply(message)} className="text-xs">
                      <Reply size={12} />
                      <span className="ml-2">Reply</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>

          {/* Timestamp and status */}
          <div className={`flex items-center space-x-2 mt-1 ${
            isUser ? 'flex-row-reverse space-x-reverse' : ''
          }`}>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatTime(message.timestamp)}
            </span>
            {isUser && (
              <div className="flex space-x-1">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
