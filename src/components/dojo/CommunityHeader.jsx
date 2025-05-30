
import React from 'react';
import { Input } from "@/components/ui/input";
import { Bell, MessageCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const CommunityHeader = () => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logos/ZaidiStudio_white_logo.png" alt="Dojo Studio" className="h-8 w-8" />
            <h1 className="text-xl font-semibold">Dojo Studio</h1>
          </div>
          <div className="flex flex-1 justify-center px-6">
            <div className="w-full max-w-lg">
              <Input
                type="search"
                placeholder="Search"
                className="w-full bg-gray-100"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                99+
              </span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
