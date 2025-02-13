
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

export const usePostsManager = () => {
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
      category: postData.category,
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

  return {
    posts,
    handleNewPost,
    handleLike,
    handleBookmark,
    handleShare
  };
};
