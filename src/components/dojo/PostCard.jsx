
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, Bookmark, Pin } from 'lucide-react';

const PostCard = ({ post, onLike, onShare, onBookmark }) => (
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
              onClick={() => onLike(post.id)}
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
              onClick={() => onShare(post.id)}
            >
              <Share2 className="mr-1 h-4 w-4" />
              {post.shares}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${post.isBookmarked ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-500`}
              onClick={() => onBookmark(post.id)}
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

export default PostCard;
