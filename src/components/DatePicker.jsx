import React from 'react';
import { Calendar } from './ui/calendar';
import { Label } from './ui/label';
import { isWeekend, isBefore, startOfToday } from 'date-fns';

const DatePicker = ({ selected, onSelect, error }) => {
  const isDateDisabled = (date) => {
    return isWeekend(date) || isBefore(date, startOfToday());
  };

  return (
    <div className="space-y-2">
      <Label>Select Date</Label>
      <Calendar
        mode="single"
        selected={selected}
        onSelect={onSelect}
        disabled={isDateDisabled}
        className="rounded-md border w-full"
        classNames={{
          day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
          day_today: "bg-orange-100 text-orange-600",
        }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default DatePicker;