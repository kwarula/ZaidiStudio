
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
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">
            Introducing ZaidiStudio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating custom AI-powered automation solutions that transform your business operations. Our team of experts has helped hundreds of businesses like yours overcome challenges and achieve remarkable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-1">
          <div className="bg-white rounded-3xl p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold mb-6 text-blue-900">
                  3+ Years of Excellence in AI and Automation
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We've developed a unique approach that combines cutting-edge technology with deep industry insights to deliver exceptional results for businesses across Kenya.
                </p>
                <ul className="space-y-4">
                  {[
                    "Custom AI solutions tailored to your needs",
                    "Proven track record of success",
                    "Expert team of AI specialists",
                    "Continuous support and optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/3">
                <div className="space-y-8">
                  <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center">
                      <h4 className="text-5xl font-bold text-blue-600 mb-2 animate-fade-in">90%</h4>
                      <p className="text-gray-600 text-lg">Average Efficiency Increase</p>
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center">
                      <h4 className="text-5xl font-bold text-green-500 mb-2 animate-fade-in">40%</h4>
                      <p className="text-gray-600 text-lg">Cost Reduction</p>
                    </div>
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
