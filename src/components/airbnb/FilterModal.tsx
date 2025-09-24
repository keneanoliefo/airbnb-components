import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterSection } from "./FilterSection";
import { OptionCard } from "./OptionCard";
import { NumberInput } from "./NumberInput";
import { RangeSlider } from "./RangeSlider";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters?: (filters: FilterData) => void;
}

interface FilterData {
  recommended: string[];
  propertyTypes: string[];
  priceRange: [number, number];
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[];
  bookingOptions: string[];
  languages: string[];
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
}) => {
  const [filters, setFilters] = useState<FilterData>({
    recommended: [],
    propertyTypes: ["Any type"],
    priceRange: [30, 2500],
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    amenities: [],
    bookingOptions: [],
    languages: [],
  });

  const handleApplyFilters = () => {
    onApplyFilters?.(filters);
    onClose();
  };

  const handleClearAll = () => {
    setFilters({
      recommended: [],
      propertyTypes: ["Any type"],
      priceRange: [30, 2500],
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      amenities: [],
      bookingOptions: [],
      languages: [],
    });
  };

  const recommendedOptions = [
    { id: "pets", label: "Allows pets", icon: "🐾" },
    { id: "cancellation", label: "Free cancellation", icon: "📅" },
    { id: "checkin", label: "Self check-in", icon: "🔑" },
    { id: "favorite", label: "Guest favorite", icon: "🏆" },
  ];

  const propertyTypes = [
    { id: "any", label: "Any type" },
    { id: "room", label: "Room" },
    { id: "home", label: "Entire home" },
  ];

  const amenities = [
    { id: "parking", label: "Free parking", icon: "🅿️" },
    { id: "ac", label: "Air conditioning", icon: "❄️" },
    { id: "wifi", label: "Wifi", icon: "📶" },
    { id: "kitchen", label: "Kitchen", icon: "🍳" },
    { id: "washer", label: "Washer", icon: "🧺" },
    { id: "pool", label: "Pool", icon: "🏊" },
  ];

  const bookingOptions = [
    { id: "instant", label: "Instant Book", icon: "⚡" },
    { id: "selfcheckin", label: "Self check-in", icon: "🔑" },
    { id: "freecancellation", label: "Free cancellation", icon: "📅" },
    { id: "allowspets", label: "Allows pets", icon: "🐾" },
  ];

  const languages = [
    "Chinese (Simplified)", "English", "French", "German",
    "Italian", "Japanese", "Korean", "Portuguese", 
    "Russian", "Spanish", "Arabic", "Catalan"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-0">
          <DialogTitle className="text-lg font-semibold">Filters</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6">
          <div className="space-y-8 py-6">
            {/* Recommended for you */}
            <FilterSection title="Recommended for you">
              <div className="grid grid-cols-2 gap-4">
                {recommendedOptions.map((option) => (
                  <OptionCard
                    key={option.id}
                    label={option.label}
                    icon={option.icon}
                    isSelected={filters.recommended.includes(option.id)}
                    onClick={() => {
                      setFilters(prev => ({
                        ...prev,
                        recommended: prev.recommended.includes(option.id)
                          ? prev.recommended.filter(id => id !== option.id)
                          : [...prev.recommended, option.id]
                      }));
                    }}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Type of place */}
            <FilterSection title="Type of place">
              <div className="flex gap-4">
                {propertyTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={filters.propertyTypes.includes(type.label) ? "default" : "outline"}
                    onClick={() => {
                      setFilters(prev => ({
                        ...prev,
                        propertyTypes: [type.label]
                      }));
                    }}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </FilterSection>

            {/* Price range */}
            <FilterSection 
              title="Price range" 
              subtitle="Trip price, includes all fees"
            >
              <RangeSlider
                min={30}
                max={2500}
                step={10}
                value={filters.priceRange}
                onChange={(value) => setFilters(prev => ({...prev, priceRange: value}))}
              />
            </FilterSection>

            {/* Rooms and beds */}
            <FilterSection title="Rooms and beds">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Bedrooms</span>
                  <NumberInput
                    value={filters.bedrooms}
                    onChange={(value) => setFilters(prev => ({...prev, bedrooms: value}))}
                    min={0}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Beds</span>
                  <NumberInput
                    value={filters.beds}
                    onChange={(value) => setFilters(prev => ({...prev, beds: value}))}
                    min={0}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Bathrooms</span>
                  <NumberInput
                    value={filters.bathrooms}
                    onChange={(value) => setFilters(prev => ({...prev, bathrooms: value}))}
                    min={0}
                  />
                </div>
              </div>
            </FilterSection>

            {/* Amenities */}
            <FilterSection title="Amenities">
              <div className="grid grid-cols-3 gap-4">
                {amenities.map((amenity) => (
                  <OptionCard
                    key={amenity.id}
                    label={amenity.label}
                    icon={amenity.icon}
                    isSelected={filters.amenities.includes(amenity.id)}
                    onClick={() => {
                      setFilters(prev => ({
                        ...prev,
                        amenities: prev.amenities.includes(amenity.id)
                          ? prev.amenities.filter(id => id !== amenity.id)
                          : [...prev.amenities, amenity.id]
                      }));
                    }}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Booking options */}
            <FilterSection title="Booking options">
              <div className="space-y-3">
                {bookingOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={option.id}
                      checked={filters.bookingOptions.includes(option.id)}
                      onCheckedChange={(checked) => {
                        setFilters(prev => ({
                          ...prev,
                          bookingOptions: checked
                            ? [...prev.bookingOptions, option.id]
                            : prev.bookingOptions.filter(id => id !== option.id)
                        }));
                      }}
                    />
                    <label
                      htmlFor={option.id}
                      className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <span>{option.icon}</span>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </FilterSection>

            {/* Host language */}
            <FilterSection title="Host language">
              <div className="grid grid-cols-2 gap-3">
                {languages.map((language) => (
                  <div key={language} className="flex items-center space-x-3">
                    <Checkbox
                      id={language}
                      checked={filters.languages.includes(language)}
                      onCheckedChange={(checked) => {
                        setFilters(prev => ({
                          ...prev,
                          languages: checked
                            ? [...prev.languages, language]
                            : prev.languages.filter(lang => lang !== language)
                        }));
                      }}
                    />
                    <label
                      htmlFor={language}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </FilterSection>
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="flex items-center justify-between border-t p-6">
          <Button variant="ghost" onClick={handleClearAll}>
            Clear all
          </Button>
          <Button onClick={handleApplyFilters} className="px-8">
            Show 1,000+ places
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};