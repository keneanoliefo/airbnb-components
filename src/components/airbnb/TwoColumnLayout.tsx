import React from "react";

interface TwoColumnLayoutProps {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  leftWidth?: "1/2" | "2/3" | "3/4";
  className?: string;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftColumn,
  rightColumn,
  leftWidth = "2/3",
  className = "",
}) => {
  const widthClasses = {
    "1/2": "lg:w-1/2",
    "2/3": "lg:w-2/3", 
    "3/4": "lg:w-3/4",
  };

  const rightWidthClasses = {
    "1/2": "lg:w-1/2",
    "2/3": "lg:w-1/3",
    "3/4": "lg:w-1/4",
  };

  return (
    <div className={`flex flex-col lg:flex-row gap-6 ${className}`}>
      <div className={`${widthClasses[leftWidth]}`}>
        {leftColumn}
      </div>
      <div className={`${rightWidthClasses[leftWidth]} lg:sticky lg:top-24 lg:self-start`}>
        {rightColumn}
      </div>
    </div>
  );
};