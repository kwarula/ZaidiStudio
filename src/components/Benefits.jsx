import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "Save 10 Hours a Week",
      description: "Our AI automates repetitive tasks, freeing up your time for strategic work."
    },
    {
      title: "Increase Conversions by 50%",
      description: "Smart lead nurturing and personalized customer interactions drive more sales."
    },
    {
      title: "Cut Operational Costs by 30%",
      description: "Streamlined processes and reduced manual work lead to significant cost savings."
    },
    {
      title: "24/7 Customer Support",
      description: "AI-powered chatbots provide instant responses, improving customer satisfaction."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          Transform Your Business with ZaidiStudio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;