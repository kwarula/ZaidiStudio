import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, PieChart, Layers, Users, Headphones } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from 'react-helmet';

const Services = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const { toast } = useToast();

  const services = [
    {
      title: "AI Strategy Consulting",
      description: "We help businesses develop comprehensive AI strategies tailored to their specific needs and goals.",
      icon: Zap,
    },
    {
      title: "Custom AI Solutions",
      description: "Our team of experts designs and implements bespoke AI solutions to address your unique challenges.",
      icon: Code,
    },
    {
      title: "AI Integration",
      description: "We seamlessly integrate AI technologies into your existing systems and workflows for maximum efficiency.",
      icon: Layers,
    },
    {
      title: "AI-Powered Analytics",
      description: "Leverage the power of AI to gain deeper insights from your data and make data-driven decisions.",
      icon: PieChart,
    },
    {
      title: "AI Training and Workshops",
      description: "We offer comprehensive training programs to help your team understand and utilize AI technologies effectively.",
      icon: Users,
    },
    {
      title: "AI Maintenance and Support",
      description: "Our ongoing support ensures your AI systems continue to perform optimally and evolve with your business needs.",
      icon: Headphones,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ZaidiStudio AI Services",
    "description": "AI-powered services for business automation and optimization",
    "provider": {
      "@type": "Organization",
      "name": "ZaidiStudio"
    },
    "serviceType": services.map(service => service.title)
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>ZaidiStudio Services - AI Solutions for Your Business</title>
        <meta name="description" content="Explore ZaidiStudio's range of AI-powered services including AI Strategy Consulting, Custom AI Solutions, AI Integration, Analytics, Training, and Support. Transform your business with cutting-edge AI technology." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-blue-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-8">
            Our Services
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Empower your business with cutting-edge AI solutions tailored to your unique needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-semibold mb-4 text-blue-900">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="group"
                  onClick={() => setIsConsultationFormOpen(true)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to transform your business with AI?</h2>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setIsConsultationFormOpen(true)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      {isConsultationFormOpen && (
        <ConsultationForm 
          open={true}
          onOpenChange={setIsConsultationFormOpen}
          onConsultationRequested={() => {
            toast({
              title: "Success!",
              description: "Your consultation request has been submitted. We'll be in touch soon!",
            });
          }}
        />
      )}
    </div>
  );
};

export default Services;
