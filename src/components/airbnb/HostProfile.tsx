import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Globe, Shield } from "lucide-react";

interface HostProfileProps {
  name: string;
  avatar: string;
  reviewCount: number;
  rating: number;
  monthsHosting: number;
  responseRate: string;
  responseTime: string;
  location: string;
  isVerified?: boolean;
  onMessageHost?: () => void;
  className?: string;
}

export const HostProfile: React.FC<HostProfileProps> = ({
  name,
  avatar,
  reviewCount,
  rating,
  monthsHosting,
  responseRate,
  responseTime,
  location,
  isVerified = false,
  onMessageHost,
  className = "",
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-2xl font-semibold">Meet your host</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Host Info Card */}
        <Card className="p-8 text-center lg:w-80">
          <div className="relative mb-6">
            <Avatar className="w-24 h-24 mx-auto">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            {isVerified && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground rounded-full p-2">
                  <Shield className="w-4 h-4" />
                </Badge>
              </div>
            )}
          </div>
          
          <h3 className="text-3xl font-semibold mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-6">Host</p>
          
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-semibold">{reviewCount}</div>
              <div className="text-muted-foreground text-sm">Reviews</div>
            </div>
            
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-semibold">{rating}</span>
              <Star className="w-5 h-5 fill-foreground" />
              <div className="text-muted-foreground text-sm ml-1">Rating</div>
            </div>
            
            <div>
              <div className="text-2xl font-semibold">{monthsHosting}</div>
              <div className="text-muted-foreground text-sm">Months hosting</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground text-sm">
            <Globe className="w-4 h-4" />
            <span>Lives in {location}</span>
          </div>
        </Card>

        {/* Host Details */}
        <div className="flex-1 space-y-6">
          <div>
            <h4 className="font-semibold mb-4">Host details</h4>
            <div className="space-y-2">
              <div>Response rate: {responseRate}</div>
              <div>{responseTime}</div>
            </div>
          </div>
          
          <Button
            onClick={onMessageHost}
            variant="outline"
            className="w-full lg:w-auto"
          >
            Message host
          </Button>
          
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <div className="text-primary text-lg">🏠</div>
            <div className="text-sm text-muted-foreground">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};