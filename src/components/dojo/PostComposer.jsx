
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageIcon, SendHorizontal } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const PostComposer = ({ onPost }) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      await onPost({ content });
      setContent('');
      toast({
        title: "Success",
        description: "Your post has been published!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to publish your post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <Input
            placeholder="Share your thoughts with the AI Dojo community..."
            className="bg-gray-100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <Button type="button" variant="ghost" size="sm">
              <ImageIcon className="h-4 w-4 mr-2" />
              Add Image
            </Button>
            <Button 
              type="submit" 
              disabled={!content.trim() || isSubmitting}
              className="flex items-center gap-2"
            >
              <SendHorizontal className="h-4 w-4" />
              Post
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostComposer;
