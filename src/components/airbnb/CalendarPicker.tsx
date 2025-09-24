import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CalendarPickerProps {
  selectedDates?: [Date | null, Date | null];
  onDateSelect?: (dates: [Date | null, Date | null]) => void;
  onClearDates?: () => void;
  className?: string;
}

export const CalendarPicker: React.FC<CalendarPickerProps> = ({
  selectedDates = [null, null],
  onDateSelect,
  onClearDates,
  className = "",
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [checkIn, checkOut] = selectedDates;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    return nextMonth;
  };

  const handleDateClick = (date: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      // Start new selection
      onDateSelect?.([date, null]);
    } else if (checkIn && !checkOut) {
      // Complete selection
      if (date > checkIn) {
        onDateSelect?.([checkIn, date]);
      } else {
        onDateSelect?.([date, null]);
      }
    }
  };

  const isDateSelected = (date: Date) => {
    if (!checkIn) return false;
    if (checkIn && !checkOut) {
      return date.getTime() === checkIn.getTime();
    }
    if (checkIn && checkOut) {
      return date >= checkIn && date <= checkOut;
    }
    return false;
  };

  const isDateInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false;
    return date > checkIn && date < checkOut;
  };

  const renderMonth = (monthDate: Date) => {
    const days = getDaysInMonth(monthDate);
    
    return (
      <div className="flex-1">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">
            {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
          </h3>
        </div>
        
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div key={index} className="aspect-square">
              {day && (
                <Button
                  variant="ghost"
                  onClick={() => handleDateClick(day)}
                  className={`w-full h-full rounded-full text-sm ${
                    isDateSelected(day)
                      ? checkIn && checkOut && (day.getTime() === checkIn.getTime() || day.getTime() === checkOut.getTime())
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-muted"
                      : isDateInRange(day)
                      ? "bg-muted/50"
                      : "hover:bg-muted"
                  }`}
                >
                  {day.getDate()}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className={`p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth('prev')}
          className="p-2"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">
            {checkIn && checkOut
              ? `${checkIn.toLocaleDateString()} - ${checkOut.toLocaleDateString()}`
              : checkIn
              ? `Check-in: ${checkIn.toLocaleDateString()}`
              : "Select dates"
            }
          </span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth('next')}
          className="p-2"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Two month view */}
      <div className="flex gap-8">
        {renderMonth(currentDate)}
        {renderMonth(getNextMonth())}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t">
        <Button variant="ghost" onClick={onClearDates}>
          Clear dates
        </Button>
        <div className="text-sm text-muted-foreground">
          {checkIn && checkOut && (
            <span>
              {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights in {monthNames[checkIn.getMonth()]}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};