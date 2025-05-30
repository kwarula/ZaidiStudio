import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Zap, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatButton = ({ onClick, isOpen }) => {
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  // Show tooltip after a delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
        // Hide tooltip after 3 seconds
        setTimeout(() => setShowTooltip(false), 3000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Periodic pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setPulseCount(prev => prev + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClick = () => {
    setHasNewMessage(false);
    setShowTooltip(false);
    onClick();
  };

  return (
    <div className="relative">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap z-10"
          >
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-blue-600" />
              <span className="text-sm font-medium">Need help? Chat with our AI!</span>
            </div>
            {/* Arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={handleClick}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={pulseCount > 0 && !isOpen ? {
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0 0 rgba(59, 130, 246, 0.7)",
            "0 0 0 10px rgba(59, 130, 246, 0)",
            "0 0 0 0 rgba(59, 130, 246, 0)"
          ]
        } : {}}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        {/* Background with gradient */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 shadow-lg flex items-center justify-center relative overflow-hidden">
          {/* Animated background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 via-violet-400 to-purple-400 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
          />

          {/* Icon */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <MessageCircle size={24} className="text-white" />
            )}
          </motion.div>
        </div>

        {/* Notification badge */}
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg"
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating particles effect */}
        <AnimatePresence>
          {!isOpen && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{ 
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: [0, (i - 1) * 20],
                    y: [0, -30 - i * 10],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    repeatDelay: 3
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Expand indicator when minimized */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md border border-gray-200 dark:border-gray-700">
              <ChevronUp size={12} className="text-gray-600 dark:text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatButton;
