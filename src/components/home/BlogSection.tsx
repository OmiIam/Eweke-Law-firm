
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Nigerian Employment Law: Rights and Obligations",
      date: "August 10, 2023",
      author: "Adebayo Johnson",
      excerpt: "A comprehensive analysis of Nigerian employment legislation, including the Labour Act, employee rights, termination procedures, and recent judicial interpretations affecting employer-employee relationships.",
      category: "Employment Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/blog/nigerian-employment-law"
    },
    {
      id: 2,
      title: "5 Key Legal Considerations for Foreign Investment in Nigeria",
      date: "July 22, 2023",
      author: "Chinwe Okonkwo",
      excerpt: "Essential legal aspects foreign investors must consider when entering the Nigerian market, including NIPC regulations, foreign exchange controls, tax implications, and local content requirements.",
      category: "Investment Law",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/blog/investment-in-nigeria"
    }
  ];

  const featuredPost = {
    id: 3,
    title: "Navigating Nigeria's Cybercrime Act: Implications for Businesses and Individuals",
    date: "August 5, 2023",
    author: "Emmanuel Eweke",
    excerpt: "An in-depth examination of Nigeria's Cybercrime (Prohibition, Prevention, etc.) Act 2015, highlighting key provisions, compliance requirements, penalties for violations, and practical steps for data protection and cybersecurity in Nigeria's digital landscape.",
    category: "Cybersecurity Law",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/blog/nigeria-cybercrime-act"
  };

  return (
    <section className="py-16 bg-light">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
          <div data-aos="fade-up" data-aos-duration="600">
            <h2 className="text-3xl font-bold mb-2">Professional Insights</h2>
            <p className="text-bluegray text-lg">Expert analysis on Nigerian legal developments from our attorneys</p>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-red hover:text-red-dark font-medium mt-4 md:mt-0 group transition-all duration-300"
            data-aos="fade-left" 
            data-aos-duration="600"
          >
            <span>View all insights</span>
            <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <div className="md:col-span-3 mb-8" data-aos="fade-up" data-aos-duration="800">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-bluegray/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                
                <div className="p-8">
                  <span className="bg-light text-primary text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block">
                    {featuredPost.category}
                  </span>
                  
                  <Link to={featuredPost.link} className="block">
                    <h3 className="text-2xl font-bold mb-4 hover:text-red transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  
                  <p className="text-bluegray mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-bluegray text-sm space-x-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-2" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={featuredPost.link} 
                      className="inline-flex items-center text-red font-medium hover:text-red-dark group"
                    >
                      <span>Read more</span>
                      <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Regular Blog Posts */}
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-bluegray/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up" 
              data-aos-duration="600" 
              data-aos-delay={100 * (index + 1)}
            >
              <Link to={post.link} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-light text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-6">
                <Link to={post.link} className="block">
                  <h3 className="text-xl font-bold mb-3 hover:text-red transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-bluegray mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-bluegray text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={post.link} 
                    className="inline-flex items-center text-red font-medium hover:text-red-dark group"
                  >
                    <span>Read</span>
                    <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
