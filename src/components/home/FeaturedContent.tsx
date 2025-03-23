
import React from 'react';
import { ArrowRight, Briefcase, GavelIcon, Building2, Lightbulb, Users, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedContent = () => {
  const features = [
    {
      id: 1,
      title: "Corporate Law",
      description: "Expert advisory on business formation, mergers, acquisitions, and corporate governance under Nigerian Companies and Allied Matters Act.",
      icon: Briefcase,
      link: "/practice-areas/corporate"
    },
    {
      id: 2,
      title: "Litigation & Disputes",
      description: "Skilled representation in Nigerian courts handling civil, commercial, and constitutional disputes with strategic advocacy.",
      icon: GavelIcon,
      link: "/practice-areas/litigation"
    },
    {
      id: 3,
      title: "Real Estate Law",
      description: "Complete legal services for property transactions, land documentation, and development projects in accordance with Land Use Act.",
      icon: Building2,
      link: "/practice-areas/real-estate"
    },
    {
      id: 4,
      title: "Intellectual Property",
      description: "Protection of patents, trademarks, copyrights, and trade secrets under Nigerian intellectual property legislation.",
      icon: Lightbulb,
      link: "/practice-areas/ip"
    },
    {
      id: 5,
      title: "Family Law",
      description: "Compassionate guidance on marriage, divorce, child custody, and inheritance matters under Nigerian family laws.",
      icon: Users,
      link: "/practice-areas/family"
    },
    {
      id: 6,
      title: "Tax Advisory",
      description: "Strategic tax planning and compliance with Federal Inland Revenue Service regulations and Nigerian tax codes.",
      icon: ScrollText,
      link: "/practice-areas/tax"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-serif">Featured Practice Areas</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">Specialized legal expertise tailored to Nigerian legal frameworks and international best practices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id}
                className="group" 
                data-aos="fade-up" 
                data-aos-delay={feature.id * 100}
              >
                <Card className="h-full border border-bluegray/10 hover:shadow-md hover:border-bluegray/30 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-2xl text-primary mr-4 group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                        <IconComponent size={24} />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-bluegray text-base">{feature.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      to={feature.link}
                      className="flex items-center text-accent font-medium group-hover:text-accent-dark transition-colors duration-300"
                    >
                      <span className="mr-2">Learn more</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
