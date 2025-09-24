import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 99,
  className = "",
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={handleDecrement}
        disabled={value <= min}
        className="h-8 w-8 rounded-full p-0"
      >
        <Minus className="h-3 w-3" />
      </Button>
      
      <span className="min-w-[2ch] text-center font-medium">
        {value === 0 ? "Any" : value}
      </span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleIncrement}
        disabled={value >= max}
        className="h-8 w-8 rounded-full p-0"
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
};