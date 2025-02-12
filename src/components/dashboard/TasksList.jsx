
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Trash2, Edit2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const TasksList = ({ tasks, onTaskComplete, onDeleteTask, onEditTask, limit }) => {
  const { toast } = useToast();
  const displayTasks = limit ? tasks.slice(0, limit) : tasks;

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDelete = (taskId) => {
    onDeleteTask(taskId);
    toast({
      title: "Task deleted",
      description: "The task has been deleted successfully",
    });
  };

  return (
    <div className="space-y-3">
      {displayTasks.map((task) => (
        <Card key={task.id} className={`hover:shadow-md transition-shadow ${task.completed ? 'opacity-75' : ''}`}>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Checkbox 
                checked={task.completed}
                onCheckedChange={() => onTaskComplete(task.id)}
                className="mt-1"
              />
              <div className="flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                      {task.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{task.project}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEditTask(task)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(task.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Due {new Date(task.dueDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      {displayTasks.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No tasks found. Create a new task to get started.
        </div>
      )}
    </div>
  );
};

export default TasksList;
