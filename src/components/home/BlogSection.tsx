
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the New Corporate Tax Regulations",
      date: "June 10, 2023",
      author: "John Smith",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus justo, vitae euismod erat feugiat id.",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/blog/corporate-tax-regulations"
    },
    {
      id: 2,
      title: "5 Key Legal Considerations for Startups",
      date: "May 22, 2023",
      author: "Jane Doe",
      excerpt: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.",
      category: "Startup Law",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/blog/startup-legal-considerations"
    }
  ];

  const featuredPost = {
    id: 3,
    title: "The Future of Intellectual Property in the Digital Age",
    date: "June 5, 2023",
    author: "Michael Johnson",
    excerpt: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
    category: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/blog/intellectual-property-digital-age"
  };

  return (
    <section className="py-16 bg-light">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Professional Blog</h2>
            <p className="text-bluegray text-lg">Insights and analysis from our legal experts</p>
          </div>
          <Link to="/blog" className="inline-flex items-center text-red hover:text-red-dark font-medium mt-4 md:mt-0 group">
            <span>View all posts</span>
            <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <div className="md:col-span-3 mb-8">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-bluegray/10 hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                    <h3 className="text-2xl font-bold mb-4 hover:text-red transition-colors duration-200">
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
                      <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Regular Blog Posts */}
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-bluegray/10 hover:shadow-md transition-all duration-300">
              <Link to={post.link} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-light text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-6">
                <Link to={post.link} className="block">
                  <h3 className="text-xl font-bold mb-3 hover:text-red transition-colors duration-200">
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
                    <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
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
