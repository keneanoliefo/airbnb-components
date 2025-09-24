import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface CompactSearchBarProps {
  location?: string;
  dates?: string;
  guests?: string;
  onSearchClick?: () => void;
  className?: string;
}

export const CompactSearchBar: React.FC<CompactSearchBarProps> = ({
  location = "Anywhere",
  dates = "Any week",
  guests = "Add guests",
  onSearchClick,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center rounded-full border shadow-lg bg-white max-w-md">
        {/* Location */}
        <div className="px-6 py-3">
          <span className="text-sm font-medium text-foreground">{location}</span>
        </div>
        
        <div className="w-px h-8 bg-border" />
        
        {/* Dates */}
        <div className="px-6 py-3">
          <span className="text-sm font-medium text-foreground">{dates}</span>
        </div>
        
        <div className="w-px h-8 bg-border" />
        
        {/* Guests */}
        <div className="px-6 py-3 flex-1">
          <span className="text-sm text-muted-foreground">{guests}</span>
        </div>

        {/* Search Button */}
        <Button
          onClick={onSearchClick}
          size="sm"
          className="m-2 h-8 w-8 rounded-full p-0 bg-primary hover:bg-primary/90"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};