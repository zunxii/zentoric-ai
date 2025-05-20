import { ChevronDown } from 'lucide-react';
import React from 'react'

const FAQ = () => {
const faqs = [
{
question: "Do I need machine learning expertise to use Zentoric?",
answer: "No, Zentoric is designed as a no-code platform. Our intuitive interface and pre-configured templates make it easy for anyone to create custom AI models without ML expertise."
},
{
question: "How secure is my data on Zentoric?",
answer: "We take data security very seriously. All data is encrypted in transit and at rest. We never use your data to train other models, and you retain full ownership of your data and models."
},
{
question: "What types of models can I train on Zentoric?",
answer: "Currently, Zentoric supports fine-tuning of language models like Llama 2. We're continuously adding support for new model architectures and use cases."
},
{
question: "How long does it take to train a custom model?",
answer: "Training time depends on the size of your dataset and the complexity of your model. Typically, models are ready within a few hours, compared to weeks with traditional methods."
},
{
question: "Can I integrate my custom models with my existing applications?",
answer: "Yes, Zentoric provides API access to your trained models. We generate API keys and documentation for your custom endpoints, making integration seamless."
},
{
question: "Is there a limit to how many models I can train?",
answer: "The number of models you can train depends on your subscription plan. We offer plans for businesses of all sizes, from startups to enterprises."
}
];

return ( <section id="faq" className="py-16 md:py-24 bg-white"> <div className="container mx-auto px-4 md:px-6"> <div className="text-center max-w-3xl mx-auto mb-16"> <span className="inline-block bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm mb-4">
FAQ </span> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2> <p className="text-lg text-gray-600">Everything you need to know about Zentoric.</p> </div>
    <div className="max-w-4xl mx-auto divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-6">
          <button className="flex justify-between items-center w-full text-left">
            <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </button>
          <div className="mt-3">
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-600">Have more questions? <a href="#" className="text-indigo-600 font-medium">Contact our support team</a>.</p>
    </div>
  </div>
</section>
);
};

export default FAQ
