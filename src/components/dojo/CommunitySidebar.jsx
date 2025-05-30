
import React from 'react';
import { Button } from "@/components/ui/button";
import AnimatedTooltip from "./AnimatedTooltip";

const members = [
  {
    id: 1,
    name: "Vince",
    image: "/vince.png",
    designation: "Admin"
  },
  {
    id: 2,
    name: "Sana",
    image: "/sana.png",
    designation: "Member"
  },
  {
    id: 3,
    name: "Juma",
    image: "/juma.png",
    designation: "Instructor"
  },
  {
    id: 4,
    name: "Mercy",
    image: "/mercy.png",
    designation: "Member"
  },
  {
    id: 5,
    name: "Zaidi",
    image: "/logos/ZaidiStudio_icon.png",
    designation: "Bot"
  }
];

const CommunitySidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <img 
          src="/logos/ZaidiStudio_white_logo.png"
          alt="ZaidiStudio Dojo Banner"
          className="w-full h-32 object-contain bg-gray-50"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">ZaidiStudio Dojo</h2>
          <p className="mt-4 text-sm text-gray-700">
            Welcome to the ZaidiStudio Dojo community! Connect with AI builders, access exclusive templates, get tech support, and join our weekly calls and build-togethers.
          </p>
          <div className="mt-4 space-y-2">
            <Button variant="outline" className="w-full justify-start">
              🤝 Join Weekly Call
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📂 Access Templates
            </Button>
            <Button variant="outline" className="w-full justify-start">
              💬 Get Tech Support
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
            {/*
              Community members avatars with tooltip
            */}
            <AnimatedTooltip items={members} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar;
