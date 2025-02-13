
import React from 'react';
import { Button } from "@/components/ui/button";

const CategoryTabs = () => {
  const categories = [
    { icon: "🔍", label: "All" },
    { icon: "💬", label: "General Discussion" },
    { icon: "🏆", label: "Share Your Wins" },
    { icon: "👋", label: "Introduce Yourself" },
    { icon: "💡", label: "Ideas" },
  ];

  return (
    <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
      {categories.map((category, index) => (
        <Button
          key={index}
          variant={index === 0 ? "secondary" : "ghost"}
          size="sm"
          className="whitespace-nowrap"
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </Button>
      ))}
      <Button variant="ghost" size="sm">
        More...
      </Button>
    </div>
  );
};

export default CategoryTabs;
