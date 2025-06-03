import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Header from '../components/Header';
import Footer from '../components/Footer';
import TemplateCard from '../components/TemplateCard';
import ConsultationForm from '../components/ConsultationForm';
import FlutterwavePayment from '../components/FlutterwavePayment';
import { templates } from '../data/templates';
import { Helmet } from 'react-helmet';

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [isUserInfoDialogOpen, setIsUserInfoDialogOpen] = useState(false);
  const [showFlutterwavePayment, setShowFlutterwavePayment] = useState(false);
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
    setShowFlutterwavePayment(true);
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment successful:", response);
    
    // Track template download for dojo eligibility
    const existingDownloads = localStorage.getItem('templateDownloads');
    const downloads = existingDownloads ? JSON.parse(existingDownloads) : [];
    
    const downloadRecord = {
      templateId: selectedTemplate.id,
      templateName: selectedTemplate.name,
      userEmail: userInfo.email,
      downloadDate: new Date().toISOString(),
      transactionId: response.transaction_id
    };
    
    downloads.push(downloadRecord);
    localStorage.setItem('templateDownloads', JSON.stringify(downloads));
    
    // Show success message with dojo eligibility info
    toast({
      title: "Template Downloaded Successfully!",
      description: "You're now eligible to join the AI Dojo community. Use invite code or download more templates!",
    });
    
    setUserInfo({ name: '', email: '', phone: '' });
    setSelectedTemplate(null);
    setShowFlutterwavePayment(false);
  };

  const handlePaymentFailure = () => {
    toast({
      title: "Payment Failed",
      description: "There was an error processing your payment. Please try again.",
      variant: "destructive",
    });
    setShowFlutterwavePayment(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ZaidiStudio AI Automation Templates",
    "description": "Browse and download ZaidiStudio's collection of AI automation templates",
    "itemListElement": templates.map((template, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": template.name,
      "description": template.description
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>ZaidiStudio Templates - AI Automation Templates</title>
        <meta name="description" content="Browse and download ZaidiStudio's collection of AI automation templates. Streamline your business processes with our ready-to-use, customizable AI-powered workflow templates." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 md:py-32 bg-gradient-to-br from-blue-200 via-white to-blue-50 mb-12 rounded-b-3xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 900 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
            <ellipse cx="450" cy="100" rx="400" ry="80" fill="#3b82f6" fillOpacity="0.08"/>
            <ellipse cx="700" cy="150" rx="200" ry="40" fill="#22d3ee" fillOpacity="0.07"/>
            <ellipse cx="200" cy="50" rx="150" ry="30" fill="#6366f1" fillOpacity="0.06"/>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <img src="/logos/ZaidiStudio_icon.png" alt="ZaidiStudio Icon" className="w-20 h-20 mb-6 drop-shadow-lg" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 text-center drop-shadow-sm">AI Automation Templates</h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-8 text-center max-w-2xl">Supercharge your business with ready-to-use, customizable AI workflow templates. Browse, preview, and download to accelerate your automation journey.</p>
          <Button 
            onClick={() => setIsConsultationFormOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-slow"
          >
            Book Free Consultation
          </Button>
        </div>
      </section>
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-8 mb-16 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Workflow?</h2>
          <p className="text-lg mb-6">We can create bespoke templates tailored to your specific business needs.</p>
          <Button 
            onClick={() => setIsConsultationFormOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Book Free Consultation
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, idx) => (
            <div
              key={template.id}
              className="relative group bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 2px 16px 0 rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.3)"
              }}
            >
              {idx === 0 && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    ⭐ Featured
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl filter drop-shadow-sm">
                      {idx === 0 && "🤖"}
                      {idx === 1 && "🔄"}
                      {idx === 2 && "🎯"}
                      {idx === 3 && "💬"}
                      {idx === 4 && "📦"}
                      {idx === 5 && "📋"}
                      {idx === 6 && "👥"}
                      {idx === 7 && "📊"}
                      {idx === 8 && "📈"}
                      {idx === 9 && "📧"}
                      {idx === 10 && "🎬"}
                      {idx === 11 && "🎥"}
                    </span>
                  </div>
                </div>
                
                <div className="text-center flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {template.description}
                  </p>
                  <p className="text-xs text-blue-600 mb-4 font-medium bg-blue-50 rounded-lg p-2">
                    {template.useCase}
                  </p>
                  
                  {template.stack && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                      <p className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2 font-mono">
                        {template.stack}
                      </p>
                    </div>
                  )}
                  
                  {template.keyActions && template.keyActions.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Actions:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {template.keyActions.slice(0, 3).map((action, actionIdx) => (
                          <li key={actionIdx} className="flex items-start">
                            <span className="text-green-500 mr-2 text-xs">✓</span>
                            <span className="text-left">{action}</span>
                          </li>
                        ))}
                        {template.keyActions.length > 3 && (
                          <li className="text-gray-500 italic">+{template.keyActions.length - 3} more actions...</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mt-auto">
                  <Button
                    onClick={() => handleDownload(template)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group-hover:animate-pulse"
                  >
                    <span className="mr-2 text-lg">⬇️</span> 
                    Download Template
                  </Button>
                </div>
              </div>
              
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${idx}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="#3b82f6" fillOpacity="0.1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${idx})`}/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
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
              <Button type="submit">Continue to Payment</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {showFlutterwavePayment && (
        <FlutterwavePayment
          amount={4999}
          customerEmail={userInfo.email}
          customerPhone={userInfo.phone}
          customerName={userInfo.name}
          onSuccess={handlePaymentSuccess}
          onFailure={handlePaymentFailure}
        />
      )}

      <ConsultationForm 
        open={isConsultationFormOpen} 
        onOpenChange={setIsConsultationFormOpen}
        onConsultationRequested={() => {
          toast({
            title: "Success!",
            description: "Your consultation request has been submitted. We'll be in touch soon!",
          });
        }}
      />
    </div>
  );
};

export default Templates;