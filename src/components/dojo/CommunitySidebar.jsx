
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CommunitySidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <img 
          src="/lovable-uploads/7522d257-4aa3-4764-b45a-ad4061d8bb32.png"
          alt="Community Banner"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">AI Community Builders</h2>
          <p className="text-sm text-gray-600 mt-1">skool.com/ai-community-builders</p>
          <p className="mt-4 text-sm text-gray-700">
            We help online entrepreneurs launch scalable products using AI-powered & automated Skool communities.
          </p>
          <div className="mt-4 space-y-2">
            <Button variant="outline" className="w-full justify-start">
              🚀 Start Here
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📅 Book an Onboarding Call
            </Button>
            <Button variant="outline" className="w-full justify-start">
              🔓 Unlock More Resources
            </Button>
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-semibold">349</div>
                <div className="text-sm text-gray-500">Members</div>
              </div>
              <div>
                <div className="text-xl font-semibold">7</div>
                <div className="text-sm text-gray-500">Online</div>
              </div>
              <div>
                <div className="text-xl font-semibold">2</div>
                <div className="text-sm text-gray-500">Admins</div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex -space-x-2">
            {[...Array(7)].map((_, i) => (
              <Avatar key={i} className="border-2 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar;
