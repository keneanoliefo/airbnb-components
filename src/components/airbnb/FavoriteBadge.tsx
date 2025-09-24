import React from "react";
import { Badge } from "@/components/ui/badge";

interface FavoriteBadgeProps {
  text?: string;
  className?: string;
}

export const FavoriteBadge: React.FC<FavoriteBadgeProps> = ({
  text = "Guest favorite",
  className = "",
}) => {
  return (
    <Badge
      variant="secondary"
      className={`bg-white/90 text-gray-800 text-xs font-medium backdrop-blur-sm border-0 ${className}`}
    >
      {text}
    </Badge>
  );
};