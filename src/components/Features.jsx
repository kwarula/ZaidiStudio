import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { MessageSquare, Share2, Package, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const features = [
  { 
    title: 'Customer Service Magic', 
    description: 'Never miss a customer query again! Our AI responds instantly, 24/7, keeping your customers happy while you sleep.',
    benefit: 'Happier customers, less stress for you',
    icon: MessageSquare,
    howItWorks: [
      "Our AI analyzes incoming customer queries in real-time.",
      "It categorizes the query and retrieves relevant information from your knowledge base.",
      "The AI crafts a personalized response, maintaining your brand voice.",
      "Responses are sent instantly, 24/7, ensuring no customer is left waiting.",
      "Complex queries are flagged for human review, ensuring quality control."
    ]
  },
  { 
    title: 'Social Media Superstar', 
    description: 'Post engaging content at the perfect times, automatically. Watch your followers grow without lifting a finger!',
    benefit: 'Boost your online presence effortlessly',
    icon: Share2,
    howItWorks: [
      "Our AI studies your audience engagement patterns across platforms.",
      "It generates content ideas based on trending topics in your industry.",
      "The system creates posts tailored to each social media platform.",
      "Content is automatically scheduled for optimal posting times.",
      "Performance analytics are provided to continuously improve your strategy."
    ]
  },
  { 
    title: 'Inventory & Orders Zen', 
    description: 'Say goodbye to stockouts and overstock! Our system predicts what you need before you even know it.',
    benefit: 'Save money and delight customers with perfect inventory',
    icon: Package,
    howItWorks: [
      "Our AI analyzes historical sales data and market trends.",
      "It predicts future demand for each product in your inventory.",
      "The system automatically adjusts stock levels based on predictions.",
      "Low stock alerts are sent before you run out of popular items.",
      "Integration with your suppliers ensures timely restocking."
    ]
  },
  { 
    title: 'Lead Generation on Autopilot', 
    description: 'Turn visitors into leads while you focus on closing deals. Our AI nurtures prospects 24/7.',
    benefit: 'Fill your sales pipeline without the hustle',
    icon: Users,
    howItWorks: [
      "AI-powered chatbots engage website visitors in real-time.",
      "Visitor behavior is analyzed to identify high-potential leads.",
      "Personalized content is delivered based on visitor interests.",
      "Automated email sequences nurture leads through the sales funnel.",
      "Qualified leads are automatically routed to your sales team."
    ]
  },
];

const Features = () => {
  const [openDialog, setOpenDialog] = React.useState(null);

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
              <Button variant="outline" className="w-full mt-4" onClick={() => setOpenDialog(index)}>
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