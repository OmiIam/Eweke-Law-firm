
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "EJ EWEKE & Co Welcomes New Senior Partner Specializing in Nigerian Oil & Gas Law",
      date: "August 15, 2023",
      excerpt: "We are pleased to announce the addition of a distinguished senior partner with extensive experience in Nigerian petroleum legislation and regulatory compliance to strengthen our Energy Law practice.",
      category: "Firm News",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "/news/new-partner"
    },
    {
      id: 2,
      title: "New Companies and Allied Matters Act Implications for Nigerian Businesses",
      date: "July 28, 2023",
      excerpt: "Our analysis of the revised Companies and Allied Matters Act (CAMA) 2020 and its significant implications for corporate governance, compliance, and business operations in Nigeria.",
      category: "Legal Updates",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/news/cama-implications"
    },
    {
      id: 3,
      title: "EJ EWEKE & Co to Host Annual Nigerian Legal Conference in Lagos",
      date: "June 10, 2023",
      excerpt: "Join us for our annual legal symposium focusing on emerging trends in Nigerian commercial law, featuring keynote addresses from Supreme Court justices and industry leaders.",
      category: "Events",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/news/lagos-conference"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
          <div data-aos="fade-up" data-aos-duration="600">
            <h2 className="text-3xl font-bold mb-2">Latest Legal News</h2>
            <p className="text-bluegray text-lg">Stay updated with the latest developments in Nigerian law</p>
          </div>
          <Link 
            to="/news" 
            className="inline-flex items-center text-red hover:text-red-dark font-medium mt-4 md:mt-0 group transition-all duration-300"
            data-aos="fade-left" 
            data-aos-duration="600" 
            data-aos-delay="100"
          >
            <span>View all news</span>
            <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={item.id} 
              className="bg-light rounded-lg overflow-hidden shadow-sm border border-bluegray/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up" 
              data-aos-duration="600" 
              data-aos-delay={100 * index}
            >
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

export default NewsSection;
