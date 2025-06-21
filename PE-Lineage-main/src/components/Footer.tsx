import React from 'react';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Lineage
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bridging ancient wisdom with modern technology. Your AI-powered companion for authentic Tai Chi practice and mastery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Practice Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Practice</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Getting Started</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Yang Family Forms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Progress Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Master Teachings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Community</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Lineage History</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Training Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Philosophy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Health Benefits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support Center</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Our Masters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Lineage AI. Honoring 25+ years of Yang Family tradition.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Lineage Ethics
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
            <Zap className="w-5 h-5" />
            <span>Begin Your Tai Chi Journey</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;