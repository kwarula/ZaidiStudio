import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Problem = () => {
  const problems = [
    "Losing potential customers due to inefficient processes",
    "Wasting valuable time on manual data entry",
    "Struggling to keep up with customer inquiries and support",
    "Marketing efforts not yielding expected results"
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-900">
          Is Your Business Struggling with Low Conversion Rates?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
              <p className="text-base text-gray-700">{problem}?</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;