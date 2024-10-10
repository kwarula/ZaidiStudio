import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';
import { format, isWeekend, isBefore, startOfToday } from 'date-fns';

const DemoBookingForm = ({ open, onOpenChange }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null,
    time: '',
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const availableTimes = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleDateSelect = (date) => {
    setFormData(prevData => ({ ...prevData, date }));
    setErrors(prevErrors => ({ ...prevErrors, date: '' }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    } else if (currentStep === 2) {
      if (!formData.date) newErrors.date = 'Date is required';
      if (!formData.time) newErrors.time = 'Time is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(2)) {
      console.log('Booking submitted:', formData);
      toast({
        title: "Demo Booked!",
        description: `Your demo is scheduled for ${format(formData.date, 'MMMM d, yyyy')} at ${formData.time}.`,
      });
      onOpenChange(false);
    }
  };

  const isDateDisabled = (date) => {
    return isWeekend(date) || isBefore(date, startOfToday());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-w-[90vw] bg-white overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Free Demo</DialogTitle>
          <DialogDescription>
            {step === 1 ? 'Step 1: Your Information' : 'Step 2: Choose Date and Time'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={handleDateSelect}
                  disabled={isDateDisabled}
                  className="rounded-md border w-full"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Select Time</Label>
                <Select
                  name="time"
                  value={formData.time}
                  onValueChange={(value) => {
                    setFormData(prevData => ({ ...prevData, time: value }));
                    setErrors(prevErrors => ({ ...prevErrors, time: '' }));
                  }}
                >
                  <SelectTrigger className={`w-full ${errors.time ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
              </div>
            </>
          )}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button type="button" onClick={handlePrevStep} variant="outline">
                Previous
              </Button>
            )}
            {step < 2 ? (
              <Button type="button" onClick={handleNextStep} className="ml-auto">
                Next
              </Button>
            ) : (
              <Button type="submit" className="ml-auto">
                Book Demo
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoBookingForm;