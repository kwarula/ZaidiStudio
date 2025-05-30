
import React, { useState, useEffect } from 'react';
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
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { posts, handleNewPost, handleLike, handleBookmark, handleShare } = usePostsManager();

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
