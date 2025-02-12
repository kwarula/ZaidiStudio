
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, AlertCircle, BarChart } from 'lucide-react';

const DashboardStats = ({ projects, tasks }) => {
  const activeProjects = projects.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;
  const overdueTasks = tasks.filter(task => {
    return !task.completed && new Date(task.dueDate) < new Date();
  }).length;

  const stats = [
    {
      title: "Active Projects",
      value: activeProjects.toString(),
      icon: BarChart,
      description: `${activeProjects} ongoing projects`,
      color: "text-blue-600",
    },
    {
      title: "Pending Tasks",
      value: pendingTasks.toString(),
      icon: Clock,
      description: `${pendingTasks} tasks to complete`,
      color: "text-yellow-600",
    },
    {
      title: "Completed Tasks",
      value: completedTasks.toString(),
      icon: CheckCircle,
      description: "Last 30 days",
      color: "text-green-600",
    },
    {
      title: "Overdue Tasks",
      value: overdueTasks.toString(),
      icon: AlertCircle,
      description: "Requires attention",
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
