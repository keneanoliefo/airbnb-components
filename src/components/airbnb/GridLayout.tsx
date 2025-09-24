import React from "react";

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
}

export const GridLayout: React.FC<GridLayoutProps> = ({
  children,
  columns = 3,
  gap = "6",
  className = "",
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};