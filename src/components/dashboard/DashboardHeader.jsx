
import React from 'react';
import { Button } from "@/components/ui/button";
import { FolderPlus, Plus } from 'lucide-react';

const DashboardHeader = ({ onNewProject, onNewTask }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your projects.</p>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <Button
          onClick={onNewProject}
          className="flex items-center gap-2"
        >
          <FolderPlus className="h-4 w-4" />
          New Project
        </Button>
        <Button
          onClick={onNewTask}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
