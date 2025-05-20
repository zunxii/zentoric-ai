'use client'

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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted by innovative companies</h2>
          <p className="text-lg text-gray-600">See how businesses are transforming with custom AI models on Zentoric.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;