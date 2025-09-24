import React from "react";
import airbnbSymbol from "@/assets/airbnb-logo-symbol.png";
import airbnbFull from "@/assets/airbnb-logo-full.png";

interface LogoProps {
  variant?: "symbol" | "full";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "symbol",
  size = "md",
  className = "",
  onClick,
}) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
    xl: "h-12",
  };

  const logoSrc = variant === "full" ? airbnbFull : airbnbSymbol;
  const alt = variant === "full" ? "Airbnb" : "Airbnb Logo";

  return (
    <div 
      className={`flex items-center ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      <img
        src={logoSrc}
        alt={alt}
        className={`${sizeClasses[size]} w-auto`}
      />
    </div>
  );
};