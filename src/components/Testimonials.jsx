
import React from 'react';
import PremiumCard from './PremiumCard';

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
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Real feedback from real businesses that transformed with AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <PremiumCard key={index} className="p-6 h-full flex flex-col">
              <blockquote className="text-body text-gray-700 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-caption text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
