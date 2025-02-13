import React, { useState } from 'react';
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
import { Heart, MessageCircle, Share2, Bookmark, Pin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const PostCard = ({ post }) => (
  <Card className={`mb-4 ${post.pinned ? 'border-blue-200 bg-blue-50' : ''}`}>
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
            {post.pinned && (
              <span className="flex items-center text-sm text-blue-600">
                <Pin className="h-3 w-3 mr-1" />
                Pinned
              </span>
            )}
          </div>
          <p className="mt-2 text-gray-900 whitespace-pre-wrap">{post.content}</p>
          <div className="mt-3 flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${post.isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
              onClick={() => handleLike(post.id)}
            >
              <Heart className={`mr-1 h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
              <MessageCircle className="mr-1 h-4 w-4" />
              {post.comments}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-green-500"
              onClick={() => handleShare(post.id)}
            >
              <Share2 className="mr-1 h-4 w-4" />
              {post.shares}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${post.isBookmarked ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-500`}
              onClick={() => handleBookmark(post.id)}
            >
              <Bookmark className={`mr-1 h-4 w-4 ${post.isBookmarked ? 'fill-current' : ''}`} />
              {post.bookmarks}
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const AIDojo = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState([
    {
      id: 1,
      pinned: true,
      author: {
        name: "Dr. Sarah Chen",
        username: "ai_researcher",
        avatar: "/placeholder.svg"
      },
      content: "🎓 Welcome to AI Dojo! This week we're focusing on Large Language Models and their applications in business automation. Drop your questions below, and don't forget to join our live workshop on Thursday!",
      timeAgo: "2h ago",
      likes: 42,
      comments: 15,
      shares: 8,
      bookmarks: 23,
      category: "AI Development",
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      author: {
        name: "Mike Zhang",
        username: "mikeai",
        avatar: "/placeholder.svg"
      },
      content: "Just deployed my first AI-powered chatbot using the techniques from last week's workshop. The response accuracy is impressive! Happy to share my experience with anyone interested. #AIImplementation",
      timeAgo: "4h ago",
      likes: 28,
      comments: 7,
      shares: 3,
      bookmarks: 12,
      category: "Project Showcase",
      isLiked: false,
      isBookmarked: false
    }
  ]);
  const { toast } = useToast();

  const handleNewPost = async (postData) => {
    const newPost = {
      id: posts.length + 1,
      author: {
        name: "Current User",
        username: "user",
        avatar: "/placeholder.svg"
      },
      content: postData.content,
      timeAgo: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
      bookmarks: 0,
      category: activeCategory,
      isLiked: false,
      isBookmarked: false
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          bookmarks: post.isBookmarked ? post.bookmarks - 1 : post.bookmarks + 1,
          isBookmarked: !post.isBookmarked
        };
      }
      return post;
    }));
  };

  const handleShare = (postId) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      navigator.clipboard.writeText(post.content).then(() => {
        toast({
          title: "Link copied!",
          description: "The post link has been copied to your clipboard.",
        });
      });
    }
  };

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Helmet>
        <title>AI Dojo - Community</title>
        <meta name="description" content="Join the AI Dojo community to learn and discuss artificial intelligence, machine learning, and automation." />
      </Helmet>
      
      <CommunityHeader />
      <DojoNavigation />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PostComposer onPost={handleNewPost} />
            <CategoryTabs 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            <ScrollArea className="h-[calc(100vh-300px)]">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
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
