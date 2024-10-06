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

const WaitlistForm = ({ open, onOpenChange, onWaitlistJoined }) => {
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
    const hasJoined = localStorage.getItem('hasJoinedWaitlist') === 'true';
    if (hasJoined) {
      onWaitlistJoined();
    }
  }, [onWaitlistJoined]);

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
      const response = await fetch('https://hook.eu2.make.com/3pwel2fcasdyhenfbw17tqapi6r3bkmi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      localStorage.setItem('hasJoinedWaitlist', 'true');
      onWaitlistJoined();
      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
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