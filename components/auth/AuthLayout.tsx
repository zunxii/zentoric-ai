'use client'

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, showBackButton = true }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background patterns - matching hero section */}
      <div className="absolute inset-0">
        {/* Dark radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glows */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Back button */}
      {showBackButton && (
        <div className="absolute top-6 left-6 z-20">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      )}

      {/* Logo */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <Link href="/" className="text-2xl font-bold text-white">
          Zentoric
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.15)]">
          {children}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-8 -bottom-8 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AuthLayout;