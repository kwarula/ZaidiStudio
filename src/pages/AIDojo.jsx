
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CommunityHeader from '../components/dojo/CommunityHeader';
import DojoNavigation from '../components/dojo/DojoNavigation';
import PostComposer from '../components/dojo/PostComposer';
import CategoryTabs from '../components/dojo/CategoryTabs';
import CommunitySidebar from '../components/dojo/CommunitySidebar';
import PostCard from '../components/dojo/PostCard';
import { usePostsManager } from '../hooks/usePostsManager';
import { ScrollArea } from "@/components/ui/scroll-area";

const AIDojo = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { posts, handleNewPost, handleLike, handleBookmark, handleShare } = usePostsManager();

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
            <PostComposer onPost={(content) => handleNewPost({ ...content, category: activeCategory })} />
            <CategoryTabs 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            <ScrollArea className="h-[calc(100vh-300px)]">
              {filteredPosts.map((post) => (
                <PostCard 
                  key={post.id} 
                  post={post}
                  onLike={handleLike}
                  onShare={handleShare}
                  onBookmark={handleBookmark}
                />
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
