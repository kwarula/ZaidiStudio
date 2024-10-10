import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingPlans from '../components/PricingPlans';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Pricing Plans
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <PricingPlans />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;