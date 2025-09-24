import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavigationTab {
  id: string;
  label: string;
  icon: string;
  isNew?: boolean;
  isActive?: boolean;
}

interface NavigationTabsProps {
  tabs: NavigationTab[];
  onTabClick?: (tabId: string) => void;
  className?: string;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  tabs,
  onTabClick,
  className = "",
}) => {
  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="ghost"
          onClick={() => onTabClick?.(tab.id)}
          className={`flex items-center gap-3 px-0 py-4 h-auto border-b-2 rounded-none transition-colors ${
            tab.isActive
              ? "border-foreground text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="text-lg">{tab.icon}</span>
          <span className="font-medium">{tab.label}</span>
          {tab.isNew && (
            <Badge
              variant="secondary"
              className="bg-primary text-primary-foreground text-xs h-5 px-1.5"
            >
              NEW
            </Badge>
          )}
        </Button>
      ))}
    </nav>
  );
};