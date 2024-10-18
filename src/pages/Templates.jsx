import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from '../components/Header';
import Footer from '../components/Footer';

const templates = [
  { id: 1, name: "Business Plan Template", file: "business-plan.json" },
  { id: 2, name: "Marketing Strategy Template", file: "marketing-strategy.json" },
  { id: 3, name: "Financial Forecast Template", file: "financial-forecast.json" },
];

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      toast({
        title: "Error",
        description: "Please fill in all fields before downloading.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the user info to your backend
    // and then initiate the file download
    console.log("User info:", userInfo);
    console.log("Downloading template:", selectedTemplate);

    toast({
      title: "Success!",
      description: `${selectedTemplate.name} is being downloaded.`,
    });

    // Reset form and selected template
    setUserInfo({ name: '', email: '', phone: '' });
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Download Templates</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>Click to download this template</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button 
                  className="w-full" 
                  onClick={() => setSelectedTemplate(template)}
                >
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {selectedTemplate && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Download {selectedTemplate.name}</CardTitle>
              <CardDescription>Please provide your information to download the template</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Download Template</Button>
              </form>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Templates;