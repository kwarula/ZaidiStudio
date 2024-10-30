import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { MessageSquare, Share2, Package, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const features = [
  { 
    title: '24/7 Customer Service That Never Sleeps', 
    description: 'While your competitors sleep, our AI handles customer queries instantly. No more losing sales to slow response times.',
    benefit: '90% faster response time, 40% more sales',
    icon: MessageSquare,
    howItWorks: [
      "AI instantly analyzes customer questions in Swahili or English",
      "Provides accurate, personalized responses 24/7",
      "Handles multiple conversations simultaneously",
      "Learns from every interaction to get smarter",
      "Seamlessly escalates complex issues to your team"
    ]
  },
  { 
    title: 'Social Media Growth on Autopilot', 
    description: 'Stop struggling with content creation. Our AI generates and posts engaging content that resonates with your Kenyan audience.',
    benefit: '3x follower growth in 60 days',
    icon: Share2,
    howItWorks: [
      "Creates content that speaks to local trends and culture",
      "Posts at peak engagement times for your audience",
      "Handles multiple platforms simultaneously",
      "Generates content in both English and Swahili",
      "Tracks performance and adjusts strategy automatically"
    ]
  },
  { 
    title: 'Smart Inventory Management', 
    description: 'Never miss a sale due to stockouts. Our AI predicts what you'll need before you run out.',
    benefit: 'Reduce stockouts by 85%, cut costs by 30%',
    icon: Package,
    howItWorks: [
      "Predicts demand based on local market trends",
      "Automatically adjusts for seasonal changes",
      "Manages multiple locations efficiently",
      "Handles supplier relationships automatically",
      "Optimizes stock levels for maximum profit"
    ]
  },
  { 
    title: 'Lead Generation Machine', 
    description: 'Turn website visitors into paying customers while you focus on running your business.',
    benefit: '2x more qualified leads, 50% lower cost',
    icon: Users,
    howItWorks: [
      "Engages visitors with culturally relevant conversations",
      "Qualifies leads based on your criteria",
      "Nurtures prospects with personalized follow-ups",
      "Integrates with your existing CRM",
      "Provides detailed analytics and insights"
    ]
  },
];

const Features = () => {
  const [openDialog, setOpenDialog] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">Stop Losing Money to Manual Tasks</h2>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
        While your competition wastes time on repetitive tasks, you could be focusing on growth. Here's how our AI automation gives you the edge:
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
              <p className="font-semibold text-blue-600">💰 {feature.benefit}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full mt-4" onClick={() => setOpenDialog(index)}>
                See How It Works
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {features.map((feature, index) => (
        <Dialog key={index} open={openDialog === index} onOpenChange={() => setOpenDialog(null)}>
          <DialogContent className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-blue-900 mb-2">{feature.title}</DialogTitle>
              <DialogDescription className="text-gray-600">{feature.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-blue-700">How It Works:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                {feature.howItWorks.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default Features;