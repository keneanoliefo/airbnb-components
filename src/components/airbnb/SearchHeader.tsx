import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Logo } from "./Logo";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  SlidersHorizontal,
  Globe,
  Menu
} from "lucide-react";

interface SearchHeaderProps {
  onSearch?: (params: SearchParams) => void;
  onFiltersClick?: () => void;
  className?: string;
}

interface SearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  onSearch,
  onFiltersClick,
  className = "",
}) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: "Homes in San Diego",
    checkIn: "Oct 31",
    checkOut: "Nov 3", 
    guests: 2,
  });

  const handleSearch = () => {
    onSearch?.(searchParams);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white border-b ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Logo 
              variant="symbol" 
              size="lg" 
              onClick={() => console.log("Logo clicked")}
              className="transition-transform hover:scale-105"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center rounded-full border shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <div className="flex-1 flex items-center divide-x">
                {/* Location */}
                <div className="flex-1 px-6 py-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <div>
                      <Input
                        value={searchParams.location}
                        onChange={(e) => 
                          setSearchParams(prev => ({...prev, location: e.target.value}))
                        }
                        className="border-0 p-0 text-sm font-medium bg-transparent focus-visible:ring-0"
                        placeholder="Where"
                      />
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="flex-1 px-6 py-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {searchParams.checkIn} – {searchParams.checkOut}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="flex-1 px-6 py-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium">
                      {searchParams.guests} guests
                    </span>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <Button
                onClick={handleSearch}
                size="sm"
                className="m-2 h-8 w-8 rounded-full p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-2 text-sm font-medium"
            >
              Become a host
            </Button>

            <Button variant="ghost" size="sm" className="p-2">
              <Globe className="h-4 w-4" />
            </Button>

            {/* Filters */}
            <Button
              variant="outline"
              size="sm"
              onClick={onFiltersClick}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>

            {/* Profile Menu */}
            <Button variant="outline" size="sm" className="flex items-center gap-2 p-2">
              <Menu className="h-4 w-4" />
              <div className="h-6 w-6 rounded-full bg-gray-400" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="pb-4">
          <p className="text-sm text-gray-600">Over 1,000 homes in San Diego</p>
          <Badge variant="outline" className="mt-2 bg-pink-50 border-pink-200 text-pink-800">
            💰 Prices include all fees
          </Badge>
        </div>
      </div>
    </header>
  );
};