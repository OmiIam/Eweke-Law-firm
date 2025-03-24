
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { BlogPostType } from '../../types/blog';

interface PostHeaderProps {
  post: BlogPostType;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <div className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/90"></div>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-light/80 mb-6 hover:text-highlight transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to all articles</span>
          </Link>
          
          <div className="inline-block bg-highlight text-dark text-sm font-medium px-3 py-1 rounded-full mb-4">
            {post.category}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-light/80 gap-6 mb-4">
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
