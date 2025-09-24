import React from "react";
import { 
  Wifi, 
  Car, 
  Snowflake, 
  Trees,
  CheckCircle
} from "lucide-react";

interface Amenity {
  id: string;
  name: string;
  icon: keyof typeof amenityIcons;
}

interface AmenityListProps {
  amenities: Amenity[];
  showIcons?: boolean;
  className?: string;
}

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  ac: Snowflake,
  backyard: Trees,
  // Add more icons as needed
};

export const AmenityList: React.FC<AmenityListProps> = ({
  amenities,
  showIcons = true,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-2xl font-semibold">What this place offers</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity) => {
          const IconComponent = amenityIcons[amenity.icon] || CheckCircle;
          
          return (
            <div
              key={amenity.id}
              className="flex items-center gap-4 py-4 border-b border-border last:border-0"
            >
              {showIcons && <IconComponent className="w-6 h-6 text-muted-foreground" />}
              <span className="text-base">{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};