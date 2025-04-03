
import React from 'react';
import { Eye, Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-brand-blue" />
              <span className="font-bold text-xl text-white">BlinkLens</span>
            </div>
            <p className="text-gray-400">
              AI-powered vision testing technology that helps you check your eyesight and estimate lens power from the comfort of your home.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "How It Works", "Features", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                "Blog", 
                "Research", 
                "Privacy Policy", 
                "Terms of Service", 
                "Eye Health Tips", 
                "Partners"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-brand-blue" />
                <span>support@blinklens.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-brand-blue" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <h4 className="text-white font-medium mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-3 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
                <button 
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-dark-blue text-white px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BlinkLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
