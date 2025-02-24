
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, FileText, Shield, Gift } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import SEOMetadata from '../components/SEOMetadata';

const AIStarterKit = () => {
  const { toast } = useToast();
  const form = useForm({
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
    "5 Ready-to-Use Automation Templates for Kenyan SMEs",
    "ROI Calculator: Estimate Your Cost Savings",
    "Case Studies: Local Success Stories",
    "Quick-Start AI Implementation Checklist",
    "Recommended Tools for Kenyan Businesses",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <SEOMetadata 
        title="Free AI Starter Kit for Kenyan Businesses | ZaidiStudio"
        description="Get your free AI Starter Kit and learn how Kenyan businesses are cutting costs by 40% with automation"
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get Your Free AI Starter Kit for Kenyan Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn the exact AI tools and automation strategies that local Kenyan SMEs are using to reduce manual tasks by up to 40%
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Form */}
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
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
                      <FormLabel>Email</FormLabel>
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
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" size="lg">
                  <Gift className="mr-2 h-5 w-5" />
                  Get My Free AI Kit
                </Button>
                
                <p className="text-sm text-gray-500 text-center flex items-center justify-center mt-4">
                  <Shield className="h-4 w-4 mr-2" />
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </Form>
          </Card>

          {/* Right Column: Kit Contents */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  What's Inside Your Kit:
                </h3>
                <ul className="space-y-4">
                  {kitContents.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <Card className="p-6 bg-blue-50">
              <blockquote className="text-gray-700">
                "ZaidiStudio's automation guide helped us cut 10 hours/week of manual admin tasks!"
              </blockquote>
              <p className="text-sm font-semibold mt-2">- John Kamau, Local Entrepreneur</p>
            </Card>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">Ready to take the next step?</p>
          <Button variant="outline" size="lg">
            Book Your Free AI Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIStarterKit;
