
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardContent from '../components/dashboard/DashboardContent';
import NewProjectDialog from '../components/dashboard/NewProjectDialog';
import EditProjectDialog from '../components/dashboard/EditProjectDialog';
import NewTaskDialog from '../components/dashboard/NewTaskDialog';
import EditTaskDialog from '../components/dashboard/EditTaskDialog';

const Dashboard = () => {
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const [isEditProjectDialogOpen, setIsEditProjectDialogOpen] = useState(false);
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false);
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const { toast } = useToast();

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
    toast({
      title: "Success",
      description: "Project created successfully",
    });
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setIsEditProjectDialogOpen(true);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
    toast({
      title: "Success",
      description: "Project updated successfully",
    });
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(p => p.id !== projectId));
    setTasks(tasks.filter(t => t.project !== projects.find(p => p.id === projectId)?.name));
    toast({
      title: "Success",
      description: "Project deleted successfully",
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
    
    toast({
      title: "Success",
      description: "Task created successfully",
    });
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditTaskDialogOpen(true);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    toast({
      title: "Success",
      description: "Task updated successfully",
    });
  };

  const handleDeleteTask = (taskId) => {
    const taskToDelete = tasks.find(t => t.id === taskId);
    setTasks(tasks.filter(t => t.id !== taskId));
    
    if (taskToDelete) {
      const updatedProjects = projects.map(project => {
        if (project.name === taskToDelete.project) {
          return {
            ...project,
            tasks: project.tasks - 1,
            completedTasks: taskToDelete.completed ? project.completedTasks - 1 : project.completedTasks,
          };
        }
        return project;
      });
      setProjects(updatedProjects);
    }
    
    toast({
      title: "Success",
      description: "Task deleted successfully",
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
        <DashboardHeader 
          onNewProject={() => setIsNewProjectDialogOpen(true)}
          onNewTask={() => setIsNewTaskDialogOpen(true)}
        />
        
        <DashboardContent 
          projects={projects}
          tasks={tasks}
          onTaskComplete={handleTaskComplete}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
          onDeleteProject={handleDeleteProject}
          onEditProject={handleEditProject}
        />

        <NewProjectDialog 
          open={isNewProjectDialogOpen} 
          onOpenChange={setIsNewProjectDialogOpen}
          onSuccess={handleNewProject}
        />
        
        <EditProjectDialog 
          open={isEditProjectDialogOpen}
          onOpenChange={setIsEditProjectDialogOpen}
          project={selectedProject}
          onSuccess={handleUpdateProject}
        />

        <NewTaskDialog 
          open={isNewTaskDialogOpen} 
          onOpenChange={setIsNewTaskDialogOpen}
          onSuccess={handleNewTask}
          projects={projects.map(p => p.name)}
        />

        <EditTaskDialog 
          open={isEditTaskDialogOpen}
          onOpenChange={setIsEditTaskDialogOpen}
          task={selectedTask}
          onSuccess={handleUpdateTask}
          projects={projects.map(p => p.name)}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
