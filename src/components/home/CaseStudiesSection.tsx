
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
    <section className="page-section bg-offwhite" data-aos="fade-up">
      <div className="container-lg">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notable Case Studies</h2>
          <p className="text-secondary max-w-3xl mx-auto">
            Explore some of our most impactful legal victories and precedent-setting cases that demonstrate our expertise in Nigerian law.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className="card-hover bg-light border-cream shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-cream text-charcoal">
                      {study.category}
                    </Badge>
                    <span className="text-sm text-bluegray">{study.year}</span>
                  </div>
                  <CardTitle className="mt-3 text-xl font-bold">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4 text-accent">
                    <Icon size={20} />
                    <CardDescription className="text-bluegray">{study.summary}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-bluegray/10 text-bluegray">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-accent hover:text-accent-dark hover:bg-cream/50 p-0">
                    Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-accent hover:bg-accent-dark text-offwhite">
            View All Case Studies <BookOpen className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
