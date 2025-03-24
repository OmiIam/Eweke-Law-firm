
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, TrendingUp, Bookmark, Award, FileText, Gavel, Scale, Book, Briefcase, FileCheck } from 'lucide-react';
import { BlogPostType } from '../../types/blog';
import { getAllCategories, getMockBlogPosts } from '../../services/blogService';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BlogSidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const BlogSidebar = ({ selectedCategory, onCategoryChange }: BlogSidebarProps) => {
  const categories = getAllCategories();
  const recentPosts = getMockBlogPosts().slice(0, 3);
  const trendingPosts = getMockBlogPosts()
    .sort((a, b) => b.readingTime - a.readingTime)
    .slice(0, 3);
  
  // Get category icon based on name
  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Corporate Law': <Briefcase size={16} />,
      'Litigation': <Gavel size={16} />,
      'Real Estate': <FileCheck size={16} />,
      'Family Law': <Scale size={16} />,
      'Property Law': <Book size={16} />,
      'Constitutional Law': <FileText size={16} />,
    };
    
    return icons[categoryName] || <Bookmark size={16} />;
  };
  
  return (
    <div className="space-y-8">
      {/* Categories */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-serif relative">
            <span className="relative z-10">Browse Categories</span>
            <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-highlight z-0"></span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Badge 
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="cursor-pointer px-3 py-1.5 text-sm hover:scale-105 transition-transform"
                  onClick={() => onCategoryChange(null)}
                >
                  <Bookmark size={14} className="mr-1" />
                  All Categories
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="w-48 text-sm p-3">
                View all articles across all legal categories
              </HoverCardContent>
            </HoverCard>
            
            {categories.map((category) => (
              <HoverCard key={category}>
                <HoverCardTrigger asChild>
                  <Badge
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer px-3 py-1.5 text-sm hover:scale-105 transition-transform"
                    onClick={() => onCategoryChange(category)}
                  >
                    {getCategoryIcon(category)}
                    <span className="ml-1">{category}</span>
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="w-48 text-sm p-3">
                  View all articles about {category}
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Articles Tabs */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-serif relative">
            <span className="relative z-10">Articles</span>
            <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-highlight z-0"></span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="trending">
                <TrendingUp size={14} className="mr-1" />
                Trending
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent" className="mt-4 space-y-4">
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
            </TabsContent>
            
            <TabsContent value="trending" className="mt-4 space-y-4">
              {trendingPosts.map((post) => (
                <div key={post.id} className="flex gap-3">
                  <div className="shrink-0 w-24 h-16 rounded overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center text-highlight text-xs mb-1">
                      <TrendingUp size={12} className="mr-1" />
                      <span>Popular</span>
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
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t border-gray-100 pt-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-info font-medium hover:text-info/80 group"
          >
            <span>View all articles</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </CardFooter>
      </Card>
      
      {/* Subscribe Box */}
      <Card className="bg-accent border-0 shadow-md text-white">
        <CardHeader>
          <CardTitle className="text-xl">Subscribe to Our Newsletter</CardTitle>
          <CardDescription className="text-light/80">Get the latest legal insights and updates delivered to your inbox.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <button 
              type="submit"
              className="w-full bg-highlight text-dark font-medium py-2 px-4 rounded hover:bg-highlight/90 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
