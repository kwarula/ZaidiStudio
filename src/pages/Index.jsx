import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Clock, Target, Zap, Gift } from 'lucide-react';
import Benefits from '../components/Benefits';
import AIContentGenerator from '../components/AIContentGenerator';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat/LiveChat';
import SEOMetadata from '../components/SEOMetadata';
const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, [location]);
  const testimonials = [{
    quote: "ZaidiStudio helped us cut manual tasks by 80%. Our team now focuses on growth, not repetitive work.",
    author: "Sarah Kimani",
    role: "CEO, TechVentures Kenya",
    company: "TechVentures Kenya",
    image: "/vince.png"
  }, {
    quote: "Within 3 months, we saw a 40% reduction in operational costs. The AI solutions are game-changing.",
    author: "James Maina",
    role: "Operations Director",
    company: "Innovate Labs",
    image: "/juma.png"
  }];
  const partners = [{
    name: "iHub",
    logo: "/placeholder.svg"
  }, {
    name: "Nairobi Garage",
    logo: "/placeholder.svg"
  }, {
    name: "KenyaTech",
    logo: "/placeholder.svg"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEOMetadata />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            Trusted by Leading Kenyan Businesses
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Stop Wasting Time — Scale Your Business with AI & Automation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            We Help Kenyan Businesses Slash Costs and Boost Profits with AI Automation
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0" onClick={() => navigate('/starter-kit')}>
              <Gift className="mr-2 h-5 w-5" />
              Get Your Free AI Starter Kit
            </Button>
            <Button size="lg" className="text-lg px-8" onClick={() => window.location.href = '#audit'}>
              Get Your Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Success Stories
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">80%</h3>
              <p className="text-gray-600">Reduction in Manual Tasks</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">3X</h3>
              <p className="text-gray-600">Average Revenue Growth</p>
            </Card>
            
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600">Trusted By Industry Leaders</p>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-70">
            {partners.map(partner => <img key={partner.name} src={partner.logo} alt={partner.name} className="h-12 object-contain" />)}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How We Transform Your Business</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Before AI Automation
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Hours spent on manual data entry</li>
                <li>• Slow customer response times</li>
                <li>• Inconsistent business processes</li>
                <li>• Limited growth potential</li>
              </ul>
            </Card>
            <Card className="p-6 text-left bg-blue-50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                After AI Automation
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 80% reduction in manual work</li>
                <li>• 24/7 instant customer support</li>
                <li>• Streamlined, error-free processes</li>
                <li>• Scalable business operations</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Free AI Audit Section */}
      <section id="audit" className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Your Free AI Audit</h2>
          <p className="text-xl mb-8 text-gray-600">
            Discover how AI can transform your business in the next 90 days
          </p>
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">What You'll Get:</h3>
            <ul className="space-y-4 text-left max-w-md mx-auto mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span>Personalized AI roadmap for your business</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span>Cost-saving automation opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span>90-day implementation timeline</span>
              </li>
            </ul>
            <Button size="lg" className="text-lg px-8">
              Book Your Free AI Audit Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Keep existing sections but with updated content */}
      <Benefits />
      <Features />
      <Testimonial />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing list of Kenyan businesses leveraging AI for unstoppable growth
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Your Free AI Audit (Limited Slots Available)
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <LiveChat />
    </div>;
};
export default Index;