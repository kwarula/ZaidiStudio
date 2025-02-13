
import React, { useState } from 'react';
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
