
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, FileText, Shield, Gift, ArrowLeft, BookOpen, Calculator, Users, ListChecks } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
});

const AIStarterKit = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Here you would typically send this to your email service
      console.log("Form submitted:", data);
      
      toast({
        title: "Success!",
        description: "Check your email for your AI Starter Kit!",
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your kit. Please try again.",
        variant: "destructive",
      });
    }
  };

  const kitContents = [
    {
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      title: "5 Ready-to-Use Automation Templates",
      description: "Pre-built templates for marketing, customer service, and operations"
    },
    {
      icon: <Calculator className="h-5 w-5 text-blue-600" />,
      title: "ROI Calculator",
      description: "Calculate your potential savings with our custom spreadsheet"
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      title: "Local Success Stories",
      description: "Real case studies from Kenyan businesses using AI"
    },
    {
      icon: <ListChecks className="h-5 w-5 text-blue-600" />,
      title: "Quick-Start Checklist",
      description: "Step-by-step guide to implementing AI in your business"
    },
  ];

  const testimonials = [
    {
      quote: "ZaidiStudio's automation guide helped us cut 10 hours/week of manual admin tasks!",
      author: "John Kamau",
      role: "CEO",
      company: "TechVentures Kenya"
    },
    {
      quote: "The ROI calculator helped us identify Ksh 50,000 in monthly savings opportunities.",
      author: "Sarah Mwangi",
      role: "Operations Manager",
      company: "Nairobi Retail Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEOMetadata 
        title="Free AI Starter Kit for Kenyan Businesses | ZaidiStudio"
        description="Get your free AI Starter Kit and learn how Kenyan businesses are cutting costs by 40% with automation"
      />
      
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="text-xl font-bold text-blue-600">ZaidiStudio</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-24 px-4 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get Your Free AI Starter Kit for Kenyan Businesses
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn the exact AI tools and automation strategies that local Kenyan SMEs are using to reduce manual tasks by up to 40%
          </p>
          <div className="flex items-center justify-center space-x-2 mb-12">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="text-gray-600">Join 100+ Kenyan businesses already using our templates</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Kit Contents & Social Proof */}
          <div className="space-y-8">
            {/* Kit Preview */}
            <Card className="p-8 border-2 border-blue-200">
              <div className="relative mb-8">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Worth Ksh 15,000
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="AI Starter Kit Preview" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                What's Inside Your Kit:
              </h3>
              
              <div className="space-y-6">
                {kitContents.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-blue-50">
                  <blockquote className="text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:sticky md:top-24">
            <Card className="p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-6">Get Your Free AI Starter Kit</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    <Gift className="mr-2 h-5 w-5" />
                    Get Your Free AI Starter Kit Now
                  </Button>
                  
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-gray-500 flex items-center justify-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Your data is secure and will never be shared
                    </p>
                    <div className="text-xs text-gray-500 text-center">
                      By submitting, you agree to receive other communications from ZaidiStudio.
                      <br />You can unsubscribe at any time.
                    </div>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">Ready to transform your business with AI?</p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/#audit'}
          >
            Book Your Free AI Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIStarterKit;
