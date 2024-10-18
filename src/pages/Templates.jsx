import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomDialog from '../components/CustomDialog';

const templates = [
  {
    id: 1,
    name: "RSS to Social Media",
    description: "Automatically shares new articles from an RSS feed on various social media platforms, ensuring timely updates and engagement.",
    useCase: "Ideal for bloggers and content creators who want to promote their latest posts across social media without manual effort."
  },
  {
    id: 2,
    name: "Typeform to FreshBooks",
    description: "Creates and sends an invoice in FreshBooks every time a new submission is received through Typeform.",
    useCase: "Perfect for freelancers and businesses that use Typeform for client inquiries or service requests."
  },
  {
    id: 3,
    name: "Mailchimp to ClickUp",
    description: "Integrates Mailchimp with ClickUp to automatically create tasks in ClickUp when new subscribers are added in Mailchimp.",
    useCase: "Useful for marketing teams that want to track subscriber engagement and manage follow-up tasks effectively."
  },
  {
    id: 4,
    name: "Google Sheets to Slack Notifications",
    description: "Sends notifications to a Slack channel whenever a new row is added in a specified Google Sheet.",
    useCase: "Great for teams that need real-time updates on project progress or data entries."
  },
  {
    id: 5,
    name: "New Leads in CRM to Email Notifications",
    description: "Notifies the sales team via email whenever a new lead is added to the CRM.",
    useCase: "Helps sales teams stay on top of new opportunities without having to check the CRM constantly."
  },
  {
    id: 6,
    name: "Form Submissions to Google Sheets",
    description: "Automatically logs submissions from web forms into a Google Sheets document for easy tracking and analysis.",
    useCase: "Beneficial for event registrations, surveys, or any data collection process."
  },
  {
    id: 7,
    name: "Scheduled Tweets from Google Sheets",
    description: "Posts tweets at scheduled times based on entries in a Google Sheet.",
    useCase: "Ideal for marketers looking to plan and automate their social media content calendar."
  },
  {
    id: 8,
    name: "Trello Cards from Email Attachments",
    description: "Creates Trello cards from email attachments, allowing users to manage tasks directly from their inbox.",
    useCase: "Useful for teams that receive project files via email and need a streamlined way to add them to their task management system."
  },
  {
    id: 9,
    name: "New Shopify Orders to Inventory Management",
    description: "Updates inventory levels in an inventory management system when new orders are placed on Shopify.",
    useCase: "Essential for e-commerce businesses that need real-time inventory tracking."
  },
  {
    id: 10,
    name: "Google Calendar Events to Zoom Meetings",
    description: "Automatically creates Zoom meetings for events scheduled in Google Calendar.",
    useCase: "Perfect for professionals who frequently hold virtual meetings and want to streamline scheduling."
  }
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
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{template.useCase}</p>
              </CardContent>
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

        <CustomDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
        </CustomDialog>

        <CustomDialog open={showPaymentInstructions} onOpenChange={setShowPaymentInstructions}>
          <DialogContent className="sm:max-w-[425px] bg-white">
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
        </CustomDialog>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
