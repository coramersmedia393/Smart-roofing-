
import React from 'react';

const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg">
                <i className="fas fa-tools text-white text-xl"></i>
              </div>
              <span className="ml-3 font-bold text-2xl text-white">SMART<span className="text-blue-500">ROOFING</span></span>
            </div>
            <p className="text-slate-400">
              Providing premium roofing solutions for residential and commercial properties since 1998. Quality you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Residential Roofing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Commercial Roofing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Roof Repair</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Roof Inspections</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1 mr-3"></i>
                <span>123 Roofing Way, Suite 100<br />Skyline City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-blue-500 mr-3"></i>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-blue-500 mr-3"></i>
                <span>info@smartroofing.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Smart Roofing. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-500 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
