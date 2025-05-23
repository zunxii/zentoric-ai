'use client'

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, ArrowDownRight, ChevronRight, Zap, Upload, Settings, Rocket, Code, MousePointer, Play, Pause, RotateCcw } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const steps: Step[] = [
    {
      number: "01",
      title: "Select Your Model",
      description: "Choose from our curated selection of foundation models optimized for different use cases.",
      icon: <MousePointer className="w-6 h-6" />,
      color: "violet",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      number: "02", 
      title: "Upload Your Data",
      description: "Simply upload your CSV or text files. Our system handles the preprocessing and validation.",
      icon: <Upload className="w-6 h-6" />,
      color: "fuchsia",
      gradient: "from-fuchsia-500 to-pink-600"
    },
    {
      number: "03",
      title: "Configure Training",
      description: "Set your parameters with our intuitive interface. No machine learning expertise required.",
      icon: <Settings className="w-6 h-6" />,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      number: "04",
      title: "Launch & Monitor",
      description: "Start training with one click and track progress in real-time on your dashboard.",
      icon: <Rocket className="w-6 h-6" />,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      number: "05",
      title: "Deploy & Integrate",
      description: "Get API keys for your trained model and integrate it into your applications.",
      icon: <Code className="w-6 h-6" />,
      color: "orange",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const getColorValue = (color: string, variant: 'primary' | 'secondary' = 'primary') => {
    const colors = {
      violet: {
        primary: 'rgb(147 51 234)',
        secondary: 'rgb(192 132 252)'
      },
      fuchsia: {
        primary: 'rgb(217 70 239)',
        secondary: 'rgb(244 114 182)'
      },
      blue: {
        primary: 'rgb(59 130 246)',
        secondary: 'rgb(147 197 253)'
      },
      emerald: {
        primary: 'rgb(16 185 129)',
        secondary: 'rgb(110 231 183)'
      },
      orange: {
        primary: 'rgb(249 115 22)',
        secondary: 'rgb(253 186 116)'
      }
    };
    return colors[color as keyof typeof colors]?.[variant] || colors.violet[variant];
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 2;
          if (newProgress >= 100) {
            // Use setTimeout to ensure smooth transition
            setTimeout(() => {
              setActiveStep(current => (current + 1) % steps.length);
              setProgress(0);
            }, 50);
            return 100;
          }
          return newProgress;
        });
      }, 80);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = () => {
    setActiveStep(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section id="how-it-works" className="py-14 md:py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Dynamic background pattern */}
        <div 
          className="absolute inset-0 opacity-5 transition-transform duration-1000 ease-in-out" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%239333EA' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            transform: `translateX(${activeStep * -10}px) translateY(${activeStep * -5}px)`
          }}
        />
        
        {/* Animated accent glows */}
        <div 
          className="absolute w-1/2 h-1/3 blur-3xl rounded-full transition-all duration-1000 ease-in-out"
          style={{
            background: `radial-gradient(circle, ${getColorValue(steps[activeStep].color)} / 0.1, transparent)`,
            bottom: '0',
            right: `${25 + activeStep * 10}%`,
          }}
        />
        <div 
          className="absolute w-1/3 h-1/3 blur-3xl rounded-full transition-all duration-1000 ease-in-out"
          style={{
            background: `radial-gradient(circle, ${getColorValue(steps[activeStep].color, 'secondary')} / 0.1, transparent)`,
            top: '25%',
            left: `${25 + activeStep * 5}%`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="text-violet-300 font-medium">The Journey</span>
            <Zap className="w-4 h-4 text-violet-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Model Creation Journey</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">Experience the future of AI development with our interactive workflow.</p>
        </div>

        {/* Interactive Controls */}
        <div className="flex justify-center items-center space-x-4 mb-32">
          <button
            onClick={togglePlayback}
            className="flex items-center space-x-2 bg-violet-900/30 hover:bg-violet-900/50 border border-violet-800/40 rounded-lg px-4 py-2 text-violet-300 hover:text-violet-200 transition-all duration-200"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="text-sm">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            onClick={resetAnimation}
            className="flex items-center space-x-2 bg-zinc-900/50 hover:bg-zinc-900/70 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-400 hover:text-zinc-300 transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Reset</span>
          </button>
        </div>

        {/* Main Interactive Process Display - Landscape Oriented */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Hub - Smaller size */}
          <div className="flex justify-center mb-8">
            <div className="absolute top-35">
              <div 
                className="w-24 h-24 rounded-full border-4 bg-zinc-900 flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-500"
                style={{
                  borderColor: getColorValue(steps[activeStep].color),
                  boxShadow: `0 0 30px ${getColorValue(steps[activeStep].color)} / 0.3`
                }}
              >
                {/* Progress ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 96 96">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    fill="none"
                    stroke="rgb(39 39 42)"
                    strokeWidth="6"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    fill="none"
                    stroke={getColorValue(steps[activeStep].color)}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                    className="transition-all duration-300 ease-out"
                  />
                </svg>
                
                {/* Icon */}
                <div className="relative z-10 text-white transform transition-all duration-500 scale-110">
                  {steps[activeStep].icon}
                </div>
              </div>
              
              {/* Step number floating above */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 w-full py-1 text-sm font-mono text-zinc-300 flex items-center justify-center gap-1">
                  <span>Step</span> <span>{steps[activeStep].number}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Step Cards arranged in a more landscape-friendly ellipse */}
          <div className="relative w-full h-72 md:h-80">
            {steps.map((step, index) => {
              // Create a more horizontal ellipse layout
              const angle = (index * 72) - 90; // Still 72 degrees between steps
              const radiusX = 480; // Horizontal radius - wider
              const radiusY = 200; // Vertical radius - smaller for landscape
              const x = Math.cos(angle * Math.PI / 180) * radiusX;
              const y = Math.sin(angle * Math.PI / 180) * radiusY;
              const isActive = index === activeStep;
                
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 cursor-pointer group"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onClick={() => handleStepClick(index)}
                >
                  <div 
                    className={`
                      w-56 p-5 rounded-xl border backdrop-blur-sm transition-all duration-500 transform
                      ${isActive 
                        ? 'bg-zinc-900/90 border-zinc-700 scale-105 shadow-2xl' 
                        : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/70 hover:border-zinc-700 hover:scale-102'
                      }
                    `}
                    style={{
                      boxShadow: isActive ? `0 15px 30px ${getColorValue(step.color)} / 0.2` : undefined
                    }}
                  >
                    {/* Connection line to center */}
                            <div className={`absolute top-1/2 left-1/2 origin-left transition-all duration-500 ${
                                isActive ? 'opacity-60' : 'opacity-20'
                              }`}
                              style={{
                                height: '2px',
                                background: `linear-gradient(90deg, transparent, ${getColorValue(step.color)})`,
                                width: `${Math.sqrt(x * x + y * y) - 80}px`,
                                transform: `rotate(${Math.atan2(y, x) * 180 / Math.PI + 180}deg) translateY(-50%)`,
                                transformOrigin: '0 50%'
                              }}
                            />
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive ? 'shadow-lg' : ''
                        }`}
                        style={{
                          background: isActive 
                            ? `linear-gradient(135deg, ${getColorValue(step.color)}, ${getColorValue(step.color, 'secondary')})` 
                            : 'rgb(39 39 42)'
                        }}
                      >
                        <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                          <div className="w-5 h-5">{step.icon}</div>
                        </div>
                      </div>
                      <span className={`font-mono text-sm transition-colors duration-300 ${
                        isActive ? 'text-violet-400' : 'text-zinc-500'
                      }`}>
                        {step.number}
                      </span>
                    </div>
                    
                    <h3 className={`font-semibold mb-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-zinc-300'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-zinc-300' : 'text-zinc-500'
                    }`}>
                      {step.description}
                    </p>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step indicator dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-violet-500 scale-125 shadow-lg shadow-violet-500/50' 
                    : 'bg-zinc-700 hover:bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-42 mx-auto max-w-6xl bg-zinc-900/30 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl shadow-violet-900/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center space-x-2 bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-full px-3 py-1 text-xs mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
                <span className="text-violet-300 font-medium">Advanced Technology</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Training Pipeline</h3>
              <p className="text-zinc-300 mb-8">Our serverless architecture handles all the complexity behind the scenes, from data preprocessing to model deployment.</p>
              
              <div className="space-y-5">
                {[
                  "Automatic data validation and preprocessing",
                  "Parameter-Efficient Fine-Tuning (PEFT)",
                  "Serverless job queueing system",
                  "Optimized resource allocation",
                  "Automatic model evaluation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mr-4 mt-0.5 h-6 w-6 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-violet-500/40 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-violet-400" />
                    </div>
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-zinc-800 p-8 md:p-12 text-white flex items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-violet-900/30 backdrop-blur-sm border border-violet-800/40 rounded-full px-3 py-1 text-xs mb-6">
                  <span className="text-violet-300 font-medium">Results</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">90% Reduction</h3>
                <p className="text-zinc-300 text-lg mb-8">in AI model customization time compared to traditional methods.</p>
                
                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6">
                  <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl backdrop-blur-sm">
                    <p className="text-zinc-400 text-sm mb-1">Traditional Approach</p>
                    <p className="font-bold text-2xl text-white">2-3 Weeks</p>
                    <div className="flex items-center mt-3 text-zinc-400 text-sm">
                      <span>Manual pipeline setup</span>
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <ArrowDownRight className="h-8 w-8 text-violet-400" />
                  </div>
                  
                  <div className="bg-violet-900/20 border border-violet-800/30 p-5 rounded-xl backdrop-blur-sm relative overflow-hidden shadow-lg shadow-violet-500/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent"></div>
                    <div className="relative z-10">
                      <p className="text-violet-300 text-sm mb-1">With Zentoric</p>
                      <p className="font-bold text-2xl text-white">2-3 Hours</p>
                      <div className="flex items-center mt-3 text-violet-300 text-sm">
                        <span>Automated workflow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;