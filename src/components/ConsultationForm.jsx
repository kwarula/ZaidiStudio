import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useToast } from './ui/use-toast';

const steps = [
  {
    title: "What's your business type?",
    options: ['E-commerce', 'Service-based', 'SaaS', 'Other'],
  },
  {
    title: 'How many employees do you have?',
    options: ['1-5', '6-20', '21-50', '50+'],
  },
  {
    title: "What's your primary goal?",
    options: ['Increase sales', 'Improve customer service', 'Streamline operations', 'Other'],
  },
];

const ConsultationForm = ({ open, onOpenChange, onConsultationRequested }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    employeeCount: '',
    primaryGoal: '',
    email: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasRequested = localStorage.getItem('hasRequestedConsultation') === 'true';
    if (hasRequested) {
      onConsultationRequested();
    }
  }, [onConsultationRequested]);

  const handleOptionSelect = (value) => {
    setFormData({ ...formData, [Object.keys(formData)[step + 1]]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu1.make.com/etm93nfchq66gch52trjh5vgrb2pmj7h', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      localStorage.setItem('hasRequestedConsultation', 'true');
      onConsultationRequested();
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted.",
      });
      onOpenChange(false);
      // Reset form state
      setStep(0);
      setFormData({
        businessName: '',
        businessType: '',
        employeeCount: '',
        primaryGoal: '',
        email: '',
        website: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit consultation request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Experience Automation</DialogTitle>
          <DialogDescription>
            Let us understand your business better to provide tailored solutions.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md">
          {step === 0 && (
            <div className="grid gap-4 py-4">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Enter your business name"
                required
              />
            </div>
          )}
          {step < steps.length ? (
            <>
              <div className="grid gap-4 py-4">
                <Label>{steps[step].title}</Label>
                <RadioGroup onValueChange={handleOptionSelect} value={formData[Object.keys(formData)[step + 1]]}>
                  {steps[step].options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <DialogFooter>
                <Button type="button" onClick={handleNext}>Next</Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <div className="grid gap-4 py-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                />
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </Button>
              </DialogFooter>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;