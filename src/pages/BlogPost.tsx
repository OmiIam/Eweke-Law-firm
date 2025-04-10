
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import PostContent from '../components/blog/PostContent';
import PostHeader from '../components/blog/PostHeader';
import RelatedPosts from '../components/blog/RelatedPosts';
import SocialShare from '../components/blog/SocialShare';
import { BlogPostType } from '../types/blog';
import { fetchBlogPost, fetchRelatedPosts } from '../services/blogService';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '../hooks/use-mobile';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      
      setIsLoading(true);
      try {
        // In a real implementation, this would fetch from your API
        const postData = await fetchBlogPost(slug);
        setPost(postData);
        
        // Fetch related posts
        if (postData) {
          const related = await fetchRelatedPosts(postData.category, slug);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    window.scrollTo(0, 0);
    loadPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center p-4">
            <div className="w-60 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-40 h-4 bg-gray-300 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-lg py-8 md:py-16 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The post you are looking for doesn't exist or has been removed.</p>
          <Button asChild variant="default">
            <Link to="/blog">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PostHeader post={post} />
        
        <div className="container-lg py-6 md:py-10 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Main content */}
            <article className="w-full lg:w-2/3">
              <PostContent post={post} />
              
              <div className="mt-8 md:mt-10 border-t border-gray-200 pt-6">
                <SocialShare post={post} />
              </div>
            </article>
            
            {/* Sidebar - shown below content on mobile */}
            <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className={`${isMobile ? '' : 'sticky top-24'}`}>
                <div className="bg-light rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-primary">Table of Contents</h3>
                  {post.tableOfContents && post.tableOfContents.length > 0 ? (
                    <ul className="space-y-2">
                      {post.tableOfContents.map((item, index) => (
                        <li key={index}>
                          <a 
                            href={`#${item.id}`} 
                            className="text-info hover:text-info/80 transition-colors"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No table of contents available</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
        
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-8 md:py-16">
            <div className="container-lg px-4 sm:px-6">
              <RelatedPosts posts={relatedPosts} />
            </div>
          </div>
        )}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default BlogPost;
