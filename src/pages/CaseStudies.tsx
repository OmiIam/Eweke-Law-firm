
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, Building2, GavelIcon, Users, CalendarClock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  outcome: string;
  icon: any;
  imageSrc: string;
}

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Corporate Restructuring for Lagos-Based Conglomerate",
      category: "Corporate Law",
      description: "Assisted a major Lagos conglomerate in restructuring their business units across multiple industries to optimize tax efficiency and operational effectiveness under Nigerian Companies and Allied Matters Act.",
      outcome: "Successfully completed restructuring resulting in 15% operational cost reduction and enhanced corporate governance framework that aligns with international standards.",
      icon: BriefcaseBusiness,
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Landmark Property Rights Case in Port Harcourt",
      category: "Real Estate Law",
      description: "Represented a commercial developer in a complex land dispute involving ancestral claims and government acquisition. The case established important precedents under the Land Use Act regarding commercial development rights.",
      outcome: "Secured favorable ruling from the High Court of Rivers State, establishing our client's legal title to the disputed property and setting precedent for similar cases.",
      icon: Building2,
      imageSrc: "https://images.unsplash.com/photo-1541937525835-501fa13ac452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      id: 3,
      title: "High-Profile Commercial Litigation Victory",
      category: "Litigation",
      description: "Defended a multinational corporation against allegations of contract breach and unfair business practices in a high-stakes case before the Federal High Court of Nigeria.",
      outcome: "Obtained dismissal of all claims against our client after presenting compelling evidence and legal arguments, saving the client over ₦500 million in potential damages.",
      icon: GavelIcon,
      imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Family Wealth Succession Planning",
      category: "Family Law",
      description: "Advised a prominent Nigerian family on comprehensive estate planning, intergenerational wealth transfer, and business succession strategies in accordance with both customary and statutory law.",
      outcome: "Established robust legal structures to protect family assets across generations while minimizing potential disputes and tax implications.",
      icon: Users,
      imageSrc: "https://images.unsplash.com/photo-1581195669150-815d4def89dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 5,
      title: "Abuja Hospital Merger and Acquisition Advisory",
      category: "Healthcare Law",
      description: "Provided comprehensive legal guidance for the merger of two major private hospitals in Abuja, handling regulatory compliance, staff transitions, and medical licensing requirements.",
      outcome: "Successfully completed the merger within regulatory requirements, creating one of Abuja's largest private healthcare providers while maintaining all necessary operational licenses.",
      icon: CalendarClock,
      imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-primary/90"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
          <div className="container-lg relative z-10">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Legal Case Studies</h1>
              <p className="text-lg md:text-xl text-light/90 mb-8 max-w-2xl">
                Explore our portfolio of successful legal matters that demonstrate our expertise and commitment to achieving favorable outcomes for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-light">
          <div className="container-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => {
                const IconComponent = study.icon;
                return (
                  <div 
                    key={study.id}
                    className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                    data-aos="fade-up"
                    data-aos-delay={study.id * 100}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={study.imageSrc} 
                        alt={study.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-highlight text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <IconComponent size={14} />
                        <span>{study.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-primary">{study.title}</h3>
                      <p className="text-bluegray mb-4">{study.description}</p>
                      <div className="bg-light/70 p-4 rounded-md mb-4">
                        <h4 className="font-semibold text-primary mb-2">Outcome:</h4>
                        <p className="text-bluegray">{study.outcome}</p>
                      </div>
                      <Button 
                        asChild
                        variant="ghost" 
                        className="text-highlight hover:text-highlight/80 hover:bg-highlight/5 p-0 flex items-center group"
                      >
                        <Link to={`/case-studies/${study.id}`}>
                          <span className="mr-1">Read full case study</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-primary/80 z-0"></div>
          <div className="container-lg relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 font-serif">Need Legal Assistance with a Similar Matter?</h2>
              <p className="text-light/90 mb-8 text-lg">
                Our team of experienced attorneys is ready to help you navigate complex legal challenges and achieve favorable outcomes.
              </p>
              <Button 
                asChild
                variant="highlight"
                size="lg"
                className="font-semibold"
              >
                <Link to="/appointment">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
