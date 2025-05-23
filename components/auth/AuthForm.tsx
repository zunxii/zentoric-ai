'use client'

import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface AuthFormProps {
  type: 'login' | 'register' | 'forgot-password';
}

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (type !== 'forgot-password') {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      if (type === 'register') {
        if (!formData.firstName) {
          newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
          newErrors.lastName = 'Last name is required';
        }
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', { type, data: formData });
      // Handle success (redirect, show success message, etc.)
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'login': return 'Welcome back';
      case 'register': return 'Create your account';
      case 'forgot-password': return 'Reset your password';
      default: return '';
    }
  };

  const getSubtitle = () => {
    switch (type) {
      case 'login': return 'Sign in to your Zentoric account';
      case 'register': return 'Start building AI models without code';
      case 'forgot-password': return 'Enter your email to receive reset instructions';
      default: return '';
    }
  };

  const getButtonText = () => {
    if (isLoading) return 'Please wait...';
    switch (type) {
      case 'login': return 'Sign In';
      case 'register': return 'Create Account';
      case 'forgot-password': return 'Send Reset Link';
      default: return '';
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{getTitle()}</h1>
        <p className="text-zinc-400">{getSubtitle()}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {type === 'register' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300 mb-2">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName || ''}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 bg-zinc-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.firstName 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20'
                  }`}
                  placeholder="John"
                />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300 mb-2">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName || ''}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 bg-zinc-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.lastName 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20'
                  }`}
                  placeholder="Doe"
                />
              </div>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
              )}
            </div>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-4 py-3 bg-zinc-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500/20' 
                  : 'border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20'
              }`}
              placeholder="john@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        {type !== 'forgot-password' && (
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-12 pr-12 py-3 bg-zinc-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.password 
                    ? 'border-red-500 focus:ring-red-500/20' 
                    : 'border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20'
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password}</p>
            )}
          </div>
        )}

        {type === 'register' && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword || ''}
                onChange={handleInputChange}
                className={`w-full pl-12 pr-12 py-3 bg-zinc-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.confirmPassword 
                    ? 'border-red-500 focus:ring-red-500/20' 
                    : 'border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20'
                }`}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
            )}
          </div>
        )}

        {type === 'login' && (
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-violet-600 bg-zinc-900 border-zinc-700 rounded focus:ring-violet-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-zinc-400">Remember me</span>
            </label>
            <Link 
              href="/forgot-password" 
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-6 py-3 font-medium transition-all transform hover:translate-y-[-1px] shadow-lg shadow-violet-500/20 flex items-center justify-center"
        >
          {getButtonText()}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </button>
      </form>

      {type !== 'forgot-password' && (
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-zinc-500">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border border-zinc-800 rounded-lg bg-zinc-900/60 backdrop-blur-sm text-sm font-medium text-zinc-300 hover:bg-zinc-800/80 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="ml-2">Google</span>
            </button>
            
            <button className="w-full inline-flex justify-center py-3 px-4 border border-zinc-800 rounded-lg bg-zinc-900/60 backdrop-blur-sm text-sm font-medium text-zinc-300 hover:bg-zinc-800/80 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2">GitHub</span>
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        {type === 'login' && (
          <p className="text-zinc-400">
            Don't have an account?{' '}
            <Link href="/register" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Sign up
            </Link>
          </p>
        )}
        {type === 'register' && (
          <p className="text-zinc-400">
            Already have an account?{' '}
            <Link href="/login" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        )}
        {type === 'forgot-password' && (
          <p className="text-zinc-400">
            Remember your password?{' '}
            <Link href="/login" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;