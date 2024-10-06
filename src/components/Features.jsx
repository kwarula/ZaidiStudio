import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { MessageSquare, Share2, Package, Users } from 'lucide-react';

const features = [
  { title: 'Customer Service', description: 'Automate replies, inquiries, and follow-ups', icon: MessageSquare },
  { title: 'Social Media', description: 'AI-driven content scheduling and engagement automation', icon: Share2 },
  { title: 'Inventory & Orders', description: 'Seamless automation for inventory and order management', icon: Package },
  { title: 'Lead Generation', description: 'Capture and nurture leads on autopilot', icon: Users },
];

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">What We Can Automate for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50"
          >
            <CardHeader>
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 transition-colors duration-300 ease-in-out group-hover:text-blue-700" />
              <CardTitle className="transition-colors duration-300 ease-in-out group-hover:text-blue-800">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;