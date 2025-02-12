
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FolderPlus, CheckSquare, ChevronRight } from 'lucide-react';
import ProjectsList from './ProjectsList';
import TasksList from './TasksList';
import DashboardStats from './DashboardStats';
import GlobeVisualizer from './GlobeVisualizer';

const DashboardContent = ({ 
  projects, 
  tasks, 
  onTaskComplete, 
  onDeleteTask, 
  onEditTask,
  onDeleteProject,
  onEditProject
}) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <DashboardStats projects={projects} tasks={tasks} />
        </div>
        <div className="lg:col-span-1">
          <GlobeVisualizer />
        </div>
      </div>

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
                <ProjectsList 
                  projects={projects} 
                  onDeleteProject={onDeleteProject}
                  onEditProject={onEditProject}
                  limit={5} 
                />
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
                <TasksList 
                  tasks={tasks} 
                  onTaskComplete={onTaskComplete}
                  onDeleteTask={onDeleteTask}
                  onEditTask={onEditTask}
                  limit={5} 
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="projects">
          <ProjectsList 
            projects={projects}
            onDeleteProject={onDeleteProject}
            onEditProject={onEditProject}
          />
        </TabsContent>
        <TabsContent value="tasks">
          <TasksList 
            tasks={tasks} 
            onTaskComplete={onTaskComplete}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DashboardContent;
