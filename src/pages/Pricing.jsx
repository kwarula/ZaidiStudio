import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingPlans from '../components/PricingPlans';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ZaidiStudio AI Automation",
    "description": "AI-powered business automation solutions",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "99",
      "highPrice": "999",
      "offerCount": "3"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Services Kenya Pricing | AI Agents & Automation Plans | ZaidiStudio</title>
        <meta name="description" content="Affordable AI services Kenya pricing. Compare AI agents, chatbots & automation plans. Transparent pricing for Kenyan businesses. Free consultation included." />
        <meta name="keywords" content="AI services Kenya pricing, AI agents Kenya cost, AI automation pricing Kenya, AI chatbots Kenya price, AI solutions Nairobi pricing" />
        <link rel="canonical" href="https://zaidistudio.co.ke/pricing" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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