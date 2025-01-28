import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Terminal = ({ commands = [] }) => {
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex >= commands.length) return;

    const command = commands[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= command.length) {
        setCurrentText(command.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayedCommands(prev => [...prev, command]);
          setCurrentText('');
          setCurrentIndex(prev => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentIndex, commands]);

  return (
    <Card className="bg-black text-green-400 font-mono">
      <CardContent className="p-4">
        {displayedCommands.map((cmd, index) => (
          <div key={index} className="mb-2">
            <span className="text-gray-500">$ </span>
            {cmd}
          </div>
        ))}
        {currentIndex < commands.length && (
          <div className="animate-fade-in">
            <span className="text-gray-500">$ </span>
            {currentText}
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              ▋
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Terminal;