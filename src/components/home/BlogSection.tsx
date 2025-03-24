
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getMockBlogPosts } from '../../services/blogService';

const BlogSection = () => {
  const blogPosts = getMockBlogPosts().slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
          <div data-aos="fade-up" data-aos-duration="600">
            <h2 className="text-3xl font-bold mb-2 font-serif">From Our Legal Blog</h2>
            <p className="text-bluegray text-lg">Expert analysis and legal insights from our attorneys</p>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-info hover:text-info/80 font-medium mt-4 md:mt-0 group transition-all duration-300"
            data-aos="fade-left" 
            data-aos-duration="600" 
            data-aos-delay="100"
          >
            <span>View all articles</span>
            <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-light rounded-lg overflow-hidden shadow-sm border border-bluegray/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up" 
              data-aos-duration="600" 
              data-aos-delay={100 * index}
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-highlight text-dark text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-bluegray text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.publishDate}</span>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold mb-3 hover:text-info transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
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
      </div>
    </section>
  );
};

export default BlogSection;
