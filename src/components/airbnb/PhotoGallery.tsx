import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share, Heart, Grid3X3 } from "lucide-react";

interface PhotoCategory {
  id: string;
  name: string;
  thumbnail: string;
  photos: string[];
}

interface PhotoGalleryProps {
  categories: PhotoCategory[];
  onBack?: () => void;
  onShare?: () => void;
  onSave?: () => void;
  className?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  categories,
  onBack,
  onShare,
  onSave,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Button
          variant="ghost"
          onClick={onBack}
          className="p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        
        <h1 className="text-2xl font-semibold">Photo tour</h1>
        
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={onShare}
            className="flex items-center gap-2"
          >
            <Share className="w-4 h-4" />
            Share
          </Button>
          <Button
            variant="ghost"
            onClick={onSave}
            className="flex items-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Save
          </Button>
        </div>
      </div>

      {/* Category Selector */}
      <div className="flex gap-4 p-6 overflow-x-auto">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory.id === category.id ? "default" : "outline"}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPhotoIndex(0);
            }}
            className="flex-shrink-0 h-auto p-0 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-2 p-3">
              <div className="w-16 h-12 overflow-hidden rounded">
                <img
                  src={category.thumbnail}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </div>
          </Button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="px-6">
        <h2 className="text-xl font-semibold mb-6">{selectedCategory.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
          {selectedCategory.photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setCurrentPhotoIndex(index)}
            >
              <img
                src={photo}
                alt={`${selectedCategory.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Show All Photos Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          variant="outline"
          className="bg-background border-2 shadow-lg"
        >
          <Grid3X3 className="w-4 h-4 mr-2" />
          Show all photos
        </Button>
      </div>
    </div>
  );
};