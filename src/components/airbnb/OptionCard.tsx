import React from "react";
import { Card } from "@/components/ui/card";

interface OptionCardProps {
  label: string;
  icon?: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  label,
  icon,
  isSelected = false,
  onClick,
  className = "",
}) => {
  return (
    <Card
      className={`
        cursor-pointer transition-all duration-200 hover:shadow-md p-4 text-center
        ${isSelected 
          ? 'border-primary bg-primary/5 shadow-sm' 
          : 'border-gray-200 hover:border-gray-300'
        }
        ${className}
      `}
      onClick={onClick}
    >
      <div className="space-y-2">
        {icon && (
          <div className="text-2xl">{icon}</div>
        )}
        <p className={`text-sm font-medium ${
          isSelected ? 'text-primary' : 'text-gray-900'
        }`}>
          {label}
        </p>
      </div>
    </Card>
  );
};