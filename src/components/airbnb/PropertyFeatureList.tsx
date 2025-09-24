import React from "react";
import { 
  Home, 
  MapPin, 
  Calendar, 
  Shield, 
  Wifi, 
  Car,
  CheckCircle
} from "lucide-react";

interface PropertyFeature {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof featureIcons;
}

interface PropertyFeatureListProps {
  features: PropertyFeature[];
  className?: string;
}

const featureIcons = {
  selfCheckIn: Home,
  peaceAndQuiet: MapPin,
  freeCancellation: Calendar,
  verified: Shield,
  wifi: Wifi,
  parking: Car,
  default: CheckCircle,
};

export const PropertyFeatureList: React.FC<PropertyFeatureListProps> = ({
  features,
  className = "",
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {features.map((feature) => {
        const IconComponent = featureIcons[feature.icon] || featureIcons.default;
        
        return (
          <div key={feature.id} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <IconComponent className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};