import React from 'react';

interface ModernHeroProps {
  landingImage: React.ReactNode;
}

const ModernHero = (props: ModernHeroProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-200 rounded-full mb-8">
            <svg 
              className="w-4 h-4 text-blue-600 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" 
              />
            </svg>
            <span className="text-blue-800 text-sm font-medium">Professional PDF Creation Made Simple</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Create and automate PDFs
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              with ease
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create professional PDFs with dynamic data. Design invoices, reports, and more using our intuitive drag-and-drop editor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="https://app.curatepdf.com/signup" 
              className="group bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              Start Creating for Free
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Professional results</span>
            </div>
          </div>
        </div>

        {/* Demo Preview */}
        <div className="mt-20 relative">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Mock browser header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm text-gray-700">CuratePDF - PDF Editor</div>
              </div>
              
              {/* Actual app screenshot */}
              <div className="bg-gray-50">
                {props.landingImage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero; 