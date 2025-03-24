
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPostType } from '../../types/blog';

interface RelatedPostsProps {
  posts: BlogPostType[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 font-serif">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Link>
            
            <div className="p-5">
              <div className="inline-block bg-highlight/20 text-dark text-xs font-medium px-2 py-1 rounded-full mb-3">
                {post.category}
              </div>
              
              <Link to={`/blog/${post.slug}`} className="block">
                <h3 className="text-lg font-bold mb-2 hover:text-info transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-bluegray text-sm mb-3 line-clamp-2">{post.excerpt}</p>
              
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center text-info text-sm font-medium hover:text-info/80 group"
              >
                <span>Read more</span>
                <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
