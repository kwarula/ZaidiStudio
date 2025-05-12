import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Clock, Target, Zap, Gift, ChevronRight, BarChart2, LineChart, Users, Shield, MessageSquare } from 'lucide-react';
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
  const [daysLeft, setDaysLeft] = useState(3);
  const [hoursLeft, setHoursLeft] = useState(23);
  const [minutesLeft, setMinutesLeft] = useState(59);
  const [auditSlotsLeft, setAuditSlotsLeft] = useState(5);
  
  // Dynamic success metrics that will rotate
  const successMetrics = [
    "Sales cycle time reduced by 72% for a Nairobi real estate firm.",
    "95% drop in manual errors for top media production company.",
    "40% increase in customer satisfaction for a local fintech startup.",
    "60% reduction in operational costs for an e-commerce business."
  ];
  
  const [currentMetric, setCurrentMetric] = useState(0);
  
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
    
    // Rotate through success metrics every 5 seconds
    const metricInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % successMetrics.length);
    }, 5000);
    
    return () => {
      clearInterval(metricInterval);
    };
  }, [location, successMetrics.length]);
  
  const clientLogos = [
    { name: "iHub", logo: "/placeholder.svg" },
    { name: "Nairobi Garage", logo: "/placeholder.svg" },
    { name: "KenyaTech", logo: "/placeholder.svg" },
    { name: "TechVentures", logo: "/placeholder.svg" },
    { name: "Innovate Labs", logo: "/placeholder.svg" }
  ];
  
  const caseStudies = [
    {
      title: "Real Estate Automation",
      before: "12 hours per week manually following up with leads",
      after: "AI handles all follow-ups automatically, saving 45 hours monthly",
      result: "37% more deals closed with zero additional staff"
    },
    {
      title: "E-commerce Operations",
      before: "Customer support team overwhelmed with 200+ queries daily",
      after: "AI handles 85% of routine questions instantly",
      result: "Customer satisfaction up 28%, support team now focuses on complex issues only"
    },
    {
      title: "Media Production",
      before: "Content creation bottlenecks delayed projects by weeks",
      after: "AI generates first drafts and handles routine edits",
      result: "Production time cut by 62%, team now handles 3x more projects"
    }
  ];
  
  const industryBenefits = [
    {
      industry: "Real Estate",
      benefits: [
        "24/7 lead qualification without hiring more staff",
        "Automated property matching based on client preferences",
        "Document preparation in minutes instead of hours"
      ],
      icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
      industry: "E-commerce",
      benefits: [
        "Inventory management that predicts stockouts before they happen",
        "Customer support that works while you sleep",
        "Marketing campaigns that optimize themselves"
      ],
      icon: <BarChart2 className="h-8 w-8 text-purple-500" />
    },
    {
      industry: "Media & Marketing",
      benefits: [
        "Content creation that scales without hiring more writers",
        "Social media management that posts at optimal times",
        "Analytics that tell you exactly what's working and what's not"
      ],
      icon: <LineChart className="h-8 w-8 text-green-500" />
    },
    {
      industry: "Financial Services",
      benefits: [
        "Automated compliance checks that never miss a deadline",
        "Client onboarding that takes minutes instead of days",
        "Risk assessment that catches issues humans would miss"
      ],
      icon: <Shield className="h-8 w-8 text-orange-500" />
    }
  ];
  
  const workflowSteps = [
    {
      title: "Discovery",
      description: "We analyze your business processes to find automation opportunities.",
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Design",
      description: "Our experts create custom AI workflows tailored to your needs.",
      icon: <Zap className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Deploy",
      description: "We implement and test your automation solutions.",
      icon: <ArrowRight className="h-8 w-8 text-green-500" />
    },
    {
      title: "Optimize",
      description: "Continuous improvement to maximize efficiency and ROI.",
      icon: <LineChart className="h-8 w-8 text-orange-500" />
    }
  ];
  
  const painPoints = [
    "100s of hours/year on tasks AI could handle",
    "Thousands in wasted payroll on manual processes",
    "Deals lost to faster competitors using automation",
    "Employee burnout from repetitive tasks",
    "Inconsistent service quality due to human error"
  ];

  const testimonials = [
    {
      quote: "ZaidiStudio helped us cut manual tasks by 80%. Our team now focuses on growth, not repetitive work.",
      author: "Sarah Kimani",
      role: "CEO",
      company: "TechVentures Kenya",
      image: "/vince.png"
    },
    {
      quote: "Within 3 months, we saw a 40% reduction in operational costs. The AI solutions are game-changing.",
      author: "James Maina",
      role: "Operations Director",
      company: "Innovate Labs",
      image: "/juma.png"
    },
    {
      quote: "Our customer response time went from 24 hours to 2 minutes. The impact on customer satisfaction has been incredible.",
      author: "Mercy Wanjiku",
      role: "Customer Success Manager",
      company: "Sereni Financial",
      image: "/mercy.png"
    },
    {
      quote: "The AI Starter Kit alone saved us 15 hours in the first week. I can't believe we waited so long to try this.",
      author: "Daniel Ochieng",
      role: "Marketing Director",
      company: "Nairobi Digital",
      image: "/sana.png"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEOMetadata />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <Badge variant="secondary" className="mb-4">
                Trusted by Leading Kenyan Businesses
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-tight">
                Turn Weeks into Minutes. Automate 80% of Your Business with AI — Starting Today.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We help ambitious Kenyan businesses cut costs, scale operations, and reclaim time using autonomous AI agents and workflow automation.
              </p>
              
              {/* Success Metric Banner */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg mb-8 transform transition-all duration-500 hover:scale-102 shadow-lg">
                <p className="text-lg font-medium">{successMetrics[currentMetric]}</p>
              </div>
              
              {/* Tiered CTA Stack */}
              <div className="space-y-4 mb-8">
                <Button size="lg" variant="secondary" className="w-full text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg" onClick={() => navigate('/starter-kit')}>
                  <Gift className="mr-2 h-5 w-5" />
                  Get Your Free AI Starter Kit
                </Button>
                <Button size="lg" className="w-full text-lg px-8 py-6 shadow-md" onClick={() => window.location.href = '#audit'}>
                  Get Your Free 90-Day AI Roadmap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg px-8 py-6 border-blue-300 shadow-sm">
                  Request Done-For-You Demo Agent
                  <Badge variant="secondary" className="ml-2 bg-red-500 text-white">Only {auditSlotsLeft} Slots Left</Badge>
                </Button>
              </div>
              
              {/* Countdown Timer */}
              <div className="bg-gray-100 p-4 rounded-lg text-center mb-6">
                <p className="text-sm text-gray-600 mb-2">Limited Time Offer Ends In:</p>
                <div className="flex justify-center gap-4">
                  <div className="bg-white px-3 py-2 rounded-md shadow">
                    <p className="text-xl font-bold text-blue-600">{daysLeft}</p>
                    <p className="text-xs text-gray-500">Days</p>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-md shadow">
                    <p className="text-xl font-bold text-blue-600">{hoursLeft}</p>
                    <p className="text-xs text-gray-500">Hours</p>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-md shadow">
                    <p className="text-xl font-bold text-blue-600">{minutesLeft}</p>
                    <p className="text-xs text-gray-500">Minutes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-center mb-6">Get Your Free AI Audit</h3>
              <p className="text-center text-gray-600 mb-6">Discover how AI can transform your business in the next 90 days</p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                  <select
                    id="industry"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Your Industry</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="financial-services">Financial Services</option>
                    <option value="media-marketing">Media & Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Button className="w-full py-6 text-lg font-medium">
                  Book Your Free AI Audit Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements: Client Logos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg font-medium text-gray-700">Trusted By Industry Leaders</p>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {clientLogos.map(client => (
              <div key={client.name} className="flex flex-col items-center">
                <img src={client.logo} alt={client.name} className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm text-gray-500 mt-2">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 md:px-8 bg-red-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Without ZaidiStudio, You're Losing:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="p-6 bg-white border-red-100 shadow-md">
                <p className="text-red-600 font-medium text-lg">{point}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How ZaidiStudio Works For You</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Timeline steps */}
            <div className="space-y-12 relative">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-1 md:pl-12'}`}>
                    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col items-center md:items-start">
                        {step.icon}
                        <h3 className="text-xl font-bold mt-4 mb-2 text-blue-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </Card>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Real Results for Kenyan Businesses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-600 p-4">
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-500">Before:</h4>
                    <p className="text-gray-600">{study.before}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-500">After:</h4>
                    <p className="text-gray-600">{study.after}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700">Result:</h4>
                    <p className="text-gray-700 font-medium">{study.result}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Full Case Study
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Benefits Carousel */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AI Benefits for Your Industry</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Discover how AI automation specifically helps your type of business
          </p>
          
          <Carousel className="w-full">
            <CarouselContent>
              {industryBenefits.map((industry, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4">{industry.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-900">{industry.industry}</h3>
                      <ul className="space-y-3 mb-6 flex-grow">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="mt-auto">
                        See {industry.industry} Solutions
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-8 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Product Visualization Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Here's What You'll Actually Get</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Practical, tangible solutions that deliver real results for your business
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Custom AI Workflows</h3>
              <div className="bg-white rounded-lg shadow-lg p-6 h-64 flex items-center justify-center border border-blue-100">
                <p className="text-gray-500 italic">Workflow visualization placeholder</p>
                {/* Would include actual workflow diagrams/screenshots here */}
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Visually designed workflows that anyone can understand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fully documented for easy maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Seamless integration with your existing tools</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-800">AI Agents That Work For You</h3>
              <div className="bg-white rounded-lg shadow-lg p-6 h-64 flex items-center justify-center border border-blue-100">
                <p className="text-gray-500 italic">AI agent interface placeholder</p>
                {/* Would include actual agent UI screenshots here */}
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Custom-trained on your business processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Works 24/7 without breaks or errors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Continuously improves with more data</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">Before & After Automation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-red-100">
                <h4 className="font-bold text-xl mb-4 text-red-600">Before ZaidiStudio</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">20+ hours spent on manual data entry</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Customer inquiries taking 24+ hours for response</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Constant errors in manual processes</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Unable to scale without hiring more staff</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-green-100">
                <h4 className="font-bold text-xl mb-4 text-green-600">After ZaidiStudio</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Data processed automatically in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Instant customer responses 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">99.9% accuracy in all processes</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Scale operations without adding headcount</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Free vs Paid Comparison */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Path to AI Automation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-800">Free Options</h3>
                <p className="text-gray-600 mb-6">Start your AI journey with zero risk</p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">AI Starter Kit</span>
                      <p className="text-sm text-gray-600">Essential tools and templates to begin automating</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">90-Day AI Roadmap</span>
                      <p className="text-sm text-gray-600">Customized plan for your business transformation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Initial Consultation</span>
                      <p className="text-sm text-gray-600">30-minute strategy session with our experts</p>
                    </div>
                  </li>
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/starter-kit')}
                >
                  Get Started Free
                  <Gift className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
            
            <Card className="border-purple-200 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="p-6">
                <Badge variant="secondary" className="mb-2 bg-purple-500 text-white">Most Popular</Badge>
                <h3 className="text-2xl font-bold mb-2 text-purple-800">Premium Solutions</h3>
                <p className="text-gray-600 mb-6">Complete transformation with expert support</p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Custom AI Agents</span>
                      <p className="text-sm text-gray-600">Built specifically for your business needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Done-For-You Implementation</span>
                      <p className="text-sm text-gray-600">We build and deploy everything for you</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Ongoing Support & Optimization</span>
                      <p className="text-sm text-gray-600">Continuous improvement of your AI systems</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden shadow-lg h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <blockquote className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* So What Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What This Really Means For You</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-500 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Reclaim Your Time</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0 mt-1" />
                  <span>Reclaim 10 hours to grow your revenue or go home early — every week.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0 mt-1" />
                  <span>Stop working nights and weekends while your business runs itself.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0 mt-1" />
                  <span>Focus on strategy instead of getting trapped in daily operations.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-500 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Boost Your Bottom Line</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0 mt-1" />
                  <span>Cut operational costs by up to 40% while improving service quality.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0 mt-1" />
                  <span>Scale your business without proportionally increasing staff costs.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0 mt-1" />
                  <span>Convert more leads with instant 24/7 follow-up that never drops the ball.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chatbot - Visual Placeholder */}
      <section className="fixed bottom-24 right-8 z-40">
        <div className="bg-white rounded-full shadow-xl p-4 animate-bounce cursor-pointer">
          <MessageSquare className="h-8 w-8 text-blue-600" />
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
