
import React from 'react';
import { Helmet } from 'react-helmet';
import CommunityHeader from '../components/dojo/CommunityHeader';
import DojoNavigation from '../components/dojo/DojoNavigation';
import PostComposer from '../components/dojo/PostComposer';
import CategoryTabs from '../components/dojo/CategoryTabs';
import CommunitySidebar from '../components/dojo/CommunitySidebar';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

const PostCard = ({ post }) => (
  <Card className="mb-4">
    <CardContent className="p-4">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{post.author.name}</span>
            <span className="text-sm text-gray-500">@{post.author.username}</span>
            <span className="text-sm text-gray-500">· {post.timeAgo}</span>
          </div>
          <p className="mt-2 text-gray-900">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="" className="mt-3 rounded-lg w-full" />
          )}
          <div className="mt-3 flex items-center gap-6">
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
              <Heart className="mr-1 h-4 w-4" />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
              <MessageCircle className="mr-1 h-4 w-4" />
              {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-500">
              <Share2 className="mr-1 h-4 w-4" />
              {post.shares}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-yellow-500">
              <Bookmark className="mr-1 h-4 w-4" />
              {post.bookmarks}
            </Button>
          </div>
          {post.replies && (
            <div className="mt-4 space-y-4">
              {post.replies.map((reply, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                    <AvatarFallback>{reply.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{reply.author.name}</span>
                      <span className="text-sm text-gray-500">@{reply.author.username}</span>
                      <span className="text-sm text-gray-500">· {reply.timeAgo}</span>
                    </div>
                    <p className="mt-1 text-gray-900">{reply.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

const AIDojo = () => {
  const posts = [
    {
      pinned: true,
      author: {
        name: "James Killick",
        username: "jameskillick",
        avatar: "/placeholder.svg"
      },
      content: "For the rest of the quarter, I'm going to be approaching this differently! Last year we did a few live calls and it's hard to cater to all the time zones. Instead, I want you to submit your questions below and I will answer them all!",
      timeAgo: "2d ago",
      likes: 11,
      comments: 5,
      shares: 2,
      bookmarks: 3,
      category: "General Discussion"
    },
    {
      author: {
        name: "David Wilson",
        username: "davidw",
        avatar: "/placeholder.svg"
      },
      content: "New tutorial alert! 🚀 I've just published a comprehensive guide on implementing attention mechanisms in transformers. Check it out and let me know your thoughts!",
      timeAgo: "4h",
      likes: 89,
      comments: 23,
      shares: 34,
      bookmarks: 56,
      replies: [
        {
          author: {
            name: "Maria Garcia",
            username: "mariag",
            avatar: "/placeholder.svg"
          },
          content: "This is exactly what I needed! Your explanations are always so clear.",
          timeAgo: "3h"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Helmet>
        <title>AI Community Builders - AI Dojo</title>
        <meta name="description" content="Join the AI Community Builders to learn and discuss AI-powered business automation." />
      </Helmet>
      
      <CommunityHeader />
      <DojoNavigation />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PostComposer />
            <CategoryTabs />
            <ScrollArea className="h-[calc(100vh-300px)]">
              {posts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </ScrollArea>
          </div>
          <div className="hidden lg:block">
            <CommunitySidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIDojo;
