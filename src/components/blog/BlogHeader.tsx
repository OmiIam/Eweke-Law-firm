
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogHeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const BlogHeader = ({ searchQuery, onSearch }: BlogHeaderProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary z-0"></div>
      
      {/* Light pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Legal Insights & Updates
          </h1>
          <p className="text-light/90 text-lg mb-8 max-w-2xl mx-auto">
            Expert analysis on Nigerian legal matters, insights from our attorneys, and updates on the latest developments in law.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative">
            <Input
              type="search"
              placeholder="Search for articles, topics, or legal insights..."
              className="pl-10 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 focus-visible:ring-highlight"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
