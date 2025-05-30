import React from "react";

const CaseStudies = () => (
  <section className="section-padding bg-gray-50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-section text-gray-900 mb-4">
          See a Real Automation Workflow in Action
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Here’s an example of a real-world workflow that automates weekly marketing reports using AI and integrations.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/zaidistudi_n8n-workflow.png"
          alt="Example automation workflow: Weekly Marketing Report"
          className="rounded-lg shadow-lg max-w-full h-auto border"
          style={{ maxWidth: 1200 }}
        />
      </div>
    </div>
  </section>
);

export default CaseStudies;
