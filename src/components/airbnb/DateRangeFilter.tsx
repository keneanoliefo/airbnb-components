import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DateFilterOption {
  id: string;
  label: string;
  days: number;
}

interface DateRangeFilterProps {
  onFilterSelect?: (option: DateFilterOption) => void;
  className?: string;
}

const filterOptions: DateFilterOption[] = [
  { id: "exact", label: "Exact dates", days: 0 },
  { id: "1day", label: "± 1 day", days: 1 },
  { id: "2days", label: "± 2 days", days: 2 },
  { id: "3days", label: "± 3 days", days: 3 },
  { id: "7days", label: "± 7 days", days: 7 },
  { id: "14days", label: "± 14 days", days: 14 },
];

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  onFilterSelect,
  className = "",
}) => {
  const [selectedFilter, setSelectedFilter] = useState("exact");

  const handleFilterClick = (option: DateFilterOption) => {
    setSelectedFilter(option.id);
    onFilterSelect?.(option);
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {filterOptions.map((option) => (
        <Button
          key={option.id}
          variant={selectedFilter === option.id ? "default" : "outline"}
          onClick={() => handleFilterClick(option)}
          size="sm"
          className={`rounded-full ${
            selectedFilter === option.id
              ? "bg-foreground text-background"
              : "border-2 hover:border-foreground"
          }`}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};