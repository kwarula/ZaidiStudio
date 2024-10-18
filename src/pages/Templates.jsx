import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Header from '../components/Header';
import Footer from '../components/Footer';
import TemplateCard from '../components/TemplateCard';
import PaymentDialog from '../components/PaymentDialog';
import WaitlistForm from '../components/WaitlistForm';
import { templates } from '../data/templates';

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [isUserInfoDialogOpen, setIsUserInfoDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-900">Download Templates</h1>
        
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-6 mb-12 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Need a custom workflow?</h2>
          <p className="mb-4">We can create custom templates tailored to your specific needs.</p>
          <Button 
            onClick={() => setIsConsultationFormOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book Free Consultation
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <WaitlistForm 
          open={isConsultationFormOpen} 
          onOpenChange={setIsConsultationFormOpen}
          onWaitlistJoined={() => {
            toast({
              title: "Success!",
              description: "Your consultation request has been submitted. We'll be in touch soon!",
            });
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Templates;