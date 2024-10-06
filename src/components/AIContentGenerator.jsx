import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const AIContentGenerator = () => {
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateContent = async () => {
    setIsLoading(true);
    // In a real implementation, this would be an API call to an AI service
    // For demo purposes, we'll use a timeout and predefined responses
    setTimeout(() => {
      const demoResponses = [
        `Check out our latest ${topic} collection! 🚀 Elevate your style with cutting-edge designs. #TrendAlert #MustHave`,
        `Introducing our game-changing ${topic} solution! 💡 Boost productivity and streamline your workflow. #InnovationAtWork`,
        `Experience the future of ${topic} with our AI-powered platform. 🤖 Smarter decisions, better results. #AIRevolution`,
      ];
      setGeneratedContent(demoResponses[Math.floor(Math.random() * demoResponses.length)]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">AI Content Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Enter a topic (e.g., fashion, productivity, technology)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button 
          onClick={generateContent} 
          disabled={!topic || isLoading} 
          className="w-full"
        >
          {isLoading ? 'Generating...' : 'Generate Content'}
        </Button>
        {generatedContent && (
          <div className="mt-4 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-800">{generatedContent}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIContentGenerator;