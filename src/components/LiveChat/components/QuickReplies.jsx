import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Phone, Mail, HelpCircle, Zap } from 'lucide-react';
import { Button } from '../../ui/button';

const QuickReplies = ({ onQuickReply, disabled }) => {
  const quickReplies = [
    {
      id: 'demo',
      text: '📅 Book a Demo',
      icon: Calendar,
      action: 'book_demo',
      description: 'Schedule a personalized demo'
    },
    {
      id: 'pricing',
      text: '💰 Get Pricing',
      icon: DollarSign,
      action: 'get_pricing',
      description: 'View our pricing plans'
    },
    {
      id: 'services',
      text: '⚡ Our Services',
      icon: Zap,
      action: 'view_services',
      description: 'Learn about our AI solutions'
    },
    {
      id: 'support',
      text: '🛠️ Technical Support',
      icon: HelpCircle,
      action: 'technical_support',
      description: 'Get technical assistance'
    },
    {
      id: 'contact',
      text: '📞 Contact Sales',
      icon: Phone,
      action: 'contact_sales',
      description: 'Speak with our sales team'
    },
    {
      id: 'email',
      text: '✉️ Email Us',
      icon: Mail,
      action: 'email_contact',
      description: 'Send us an email'
    }
  ];

  const handleQuickReply = (reply) => {
    if (disabled) return;
    
    onQuickReply({
      text: reply.text,
      quickAction: reply.action,
      metadata: {
        type: 'quick_reply',
        action: reply.action,
        description: reply.description
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="px-4 pb-4"
    >
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Quick Actions
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {quickReplies.map((reply, index) => {
            const IconComponent = reply.icon;
            return (
              <motion.div
                key={reply.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.2, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply(reply)}
                  disabled={disabled}
                  className="w-full h-auto p-3 flex flex-col items-center space-y-1 text-xs hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950 dark:hover:border-blue-800 transition-all duration-200 group"
                >
                  <IconComponent 
                    size={16} 
                    className="text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors" 
                  />
                  <span className="text-center leading-tight font-medium">
                    {reply.text.replace(/[📅💰⚡🛠️📞✉️]/g, '').trim()}
                  </span>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="text-center"
      >
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Or type your message below 👇
        </p>
      </motion.div>
    </motion.div>
  );
};

export default QuickReplies;
