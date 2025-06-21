import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Lineage
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              How it Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              FAQ
            </a>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
              Start Your Journey
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                How it Works
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Testimonials
              </a>
              <a href="#faq" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                FAQ
              </a>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-lg font-medium w-full">
                Start Your Journey
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;