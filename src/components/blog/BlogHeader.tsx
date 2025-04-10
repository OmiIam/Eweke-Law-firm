
import React, { useState, useEffect } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogHeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const BlogHeader = ({ searchQuery, onSearch }: BlogHeaderProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [typedText, setTypedText] = useState("");
  const fullText = "Legal Insights & Updates";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with legal-themed image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/65 to-primary/80 backdrop-blur-sm"></div>
        <img 
          src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Legal themed background" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>
      
      {/* Light pattern overlay with reduced opacity */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-highlight/20 text-white px-3 py-1.5 rounded-full mb-4">
            <BookOpen size={16} className="mr-2" />
            <span className="text-sm font-medium">Our Legal Knowledge Base</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6 animate-fade-in min-h-[60px]">
            <span className="inline-block after:content-['|'] after:animate-blink after:ml-1 after:text-highlight">{typedText}</span>
          </h1>
          
          <p className="text-light/90 text-lg mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Expert analysis on Nigerian legal matters, insights from our attorneys, and updates on the latest developments in law.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative animate-fade-in delay-200">
            <Input
              type="search"
              placeholder="Search for articles, topics, or legal insights..."
              className="pl-12 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 focus-visible:ring-highlight rounded-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
