
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CommunityHeader from '../../components/dojo/CommunityHeader';
import DojoNavigation from '../../components/dojo/DojoNavigation';
import ClassroomSidebar from '../../components/dojo/classroom/ClassroomSidebar';
import LessonCard from '../../components/dojo/classroom/LessonCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Sliders } from 'lucide-react';

const Classroom = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has dojo access
    const dojoAccess = localStorage.getItem('dojoAccess');
    const templateDownloads = localStorage.getItem('templateDownloads');
    
    if (dojoAccess === 'true') {
      setHasAccess(true);
    } else if (templateDownloads) {
      const downloads = JSON.parse(templateDownloads);
      if (downloads.length > 0) {
        setHasAccess(true);
      }
    }
    
    setIsLoading(false);
    
    // If no access, redirect to home page after showing message
    if (!dojoAccess && (!templateDownloads || JSON.parse(templateDownloads || '[]').length === 0)) {
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking access permissions...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">
            You need an invite code or must download at least one template to access the AI Dojo.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/templates'}
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Templates
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Back to Home
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Redirecting to home page in 3 seconds...
          </p>
        </div>
      </div>
    );
  }
  
  const lessons = [
    {
      id: 1,
      title: "Introduction to Large Language Models",
      instructor: "Dr. Sarah Chen",
      thumbnail: "/lovable-uploads/d17cbc8f-cbdc-4fc5-97c8-00d8e587f04e.png",
      duration: "2h 30m",
      modules: 8,
      inProgress: true,
      progress: 60
    },
    {
      id: 2,
      title: "Building AI-Powered Applications",
      instructor: "Mike Zhang",
      thumbnail: "/lovable-uploads/7522d257-4aa3-4764-b45a-ad4061d8bb32.png",
      duration: "3h 45m",
      modules: 12,
      inProgress: true,
      progress: 25
    },
    {
      id: 3,
      title: "Advanced Natural Language Processing",
      instructor: "Dr. Emily Johnson",
      thumbnail: "/placeholder.svg",
      duration: "4h 15m",
      modules: 10,
      inProgress: false
    },
    {
      id: 4,
      title: "AI Ethics and Responsible Development",
      instructor: "Prof. James Wilson",
      thumbnail: "/placeholder.svg",
      duration: "2h 45m",
      modules: 6,
      inProgress: false
    }
  ];

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Helmet>
        <title>AI Dojo - Classroom</title>
        <meta name="description" content="Learn AI development, machine learning, and more with AI Dojo's comprehensive courses." />
      </Helmet>
      
      <CommunityHeader />
      <DojoNavigation />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Learning Journey</h1>
              <p className="text-gray-600">Continue learning or start a new course.</p>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Sliders className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLessons.map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </ScrollArea>
          </div>
          
          <div className="hidden lg:block">
            <ClassroomSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Classroom;
