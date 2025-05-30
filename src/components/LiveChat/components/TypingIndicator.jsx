import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const TypingIndicator = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-start space-x-2 mb-4"
    >
      {/* Avatar */}
      <motion.div 
        className="rounded-full p-2 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 dark:from-gray-700 dark:to-gray-800 dark:text-gray-300 shadow-lg"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 1, -1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Bot size={16} />
      </motion.div>

      {/* Typing bubble */}
      <motion.div
        className="bg-white/90 text-gray-800 border border-gray-200/50 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-gray-800/90 dark:text-gray-200 dark:border-gray-700/50 relative"
        animate={{ 
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Message tail */}
        <div className="absolute w-3 h-3 bg-white/90 border-l border-b border-gray-200/50 -bottom-1 -left-1 rounded-br-full dark:bg-gray-800/90 dark:border-gray-700/50" />
        
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
            AI Assistant is typing
          </span>
          <div className="flex space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TypingIndicator;
