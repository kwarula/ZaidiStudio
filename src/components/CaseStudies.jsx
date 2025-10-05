
import React from "react";

const CaseStudies = () => (
  <section className="py-24 md:py-32 bg-gray-50">
    <div className="container">
      <div className="text-center mb-20">
        <h2 className="text-section text-gray-900 mb-6">
          See a Real Automation Workflow in Action
        </h2>
        <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
          Here's an example of a real-world workflow that automates weekly marketing reports using AI and integrations.
        </p>
      </div>
      
      <div className="flex justify-center">
        <div className="relative max-w-6xl w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 md:p-6 hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/zaidistudi_n8n-workflow.png"
              alt="Example automation workflow: Weekly Marketing Report"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudies;
