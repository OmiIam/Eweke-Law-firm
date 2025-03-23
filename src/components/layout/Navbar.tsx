import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  User,
  LucideIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const navLinks = [
    {
      title: 'About Us',
      href: '/about',
      dropdown: [
        { title: 'Our History', href: '/about/history' },
        { title: 'Our Team', href: '/about/team' },
        { title: 'Mission & Values', href: '/about/mission' },
      ],
    },
    {
      title: 'Practice Areas',
      href: '/practice-areas',
      dropdown: [
        { title: 'Corporate Law', href: '/practice-areas/corporate' },
        { title: 'Litigation', href: '/practice-areas/litigation' },
        { title: 'Real Estate', href: '/practice-areas/real-estate' },
        { title: 'Intellectual Property', href: '/practice-areas/ip' },
        { title: 'Family Law', href: '/practice-areas/family' },
      ],
    },
    {
      title: 'Attorneys',
      href: '/attorneys',
      dropdown: [
        { title: 'Partners', href: '/attorneys/partners' },
        { title: 'Associates', href: '/attorneys/associates' },
        { title: 'Of Counsel', href: '/attorneys/of-counsel' },
      ],
    },
    {
      title: 'News & Insights',
      href: '/news',
      dropdown: [
        { title: 'Firm News', href: '/news/firm' },
        { title: 'Blog', href: '/news/blog' },
        { title: 'Publications', href: '/news/publications' },
        { title: 'Case Studies', href: '/news/case-studies' },
      ],
    },
    {
      title: 'Careers',
      href: '/careers',
      dropdown: [
        { title: 'Current Openings', href: '/careers/openings' },
        { title: 'Life at EJ EWEKE', href: '/careers/life' },
        { title: 'Benefits', href: '/careers/benefits' },
      ],
    },
    {
      title: 'Contact',
      href: '/contact',
      dropdown: null,
    },
  ];

  return (
    <header className="relative z-50">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-lg flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+1234567890" className="flex items-center space-x-1 nav-link-light">
              <Phone size={14} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@ejeweke.com" className="flex items-center space-x-1 nav-link-light">
              <Mail size={14} />
              <span>info@ejeweke.com</span>
            </a>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>123 Legal Street, New York, NY</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm" className="nav-link-light flex items-center gap-1 hover:bg-white/10">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <button
                  className="px-3 py-2 rounded-md text-dark hover:text-accent flex items-center space-x-1 font-medium"
                  onClick={() => toggleDropdown(link.title)}
                >
                  <span>{link.title}</span>
                  {link.dropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                </button>
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top scale-95 group-hover:scale-100">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-light hover:text-accent transition-colors duration-150"
                          role="menuitem"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border-2 border-bluegray rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-light transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={18} />
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${
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
              className="w-full pl-10 pr-4 py-2 border border-bluegray rounded-md focus:outline-none focus:border-primary bg-light"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={18} />
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.title} className="py-1">
                <button
                  className="flex justify-between items-center w-full py-2 px-3 rounded-md hover:bg-light text-left font-medium"
                  onClick={() => toggleDropdown(link.title)}
                >
                  <span>{link.title}</span>
                  {link.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        activeDropdown === link.title ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {link.dropdown && activeDropdown === link.title && (
                  <div className="pl-4 mt-1 border-l-2 border-bluegray">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block py-2 px-3 text-sm hover:text-red"
                        onClick={toggleMobileMenu}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-bluegray/30">
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-red" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@ejeweke.com" className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-red" />
                <span>info@ejeweke.com</span>
              </a>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-red" />
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
