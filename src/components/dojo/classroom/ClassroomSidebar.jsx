
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Target, Clock } from 'lucide-react';

const ClassroomSidebar = () => {
  const progress = {
    overallProgress: 45,
    coursesCompleted: 3,
    totalCourses: 12,
    hoursLearned: 24,
    learningStreak: 7,
  };

  const achievements = [
    { icon: "🎯", title: "Fast Learner", description: "Completed 3 courses" },
    { icon: "🔥", title: "On Fire", description: "7-day learning streak" },
    { icon: "⭐", title: "Rising Star", description: "Top 10% of learners" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
          <img src="/logos/ZaidiStudio_white_logo.png" alt="ZaidiStudio Dojo" className="h-10 w-10 mb-2" />
          <h2 className="font-bold text-xl">ZaidiStudio Dojo</h2>
          <p className="text-gray-600 text-sm">
            Welcome to the ZaidiStudio Dojo community! Connect with AI builders, access exclusive templates, get tech support, and join our weekly calls and build-togethers.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="font-semibold text-lg">Your Dojo Progress</h2>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{progress.overallProgress}%</span>
            </div>
            <Progress value={progress.overallProgress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <Target className="h-5 w-5 text-blue-500 mb-1" />
              <div className="text-2xl font-semibold">{progress.coursesCompleted}/{progress.totalCourses}</div>
              <div className="text-xs text-gray-500">Courses Completed</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-green-500 mb-1" />
              <div className="text-2xl font-semibold">{progress.hoursLearned}h</div>
              <div className="text-xs text-gray-500">Hours Learned</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <div>
              <div className="font-semibold">{progress.learningStreak} Day Streak!</div>
              <div className="text-xs text-gray-500">Keep up the momentum</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="font-semibold text-lg mb-4">Dojo Achievements</h2>
          <ScrollArea className="h-[200px]">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <div className="font-semibold">{achievement.title}</div>
                    <div className="text-sm text-gray-500">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassroomSidebar;
