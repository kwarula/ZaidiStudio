import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);
  const [mpesaCode, setMpesaCode] = useState('');
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleDownload = (template) => {
    setSelectedTemplate(template);
    setIsDialogOpen(true);
  };

  const handleSubmitUserInfo = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    setIsDialogOpen(false);
    setShowPaymentInstructions(true);
  };

  const handleVerifyPayment = (e) => {
    e.preventDefault();
    if (!mpesaCode) {
      toast({
        title: "Error",
        description: "Please enter the Mpesa code.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically verify the Mpesa code with your backend
    console.log("User info:", userInfo);
    console.log("Downloading template:", selectedTemplate);
    console.log("Mpesa code:", mpesaCode);

    toast({
      title: "Success!",
      description: `Payment verified. ${selectedTemplate.name} is being downloaded.`,
    });

    // Reset states
    setUserInfo({ name: '', email: '', phone: '' });
    setSelectedTemplate(null);
    setShowPaymentInstructions(false);
    setMpesaCode('');
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
                  onClick={() => handleDownload(template)}
                >
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Download {selectedTemplate?.name}</DialogTitle>
              <DialogDescription>Please provide your information to download the template</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitUserInfo} className="space-y-4">
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
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={showPaymentInstructions} onOpenChange={setShowPaymentInstructions}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Payment Instructions</DialogTitle>
              <DialogDescription>
                Please send KES 1,000 to Mpesa Till: 5476447
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleVerifyPayment} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mpesaCode">Mpesa Code</Label>
                <Input
                  id="mpesaCode"
                  value={mpesaCode}
                  onChange={(e) => setMpesaCode(e.target.value)}
                  placeholder="Enter Mpesa code"
                  required
                />
              </div>
              <DialogFooter>
                <Button type="submit">Verify Payment</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;