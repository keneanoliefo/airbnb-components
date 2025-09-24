import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ReviewCardProps {
  id: string;
  userName: string;
  userAvatar: string;
  location: string;
  rating: number;
  date: string;
  stayDuration: string;
  reviewText: string;
  isExpanded?: boolean;
  onToggleExpand?: (id: string) => void;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  userName,
  userAvatar,
  location,
  rating,
  date,
  stayDuration,
  reviewText,
  isExpanded = false,
  onToggleExpand,
  className = "",
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  
  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggleExpand?.(id);
  };

  const truncatedText = reviewText.length > 200 
    ? reviewText.substring(0, 200) + "..." 
    : reviewText;

  const shouldShowToggle = reviewText.length > 200;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* User Info */}
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{userName}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>

      {/* Rating and Date */}
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < rating ? "fill-foreground text-foreground" : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">{date}</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">{stayDuration}</span>
      </div>

      {/* Review Text */}
      <div className="text-foreground">
        <p className="leading-relaxed">
          {expanded ? reviewText : truncatedText}
        </p>
        
        {shouldShowToggle && (
          <Button
            variant="ghost"
            onClick={handleToggle}
            className="p-0 h-auto mt-2 text-foreground font-medium underline hover:no-underline"
          >
            {expanded ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
    </div>
  );
};