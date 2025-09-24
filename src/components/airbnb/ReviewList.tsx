import React, { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  location: string;
  rating: number;
  date: string;
  stayDuration: string;
  reviewText: string;
}

interface ReviewListProps {
  reviews: Review[];
  showAll?: boolean;
  maxVisible?: number;
  onShowAllReviews?: () => void;
  className?: string;
}

export const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  showAll = false,
  maxVisible = 6,
  onShowAllReviews,
  className = "",
}) => {
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());
  
  const visibleReviews = showAll ? reviews : reviews.slice(0, maxVisible);
  const hasMoreReviews = reviews.length > maxVisible;

  const handleToggleExpand = (reviewId: string) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleReviews.map((review) => (
          <ReviewCard
            key={review.id}
            {...review}
            isExpanded={expandedReviews.has(review.id)}
            onToggleExpand={handleToggleExpand}
          />
        ))}
      </div>
      
      {!showAll && hasMoreReviews && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={onShowAllReviews}
            className="px-8"
          >
            Show all {reviews.length} reviews
          </Button>
        </div>
      )}
    </div>
  );
};