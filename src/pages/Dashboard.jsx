import React from 'react';
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
import Terminal from '../components/Terminal';

const Dashboard = () => {
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = React.useState(false);
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = React.useState(false);
  const { toast } = useToast();

  const terminalCommands = [
    "Initializing dashboard...",
    "Loading user data...",
    "Fetching recent projects...",
    "Checking task status...",
    "System ready!"
  ];

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

        <div className="grid gap-6 mb-8">
          <Terminal commands={terminalCommands} />
        </div>

        <DashboardStats />

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
                  <ProjectsList limit={5} />
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
                  <TasksList limit={5} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <ProjectsList />
          </TabsContent>
          <TabsContent value="tasks">
            <TasksList />
          </TabsContent>
        </Tabs>

        <NewProjectDialog 
          open={isNewProjectDialogOpen} 
          onOpenChange={setIsNewProjectDialogOpen}
          onSuccess={() => {
            toast({
              title: "Success",
              description: "Project created successfully",
            });
          }}
        />
        <NewTaskDialog 
          open={isNewTaskDialogOpen} 
          onOpenChange={setIsNewTaskDialogOpen}
          onSuccess={() => {
            toast({
              title: "Success",
              description: "Task created successfully",
            });
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;