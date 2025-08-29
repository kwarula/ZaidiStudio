import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useFlutterwavePayment } from '../hooks/useFlutterwavePayment';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Users, 
  BarChart, 
  ArrowRight,
  MessageCircle,
  Calendar,
  Mail
} from 'lucide-react';

const Express = () => {
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [remainingSlots, setRemainingSlots] = useState({
    foundation: 4,
    growth: 3,
    enterprise: 2
  });
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate campaign end date
  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePackagePayment = (pkg) => {
    const paymentHandler = useFlutterwavePayment({
      amount: pkg.amount,
      customerEmail: "user@example.com", // Will come from form
      customerPhone: "+254700000000", // Will come from form
      customerName: "Test User", // Will come from form
      onSuccess: (response) => {
        toast({
          title: "Payment Successful!",
          description: `Your ${pkg.name} slot has been secured. We'll contact you within 24 hours to begin.`,
        });
      },
      onFailure: () => {
        toast({
          title: "Payment Failed",
          description: "There was an error processing your payment. Please try again.",
          variant: "destructive",
        });
      }
    });
    
    paymentHandler();
  };

  const packages = [
    {
      id: 'foundation',
      name: "FOUNDATION EXPRESS",
      price: "KES 25,000",
      amount: 25000,
      description: "Perfect for small businesses ready to automate core processes",
      features: [
        "Automated lead collection system",
        "Instant customer response workflows",
        "Basic performance tracking",
        "2-hour team training session",
        "30-day support included"
      ],
      timeline: [
        "Day 1-2: Business audit & automation strategy",
        "Day 3-4: Lead capture & customer response automation",
        "Day 5: Basic analytics dashboard setup",
        "Day 6: Team training & handover",
        "Day 7: Go live + optimization"
      ],
      slots: remainingSlots.foundation,
      deposit: "30%"
    },
    {
      id: 'growth',
      name: "GROWTH EXPRESS",
      price: "KES 45,000",
      amount: 45000,
      description: "Perfect for growing businesses ready to scale operations",
      features: [
        "Everything in Foundation +",
        "Sales pipeline automation",
        "Invoice & payment processing",
        "Social media automation (90 days content)",
        "Email marketing sequences",
        "Customer service automation"
      ],
      timeline: [
        "Day 1-2: Complete business process audit",
        "Day 3-4: Multi-channel automation setup",
        "Day 5: Advanced integrations & testing",
        "Day 6: Team training & documentation",
        "Day 7: Launch & optimization"
      ],
      slots: remainingSlots.growth,
      deposit: "40%",
      popular: true
    },
    {
      id: 'enterprise',
      name: "ENTERPRISE EXPRESS",
      price: "KES 85,000",
      amount: 85000,
      description: "Perfect for established businesses ready for complete transformation",
      features: [
        "Everything in Growth +",
        "Custom workflow integrations",
        "Advanced analytics & forecasting",
        "Team collaboration automation",
        "Customer journey optimization",
        "Competitive advantage strategies"
      ],
      timeline: [
        "Day 1-2: Enterprise-wide process analysis",
        "Day 3-4: Custom automation development",
        "Day 5: System integration & testing",
        "Day 6: Department training & rollout",
        "Day 7: Launch & strategic planning"
      ],
      slots: remainingSlots.enterprise,
      deposit: "50%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>7-Day Business Transformation | ZaidiStudio Express</title>
        <meta name="description" content="Transform your business operations in just 7 days with ZaidiStudio Express. Limited slots available for our exclusive automation transformation program." />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
            EXCLUSIVE 7-DAY BUSINESS TRANSFORMATION
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Operations Before Your Competition Does
          </h1>
          
          <div className="mb-8 text-xl text-blue-200">
            Campaign Ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
          
          <p className="text-2xl mb-8 text-blue-100">
            "Within one week, we automated their entire lead process - 
            <br />40% cost reduction, 80% less manual work"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
            >
              CLAIM YOUR TRANSFORMATION SLOT
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              See How We'll Transform Your Business
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            While You're Stuck in Manual Mode, Smart Competitors Are Scaling
          </h2>
          
          <div className="grid gap-4">
            {[
              "Your team wastes 20+ hours/week on repetitive tasks",
              "Leads slip through cracks due to slow response times",
              "Customer service quality inconsistent across team",
              "Growth stalled because you can't scale operations",
              "Competitors using automation gain unfair advantage"
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0" />
                <p className="text-gray-800">{problem}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-semibold text-blue-900">
              💡 The Solution: One week to completely transform how your business operates
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-blue-500 shadow-blue-100' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 right-4">
                    <Badge className="bg-blue-500">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                      <p className="text-3xl font-bold mt-2">{pkg.price}</p>
                    </div>
                    <Badge variant="outline">{pkg.slots} slots left</Badge>
                  </CardTitle>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">7-Day Timeline:</h4>
                      <ul className="space-y-2">
                        {pkg.timeline.map((day, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Clock className="h-5 w-5 text-blue-500 flex-shrink-0" />
                            <span>{day}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => handlePackagePayment(pkg)}
                      >
                        Secure Your Slot ({pkg.deposit} Deposit)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Only 10 Businesses Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">🎯 Why Only 10 Businesses?</h2>
          
          <div className="bg-blue-50 p-8 rounded-xl mb-8">
            <p className="text-lg mb-6">
              Quality over quantity. Each transformation receives our full attention:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Dedicated team assigned to your project",
                "Custom solutions, not cookie-cutter templates",
                "Hands-on implementation & training",
                "Ongoing optimization & support"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xl font-semibold">
            We could take 50 clients and deliver mediocre results.
            <br />
            Instead, we're choosing 10 businesses to deliver exceptional transformations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.location.href = "https://wa.me/254722135913"}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.location.href = "https://calendly.com/vincent-omondi"}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Strategy Call
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.location.href = "mailto:vince@zaidilabstudio.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Express;