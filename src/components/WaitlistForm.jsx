import React, { useState } from 'react';
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

const WaitlistForm = ({ open, onOpenChange }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessType: '',
    employeeCount: '',
    primaryGoal: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (value) => {
    setFormData({ ...formData, [Object.keys(formData)[step]]: value });
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
      const response = await fetch('http://localhost:5678/webhook/ac13b724-c8ad-4424-888c-c6981c9646a2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
      });
      onOpenChange(false);
      // Reset form state
      setStep(0);
      setFormData({
        businessType: '',
        employeeCount: '',
        primaryGoal: '',
        email: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to join the waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
          <DialogDescription>
            Help us understand your business better to provide tailored solutions.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {step < steps.length ? (
            <>
              <div className="grid gap-4 py-4">
                <Label>{steps[step].title}</Label>
                <RadioGroup onValueChange={handleOptionSelect} value={formData[Object.keys(formData)[step]]}>
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </DialogFooter>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;