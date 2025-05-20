'use client'

import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Zentoric has completely transformed how we use AI in our business. We were able to create a custom model in hours instead of weeks.",
      author: "Sarah Johnson",
      role: "CTO, TechSolutions Inc."
    },
    {
      quote: "The no-code interface made it possible for our team to create AI models without needing specialized ML engineers. It's been a game-changer.",
      author: "Michael Chen",
      role: "Product Manager, DataDrive"
    },
    {
      quote: "We've reduced our AI development costs by 35% while increasing the speed of deployment. Zentoric is now an essential part of our tech stack.",
      author: "Emily Rodriguez",
      role: "AI Lead, Innovex"
    }
  ];

  return (
    <section className="pt-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333EA' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Accent glows */}
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-fuchsia-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-violet-300 font-medium">Customer Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-300">companies</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">See how businesses are transforming with custom AI models on Zentoric.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/30 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 hover:border-violet-800/30 transition-all duration-300 shadow-lg hover:shadow-violet-900/10 relative group"
            >
              <div className="absolute -top-6 -left-6 bg-violet-600/10 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 h-12 w-12 text-violet-500/10" />
                <div className="mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-violet-400 text-violet-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-8 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full border-2 border-zinc-800 overflow-hidden bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <span className="text-white font-medium text-lg">{testimonial.author.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Logos section */}
        <div className="mt-20 pt-12 border-t border-zinc-800/50">
          <div className="text-center mb-10">
            <p className="text-zinc-400 text-sm uppercase tracking-wider font-medium">Trusted by forward-thinking companies</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="h-8 w-24 bg-zinc-800/30 rounded-md blur-[1px] opacity-40"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;