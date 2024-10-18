import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-12">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Strategy Consulting"
              description="We help businesses develop comprehensive AI strategies tailored to their specific needs and goals."
            />
            <ServiceCard
              title="Custom AI Solutions"
              description="Our team of experts designs and implements bespoke AI solutions to address your unique challenges."
            />
            <ServiceCard
              title="AI Integration"
              description="We seamlessly integrate AI technologies into your existing systems and workflows for maximum efficiency."
            />
            <ServiceCard
              title="AI-Powered Analytics"
              description="Leverage the power of AI to gain deeper insights from your data and make data-driven decisions."
            />
            <ServiceCard
              title="AI Training and Workshops"
              description="We offer comprehensive training programs to help your team understand and utilize AI technologies effectively."
            />
            <ServiceCard
              title="AI Maintenance and Support"
              description="Our ongoing support ensures your AI systems continue to perform optimally and evolve with your business needs."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Services;
