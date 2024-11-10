import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const portfolioItems = [
  {
    title: "AI-Powered Inventory Management",
    client: "Safari Distributors Ltd",
    description: "Implemented an AI system that reduced stockouts by 85% and cut inventory costs by 30% through predictive analytics.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["AI", "Inventory", "Analytics"]
  },
  {
    title: "24/7 Customer Service Chatbot",
    client: "Serena Hotels Kenya",
    description: "Developed a bilingual AI chatbot handling 90% of customer queries automatically, leading to 40% increase in booking conversions.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["AI Chatbot", "Customer Service", "Hotels"]
  },
  {
    title: "Social Media Automation",
    client: "Kenyan Fashion House",
    description: "Created an AI content generator that tripled social media engagement and followers within 60 days.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Social Media", "Content Generation", "AI"]
  },
  {
    title: "Lead Generation System",
    client: "Property Developers Association",
    description: "Built an AI-powered lead qualification system that doubled conversion rates while reducing costs by 50%.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Lead Generation", "Real Estate", "Automation"]
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">Our Success Stories</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          See how we've helped Kenyan businesses transform their operations with AI-powered solutions
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-w-16">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                      <CardDescription className="text-sm text-blue-600">{item.client}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Case Study
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;