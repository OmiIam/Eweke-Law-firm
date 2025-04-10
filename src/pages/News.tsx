
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { ArrowRight, Calendar, User, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const News = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "EJ EWEKE & Co. Welcomes New Senior Partner",
      slug: "new-senior-partner",
      category: "Firm News",
      date: "April 5, 2025",
      author: "Admin Team",
      excerpt: "We are pleased to announce that Barrister Olivia Adeyemi has joined our firm as a Senior Partner in our Corporate Law practice.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 2,
      title: "EJ EWEKE & Co. Recognized in Legal 500 Rankings",
      slug: "legal-500-rankings",
      category: "Awards",
      date: "March 20, 2025",
      author: "Admin Team",
      excerpt: "We are proud to announce that our firm has been recognized in the latest Legal 500 rankings for excellence in multiple practice areas.",
      image: "https://images.unsplash.com/photo-1541726260-e6078c228b12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 3,
      title: "EJ EWEKE & Co. Hosts Annual Legal Symposium",
      slug: "annual-legal-symposium",
      category: "Events",
      date: "February 10, 2025",
      author: "Events Team",
      excerpt: "Our firm successfully hosted its annual legal symposium focused on emerging trends in Nigerian business law, with over 200 legal professionals in attendance.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
    },
    {
      id: 4,
      title: "EJ EWEKE & Co. Expands Lagos Office",
      slug: "lagos-office-expansion",
      category: "Firm News",
      date: "January 15, 2025",
      author: "Admin Team",
      excerpt: "Due to our continued growth and commitment to serving our clients, we're pleased to announce the expansion of our Lagos headquarters.",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 5,
      title: "EJ EWEKE & Co. Launches Pro Bono Initiative",
      slug: "pro-bono-initiative",
      category: "Community",
      date: "December 5, 2024",
      author: "CSR Team",
      excerpt: "We are proud to announce the launch of our comprehensive pro bono initiative aimed at providing legal services to underserved communities across Nigeria.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 6,
      title: "EJ EWEKE & Co. Partners with Lagos Business School",
      slug: "lagos-business-school-partnership",
      category: "Partnerships",
      date: "November 20, 2024",
      author: "Admin Team",
      excerpt: "We're excited to announce our new educational partnership with Lagos Business School to develop specialized legal training programs for business leaders.",
      image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/75 to-primary/90"></div>
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Legal office" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-lg relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6 animate-fade-in">
                <span className="inline-block">Firm News & Announcements</span>
              </h1>
              <p className="text-light/90 text-lg mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Stay updated with the latest news, events, and accomplishments from EJ EWEKE & Co.
              </p>
            </div>
          </div>
        </section>
        
        {/* News items */}
        <section className="py-16 bg-light">
          <div className="container-lg">
            <div className="grid grid-cols-1 gap-8">
              {newsItems.map((item) => (
                <article 
                  key={item.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block bg-highlight/20 text-dark text-xs font-medium px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-info transition-colors duration-200">
                        <Link to={`/news/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h2>
                      
                      <div className="flex items-center text-bluegray text-sm mb-4 gap-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={16} className="mr-2" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      
                      <p className="text-bluegray mb-6 flex-grow">{item.excerpt}</p>
                      
                      <div className="mt-auto">
                        <Button asChild variant="outline" className="group">
                          <Link to={`/news/${item.slug}`} className="inline-flex items-center">
                            <span>Read full story</span>
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default News;
