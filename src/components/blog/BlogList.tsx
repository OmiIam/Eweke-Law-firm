
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPostType } from '../../types/blog';
import { getMockBlogPosts } from '../../services/blogService';

interface BlogListProps {
  currentPage: number;
  selectedCategory: string | null;
  searchQuery: string;
}

const BlogList = ({ currentPage, selectedCategory, searchQuery }: BlogListProps) => {
  // In a real implementation, this would be fetched from your API
  const posts = getMockBlogPosts().filter(post => {
    // Filter by category if selected
    if (selectedCategory && post.category !== selectedCategory) {
      return false;
    }

    // Filter by search query if provided
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  // Pagination
  const postsPerPage = 5;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  
  if (paginatedPosts.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold mb-4">No articles found</h3>
        <p className="text-bluegray mb-8">
          {searchQuery 
            ? `No results found for "${searchQuery}". Try a different search term.` 
            : selectedCategory 
              ? `No articles found in the "${selectedCategory}" category.` 
              : `No articles available.`
          }
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {paginatedPosts.map((post) => (
        <article 
          key={post.id} 
          className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
        >
          <Link to={`/blog/${post.slug}`} className="block">
            <div className="relative h-64 md:h-72 overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex flex-wrap items-center text-white/90 text-sm mb-2 gap-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white line-clamp-2 group-hover:text-highlight transition-colors duration-200">
                  {post.title}
                </h2>
              </div>
            </div>
          </Link>
          
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-3">
                <User size={16} className="mr-2 text-info" />
                <span className="text-sm font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2 text-highlight" />
                <span className="text-sm font-medium text-highlight">{post.category}</span>
              </div>
            </div>
            
            <p className="text-bluegray mb-4 line-clamp-3">{post.excerpt}</p>
            
            <Link 
              to={`/blog/${post.slug}`} 
              className="inline-flex items-center text-info font-medium hover:text-info/80 group"
            >
              <span>Read more</span>
              <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
