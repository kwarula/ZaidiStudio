
import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatButton = ({ onClick, isOpen }) => {
  return (
    <AnimatePresence>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out relative group"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            1
          </motion.div>
        )}
        <motion.div
          className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
          whileHover={{ scale: 1.2 }}
        />
      </motion.button>
    </AnimatePresence>
  );
};

export default ChatButton;
