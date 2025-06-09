import React, { useState, useEffect } from 'react';

interface ModernHeaderProps {
  imageComponent: React.ReactNode;
}

const ModernHeader = (props: ModernHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            {props.imageComponent}
            
            <span className="text-2xl font-bold text-gray-800">CuratePDF</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#templates" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Templates
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Pricing
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://app.curatepdf.com/login" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Sign In
            </a>
            <a 
              href="https://app.curatepdf.com/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Features
              </a>
              <a 
                href="#templates" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Templates
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Pricing
              </a>
              <div className="pt-3 border-t border-gray-200 flex flex-col space-y-2">
                <a 
                  href="https://app.curatepdf.com/login" 
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Sign In
                </a>
                <a 
                  href="https://app.curatepdf.com/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default ModernHeader; 