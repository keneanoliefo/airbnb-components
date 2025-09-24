import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

interface GuestSelectorProps {
  adults?: number;
  children?: number;
  infants?: number;
  pets?: number;
  onGuestChange?: (guests: GuestCounts) => void;
  className?: string;
}

export const GuestSelector: React.FC<GuestSelectorProps> = ({
  adults = 1,
  children = 0,
  infants = 0,
  pets = 0,
  onGuestChange,
  className = "",
}) => {
  const [counts, setCounts] = useState<GuestCounts>({
    adults,
    children,
    infants,
    pets,
  });

  const updateCount = (type: keyof GuestCounts, change: number) => {
    const newCounts = {
      ...counts,
      [type]: Math.max(0, counts[type] + change),
    };
    
    // Ensure at least 1 adult
    if (type === 'adults' && newCounts.adults === 0) {
      newCounts.adults = 1;
    }
    
    setCounts(newCounts);
    onGuestChange?.(newCounts);
  };

  const guestTypes = [
    {
      key: 'adults' as keyof GuestCounts,
      title: 'Adults',
      description: 'Age 13+',
      count: counts.adults,
      minCount: 1,
    },
    {
      key: 'children' as keyof GuestCounts,
      title: 'Children',
      description: 'Ages 2-12',
      count: counts.children,
      minCount: 0,
    },
    {
      key: 'infants' as keyof GuestCounts,
      title: 'Infants',
      description: 'Under 2',
      count: counts.infants,
      minCount: 0,
    },
    {
      key: 'pets' as keyof GuestCounts,
      title: 'Pets',
      description: 'Bringing a service animal?',
      count: counts.pets,
      minCount: 0,
    },
  ];

  return (
    <Card className={`p-6 ${className}`}>
      <div className="space-y-6">
        {guestTypes.map((guestType, index) => (
          <div key={guestType.key} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="font-medium">{guestType.title}</div>
              <div className="text-sm text-muted-foreground">
                {guestType.description}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateCount(guestType.key, -1)}
                disabled={guestType.count <= guestType.minCount}
                className="w-8 h-8 rounded-full p-0 border-2"
              >
                <Minus className="w-3 h-3" />
              </Button>
              
              <span className="w-8 text-center font-medium">
                {guestType.count}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateCount(guestType.key, 1)}
                className="w-8 h-8 rounded-full p-0 border-2"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
        
        {pets > 0 && (
          <p className="text-sm text-muted-foreground">
            This place has a maximum of 2 guests, not including infants and pets. If you're bringing more than 2 pets, please let your host know.
          </p>
        )}
      </div>
    </Card>
  );
};