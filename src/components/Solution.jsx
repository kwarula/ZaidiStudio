import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Solution = () => {
  const benefits = [
    "Streamline your processes",
    "Boost your conversion rates",
    "Save time and reduce costs",
    "Improve customer satisfaction"
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          Introducing ZaidiStudio: Your AI-Powered Business Solution
        </h2>
        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <p className="text-lg mb-6 text-center lg:text-left">
              At ZaidiStudio, we specialize in creating custom AI-powered automation solutions that transform your business operations. Our team of experts has helped hundreds of businesses like yours overcome challenges and achieve remarkable growth.
            </p>
            <p className="text-lg mb-8 text-center lg:text-left">
              With over a decade of experience in AI and automation, we've developed a unique approach that combines cutting-edge technology with deep industry insights.
            </p>
            <div className="flex justify-center lg:justify-start">
              <ul className="space-y-4 inline-block text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/01M1dV6xcvI"
                title="ZaidiLab Founder on Leveraging AI for Creators and Businesses"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Watch our founder discuss how creators and businesses can leverage the power of AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;