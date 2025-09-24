import React from "react";
import { 
  Sparkles, 
  CheckCircle, 
  Search, 
  MessageCircle, 
  Map, 
  DollarSign 
} from "lucide-react";

interface RatingCategory {
  id: string;
  name: string;
  rating: number;
  icon: keyof typeof ratingIcons;
}

interface RatingBreakdownProps {
  overallRating: number;
  totalReviews: number;
  categories: RatingCategory[];
  title?: string;
  description?: string;
  className?: string;
}

const ratingIcons = {
  cleanliness: Sparkles,
  accuracy: CheckCircle,
  checkin: Search,
  communication: MessageCircle,
  location: Map,
  value: DollarSign,
};

export const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
  overallRating,
  totalReviews,
  categories,
  title = "Guest favorite",
  description = "This home is a guest favorite based on ratings, reviews, and reliability",
  className = "",
}) => {
  // Generate rating distribution (simplified)
  const ratingDistribution = [
    { stars: 5, count: Math.floor(totalReviews * 0.8) },
    { stars: 4, count: Math.floor(totalReviews * 0.15) },
    { stars: 3, count: Math.floor(totalReviews * 0.03) },
    { stars: 2, count: Math.floor(totalReviews * 0.01) },
    { stars: 1, count: Math.floor(totalReviews * 0.01) },
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header with large rating */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <span className="text-6xl font-light">🏆</span>
          <span className="text-6xl font-light">{overallRating}</span>
          <span className="text-6xl font-light">🏆</span>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {description}
          </p>
        </div>
      </div>

      {/* Rating distribution and categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overall rating distribution */}
        <div>
          <h4 className="font-semibold mb-4">Overall rating</h4>
          <div className="space-y-2">
            {ratingDistribution.map(({ stars, count }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-sm w-2">{stars}</span>
                <div className="flex-1 bg-muted rounded-full h-1">
                  <div 
                    className="bg-foreground h-1 rounded-full"
                    style={{ 
                      width: `${totalReviews > 0 ? (count / totalReviews) * 100 : 0}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category ratings */}
        <div className="space-y-4">
          {categories.map((category) => {
            const IconComponent = ratingIcons[category.icon];
            
            return (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {IconComponent && <IconComponent className="w-5 h-5 text-muted-foreground" />}
                  <span className="text-sm">{category.name}</span>
                </div>
                <span className="font-medium">{category.rating}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};