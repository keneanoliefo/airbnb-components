import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  images: string[];
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  nights?: number;
  badges?: string[];
  isFavorite?: boolean;
  bedType?: string;
  cancellation?: string;
  onFavoriteClick?: (id: string) => void;
  onCardClick?: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  images,
  rating,
  reviewCount,
  price,
  originalPrice,
  nights = 3,
  badges = [],
  isFavorite = false,
  bedType,
  cancellation,
  onFavoriteClick,
  onCardClick,
}) => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-transparent p-0 shadow-none transition-all duration-200 hover:scale-[1.02]">
      <div className="cursor-pointer" onClick={() => onCardClick?.(id)}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <img
            src={images[0] || "/api/placeholder/300/300"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          {badges.length > 0 && (
            <div className="absolute left-3 top-3 flex flex-wrap gap-1">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant={badge === "Guest favorite" ? "default" : "secondary"}
                  className="bg-white/90 text-xs font-medium text-gray-800 backdrop-blur-sm"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Favorite Button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/80 p-0 backdrop-blur-sm hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteClick?.(id);
            }}
          >
            <Heart
              className={`h-4 w-4 ${
                isFavorite ? "fill-primary stroke-primary" : "stroke-gray-600"
              }`}
            />
          </Button>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === 0 ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-3 space-y-1">
          {/* Location and Rating */}
          <div className="flex items-center justify-between">
            <h3 className="truncate font-medium text-gray-900">{location}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-gray-900 text-gray-900" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-sm text-gray-500">({reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <p className="line-clamp-1 text-sm text-gray-500">{title}</p>

          {/* Bed Type */}
          {bedType && (
            <p className="text-sm text-gray-500">{bedType}</p>
          )}

          {/* Price */}
          <div className="flex items-center gap-1">
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
            <span className="font-semibold text-gray-900">${price}</span>
            <span className="text-sm text-gray-500">
              for {nights} nights
            </span>
          </div>

          {/* Cancellation */}
          {cancellation && (
            <p className="text-sm text-gray-500">{cancellation}</p>
          )}
        </div>
      </div>
    </Card>
  );
};