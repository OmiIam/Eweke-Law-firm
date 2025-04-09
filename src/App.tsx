
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PracticeAreas from "./pages/PracticeAreas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Attorneys from "./pages/Attorneys";
import CaseStudies from "./pages/CaseStudies";
import Appointment from "./pages/Appointment";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import News from "./pages/News";
import NewsItem from "./pages/NewsItem";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import Sitemap from "./pages/Sitemap";
import StickyContact from "./components/ui/StickyContact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col antialiased">
          <Toaster />
          <Sonner position="top-right" closeButton theme="light" />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<About />} />
            <Route path="/about/team" element={<About />} />
            <Route path="/about/mission" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/corporate" element={<PracticeAreas />} />
            <Route path="/practice-areas/litigation" element={<PracticeAreas />} />
            <Route path="/practice-areas/real-estate" element={<PracticeAreas />} />
            <Route path="/practice-areas/ip" element={<PracticeAreas />} />
            <Route path="/practice-areas/family" element={<PracticeAreas />} />
            <Route path="/practice-areas/tax" element={<PracticeAreas />} />
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/attorneys/partners" element={<Attorneys />} />
            <Route path="/attorneys/associates" element={<Attorneys />} />
            <Route path="/attorneys/of-counsel" element={<Attorneys />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/appointment" element={<Appointment />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* News Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsItem />} />
            
            {/* Career Routes */}
            <Route path="/careers" element={<Careers />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<LegalDisclaimer />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <StickyContact />
        </div>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
