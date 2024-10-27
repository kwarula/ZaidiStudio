import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FolderOpen, Clock } from 'lucide-react';

const ProjectsList = ({ limit }) => {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      status: "In Progress",
      progress: 65,
      dueDate: "2024-04-15",
      tasks: 12,
      completedTasks: 8,
    },
    {
      id: 2,
      name: "Mobile App Development",
      status: "Planning",
      progress: 25,
      dueDate: "2024-05-01",
      tasks: 20,
      completedTasks: 5,
    },
    // Add more sample projects as needed
  ];

  const displayProjects = limit ? projects.slice(0, limit) : projects;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {displayProjects.map((project) => (
        <Card key={project.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FolderOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {project.completedTasks}/{project.tasks} tasks
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                Due {new Date(project.dueDate).toLocaleDateString()}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;