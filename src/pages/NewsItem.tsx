
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItemType {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  content?: string;
}

const NewsItem = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsItem, setNewsItem] = useState<NewsItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setIsLoading(true);
    setTimeout(() => {
      // Sample news data - in a real app, this would come from an API
      const newsItems: NewsItemType[] = [
        {
          id: 1,
          title: "EJ EWEKE & Co. Welcomes New Senior Partner",
          slug: "new-senior-partner",
          category: "Firm News",
          date: "April 5, 2025",
          author: "Admin Team",
          excerpt: "We are pleased to announce that Barrister Olivia Adeyemi has joined our firm as a Senior Partner in our Corporate Law practice.",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          content: `<p>We are delighted to announce that Barrister Olivia Adeyemi has joined EJ EWEKE & Co. as a Senior Partner in our Corporate Law practice.</p>
          <p>With over 15 years of experience in corporate and commercial law, Olivia brings a wealth of expertise in mergers and acquisitions, corporate restructuring, and complex commercial transactions. Prior to joining our firm, she was a partner at one of Nigeria's leading commercial law firms, where she advised on some of the country's most significant corporate transactions.</p>
          <p>Olivia holds an LL.B from the University of Lagos and an LL.M in International Business Law from the London School of Economics. She is admitted to practice in Nigeria and is a member of the Nigerian Bar Association.</p>
          <p>"I am excited to join EJ EWEKE & Co. and contribute to the firm's impressive track record of excellence in corporate legal services," said Olivia. "The firm's commitment to client service and legal innovation aligns perfectly with my professional values, and I look forward to working with the talented team here to deliver exceptional results for our clients."</p>
          <p>Managing Partner Emmanuel J. Eweke commented, "We are thrilled to welcome Olivia to our partnership. Her exceptional credentials and proven track record in corporate law will significantly enhance our capacity to serve our clients in complex corporate matters. Her addition reflects our commitment to recruiting top legal talent and strengthening our position as a leading commercial law firm in Nigeria."</p>
          <p>Olivia will be based in our Lagos office and will work closely with our existing corporate team to expand our service offerings and deepen our expertise in this critical practice area.</p>`
        },
        {
          id: 2,
          title: "EJ EWEKE & Co. Recognized in Legal 500 Rankings",
          slug: "legal-500-rankings",
          category: "Awards",
          date: "March 20, 2025",
          author: "Admin Team",
          excerpt: "We are proud to announce that our firm has been recognized in the latest Legal 500 rankings for excellence in multiple practice areas.",
          image: "https://images.unsplash.com/photo-1541726260-e6078c228b12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          content: `<p>We are proud to announce that EJ EWEKE & Co. has been recognized in the latest Legal 500 rankings for our excellence across multiple practice areas.</p>
          <p>The Legal 500, one of the world's leading legal directories, has ranked our firm in the following categories:</p>
          <ul>
            <li>Tier 1: Dispute Resolution</li>
            <li>Tier 1: Corporate, Commercial and M&A</li>
            <li>Tier 2: Banking, Finance and Capital Markets</li>
            <li>Tier 2: Energy and Natural Resources</li>
            <li>Tier 3: Real Estate and Construction</li>
          </ul>
          <p>Additionally, several of our partners have been individually recognized as "Leading Individuals" in their respective practice areas.</p>
          <p>These rankings reflect our firm's commitment to delivering exceptional legal services and our deep expertise across key practice areas relevant to the Nigerian market.</p>
          <p>Managing Partner Emmanuel J. Eweke stated, "We are honored to be recognized by Legal 500. This achievement is a testament to the hard work and dedication of our entire team and the trust our clients place in us to handle their most complex legal matters."</p>
          <p>We extend our sincere gratitude to our clients for their continued support and to our lawyers and staff for their unwavering commitment to excellence.</p>`
        },
        {
          id: 3,
          title: "EJ EWEKE & Co. Hosts Annual Legal Symposium",
          slug: "annual-legal-symposium",
          category: "Events",
          date: "February 10, 2025",
          author: "Events Team",
          excerpt: "Our firm successfully hosted its annual legal symposium focused on emerging trends in Nigerian business law, with over 200 legal professionals in attendance.",
          image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
          content: `<p>EJ EWEKE & Co. successfully hosted its Annual Legal Symposium on February 5, 2025, at the Transcorp Hilton Hotel in Abuja.</p>
          <p>The symposium, themed "Navigating Legal Complexities in Nigeria's Evolving Business Landscape," brought together over 200 legal professionals, including corporate counsel, private practitioners, judges, regulatory officials, and legal academics.</p>
          <p>The daylong event featured panel discussions, keynote addresses, and interactive sessions on pressing legal issues affecting businesses in Nigeria, including:</p>
          <ul>
            <li>Regulatory compliance in the fintech sector</li>
            <li>Recent developments in Nigerian tax law</li>
            <li>Emerging trends in dispute resolution</li>
            <li>Legal framework for foreign investments</li>
            <li>Environmental law and corporate responsibility</li>
          </ul>
          <p>The Honorable Chief Justice of Nigeria delivered the opening address, emphasizing the importance of a robust legal framework for economic development and the role of legal practitioners in upholding the rule of law.</p>
          <p>Partner and Head of Corporate Practice, Barr. David Okonkwo, commented, "Our annual symposium has become a flagship event in Nigeria's legal calendar. It provides a valuable platform for legal professionals to exchange ideas, discuss challenges, and explore innovative solutions to complex legal issues facing businesses in our country."</p>
          <p>The symposium concluded with a networking reception, allowing attendees to forge new professional relationships and strengthen existing ones.</p>
          <p>We extend our sincere appreciation to all speakers, panelists, and participants who contributed to the success of this year's symposium. We look forward to hosting next year's event, which promises to be even more impactful.</p>`
        },
        // Add default content for any slug to prevent 404s
        {
          id: 999,
          title: "Firm Announcement",
          slug: "firm",
          category: "Firm News",
          date: "January 1, 2025",
          author: "Admin Team",
          excerpt: "Important announcement from EJ EWEKE & Co. regarding our ongoing commitment to legal excellence.",
          image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2105&q=80",
          content: `<p>EJ EWEKE & Co. is pleased to share this important announcement regarding our ongoing commitment to legal excellence in Nigeria.</p>
          <p>As a leading law firm in Nigeria, we continue to invest in our people, technology, and facilities to deliver the highest quality legal services to our valued clients. Recent initiatives include:</p>
          <ul>
            <li>Expansion of our practice areas to include emerging fields such as data privacy, fintech regulation, and renewable energy law</li>
            <li>Implementation of advanced legal technology solutions to enhance efficiency and client service</li>
            <li>Continued professional development programs for all legal and non-legal staff</li>
            <li>Strengthening our commitment to diversity, equity, and inclusion within the firm</li>
          </ul>
          <p>These initiatives reflect our dedication to staying at the forefront of legal practice in Nigeria and our unwavering commitment to meeting the evolving needs of our clients.</p>
          <p>We thank our clients for their continued trust and support, and we look forward to serving you with excellence in the years ahead.</p>`
        }
      ];
      
      const found = newsItems.find(item => item.slug === slug) || 
                    (slug === 'firm' ? newsItems.find(item => item.slug === 'firm') : null);
      
      if (found) {
        setNewsItem(found);
      } else if (newsItems.length > 0) {
        // Fallback to first news item if requested one doesn't exist
        setNewsItem(newsItems[0]);
      }
      
      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-60 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-40 h-4 bg-gray-300 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-lg py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">News Item Not Found</h1>
          <p className="mb-8">The news item you are looking for doesn't exist or has been removed.</p>
          <Button asChild variant="default">
            <Link to="/news">
              <ArrowLeft className="mr-2" size={16} />
              Back to News
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* News Header */}
        <div className="relative py-16 lg:py-20 overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/75 to-primary/90"></div>
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-lg relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/news" 
                className="inline-flex items-center text-light/80 mb-6 hover:text-highlight transition-colors group"
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back to all news</span>
              </Link>
              
              <div className="inline-block bg-highlight text-dark px-3 py-1.5 text-sm mb-4 rounded-full">
                {newsItem.category}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 leading-tight animate-fade-in">
                {newsItem.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-light/90 gap-6 mb-4 animate-fade-in delay-100">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span className="font-medium">{newsItem.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>{newsItem.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* News Content */}
        <div className="container-lg py-10">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content || '' }}></div>
            
            <div className="mt-10 pt-6 border-t border-gray-200 flex justify-between items-center">
              <Button asChild variant="outline">
                <Link to="/news" className="inline-flex items-center">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to News
                </Link>
              </Button>
              
              <div className="flex items-center">
                <span className="mr-2 text-bluegray">Share:</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default NewsItem;
