import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { trackPixelEvent } from '@/lib/utils';
import { ArrowRight, ArrowLeft, Building2, Briefcase, Mail, Phone, Globe, User } from 'lucide-react';

const companyTypes = [
  'Agency/Consultancy',
  'Agriculture/Farming',
  'Automotive',
  'Banking/Financial Services',
  'Construction/Real Estate',
  'E-commerce',
  'Education/EdTech',
  'Energy/Utilities',
  'Entertainment/Media',
  'Fashion/Apparel',
  'Food/Beverage',
  'Healthcare/Medical',
  'Hospitality/Tourism',
  'Insurance',
  'IT/Software/SaaS',
  'Legal Services',
  'Logistics/Transportation',
  'Manufacturing',
  'Marketing/Advertising',
  'Non-Profit/NGO',
  'Pharmaceutical',
  'Professional Services',
  'Retail',
  'Telecommunications',
  'Other'
];

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  companyType: z.string().min(1, 'Please select your company type'),
  positionTitle: z.string().min(2, 'Position/Title must be at least 2 characters'),
  phoneNumber: z.string()
    .refine(
      (value) => {
        try {
          return isValidPhoneNumber(value);
        } catch {
          return false;
        }
      },
      'Please enter a valid phone number with country code (e.g., +254712345678)'
    ),
  email: z.string().email('Please enter a valid email address'),
  website: z.string().url('Please enter a valid URL').or(z.literal('')).optional(),
});

const ConsultationForm = ({ open, onOpenChange, onConsultationRequested }) => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      companyType: '',
      positionTitle: '',
      phoneNumber: '',
      email: '',
      website: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://hook.eu2.make.com/mq8hyvhb0psb4mh2er2ctx0ao6hf6ym7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      onConsultationRequested();
      trackPixelEvent('Lead');
      toast({
        title: "Congratulations! 🎉",
        description: "You've taken the first step towards transforming your business. Our team will contact you within 24 hours to schedule your consultation.",
        duration: 6000,
      });
      onOpenChange(false);
      form.reset();
      setStep(1);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    form.trigger(['firstName', 'lastName', 'email', 'phoneNumber', 'positionTitle']);
    const hasErrors = Object.keys(form.formState.errors).some(key => 
      ['firstName', 'lastName', 'email', 'phoneNumber', 'positionTitle'].includes(key)
    );
    
    if (!hasErrors) {
      setStep(2);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Transform Your Business with AI
            </DialogTitle>
            <DialogDescription className="text-blue-100 mt-2">
              Join industry leaders who have achieved up to 300% growth through our AI solutions.
              Your journey to business transformation starts here.
            </DialogDescription>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
            {step === 1 ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-9" placeholder="John" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-9" placeholder="Doe" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-9" placeholder="john@company.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-9" placeholder="+254712345678" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="positionTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position/Title</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-9" placeholder="CEO / Manager / Director" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-9" placeholder="Your Company Ltd" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your company type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {companyTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (Optional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-9" placeholder="https://www.example.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Book Consultation
                  </Button>
                </div>
              </>
            )}

            <div className="text-center text-sm text-gray-500 mt-6">
              <p className="mb-2">🔒 Your information is secure and will never be shared</p>
              <p>Join 100+ businesses already benefiting from our AI solutions</p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;