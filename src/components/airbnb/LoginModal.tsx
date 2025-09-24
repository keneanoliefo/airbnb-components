import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SocialLoginButton } from "./SocialLoginButton";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: (phone: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    if (phoneNumber.trim()) {
      onLogin?.(`${countryCode}${phoneNumber}`);
      onClose();
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0">
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-0">
          <DialogTitle className="text-lg font-semibold">
            Log in or sign up to book
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="p-6 space-y-4">
          {/* Country Code and Phone Number */}
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Country code
              </label>
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">United States (+1)</SelectItem>
                  <SelectItem value="+44">United Kingdom (+44)</SelectItem>
                  <SelectItem value="+33">France (+33)</SelectItem>
                  <SelectItem value="+49">Germany (+49)</SelectItem>
                  <SelectItem value="+81">Japan (+81)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Phone number
              </label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                className="h-12"
              />
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs text-gray-600">
            We'll call or text you to confirm your number. Standard message and data rates apply.{" "}
            <button className="underline hover:no-underline">
              Privacy Policy
            </button>
          </p>

          {/* Continue Button */}
          <Button 
            onClick={handleContinue}
            disabled={!phoneNumber.trim()}
            className="w-full h-12"
          >
            Continue
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="space-y-3">
            <SocialLoginButton
              provider="facebook"
              onClick={() => handleSocialLogin("facebook")}
            />
            <SocialLoginButton
              provider="google"
              onClick={() => handleSocialLogin("google")}
            />
            <SocialLoginButton
              provider="apple"
              onClick={() => handleSocialLogin("apple")}
            />
            <SocialLoginButton
              provider="email"
              onClick={() => handleSocialLogin("email")}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};