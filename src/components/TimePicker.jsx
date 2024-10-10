import React from 'react';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const TimePicker = ({ availableTimes, value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="time">Select Time</Label>
      <Select name="time" value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-full ${error ? 'border-red-500' : ''}`}>
          <SelectValue placeholder="Select a time slot" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {availableTimes.map((time) => (
            <SelectItem key={time} value={time} className={`${value === time ? 'bg-blue-100' : ''} hover:bg-blue-50`}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TimePicker;