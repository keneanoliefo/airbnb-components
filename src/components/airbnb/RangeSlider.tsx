import React from "react";
import { Slider } from "@/components/ui/slider";

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  className?: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  className = "",
}) => {
  // Generate histogram data (mock data for visualization)
  const histogramData = Array.from({ length: 50 }, (_, i) => {
    const x = min + (i / 49) * (max - min);
    // Create a bell-curve-like distribution with peak around $300-800
    const peak = 550;
    const spread = 400;
    const height = Math.exp(-Math.pow(x - peak, 2) / (2 * Math.pow(spread, 2)));
    return Math.max(0.1, height * 100 + Math.random() * 20);
  });

  const maxHeight = Math.max(...histogramData);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Histogram */}
      <div className="relative h-20 flex items-end justify-between px-2">
        {histogramData.map((height, index) => (
          <div
            key={index}
            className="bg-primary/60 rounded-t-sm"
            style={{
              width: '2px',
              height: `${(height / maxHeight) * 100}%`,
              minHeight: '2px'
            }}
          />
        ))}
      </div>

      {/* Range Slider */}
      <div className="px-2">
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onValueChange={onChange}
          className="w-full"
        />
      </div>

      {/* Value Display */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Minimum</span>
          <div className="flex items-center">
            <span className="text-sm font-medium">$</span>
            <input
              type="number"
              value={value[0]}
              onChange={(e) => onChange([parseInt(e.target.value) || min, value[1]])}
              className="ml-1 w-16 border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Maximum</span>
          <div className="flex items-center">
            <span className="text-sm font-medium">$</span>
            <input
              type="number"
              value={value[1]}
              onChange={(e) => onChange([value[0], parseInt(e.target.value) || max])}
              className="ml-1 w-20 border rounded px-2 py-1 text-sm"
            />
            <span className="ml-1 text-sm">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};