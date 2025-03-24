
import React from 'react';
import { Facebook, Linkedin, Twitter, Copy } from 'lucide-react';
import { BlogPostType } from '../../types/blog';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";

interface SocialShareProps {
  post: BlogPostType;
}

const SocialShare = ({ post }: SocialShareProps) => {
  const url = window.location.href;
  const title = post.title;
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Link copied",
        description: "The article link has been copied to your clipboard.",
      });
    }).catch(err => {
      console.error('Could not copy text: ', err);
      toast({
        title: "Copy failed",
        description: "Failed to copy link to clipboard.",
        variant: "destructive"
      });
    });
  };
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Share this article</h3>
      
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border-[#1DA1F2]/20 text-primary"
          onClick={() => window.open(shareLinks.twitter, '_blank')}
        >
          <Twitter size={16} className="mr-2" />
          <span>Twitter</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="bg-[#4267B2]/10 hover:bg-[#4267B2]/20 border-[#4267B2]/20 text-primary"
          onClick={() => window.open(shareLinks.facebook, '_blank')}
        >
          <Facebook size={16} className="mr-2" />
          <span>Facebook</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border-[#0077B5]/20 text-primary"
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
        >
          <Linkedin size={16} className="mr-2" />
          <span>LinkedIn</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-100 hover:bg-gray-200 text-primary"
          onClick={copyToClipboard}
        >
          <Copy size={16} className="mr-2" />
          <span>Copy Link</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
