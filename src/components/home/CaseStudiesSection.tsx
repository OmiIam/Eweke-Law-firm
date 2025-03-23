
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Scale, Briefcase, Building, Home, FileText } from 'lucide-react';

const caseStudies = [
  {
    title: "Landmark Corporate Governance Case",
    category: "Corporate Law",
    summary: "Successfully represented a major Nigerian corporation in a high-profile corporate governance dispute that set new legal precedents.",
    year: "2022",
    icon: Building,
    tags: ["Corporate Governance", "Shareholder Rights", "Nigerian Court of Appeal"]
  },
  {
    title: "Complex Land Acquisition Resolution",
    category: "Real Estate",
    summary: "Navigated complex legal challenges in a multi-party land acquisition dispute involving government regulations and customary land rights.",
    year: "2021",
    icon: Home,
    tags: ["Property Law", "Land Use Act", "Traditional Rights"]
  },
  {
    title: "Intellectual Property Protection",
    category: "IP Law",
    summary: "Secured critical intellectual property rights for a Nigerian tech startup against international infringement claims.",
    year: "2023",
    icon: FileText,
    tags: ["Patent Law", "International IP", "Technology"]
  },
  {
    title: "Major Contract Dispute Settlement",
    category: "Commercial Litigation",
    summary: "Negotiated a favorable settlement in a high-value contract dispute between Nigerian and international business entities.",
    year: "2020",
    icon: Briefcase,
    tags: ["Commercial Contracts", "Dispute Resolution", "International Law"]
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="page-section bg-offwhite py-20" data-aos="fade-up">
      <div className="container-lg">
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary">Notable Case Studies</h2>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            Explore some of our most impactful legal victories and precedent-setting cases that demonstrate our expertise in Nigerian law.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className="bg-white border-cream shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-highlight/10 text-highlight border-highlight/20 font-medium">
                      {study.category}
                    </Badge>
                    <span className="text-sm font-medium text-bluegray">{study.year}</span>
                  </div>
                  <CardTitle className="mt-4 text-xl md:text-2xl font-bold text-primary">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-5 text-accent">
                    <Icon size={22} className="text-highlight" />
                    <CardDescription className="text-bluegray text-base leading-relaxed">{study.summary}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-bluegray/5 text-bluegray border border-bluegray/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-highlight hover:text-highlight/90 hover:bg-highlight/5 p-0 font-medium transition-all duration-300 group">
                    Read full case study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-14 text-center">
          <Button className="bg-accent hover:bg-accent-light text-offwhite py-6 px-8 rounded shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:-translate-y-1 font-medium">
            View All Case Studies <BookOpen className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
