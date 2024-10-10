import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: "AI-Powered Customer Service",
      description: "24/7 automated customer support using advanced natural language processing.",
      icon: "🤖",
    },
    {
      title: "Smart Inventory Management",
      description: "Predictive analytics for optimal stock levels and reduced waste.",
      icon: "📊",
    },
    {
      title: "Automated Social Media Marketing",
      description: "AI-driven content creation and posting for maximum engagement.",
      icon: "📱",
    },
    {
      title: "Intelligent Lead Generation",
      description: "Machine learning algorithms to identify and nurture high-quality leads.",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-center text-gray-500">
            Empower your business with our cutting-edge AI solutions
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;