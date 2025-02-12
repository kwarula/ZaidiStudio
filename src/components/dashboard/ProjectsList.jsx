
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FolderOpen, Clock, Trash2, Edit2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ProjectsList = ({ projects, onDeleteProject, onEditProject, limit }) => {
  const { toast } = useToast();
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

  const handleDelete = (projectId) => {
    onDeleteProject(projectId);
    toast({
      title: "Project deleted",
      description: "The project has been deleted successfully",
    });
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
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEditProject(project)}
                  className="h-8 w-8 p-0"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(project.id)}
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              Due {new Date(project.dueDate).toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      ))}
      {displayProjects.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No projects found. Create a new project to get started.
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
