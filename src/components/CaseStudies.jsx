
import React from "react";

const CaseStudies = () => (
  <section className="section-padding bg-gray-50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-section text-gray-900 mb-4">
          See a Real Automation Workflow in Action
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Here's an example of a real-world workflow that automates weekly marketing reports using AI and integrations.
        </p>
      </div>
      
      {/* Enhanced responsive image container with glow */}
      <div className="flex justify-center">
        <div className="relative group max-w-7xl w-full">
          {/* Glowing background effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Image container */}
          <div className="relative bg-white p-2 rounded-xl shadow-2xl border border-gray-100">
            <img
              src="/zaidistudi_n8n-workflow.png"
              alt="Example automation workflow: Weekly Marketing Report"
              className="w-full h-auto rounded-lg shadow-inner"
            />
          </div>
          
          {/* Subtle ambient glow always visible */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-xl blur-lg -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudies;
