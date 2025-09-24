import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ChevronUp } from "lucide-react";
import { GuestSelector } from "./GuestSelector";

interface BookingWidgetProps {
  price: number;
  originalPrice?: number;
  nights: number;
  rating: number;
  reviewCount: number;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  onReserve?: () => void;
  className?: string;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  price,
  originalPrice,
  nights,
  rating,
  reviewCount,
  checkIn = "12/19/2025",
  checkOut = "12/21/2025",
  guests = 1,
  onReserve,
  className = "",
}) => {
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  
  const serviceFee = Math.round(price * nights * 0.14);
  const taxes = Math.round(price * nights * 0.12);
  const total = price * nights + serviceFee + taxes;

  return (
    <Card className={`p-6 sticky top-24 ${className}`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
            <span className="text-2xl font-semibold">${price}</span>
            <span className="text-muted-foreground">for {nights} nights</span>
          </div>
          <Badge variant="secondary" className="bg-pink-50 border-pink-200 text-pink-800">
            💰 Prices include all fees
          </Badge>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">★ {rating}</span>
          <span className="text-muted-foreground">· {reviewCount} reviews</span>
        </div>

        {/* Booking Form */}
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="p-3 border-r">
              <div className="text-xs font-medium text-muted-foreground uppercase">
                Check-in
              </div>
              <Input
                value={checkIn}
                className="border-0 p-0 text-sm font-medium bg-transparent focus-visible:ring-0"
                readOnly
              />
            </div>
            <div className="p-3">
              <div className="text-xs font-medium text-muted-foreground uppercase">
                Checkout
              </div>
              <Input
                value={checkOut}
                className="border-0 p-0 text-sm font-medium bg-transparent focus-visible:ring-0"
                readOnly
              />
            </div>
          </div>
          
          <div className="p-3 border-t relative">
            <Button
              variant="ghost"
              onClick={() => setShowGuestSelector(!showGuestSelector)}
              className="w-full justify-between p-0 h-auto text-left"
            >
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase">
                  Guests
                </div>
                <div className="text-sm font-medium">
                  {guests} guest{guests !== 1 ? 's' : ''}
                </div>
              </div>
              <ChevronUp
                className={`w-4 h-4 transition-transform ${
                  showGuestSelector ? "rotate-180" : ""
                }`}
              />
            </Button>
            
            {showGuestSelector && (
              <div className="absolute top-full left-0 right-0 z-10 mt-2">
                <GuestSelector
                  adults={guests}
                  onGuestChange={() => {}}
                />
              </div>
            )}
          </div>
        </div>

        {/* Reserve Button */}
        <Button
          onClick={onReserve}
          className="w-full bg-gradient-primary text-white font-semibold py-3"
          size="lg"
        >
          Reserve
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          You won't be charged yet
        </p>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t">
          <div className="flex justify-between">
            <span className="underline">${price} x {nights} nights</span>
            <span>${price * nights}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Taxes</span>
            <span>${taxes}</span>
          </div>
          <div className="flex justify-between font-semibold pt-3 border-t">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};