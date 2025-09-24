import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  onPreviousClick?: () => void;
  onNextClick?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
  className?: string;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPreviousClick,
  onNextClick,
  showPrevious = true,
  showNext = true,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showPrevious && (
        <Button
          variant="outline"
          size="sm"
          onClick={onPreviousClick}
          className="h-8 w-8 rounded-full p-0 border-2 bg-white hover:bg-gray-50 shadow-md"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      
      {showNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={onNextClick}
          className="h-8 w-8 rounded-full p-0 border-2 bg-white hover:bg-gray-50 shadow-md"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};