// import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">MechConsult</h3>
          <p className="text-gray-400">
            Leading mechanical engineering consultancy delivering innovative solutions for complex industrial challenges.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
            <li><Link to="/projects" className="text-gray-400 hover:text-white transition">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-gray-400">123 Engineering St, Tech City</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-gray-400">+1 234 567 8900</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span className="text-gray-400">info@mechconsult.com</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} MechConsult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;