'use client'

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0">
        {/* Dark radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative h-8 w-8 mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg" />
                <div className="absolute inset-0.5 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-bold">Z</span>
                </div>
              </div>
              <span className="font-extrabold text-xl text-white">Zentoric</span>
            </div>
            <p className="text-zinc-400 mb-6">Create, train, and deploy custom AI models with zero machine learning expertise.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-violet-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-violet-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-violet-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-zinc-400 mb-4">Stay updated with the latest features and releases.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-900/60 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-500 border border-zinc-800 border-r-0"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white px-4 py-2 rounded-r-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-zinc-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 mb-4 md:mb-0">© 2025 Zentoric. All rights reserved.</p>
          <div className="flex flex-wrap space-x-6">
            <a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-400 hover:text-violet-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;