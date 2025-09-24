import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
            <div className="text-2xl font-bold text-primary">
              <svg 
                width="32" 
                height="32" 
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M16 1c2 0 3.5 1.5 3.5 3.5 0 1.5-1 2.5-1.5 3.5L16 10.5 14 8c-.5-1-1.5-2-1.5-3.5C12.5 2.5 14 1 16 1zm0 16c-2.5 0-10 1.25-10 3.75V22h20v-1.25C26 18.25 18.5 17 16 17z"/>
              </svg>
            </div>
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