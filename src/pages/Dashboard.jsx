
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { LayoutDashboard, FolderPlus, CheckSquare, Plus, ChevronRight } from 'lucide-react';
import ProjectsList from '../components/dashboard/ProjectsList';
import TasksList from '../components/dashboard/TasksList';
import DashboardStats from '../components/dashboard/DashboardStats';
import NewProjectDialog from '../components/dashboard/NewProjectDialog';
import NewTaskDialog from '../components/dashboard/NewTaskDialog';

const Dashboard = () => {
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false);
  const { toast } = useToast();

  // Shared state for projects and tasks
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", status: "In Progress", progress: 65, dueDate: "2024-04-15", tasks: 12, completedTasks: 8 },
    { id: 2, name: "Mobile App Development", status: "Planning", progress: 25, dueDate: "2024-05-01", tasks: 20, completedTasks: 5 },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: "Design Homepage Mockup", project: "Website Redesign", priority: "High", dueDate: "2024-03-25", completed: false },
    { id: 2, title: "Implement User Authentication", project: "Mobile App Development", priority: "Medium", dueDate: "2024-03-28", completed: true },
    { id: 3, title: "Database Schema Design", project: "Website Redesign", priority: "High", dueDate: "2024-03-20", completed: false },
    { id: 4, title: "API Documentation", project: "Mobile App Development", priority: "Medium", dueDate: "2024-03-22", completed: true },
  ]);

  const handleNewProject = (newProject) => {
    const projectId = projects.length + 1;
    const project = {
      id: projectId,
      ...newProject,
      progress: 0,
      tasks: 0,
      completedTasks: 0,
    };
    setProjects([...projects, project]);
    setIsNewProjectDialogOpen(false);
    toast({
      title: "Success",
      description: "Project created successfully",
    });
  };

  const handleNewTask = (newTask) => {
    const taskId = tasks.length + 1;
    const task = {
      id: taskId,
      ...newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    
    // Update project task count
    const updatedProjects = projects.map(project => {
      if (project.name === newTask.project) {
        return {
          ...project,
          tasks: project.tasks + 1,
        };
      }
      return project;
    });
    setProjects(updatedProjects);
    
    setIsNewTaskDialogOpen(false);
    toast({
      title: "Success",
      description: "Task created successfully",
    });
  };

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);

    // Update project completion stats
    const taskToUpdate = tasks.find(t => t.id === taskId);
    if (taskToUpdate) {
      const updatedProjects = projects.map(project => {
        if (project.name === taskToUpdate.project) {
          const newCompletedTasks = project.completedTasks + (taskToUpdate.completed ? -1 : 1);
          const progress = Math.round((newCompletedTasks / project.tasks) * 100);
          return {
            ...project,
            completedTasks: newCompletedTasks,
            progress,
          };
        }
        return project;
      });
      setProjects(updatedProjects);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Dashboard - ZaidiStudio</title>
        <meta name="description" content="Manage your projects and tasks with ZaidiStudio's client dashboard." />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button
              onClick={() => setIsNewProjectDialogOpen(true)}
              className="flex items-center gap-2"
            >
              <FolderPlus className="h-4 w-4" />
              New Project
            </Button>
            <Button
              onClick={() => setIsNewTaskDialogOpen(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
          </div>
        </div>

        <DashboardStats projects={projects} tasks={tasks} />

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderPlus className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4" />
              Tasks
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Projects
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      View All <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ProjectsList projects={projects} limit={5} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Upcoming Tasks
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      View All <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TasksList tasks={tasks} onTaskComplete={handleTaskComplete} limit={5} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <ProjectsList projects={projects} />
          </TabsContent>
          <TabsContent value="tasks">
            <TasksList tasks={tasks} onTaskComplete={handleTaskComplete} />
          </TabsContent>
        </Tabs>

        <NewProjectDialog 
          open={isNewProjectDialogOpen} 
          onOpenChange={setIsNewProjectDialogOpen}
          onSuccess={handleNewProject}
        />
        <NewTaskDialog 
          open={isNewTaskDialogOpen} 
          onOpenChange={setIsNewTaskDialogOpen}
          onSuccess={handleNewTask}
          projects={projects.map(p => p.name)}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
