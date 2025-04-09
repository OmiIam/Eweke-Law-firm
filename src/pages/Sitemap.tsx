
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { ArrowRight } from 'lucide-react';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Practice Areas", path: "/practice-areas" },
        { name: "Attorneys", path: "/attorneys" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Blog", path: "/blog" },
        { name: "News", path: "/news" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
        { name: "Book an Appointment", path: "/appointment" },
      ]
    },
    {
      title: "About Pages",
      links: [
        { name: "Our History", path: "/about/history" },
        { name: "Our Team", path: "/about/team" },
        { name: "Our Mission", path: "/about/mission" },
      ]
    },
    {
      title: "Practice Areas",
      links: [
        { name: "Corporate Law", path: "/practice-areas/corporate" },
        { name: "Litigation & Disputes", path: "/practice-areas/litigation" },
        { name: "Real Estate Law", path: "/practice-areas/real-estate" },
        { name: "Intellectual Property", path: "/practice-areas/ip" },
        { name: "Family Law", path: "/practice-areas/family" },
        { name: "Tax Advisory", path: "/practice-areas/tax" },
      ]
    },
    {
      title: "Attorneys",
      links: [
        { name: "Partners", path: "/attorneys/partners" },
        { name: "Associates", path: "/attorneys/associates" },
        { name: "Of Counsel", path: "/attorneys/of-counsel" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Legal Disclaimer", path: "/disclaimer" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-light">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-10 font-serif">Site Map</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold mb-4 text-primary">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path} 
                          className="inline-flex items-center text-info hover:text-info/80 transition-colors group"
                        >
                          <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Sitemap;
