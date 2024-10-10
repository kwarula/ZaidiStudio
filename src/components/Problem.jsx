import React from 'react';

const Problem = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Is Your Business Struggling with Low Conversion Rates?
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="mr-2 text-red-500">•</span>
            Are you losing potential customers due to inefficient processes?
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-red-500">•</span>
            Is manual data entry eating up your valuable time?
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-red-500">•</span>
            Are you struggling to keep up with customer inquiries and support?
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-red-500">•</span>
            Is your marketing efforts not yielding the results you expected?
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Problem;