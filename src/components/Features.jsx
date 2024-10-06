import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { MessageSquare, Share2, Package, Users } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  { 
    title: 'Customer Service Magic', 
    description: 'Never miss a customer query again! Our AI responds instantly, 24/7, keeping your customers happy while you sleep.',
    benefit: 'Happier customers, less stress for you',
    icon: MessageSquare 
  },
  { 
    title: 'Social Media Superstar', 
    description: 'Post engaging content at the perfect times, automatically. Watch your followers grow without lifting a finger!',
    benefit: 'Boost your online presence effortlessly',
    icon: Share2 
  },
  { 
    title: 'Inventory & Orders Zen', 
    description: 'Say goodbye to stockouts and overstock! Our system predicts what you need before you even know it.',
    benefit: 'Save money and delight customers with perfect inventory',
    icon: Package 
  },
  { 
    title: 'Lead Generation on Autopilot', 
    description: 'Turn visitors into leads while you focus on closing deals. Our AI nurtures prospects 24/7.',
    benefit: 'Fill your sales pipeline without the hustle',
    icon: Users 
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">Automation Magic at Your Fingertips</h2>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
        Imagine running your business smoothly while you sleep or sip cocktails on the beach. That's the power of our automation!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50 flex flex-col"
          >
            <CardHeader>
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 transition-colors duration-300 ease-in-out group-hover:text-blue-700" />
              <CardTitle className="text-2xl transition-colors duration-300 ease-in-out group-hover:text-blue-800">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 transition-colors duration-300 ease-in-out group-hover:text-gray-700">{feature.description}</p>
              <p className="font-semibold text-blue-600">🚀 {feature.benefit}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full mt-4">
                Learn How It Works
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-xl font-semibold mb-4">Ready to see the magic in action?</p>
        <Button size="lg" className="text-lg px-8 py-4">
          Get Your Free Demo
        </Button>
      </div>
    </section>
  );
};

export default Features;