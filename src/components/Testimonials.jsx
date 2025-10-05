
import React from 'react';
import PremiumCard from './PremiumCard';
import { Avatar, AvatarFallback } from './ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ZaidiStudio helped us cut manual tasks by 80%. Our team now focuses on growth, not repetitive work.",
      author: "Sarah Kimani",
      role: "CEO",
      company: "TechVentures Kenya",
      image: "/vince.png"
    },
    {
      quote: "Within 3 months, we saw a 40% reduction in operational costs. The AI solutions are game-changing.",
      author: "James Maina", 
      role: "Operations Director",
      company: "Innovate Labs",
      image: "/juma.png"
    },
    {
      quote: "Our customer response time went from 24 hours to 2 minutes. The impact on customer satisfaction has been incredible.",
      author: "Mercy Wanjiku",
      role: "Customer Success Manager", 
      company: "Sereni Financial",
      image: "/mercy.png"
    },
    {
      quote: "The AI Starter Kit alone saved us 15 hours in the first week. I can't believe we waited so long to try this.",
      author: "Daniel Ochieng",
      role: "Marketing Director",
      company: "Nairobi Digital", 
      image: "/sana.png"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-section text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real businesses that transformed with AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-200 flex flex-col"
            >
              <blockquote className="text-base text-gray-700 leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
