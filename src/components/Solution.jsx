import React from 'react';

const Solution = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Introducing ZaidiStudio: Your AI-Powered Business Solution
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              At ZaidiStudio, we specialize in creating custom AI-powered automation solutions that transform your business operations. Our team of experts has helped hundreds of businesses like yours overcome challenges and achieve remarkable growth.
            </p>
            <p className="text-lg mb-4">
              With over a decade of experience in AI and automation, we've developed a unique approach that combines cutting-edge technology with deep industry insights.
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>Streamline your processes</li>
              <li>Boost your conversion rates</li>
              <li>Save time and reduce costs</li>
              <li>Improve customer satisfaction</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            {/* Replace with an actual image or video of your team */}
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;