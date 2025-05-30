import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PremiumHero from '../components/PremiumHero';
import PremiumTimeline from '../components/PremiumTimeline';
import PremiumCard from '../components/PremiumCard';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Clock, Target, Zap, Gift, ChevronRight, BarChart2, LineChart, Users, Shield, MessageCircle, AlertTriangle, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat/LiveChat';
import SEOMetadata from '../components/SEOMetadata';
import CTA from '../components/CTA';
import Solution from '../components/Solution';
import FAQ from '../components/FAQ';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // ... keep existing code (state variables and data arrays)
  const successMetrics = ["Sales cycle time reduced by 72% for a Nairobi real estate firm.", "95% drop in manual errors for top media production company.", "40% increase in customer satisfaction for a local fintech startup.", "60% reduction in operational costs for an e-commerce business."];
  const [currentMetric, setCurrentMetric] = useState(0);

  const caseStudies = [{
    title: "Real Estate Automation",
    before: "12 hours per week manually following up with leads",
    after: "AI handles all follow-ups automatically, saving 45 hours monthly",
    result: "37% more deals closed with zero additional staff",
    bgImage: "/placeholder.svg"
  }, {
    title: "E-commerce Operations", 
    before: "Customer support team overwhelmed with 200+ queries daily",
    after: "AI handles 85% of routine questions instantly",
    result: "Customer satisfaction up 28%, support team now focuses on complex issues only",
    bgImage: "/placeholder.svg"
  }, {
    title: "Media Production",
    before: "Content creation bottlenecks delayed projects by weeks", 
    after: "AI generates first drafts and handles routine edits",
    result: "Production time cut by 62%, team now handles 3x more projects",
    bgImage: "/placeholder.svg"
  }];

  const industryBenefits = [{
    industry: "Real Estate",
    benefits: ["24/7 lead qualification without hiring more staff", "Automated property matching based on client preferences", "Document preparation in minutes instead of hours"],
    icon: <Users className="h-8 w-8 text-blue-500" />
  }, {
    industry: "E-commerce", 
    benefits: ["Inventory management that predicts stockouts before they happen", "Customer support that works while you sleep", "Marketing campaigns that optimize themselves"],
    icon: <BarChart2 className="h-8 w-8 text-purple-500" />
  }, {
    industry: "Media & Marketing",
    benefits: ["Content creation that scales without hiring more writers", "Social media management that posts at optimal times", "Analytics that tell you exactly what's working and what's not"],
    icon: <LineChart className="h-8 w-8 text-green-500" />
  }, {
    industry: "Financial Services",
    benefits: ["Automated compliance checks that never miss a deadline", "Client onboarding that takes minutes instead of days", "Risk assessment that catches issues humans would miss"],
    icon: <Shield className="h-8 w-8 text-orange-500" />
  }];

  const painPoints = [
    { text: "100s of hours/year on tasks AI could handle", icon: Clock },
    { text: "Thousands in wasted payroll on manual processes", icon: DollarSign },
    { text: "Deals lost to faster competitors using automation", icon: TrendingUp },
    { text: "Employee burnout from repetitive tasks", icon: AlertTriangle },
    { text: "Inconsistent service quality due to human error", icon: Target }
  ];

  const testimonials = [{
    quote: "ZaidiStudio helped us cut manual tasks by 80%. Our team now focuses on growth, not repetitive work.",
    author: "Sarah Kimani",
    role: "CEO",
    company: "TechVentures Kenya",
    image: "/vince.png"
  }, {
    quote: "Within 3 months, we saw a 40% reduction in operational costs. The AI solutions are game-changing.",
    author: "James Maina", 
    role: "Operations Director",
    company: "Innovate Labs",
    image: "/juma.png"
  }, {
    quote: "Our customer response time went from 24 hours to 2 minutes. The impact on customer satisfaction has been incredible.",
    author: "Mercy Wanjiku",
    role: "Customer Success Manager", 
    company: "Sereni Financial",
    image: "/mercy.png"
  }, {
    quote: "The AI Starter Kit alone saved us 15 hours in the first week. I can't believe we waited so long to try this.",
    author: "Daniel Ochieng",
    role: "Marketing Director",
    company: "Nairobi Digital", 
    image: "/sana.png"
  }];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOMetadata />
      <Header />
      
      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Pain Points Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-4">
              Without ZaidiStudio, You're Losing
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Every day without automation costs your business time, money, and competitive advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <PremiumCard 
                  key={index} 
                  variant="warning" 
                  className="p-6 text-center"
                >
                  <div className="text-red-500 mb-4 flex justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-feature font-medium text-red-700">
                    {point.text}
                  </p>
                </PremiumCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <PremiumTimeline />

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-4">
              Real Results for Kenyan Businesses
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              See how we've transformed operations for companies just like yours
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <PremiumCard key={index} className="overflow-hidden group" hover={true}>
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-4">
                      {study.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-700 mb-2">Before:</h4>
                      <p className="text-sm text-gray-700">{study.before}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-700 mb-2">After:</h4>
                      <p className="text-sm text-gray-700">{study.after}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Result:</h4>
                    <p className="text-sm font-medium text-gray-800">{study.result}</p>
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    View Full Case Study
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits Carousel */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-4">
              AI Benefits for Your Industry
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Discover how AI automation specifically helps your type of business
            </p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {industryBenefits.map((industry, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <PremiumCard className="h-full p-6" glow={true}>
                    <div className="flex flex-col h-full">
                      <div className="mb-6">{industry.icon}</div>
                      <h3 className="text-subsection text-gray-900 mb-6">
                        {industry.industry}
                      </h3>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-body text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="mt-auto">
                        See {industry.industry} Solutions
                      </Button>
                    </div>
                  </PremiumCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-8 gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* ... keep existing code (remaining sections) */}
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Real feedback from real businesses that transformed with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <PremiumCard key={index} className="p-6 h-full flex flex-col">
                <blockquote className="text-body text-gray-700 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-caption text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
      
      {/* Final CTA */}
      <CTA />

      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
