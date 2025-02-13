
import React from 'react';
import { Button } from "@/components/ui/button";

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { icon: "🔍", label: "All" },
    { icon: "💻", label: "AI Development" },
    { icon: "🤖", label: "AI Tools" },
    { icon: "🎯", label: "Project Showcase" },
    { icon: "🤝", label: "Collaborations" },
    { icon: "💡", label: "Ideas & Insights" },
  ];

  return (
    <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category.label}
          variant={activeCategory === category.label ? "secondary" : "ghost"}
          size="sm"
          className="whitespace-nowrap"
          onClick={() => onCategoryChange(category.label)}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;
