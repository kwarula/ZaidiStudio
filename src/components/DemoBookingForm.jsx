import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';

const DemoBookingForm = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    position: '',
    website: '',
    phoneNumber: '',
    email: '',
    date: null,
    time: '',
  });
  const [availableTimes, setAvailableTimes] = useState([
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ]);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDateSelect = (date) => {
    setFormData(prevData => ({ ...prevData, date }));
    // Here you would typically fetch available times for the selected date
    // For this example, we'll just reset to all times being available
    setAvailableTimes(['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', formData);
    toast({
      title: "Demo Booked!",
      description: `Your demo is scheduled for ${formData.date.toDateString()} at ${formData.time}.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Book Your Free Demo</DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule your personalized demo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" name="businessName" value={formData.businessName} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="position">Position</Label>
            <Input id="position" name="position" value={formData.position} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="website">Website (Optional)</Label>
            <Input id="website" name="website" value={formData.website} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={formData.date}
              onSelect={handleDateSelect}
              className="rounded-md border"
            />
          </div>
          <div>
            <Label htmlFor="time">Select Time</Label>
            <Select name="time" value={formData.time} onValueChange={(value) => setFormData(prevData => ({ ...prevData, time: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>{time}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Book Demo</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoBookingForm;