
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { ArrowRight, BookOpen, Scale, Briefcase, Building, Home, FileText } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const areas = [
    {
      id: 1,
      title: "Corporate & Commercial Law",
      description: "Our corporate practice provides comprehensive legal services for Nigerian businesses, covering company formation, corporate governance, mergers and acquisitions, and compliance with Nigerian corporate regulations including the Companies and Allied Matters Act (CAMA).",
      icon: Building,
      link: "/practice-areas/corporate"
    },
    {
      id: 2,
      title: "Litigation & Dispute Resolution",
      description: "We represent clients in all Nigerian courts, from the Federal High Court to the Supreme Court. Our litigation team handles civil, commercial, and administrative disputes with expertise in Nigerian procedural law and alternative dispute resolution mechanisms.",
      icon: Scale,
      link: "/practice-areas/litigation"
    },
    {
      id: 3,
      title: "Real Estate & Property Law",
      description: "Our real estate practice navigates the complexities of Nigerian land law, providing services in property acquisition, development, leasing, and resolving land disputes while ensuring compliance with the Nigerian Land Use Act and state-specific regulations.",
      icon: Home,
      link: "/practice-areas/real-estate"
    },
    {
      id: 4,
      title: "Intellectual Property",
      description: "We protect clients' intellectual assets through registration of patents, trademarks, and copyrights with Nigeria's relevant agencies, including the Nigerian Copyright Commission and Trademarks, Patents and Designs Registry.",
      icon: FileText,
      link: "/practice-areas/ip"
    },
    {
      id: 5,
      title: "Banking & Finance",
      description: "Our banking and finance practice advises on Nigerian financial regulations, capital markets, structured finance, and compliance with Central Bank of Nigeria directives and securities laws under the Securities and Exchange Commission.",
      icon: Briefcase,
      link: "/practice-areas/banking"
    },
    {
      id: 6,
      title: "Energy & Natural Resources",
      description: "We provide specialized legal services for Nigeria's oil, gas, mining, and renewable energy sectors, advising on licenses, contracts, and regulatory compliance with bodies like the Nigerian National Petroleum Corporation and Department of Petroleum Resources.",
      icon: BookOpen,
      link: "/practice-areas/energy"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light animate-fade-in">Our Practice Areas</h1>
              <p className="text-lg text-light/90 max-w-2xl mb-8 animate-slide-in">
                EJ EWEKE & Co offers comprehensive legal expertise across key practice areas relevant to Nigeria's legal landscape, with specialized knowledge of Nigerian statutes, case law, and regulatory frameworks.
              </p>
              <div className="w-20 h-1 bg-accent animate-slide-in"></div>
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-16 bg-offwhite">
          <div className="container-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area) => {
                const Icon = area.icon;
                return (
                  <Card key={area.id} className="card-hover bg-light border-cream shadow-sm h-full transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <Badge variant="outline" className="bg-cream text-charcoal">
                          Nigerian Law
                        </Badge>
                      </div>
                      <CardTitle className="mt-4">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-bluegray">{area.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={area.link} className="text-accent hover:text-accent-dark inline-flex items-center font-medium">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="container-lg">
            <div className="bg-bluegray/10 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Ready to Discuss Your Legal Needs?</h2>
                <p className="text-lg text-light/90 mb-8">
                  Our team of experienced Nigerian legal professionals is ready to assist with your specific situation.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-light hover:bg-offwhite text-accent font-medium py-3 px-6 rounded-md inline-flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mr-2">Schedule a Consultation</span>
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

export default PracticeAreas;
