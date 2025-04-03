
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Eye } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-brand-blue" />
          <span className="font-bold text-xl md:text-2xl text-brand-dark-blue">BlinkLens</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-brand-dark-gray hover:text-brand-blue transition-colors">Home</a>
          <a href="#how-it-works" className="text-brand-dark-gray hover:text-brand-blue transition-colors">How It Works</a>
          <a href="#features" className="text-brand-dark-gray hover:text-brand-blue transition-colors">Features</a>
          <a href="#testimonials" className="text-brand-dark-gray hover:text-brand-blue transition-colors">Results</a>
          <Link to="/test">
            <Button className="bg-brand-blue hover:bg-brand-dark-blue text-white">
              Try Vision Test
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-brand-dark-gray" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-brand-dark-gray px-2 py-3 hover:bg-brand-light-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              className="text-brand-dark-gray px-2 py-3 hover:bg-brand-light-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-brand-dark-gray px-2 py-3 hover:bg-brand-light-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-brand-dark-gray px-2 py-3 hover:bg-brand-light-gray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <Link 
              to="/test" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button 
                className="w-full bg-brand-blue hover:bg-brand-dark-blue text-white"
              >
                Try Vision Test
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
