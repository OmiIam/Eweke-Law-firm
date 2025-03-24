
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { BlogPostType } from '../../types/blog';
import { getAllCategories, getMockBlogPosts } from '../../services/blogService';
import { Button } from '@/components/ui/button';

interface BlogSidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const BlogSidebar = ({ selectedCategory, onCategoryChange }: BlogSidebarProps) => {
  const categories = getAllCategories();
  const recentPosts = getMockBlogPosts().slice(0, 3);
  
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold mb-4 relative font-serif">
          <span className="relative z-10">Categories</span>
          <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-highlight z-0"></span>
        </h3>
        
        <div className="space-y-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className="w-full justify-start text-left"
            onClick={() => onCategoryChange(null)}
          >
            All Categories
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="w-full justify-start text-left"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Recent Posts */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold mb-4 relative font-serif">
          <span className="relative z-10">Recent Articles</span>
          <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-highlight z-0"></span>
        </h3>
        
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <div className="shrink-0 w-24 h-16 rounded overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center text-bluegray text-xs mb-1">
                  <Calendar size={12} className="mr-1" />
                  <span>{post.publishDate}</span>
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="block text-primary font-medium line-clamp-2 hover:text-info transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-info font-medium hover:text-info/80 group"
          >
            <span>View all articles</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Subscribe Box */}
      <div className="bg-accent rounded-lg overflow-hidden shadow-sm p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
        <p className="text-light/80 mb-4">Get the latest legal insights and updates delivered to your inbox.</p>
        
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
          <Button 
            type="submit"
            variant="highlight"
            className="w-full"
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BlogSidebar;
