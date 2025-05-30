import React from 'react';
import { motion } from 'framer-motion';
import { X, Minimize2, Maximize2, MoreVertical, Trash2, Download } from 'lucide-react';
import { Button } from '../../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../../ui/dropdown-menu';

const ChatHeader = ({ 
  onClose, 
  onToggleSize, 
  isExpanded, 
  isConnected, 
  onClearChat, 
  onExportChat,
  messageCount = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center shadow-lg"
    >
      {/* Left side - Status and title */}
      <div className="flex items-center space-x-3">
        <motion.div
          animate={{ 
            scale: isConnected ? [1, 1.2, 1] : 1,
            opacity: isConnected ? 1 : 0.6
          }}
          transition={{ 
            duration: 2,
            repeat: isConnected ? Infinity : 0,
            ease: "easeInOut"
          }}
          className={`w-3 h-3 rounded-full ${
            isConnected ? 'bg-green-400 shadow-green-400/50' : 'bg-red-400'
          } shadow-lg`}
        />
        
        <div>
          <h3 className="font-bold text-lg">ZaidiStudio AI</h3>
          <p className="text-xs text-blue-100 opacity-90">
            {isConnected ? 'Online' : 'Connecting...'} • {messageCount} messages
          </p>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center space-x-2">
        {/* More options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-colors"
            >
              <MoreVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={onExportChat} className="text-sm">
              <Download size={14} />
              <span className="ml-2">Export Chat</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={onClearChat} 
              className="text-sm text-red-600 focus:text-red-600"
            >
              <Trash2 size={14} />
              <span className="ml-2">Clear Chat</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Minimize/Maximize */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={onToggleSize}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-colors"
            aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </Button>
        </motion.div>

        {/* Close */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-colors"
            aria-label="Close chat"
          >
            <X size={16} />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChatHeader;
