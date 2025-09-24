import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

interface SearchSuggestion {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

interface SearchSuggestionsProps {
  suggestions: SearchSuggestion[];
  onSuggestionClick?: (suggestion: SearchSuggestion) => void;
  className?: string;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
  className = "",
}) => {
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-sm font-medium text-muted-foreground mb-4">
        Suggested destinations
      </h3>
      <div className="space-y-3">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion.id}
            variant="ghost"
            onClick={() => onSuggestionClick?.(suggestion)}
            className="flex items-center gap-4 w-full justify-start h-auto p-3 rounded-lg hover:bg-muted/50"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}
              style={{ backgroundColor: suggestion.iconColor }}
            >
              {suggestion.icon}
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium text-foreground">
                {suggestion.title}
              </div>
              <div className="text-sm text-muted-foreground">
                {suggestion.description}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};