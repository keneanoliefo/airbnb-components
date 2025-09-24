import React from "react";
import { Button } from "@/components/ui/button";

interface ExploreDestination {
  id: string;
  title: string;
  subtitle: string;
}

interface ExploreCategory {
  title: string;
  destinations: ExploreDestination[];
}

interface ExploreSectionProps {
  categories: ExploreCategory[];
  onDestinationClick?: (destination: ExploreDestination) => void;
  className?: string;
}

export const ExploreSection: React.FC<ExploreSectionProps> = ({
  categories,
  onDestinationClick,
  className = "",
}) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {category.destinations.map((destination) => (
              <Button
                key={destination.id}
                variant="ghost"
                onClick={() => onDestinationClick?.(destination)}
                className="flex flex-col items-start h-auto p-0 text-left justify-start"
              >
                <div className="font-medium text-foreground hover:underline">
                  {destination.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {destination.subtitle}
                </div>
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};