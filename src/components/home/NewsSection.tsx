
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "EJ EWEKE & Co Welcomes New Senior Partner",
      date: "June 15, 2023",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
      category: "Firm News",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "/news/new-partner"
    },
    {
      id: 2,
      title: "New Legal Requirements for Corporate Entities",
      date: "May 28, 2023",
      excerpt: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      category: "Legal Updates",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/news/corporate-requirements"
    },
    {
      id: 3,
      title: "Annual Legal Conference Announced",
      date: "May 10, 2023",
      excerpt: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.",
      category: "Events",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/news/conference"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest News</h2>
            <p className="text-bluegray text-lg">Stay updated with the latest from EJ EWEKE & Co</p>
          </div>
          <Link to="/news" className="inline-flex items-center text-red hover:text-red-dark font-medium mt-4 md:mt-0 group">
            <span>View all news</span>
            <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-light rounded-lg overflow-hidden shadow-sm border border-bluegray/10 hover:shadow-md transition-all duration-300">
              <Link to={item.link} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-red text-white text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-bluegray text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                
                <Link to={item.link} className="block">
                  <h3 className="text-xl font-bold mb-3 hover:text-red transition-colors duration-200">
                    {item.title}
                  </h3>
                </Link>
                
                <p className="text-bluegray mb-4">{item.excerpt}</p>
                
                <Link 
                  to={item.link} 
                  className="inline-flex items-center text-red font-medium hover:text-red-dark group"
                >
                  <span>Read more</span>
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
