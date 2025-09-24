import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid3X3, Share, Heart } from "lucide-react";

interface PropertyImageGalleryProps {
  title: string;
  subtitle: string;
  mainImage: string;
  thumbnails: string[];
  onShowAllPhotos?: () => void;
  onShare?: () => void;
  onSave?: () => void;
  showPriceTag?: boolean;
  priceTagText?: string;
  className?: string;
}

export const PropertyImageGallery: React.FC<PropertyImageGalleryProps> = ({
  title,
  subtitle,
  mainImage,
  thumbnails,
  onShowAllPhotos,
  onShare,
  onSave,
  showPriceTag = true,
  priceTagText = "Prices include all fees",
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Title and Actions */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={onShare}
            className="flex items-center gap-2 underline hover:no-underline"
          >
            <Share className="w-4 h-4" />
            Share
          </Button>
          <Button
            variant="ghost"
            onClick={onSave}
            className="flex items-center gap-2 underline hover:no-underline"
          >
            <Heart className="w-4 h-4" />
            Save
          </Button>
        </div>
      </div>

      {/* Image Gallery Grid */}
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-96 rounded-lg overflow-hidden">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 relative">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Thumbnail images */}
        {thumbnails.slice(0, 4).map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`${title} ${index + 2}`}
              className="w-full h-full object-cover"
            />
            
            {/* Show all photos button on last image */}
            {index === 3 && (
              <div className="absolute inset-0 bg-black/20 flex items-end p-3">
                <Button
                  variant="outline"
                  onClick={onShowAllPhotos}
                  className="bg-white hover:bg-white/90 text-foreground border-2"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Show all photos
                </Button>
              </div>
            )}
          </div>
        ))}

        {/* Price tag overlay */}
        {showPriceTag && (
          <div className="absolute top-4 right-4">
            <Badge 
              variant="secondary" 
              className="bg-white/90 text-pink-800 border-pink-200 backdrop-blur-sm"
            >
              💰 {priceTagText}
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};