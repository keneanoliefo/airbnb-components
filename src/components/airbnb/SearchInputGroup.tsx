import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchInputGroupProps {
  destinationValue?: string;
  checkInValue?: string;
  checkOutValue?: string;
  guestsValue?: string;
  onDestinationChange?: (value: string) => void;
  onCheckInChange?: (value: string) => void;
  onCheckOutChange?: (value: string) => void;
  onGuestsChange?: (value: string) => void;
  onSearch?: () => void;
  className?: string;
}

export const SearchInputGroup: React.FC<SearchInputGroupProps> = ({
  destinationValue = "",
  checkInValue = "",
  checkOutValue = "",
  guestsValue = "",
  onDestinationChange,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onSearch,
  className = "",
}) => {
  return (
    <div className={`flex items-center rounded-full border shadow-lg bg-white max-w-4xl mx-auto ${className}`}>
      {/* Where */}
      <div className="flex-1 px-6 py-4">
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-foreground mb-1">
            Where
          </label>
          <Input
            value={destinationValue}
            onChange={(e) => onDestinationChange?.(e.target.value)}
            placeholder="Search destinations"
            className="border-0 p-0 text-sm bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="w-px h-8 bg-border" />

      {/* Check in */}
      <div className="flex-1 px-6 py-4">
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-foreground mb-1">
            Check in
          </label>
          <Input
            value={checkInValue}
            onChange={(e) => onCheckInChange?.(e.target.value)}
            placeholder="Add dates"
            className="border-0 p-0 text-sm bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground"
            readOnly
          />
        </div>
      </div>

      <div className="w-px h-8 bg-border" />

      {/* Check out */}
      <div className="flex-1 px-6 py-4">
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-foreground mb-1">
            Check out
          </label>
          <Input
            value={checkOutValue}
            onChange={(e) => onCheckOutChange?.(e.target.value)}
            placeholder="Add dates"
            className="border-0 p-0 text-sm bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground"
            readOnly
          />
        </div>
      </div>

      <div className="w-px h-8 bg-border" />

      {/* Who */}
      <div className="flex-1 px-6 py-4">
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-foreground mb-1">
            Who
          </label>
          <Input
            value={guestsValue}
            onChange={(e) => onGuestsChange?.(e.target.value)}
            placeholder="Add guests"
            className="border-0 p-0 text-sm bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground"
            readOnly
          />
        </div>
      </div>

      {/* Search Button */}
      <Button
        onClick={onSearch}
        size="lg"
        className="m-2 h-12 w-12 rounded-full p-0 bg-primary hover:bg-primary/90"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};