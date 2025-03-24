
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
