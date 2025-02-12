
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Terminal = ({ commands = [] }) => {
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex >= commands.length) {
      // Restart the animation after a delay
      const restartTimeout = setTimeout(() => {
        setDisplayedCommands([]);
        setCurrentIndex(0);
        setCurrentText('');
      }, 5000);
      return () => clearTimeout(restartTimeout);
    }

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
    <Card className="bg-black text-green-400 font-mono shadow-2xl border-2 border-gray-800">
      <CardContent className="p-6">
        {displayedCommands.map((cmd, index) => (
          <div key={index} className="mb-2">
            {cmd.startsWith('✓') ? (
              <span className="text-emerald-400">{cmd}</span>
            ) : (
              <span>{cmd}</span>
            )}
          </div>
        ))}
        {currentIndex < commands.length && (
          <div className="animate-fade-in">
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

export { Terminal };
export default Terminal;
