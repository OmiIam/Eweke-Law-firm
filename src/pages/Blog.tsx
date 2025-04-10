
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import BlogList from '../components/blog/BlogList';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogPagination from '../components/blog/BlogPagination';
import Chatbot from '../components/ui/chatbot';
import { useIsMobile } from '../hooks/use-mobile';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
    });

    // Handle query params
    const params = new URLSearchParams(location.search);
    const pageParam = params.get('page');
    const categoryParam = params.get('category');
    const searchParam = params.get('search');
    
    if (pageParam) setCurrentPage(parseInt(pageParam, 10));
    if (categoryParam) setSelectedCategory(categoryParam);
    if (searchParam) setSearchQuery(searchParam);

    return () => {
      // Clean up
    };
  }, [location.search]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (currentPage > 1) params.set('page', currentPage.toString());
    if (selectedCategory) params.set('category', selectedCategory);
    if (searchQuery.trim()) params.set('search', searchQuery);
    
    const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    navigate(newUrl, { replace: true });
  }, [currentPage, selectedCategory, searchQuery, navigate, location.pathname]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHeader 
          searchQuery={searchQuery} 
          onSearch={handleSearch} 
        />
        
        <div className="container-lg py-8 md:py-16 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Main content */}
            <div className="w-full lg:w-2/3">
              <BlogList 
                currentPage={currentPage}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />
              
              <BlogPagination 
                currentPage={currentPage} 
                totalPages={5} 
                onPageChange={handlePageChange} 
              />
            </div>
            
            {/* Sidebar - shown below content on mobile */}
            <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className={`${isMobile ? 'mt-8' : ''}`}>
                <BlogSidebar 
                  selectedCategory={selectedCategory} 
                  onCategoryChange={handleCategoryChange} 
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Blog;
