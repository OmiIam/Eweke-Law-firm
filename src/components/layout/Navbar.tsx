
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
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 1500 1500" className="mr-2">
              <rect width="1500" height="1500" x="0" y="0" fill="#102e44"></rect>
              <g transform="scale(0.27) translate(920 920)">
                <path fill="#fff" d="M5.635 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h30.43q7.59 0 10.66-.86-.87 3.93-.87 10.94v4.51h-2.2l-1.44-9.79q-.2-2.11-2.69-2.11h-20.16v26.21h19.29q1.16 0 1.35-1.35l.48-5.95h1.73v17.28h-1.73l-.48-5.95q-.19-1.34-1.35-1.34h-19.29v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M123.335 308.113h13.05v1.73h-3.55q-1.34 0-1.82 1.34l-17.76 57.41h-3.27l-15.65-47.81-15.55 47.81h-3.26l-17.76-57.41q-.48-1.34-1.83-1.34h-3.55v-1.73h18.24v1.73h-4.8l13.73 46.37 13.15-40.51-1.44-4.52q-.48-1.34-1.82-1.34h-3.55v-1.73h18.24v1.73h-4.8l14.49 46.08 14.31-46.08h-4.8Z"></path>
                <path fill="#fff" d="M140.225 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h30.43q7.59 0 10.66-.86-.86 3.93-.86 10.94v4.51h-2.21l-1.44-9.79q-.19-2.11-2.69-2.11h-20.16v26.21h19.3q1.15 0 1.34-1.35l.48-5.95h1.73v17.28h-1.73l-.48-5.95q-.19-1.34-1.34-1.34h-19.3v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M195.715 365.523v-54.53q0-1.15-1.34-1.15h-4.52v-1.73h19.59v1.73h-4.51q-1.35 0-1.35 1.15v54.53q0 1.34 1.35 1.34h4.51v1.73h-19.59v-1.73h4.52q1.34 0 1.34-1.34m30.34-13.73 2.2 8.83q1.44 5.96 4.61 5.96 1.63 0 2.55-1.2.91-1.2.91-2.88t-.29-3.12l1.82-.29q.39 1.44.39 3.17 0 3.45-2.07 5.47-2.06 2.01-5.32 2.01-8.07 0-10.56-10.27l-2.21-8.83q-1.63-6.24-4.51-8.69-2.88-2.45-8.16-2.45v-2.11l22.65-27.55h-4.8v-1.73h13.06v1.73h-2.59q-1.54 0-2.69 1.34l-21.51 26.02q7.4.1 11.14 4.03 3.74 3.94 5.38 10.56"></path>
                <path fill="#fff" d="M241.605 368.593v-1.73h4.51q1.34 0 1.34-1.34v-54.53q0-1.15-1.34-1.15h-4.51v-1.73h30.43q7.58 0 10.66-.86-.87 3.93-.87 10.94v4.51h-2.21l-1.44-9.79q-.19-2.11-2.68-2.11h-20.16v26.21h19.29q1.15 0 1.35-1.35l.48-5.95h1.72v17.28h-1.72l-.48-5.95q-.2-1.34-1.35-1.34h-19.29v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.66-.87Z"></path>
                <path fill="#fff" d="M315.235 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h19.58v1.73h-4.51q-1.34 0-1.34 1.15v54.91h19.1q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M358.625 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h30.43q7.59 0 10.66-.86-.86 3.93-.86 10.94v4.51h-2.21l-1.44-9.79q-.19-2.11-2.69-2.11h-20.16v26.21h19.3q1.15 0 1.34-1.35l.48-5.95h1.73v17.28h-1.73l-.48-5.95q-.19-1.34-1.34-1.34h-19.3v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M435.815 309.743q-8.74 0-14.07 7.68t-5.33 21.03q0 13.34 5.38 20.93 5.38 7.58 13.49 7.58t11.33-4.18q3.21-4.17 3.21-12.24v-3.84q0-1.15-1.34-1.15h-6.43v-1.73h19.58v1.73h-2.59q-1.35 0-1.35 1.15v3.46q0 8.54-6.14 14.06-6.14 5.52-15.74 5.52-12.1 0-19.83-8.35-7.73-8.35-7.73-22.99 0-14.64 7.64-23.04 7.63-8.4 19.92-8.4 6.24 0 12.48 3.17 2.01 1.05 2.88 1.05 1.44 0 1.53-2.01l.1-1.63h1.82v16.6h-1.73q-.86-7.39-5.52-10.89-4.65-3.51-11.56-3.51"></path>
                <path fill="#fff" d="M516.935 368.593h-19.68v-1.73h6.24l-6.72-18.52h-21.12l-6.72 18.52h6.24v1.73h-14.5v-1.73h3.55q1.35 0 1.83-1.34l21.12-57.41h3.26l21.12 57.41q.48 1.34 1.82 1.34h3.56Zm-30.63-49.15-9.6 26.21h19.11Z"></path>
                <path fill="#fff" d="M519.335 368.593v-1.73h4.51q1.34 0 1.34-1.34v-54.53q0-1.15-1.34-1.15h-4.51v-1.73h19.58v1.73h-4.51q-1.35 0-1.35 1.15v54.91h19.11q2.49 0 2.69-2.11l1.44-11.23h2.2v4.51q0 8.45.87 12.39-3.07-.87-10.66-.87Z"></path>
              </g>
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 1500 1500">
              <rect width="1500" height="1500" x="0" y="0" fill="#102e44"></rect>
              <g transform="scale(0.18) translate(920 920)">
                <path fill="#fff" d="M5.635 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h30.43q7.59 0 10.66-.86-.87 3.93-.87 10.94v4.51h-2.2l-1.44-9.79q-.2-2.11-2.69-2.11h-20.16v26.21h19.29q1.16 0 1.35-1.35l.48-5.95h1.73v17.28h-1.73l-.48-5.95q-.19-1.34-1.35-1.34h-19.29v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M123.335 308.113h13.05v1.73h-3.55q-1.34 0-1.82 1.34l-17.76 57.41h-3.27l-15.65-47.81-15.55 47.81h-3.26l-17.76-57.41q-.48-1.34-1.83-1.34h-3.55v-1.73h18.24v1.73h-4.8l13.73 46.37 13.15-40.51-1.44-4.52q-.48-1.34-1.82-1.34h-3.55v-1.73h18.24v1.73h-4.8l14.49 46.08 14.31-46.08h-4.8Z"></path>
                <path fill="#fff" d="M140.225 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h30.43q7.59 0 10.66-.86-.86 3.93-.86 10.94v4.51h-2.21l-1.44-9.79q-.19-2.11-2.69-2.11h-20.16v26.21h19.3q1.15 0 1.34-1.35l.48-5.95h1.73v17.28h-1.73l-.48-5.95q-.19-1.34-1.34-1.34h-19.3v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M195.715 365.523v-54.53q0-1.15-1.34-1.15h-4.52v-1.73h19.59v1.73h-4.51q-1.35 0-1.35 1.15v54.53q0 1.34 1.35 1.34h4.51v1.73h-19.59v-1.73h4.52q1.34 0 1.34-1.34m30.34-13.73 2.2 8.83q1.44 5.96 4.61 5.96 1.63 0 2.55-1.2.91-1.2.91-2.88t-.29-3.12l1.82-.29q.39 1.44.39 3.17 0 3.45-2.07 5.47-2.06 2.01-5.32 2.01-8.07 0-10.56-10.27l-2.21-8.83q-1.63-6.24-4.51-8.69-2.88-2.45-8.16-2.45v-2.11l22.65-27.55h-4.8v-1.73h13.06v1.73h-2.59q-1.54 0-2.69 1.34l-21.51 26.02q7.4.1 11.14 4.03 3.74 3.94 5.38 10.56"></path>
                <path fill="#fff" d="M241.605 368.593v-1.73h4.51q1.34 0 1.34-1.34v-54.53q0-1.15-1.34-1.15h-4.51v-1.73h30.43q7.58 0 10.66-.86-.87 3.93-.87 10.94v4.51h-2.21l-1.44-9.79q-.19-2.11-2.68-2.11h-20.16v26.21h19.29q1.15 0 1.35-1.35l.48-5.95h1.72v17.28h-1.72l-.48-5.95q-.2-1.34-1.35-1.34h-19.29v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.66-.87Z"></path>
                <path fill="#fff" d="M315.235 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h19.58v1.73h-4.51q-1.34 0-1.34 1.15v54.91h19.1q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M358.625 368.593v-1.73h4.51q1.35 0 1.35-1.34v-54.53q0-1.15-1.35-1.15h-4.51v-1.73h30.43q7.59 0 10.66-.86-.86 3.93-.86 10.94v4.51h-2.21l-1.44-9.79q-.19-2.11-2.69-2.11h-20.16v26.21h19.3q1.15 0 1.34-1.35l.48-5.95h1.73v17.28h-1.73l-.48-5.95q-.19-1.34-1.34-1.34h-19.3v26.2h21.5q2.5 0 2.69-2.11l1.44-11.23h2.21v4.51q0 8.45.86 12.39-3.07-.87-10.65-.87Z"></path>
                <path fill="#fff" d="M435.815 309.743q-8.74 0-14.07 7.68t-5.33 21.03q0 13.34 5.38 20.93 5.38 7.58 13.49 7.58t11.33-4.18q3.21-4.17 3.21-12.24v-3.84q0-1.15-1.34-1.15h-6.43v-1.73h19.58v1.73h-2.59q-1.35 0-1.35 1.15v3.46q0 8.54-6.14 14.06-6.14 5.52-15.74 5.52-12.1 0-19.83-8.35-7.73-8.35-7.73-22.99 0-14.64 7.64-23.04 7.63-8.4 19.92-8.4 6.24 0 12.48 3.17 2.01 1.05 2.88 1.05 1.44 0 1.53-2.01l.1-1.63h1.82v16.6h-1.73q-.86-7.39-5.52-10.89-4.65-3.51-11.56-3.51"></path>
                <path fill="#fff" d="M516.935 368.593h-19.68v-1.73h6.24l-6.72-18.52h-21.12l-6.72 18.52h6.24v1.73h-14.5v-1.73h3.55q1.35 0 1.83-1.34l21.12-57.41h3.26l21.12 57.41q.48 1.34 1.82 1.34h3.56Zm-30.63-49.15-9.6 26.21h19.11Z"></path>
                <path fill="#fff" d="M519.335 368.593v-1.73h4.51q1.34 0 1.34-1.34v-54.53q0-1.15-1.34-1.15h-4.51v-1.73h19.58v1.73h-4.51q-1.35 0-1.35 1.15v54.91h19.11q2.49 0 2.69-2.11l1.44-11.23h2.2v4.51q0 8.45.87 12.39-3.07-.87-10.66-.87Z"></path>
              </g>
            </svg>
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
