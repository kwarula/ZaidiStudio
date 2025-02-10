
import React from 'react';
import { CheckCircle2, Zap, BarChart2, Clock, Users2 } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Streamline your processes",
      description: "Automate repetitive tasks and workflows to save valuable time"
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-green-500" />,
      title: "Boost your conversion rates",
      description: "Leverage AI to optimize your sales funnel and increase conversions"
    },
    {
      icon: <Clock className="w-10 h-10 text-purple-500" />,
      title: "Save time and reduce costs",
      description: "Cut operational costs while improving efficiency and productivity"
    },
    {
      icon: <Users2 className="w-10 h-10 text-orange-500" />,
      title: "Improve customer satisfaction",
      description: "Deliver faster, more personalized customer experiences"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Introducing ZaidiStudio: Your AI-Powered Business Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ZaidiStudio, we specialize in creating custom AI-powered automation solutions that transform your business operations. Our team of experts has helped hundreds of businesses like yours overcome challenges and achieve remarkable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                3+ Years of Excellence in AI and Automation
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We've developed a unique approach that combines cutting-edge technology with deep industry insights to deliver exceptional results for businesses across Kenya.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom AI solutions tailored to your needs",
                  "Proven track record of success",
                  "Expert team of AI specialists",
                  "Continuous support and optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                  <h4 className="text-4xl font-bold text-blue-600 mb-2">90%</h4>
                  <p className="text-gray-600">Average Efficiency Increase</p>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-green-500 mb-2">40%</h4>
                    <p className="text-gray-600">Cost Reduction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
