
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock, BookOpen } from 'lucide-react';

const LessonCard = ({ lesson }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="aspect-w-16 relative mb-4">
          <img 
            src={lesson.thumbnail} 
            alt={lesson.title}
            className="rounded-lg w-full h-full object-cover"
          />
          {lesson.inProgress && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              Continue Learning
            </div>
          )}
        </div>
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">{lesson.title}</h3>
              <p className="text-sm text-gray-500">{lesson.instructor}</p>
            </div>
            {lesson.inProgress && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                In Progress
              </span>
            )}
          </div>
          
          <div className="flex items-center text-sm text-gray-500 gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {lesson.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {lesson.modules} modules
            </span>
          </div>

          {lesson.inProgress && (
            <div className="space-y-1">
              <Progress value={lesson.progress} className="h-2" />
              <p className="text-xs text-gray-500">{lesson.progress}% Complete</p>
            </div>
          )}

          <Button className="w-full gap-2">
            <PlayCircle className="h-4 w-4" />
            {lesson.inProgress ? 'Continue Learning' : 'Start Learning'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
