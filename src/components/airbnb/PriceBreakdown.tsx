import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PriceBreakdownProps {
  basePrice: number;
  nights: number;
  discount?: {
    label: string;
    amount: number;
  };
  taxes: number;
  total: number;
  currency?: string;
}

export const PriceBreakdown: React.FC<PriceBreakdownProps> = ({
  basePrice,
  nights,
  discount,
  taxes,
  total,
  currency = "USD",
}) => {
  const subtotal = basePrice * nights;

  return (
    <Card className="p-4 space-y-3">
      <h3 className="font-semibold text-gray-900">Price details</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">
            {nights} nights × ${basePrice.toFixed(2)}
          </span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        {discount && (
          <div className="flex justify-between">
            <span className="text-green-600">{discount.label}</span>
            <span className="text-green-600">
              -${Math.abs(discount.amount).toFixed(2)}
            </span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600">Taxes</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
      </div>
      
      <Separator />
      
      <div className="flex justify-between font-semibold text-lg">
        <span>Total {currency}</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </Card>
  );
};