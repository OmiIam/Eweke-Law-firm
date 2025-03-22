
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Users, BriefcaseBusiness, Calendar, MessageSquare, GraduationCap } from 'lucide-react';

const QuickLinks = () => {
  const linkGroups = [
    {
      title: "For Individuals",
      links: [
        { name: "Family Law", url: "/practice-areas/family", icon: <Users size={20} /> },
        { name: "Personal Injury", url: "/practice-areas/personal-injury", icon: <FileText size={20} /> },
        { name: "Estate Planning", url: "/practice-areas/estate-planning", icon: <FileText size={20} /> },
      ]
    },
    {
      title: "For Businesses",
      links: [
        { name: "Corporate Law", url: "/practice-areas/corporate", icon: <BriefcaseBusiness size={20} /> },
        { name: "Intellectual Property", url: "/practice-areas/ip", icon: <FileText size={20} /> },
        { name: "Employment Law", url: "/practice-areas/employment", icon: <Users size={20} /> },
      ]
    },
    {
      title: "Firm Information",
      links: [
        { name: "About Us", url: "/about", icon: <Users size={20} /> },
        { name: "Latest News", url: "/news", icon: <MessageSquare size={20} /> },
        { name: "Resources", url: "/resources", icon: <GraduationCap size={20} /> },
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "Schedule Consultation", url: "/contact", icon: <Calendar size={20} /> },
        { name: "Client Portal", url: "/client-portal", icon: <Users size={20} /> },
        { name: "Careers", url: "/careers", icon: <BriefcaseBusiness size={20} /> },
      ]
    }
  ];

  return (
    <section className="bg-light py-14">
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Quick Access</h2>
          <p className="text-bluegray text-lg max-w-2xl mx-auto">Navigate to the most commonly accessed sections of our website</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {linkGroups.map((group, index) => (
            <div key={index} className="bg-white rounded-lg shadow-subtle border border-bluegray/10 p-6">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b border-bluegray/10">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url} 
                      className="flex items-center justify-between text-dark hover:text-red group transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <span className="mr-3 text-bluegray group-hover:text-red transition-colors duration-200">
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                      </div>
                      <ArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
