
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { ArrowRight, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Attorneys = () => {
  const attorneys = [
    {
      id: 1,
      name: "Ejiofor Eweke",
      title: "Managing Partner",
      bio: "Ejiofor is the founding partner with over 15 years of experience in Nigerian corporate law and commercial litigation. He obtained his LL.B from the University of Lagos and was called to the Nigerian Bar in 2008.",
      expertise: ["Corporate Law", "Commercial Litigation", "Banking & Finance"],
      image: "public/lovable-uploads/6c0fdb5a-8d8e-4d74-b98f-10c0cf6a4975.png" 
    },
    {
      id: 2,
      name: "Amina Ibrahim",
      title: "Senior Partner",
      bio: "Amina specializes in Nigerian energy law with particular expertise in oil and gas regulations. She holds an LL.B from Ahmadu Bello University and an LL.M in Oil and Gas Law from the University of Aberdeen.",
      expertise: ["Energy Law", "Oil & Gas", "Environmental Compliance"],
      image: "public/lovable-uploads/a5e29508-5ed9-4a41-99ef-e2df9a5236a8.png"
    },
    {
      id: 3,
      name: "Chukwudi Okonkwo",
      title: "Partner",
      bio: "Chukwudi heads our litigation practice with significant experience in Nigerian civil procedure and dispute resolution. He graduated from the University of Nigeria and has practiced law for over 12 years.",
      expertise: ["Civil Litigation", "Alternative Dispute Resolution", "Appeals"],
      image: "public/lovable-uploads/6c0fdb5a-8d8e-4d74-b98f-10c0cf6a4975.png"
    },
    {
      id: 4,
      name: "Folake Adeyemi",
      title: "Partner",
      bio: "Folake focuses on intellectual property protection within Nigeria's emerging technology sector. She holds degrees from Obafemi Awolowo University and has specialized training in IP law from WIPO.",
      expertise: ["Intellectual Property", "Technology Law", "Trademarks & Patents"],
      image: "public/lovable-uploads/a5e29508-5ed9-4a41-99ef-e2df9a5236a8.png"
    },
    {
      id: 5,
      name: "Gabriel Nwachukwu",
      title: "Senior Associate",
      bio: "Gabriel specializes in Nigerian real estate and property law, handling complex land transactions and title registrations. He received his LL.B from the University of Ibadan.",
      expertise: ["Real Estate", "Property Law", "Land Use Act Compliance"],
      image: "public/lovable-uploads/6c0fdb5a-8d8e-4d74-b98f-10c0cf6a4975.png"
    },
    {
      id: 6,
      name: "Zainab Bello",
      title: "Senior Associate",
      bio: "Zainab focuses on corporate governance and compliance with Nigerian financial regulations. She graduated from Bayero University Kano and holds an MBA from Lagos Business School.",
      expertise: ["Corporate Governance", "Compliance", "Financial Regulations"],
      image: "public/lovable-uploads/a5e29508-5ed9-4a41-99ef-e2df9a5236a8.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary/80 z-0"></div>
          <div className="container-lg relative z-10">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light animate-fade-in">Our Legal Team</h1>
              <p className="text-lg text-light/90 max-w-2xl mb-8 animate-slide-in">
                Meet our team of experienced Nigerian legal professionals dedicated to providing excellent legal representation and counsel.
              </p>
              <div className="w-20 h-1 bg-accent animate-slide-in"></div>
            </div>
          </div>
        </section>

        {/* Attorneys Grid */}
        <section className="py-16 bg-offwhite">
          <div className="container-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attorneys.map((attorney) => (
                <div key={attorney.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-md" data-aos="fade-up">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={attorney.image} 
                      alt={attorney.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{attorney.name}</h3>
                    <p className="text-accent mb-4">{attorney.title}</p>
                    <p className="text-bluegray mb-4">{attorney.bio}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {attorney.expertise.map((area, index) => (
                          <span key={index} className="bg-cream px-3 py-1 rounded-full text-sm text-charcoal">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-light transition-colors duration-300">
                        <Mail size={18} />
                      </button>
                      <button className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-light transition-colors duration-300">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-light transition-colors duration-300">
                        <Linkedin size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container-lg">
            <div className="bg-light rounded-lg shadow-sm p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6">Join Our Legal Team</h2>
                <p className="text-bluegray mb-8">
                  EJ EWEKE & Co is always looking for talented legal professionals who are passionate about Nigerian law and committed to excellence. We offer a collaborative environment and opportunities for professional growth.
                </p>
                <Link 
                  to="/careers" 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-md inline-flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mr-2">View Career Opportunities</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Attorneys;
