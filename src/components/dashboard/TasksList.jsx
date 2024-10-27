import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from 'lucide-react';

const TasksList = ({ limit }) => {
  const tasks = [
    {
      id: 1,
      title: "Design Homepage Mockup",
      project: "Website Redesign",
      priority: "High",
      dueDate: "2024-03-25",
      completed: false,
    },
    {
      id: 2,
      title: "Implement User Authentication",
      project: "Mobile App Development",
      priority: "Medium",
      dueDate: "2024-03-28",
      completed: true,
    },
    // Add more sample tasks as needed
  ];

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

  return (
    <div className="space-y-3">
      {displayTasks.map((task) => (
        <Card key={task.id} className={`hover:shadow-md transition-shadow ${task.completed ? 'opacity-75' : ''}`}>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Checkbox 
                checked={task.completed}
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
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
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
    </div>
  );
};

export default TasksList;