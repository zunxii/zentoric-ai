import { Check } from 'lucide-react';
import React from 'react'

const Pricing = () => {
const plans = [
{
name: "Starter",
price: "49",
features: [
"1 custom model",
"10,000 API calls/month",
"5GB data storage",
"Community support",
"Basic analytics"
],
popular: false
},
{
name: "Professional",
price: "199",
features: [
"5 custom models",
"100,000 API calls/month",
"25GB data storage",
"Priority support",
"Advanced analytics",
"Custom endpoints"
],
popular: true
},
{
name: "Enterprise",
price: "Contact us",
features: [
"Unlimited custom models",
"Unlimited API calls",
"Unlimited data storage",
"Dedicated support",
"Custom integration",
"On-premise deployment",
"SLA guarantees"
],
popular: false
}
];

return ( <section id="pricing" className="py-16 md:py-24 bg-gray-50"> <div className="container mx-auto px-4 md:px-6"> <div className="text-center max-w-3xl mx-auto mb-16"> <span className="inline-block bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm mb-4">
Pricing </span> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Choose the right plan for your needs</h2> <p className="text-lg text-gray-600">Simple, transparent pricing for businesses of all sizes.</p> </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`bg-white rounded-xl overflow-hidden border ${plan.popular ? 'border-indigo-600' : 'border-gray-200'} shadow-sm hover:shadow-md transition`}
        >
          {plan.popular && (
            <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
              Most Popular
            </div>
          )}
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <div className="mb-6">
              {plan.price !== "Contact us" ? (
                <>
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
              )}
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#" 
              className={`block w-full text-center rounded-full px-4 py-3 font-medium transition transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {plan.price === "Contact us" ? "Contact Sales" : "Get Started"}
            </a>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-600">Need a custom plan? <a href="#" className="text-indigo-600 font-medium">Contact us</a> for custom pricing.</p>
    </div>
  </div>
</section>

);
};

export default Pricing
