
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What areas of Nigerian law does your firm specialize in?",
    answer: "Our firm specializes in Corporate Law, Commercial Litigation, Real Estate Law, Intellectual Property, Energy & Natural Resources Law, and Family Law. Our attorneys have extensive experience in Nigerian legal frameworks and regulations."
  },
  {
    question: "How long has EJ EWEKE & Co been practicing in Nigeria?",
    answer: "EJ EWEKE & Co has been providing exceptional legal services in Nigeria for over 8 years, establishing a reputation for excellence and integrity in the Nigerian legal landscape."
  },
  {
    question: "What is the process for scheduling a consultation?",
    answer: "You can schedule a consultation through our online appointment system, by calling our office, or by submitting a request through our contact form. We offer both in-person and virtual consultations to accommodate your needs."
  },
  {
    question: "Do you offer legal services to international clients doing business in Nigeria?",
    answer: "Yes, we provide comprehensive legal services to international clients navigating Nigerian business laws, regulations, and compliance requirements. Our team has expertise in foreign investment, cross-border transactions, and international dispute resolution."
  },
  {
    question: "How does your firm approach fee structures?",
    answer: "We offer flexible fee arrangements based on the nature and complexity of your legal matter. These include hourly rates, fixed fees for specific services, contingency arrangements, and retainer options. We provide transparent cost estimates before commencing work."
  },
  {
    question: "Can your firm represent me in Nigerian courts?",
    answer: "Yes, our attorneys are licensed to practice in all Nigerian courts, including the Supreme Court, Court of Appeal, Federal High Courts, State High Courts, and specialized tribunals. We have a strong track record of successful litigation across various jurisdictions."
  }
];

const FAQSection = () => {
  return (
    <section className="page-section bg-cream" data-aos="fade-up">
      <div className="container-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <p className="text-center text-secondary mb-10 max-w-3xl mx-auto">
          Get answers to common questions about our legal services and processes. If you don't find what you're looking for, please contact us directly.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-bluegray/30">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary py-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
