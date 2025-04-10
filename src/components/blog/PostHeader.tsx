
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPostType } from '../../types/blog';
import { Badge } from '@/components/ui/badge';

interface PostHeaderProps {
  post: BlogPostType;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <div className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/65 to-primary/80"></div>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>
      
      {/* Light pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-light/90 mb-6 hover:text-highlight transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to all articles</span>
          </Link>
          
          <Badge className="bg-highlight text-dark hover:bg-highlight/90 px-3 py-1.5 text-sm mb-4 inline-flex items-center">
            <Tag size={14} className="mr-1" />
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 leading-tight animate-fade-in">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-light/90 gap-6 mb-4 animate-fade-in delay-100">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
