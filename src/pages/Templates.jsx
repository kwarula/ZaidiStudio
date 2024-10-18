import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from '../components/Header';
import Footer from '../components/Footer';
import TemplateCard from '../components/TemplateCard';
import PaymentDialog from '../components/PaymentDialog';
import { templates } from '../data/templates'; // Assume we've moved the templates data to a separate file

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [isUserInfoDialogOpen, setIsUserInfoDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleDownload = (template) => {
    setSelectedTemplate(template);
    setIsUserInfoDialogOpen(true);
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
    setIsUserInfoDialogOpen(false);
    setIsPaymentDialogOpen(true);
  };

  const handlePaymentVerified = () => {
    console.log("User info:", userInfo);
    console.log("Downloading template:", selectedTemplate);
    setUserInfo({ name: '', email: '', phone: '' });
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24"> {/* Increased padding-top */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Download Templates</h1>
        
        {/* Custom Workflow Banner */}
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8 rounded-r-lg shadow-md">
          <p className="font-bold">Need a custom workflow?</p>
          <p>We can create custom templates tailored to your specific needs. Contact us for more information!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} onDownload={handleDownload} />
          ))}
        </div>

        <Dialog open={isUserInfoDialogOpen} onOpenChange={setIsUserInfoDialogOpen}>
          <DialogContent className="sm:max-w-[425px] bg-white">
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

        <PaymentDialog 
          open={isPaymentDialogOpen} 
          onOpenChange={setIsPaymentDialogOpen}
          onPaymentVerified={handlePaymentVerified}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Templates;