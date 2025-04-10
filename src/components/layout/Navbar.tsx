
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  User,
  Menu, 
  X,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="relative z-50">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-lg flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+1234567890" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
              <Phone size={14} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@ejeweke.com" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
              <Mail size={14} />
              <span>info@ejeweke.com</span>
            </a>
            <div className="flex items-center space-x-1 text-white/80">
              <MapPin size={14} />
              <span>123 Legal Street, New York, NY</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10 flex items-center gap-1">
              <Link to="/client-portal">
                <User size={14} />
                <span>Client Portal</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation - Now sticky */}
      <nav 
        className={`py-4 w-full transition-all duration-300 fixed top-0 left-0 right-0 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-subtle' : 'bg-white'
        }`}
      >
        <div className="container-lg flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-primary font-serif">
              EJ EWEKE <span className="text-red">&</span> Co
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-dark font-medium">About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem title="Our History" href="/about/history">
                        Learn about our firm's rich heritage and journey
                      </ListItem>
                      <ListItem title="Our Team" href="/about/team">
                        Meet the leadership and key personnel
                      </ListItem>
                      <ListItem title="Mission & Values" href="/about/mission">
                        Our guiding principles and commitments
                      </ListItem>
                      <ListItem title="About Overview" href="/about">
                        Complete overview of EJ EWEKE & Co
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-dark font-medium">Practice Areas</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      <ListItem title="Corporate Law" href="/practice-areas/corporate">
                        Business establishment and governance
                      </ListItem>
                      <ListItem title="Litigation" href="/practice-areas/litigation">
                        Court representation and dispute resolution
                      </ListItem>
                      <ListItem title="Real Estate" href="/practice-areas/real-estate">
                        Property transactions and disputes
                      </ListItem>
                      <ListItem title="Intellectual Property" href="/practice-areas/ip">
                        Patent, trademark, and copyright protection
                      </ListItem>
                      <ListItem title="Family Law" href="/practice-areas/family">
                        Domestic relations and family matters
                      </ListItem>
                      <ListItem title="All Practice Areas" href="/practice-areas">
                        View our complete legal service offerings
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/attorneys" 
                      className={cn(navigationMenuTriggerStyle(), "text-dark font-medium")}
                    >
                      Attorneys
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-dark font-medium">News & Insights</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem title="Firm News" href="/news/firm">
                        Latest updates and developments
                      </ListItem>
                      <ListItem title="Blog" href="/news/blog">
                        Articles and thought leadership
                      </ListItem>
                      <ListItem title="Case Studies" href="/case-studies">
                        Notable cases and success stories
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/careers" 
                      className={cn(navigationMenuTriggerStyle(), "text-dark font-medium")}
                    >
                      Careers
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/contact" 
                      className={cn(navigationMenuTriggerStyle(), "text-dark font-medium")}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex items-center ml-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all w-[220px]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center text-primary p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Add padding to account for the fixed navbar */}
      <div className={`h-16 ${isScrolled ? 'md:h-16' : 'md:h-0'} transition-all duration-300`}></div>

      {/* Mobile Menu - Simplified and more elegant */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg overflow-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-primary">
              EJ EWEKE <span className="text-red">&</span> Co
            </span>
            <button className="text-primary" onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>

          {/* Simplified Mobile Navigation */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">About Us</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="block py-1 text-primary hover:text-highlight">About Overview</Link></li>
                <li><Link to="/about/history" className="block py-1 text-primary hover:text-highlight">Our History</Link></li>
                <li><Link to="/about/team" className="block py-1 text-primary hover:text-highlight">Our Team</Link></li>
                <li><Link to="/about/mission" className="block py-1 text-primary hover:text-highlight">Mission & Values</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Practice Areas</h3>
              <ul className="space-y-2">
                <li><Link to="/practice-areas" className="block py-1 text-primary hover:text-highlight">All Practice Areas</Link></li>
                <li><Link to="/practice-areas/corporate" className="block py-1 text-primary hover:text-highlight">Corporate Law</Link></li>
                <li><Link to="/practice-areas/litigation" className="block py-1 text-primary hover:text-highlight">Litigation</Link></li>
                <li><Link to="/practice-areas/real-estate" className="block py-1 text-primary hover:text-highlight">Real Estate</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/attorneys" className="block py-1 text-primary hover:text-highlight">Our Attorneys</Link></li>
                <li><Link to="/case-studies" className="block py-1 text-primary hover:text-highlight">Case Studies</Link></li>
                <li><Link to="/careers" className="block py-1 text-primary hover:text-highlight">Careers</Link></li>
                <li><Link to="/contact" className="block py-1 text-primary hover:text-highlight">Contact Us</Link></li>
                <li><Link to="/appointment" className="block py-1 text-primary hover:text-highlight">Schedule Consultation</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-highlight" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@ejeweke.com" className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-highlight" />
                <span>info@ejeweke.com</span>
              </a>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-highlight" />
                <span>123 Legal Street, New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
