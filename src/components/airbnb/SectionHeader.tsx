import React from "react";
import { CarouselNavigation } from "./CarouselNavigation";

interface SectionHeaderProps {
  title: string;
  showNavigation?: boolean;
  onPreviousClick?: () => void;
  onNextClick?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showNavigation = true,
  onPreviousClick,
  onNextClick,
  showPrevious = true,
  showNext = true,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      
      {showNavigation && (
        <CarouselNavigation
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
          showPrevious={showPrevious}
          showNext={showNext}
        />
      )}
    </div>
  );
};