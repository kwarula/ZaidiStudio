
import React from 'react';
import { cn } from '@/lib/utils';

const PremiumCard = ({ 
  children, 
  className, 
  variant = 'default',
  hover = true,
  glow = false,
  ...props 
}) => {
  const baseClasses = "card";
  const variantClasses = {
    default: "",
    premium: "card-premium",
    warning: "border-red-200 bg-red-50/50",
    success: "border-green-200 bg-green-50/50"
  };
  
  const hoverClasses = hover ? "hover:transform hover:scale-[1.02]" : "";
  const glowClasses = glow ? "ai-glow" : "";

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glowClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default PremiumCard;
