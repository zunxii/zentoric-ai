import React from 'react'

const CTA = () => {
  return (<section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white"> <div className="container mx-auto px-4 md:px-6"> <div className="max-w-4xl mx-auto text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start building your custom AI models?</h2> <p className="text-xl text-white/90 mb-8">Join hundreds of businesses already using Zentoric to transform their operations with AI.</p> <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"> <a href="#" className="bg-white text-indigo-700 hover:bg-white/90 rounded-full px-8 py-3 font-medium transition transform hover:scale-105 shadow-lg">
    Start Your Free Trial </a> <a href="#" className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-8 py-3 font-medium transition">
      Schedule a Demo </a> 
      </div>
       </div>
        </div> 
      </section>
  );
};

export default CTA
