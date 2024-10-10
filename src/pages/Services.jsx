import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Robot, Workflow, Database, Brain, BarChart3, Search, MessageSquare, Shield } from 'lucide-react';

const ServiceCategory = ({ title, services }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <service.icon className="w-8 h-8 text-blue-500 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
          </div>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  const serviceCategories = [
    {
      title: "Autonomous Agent Development",
      services: [
        {
          title: "Workflow Automation",
          description: "Optimize operations with intelligent agents that automate tasks, make decisions, and adapt in real-time.",
          icon: Workflow
        },
        {
          title: "Natural Language to SQL",
          description: "Query databases using plain English, empowering non-technical staff and enhancing data accessibility.",
          icon: Database
        },
        {
          title: "Complex Data Pipelines",
          description: "Develop efficient data pipelines that transform raw data into actionable insights.",
          icon: Brain
        },
        {
          title: "Self-Adaptive Decision Systems",
          description: "Build decision systems that continuously learn and evolve with your business using real-time data and predictive analytics.",
          icon: BarChart3
        }
      ]
    },
    {
      title: "Enterprise Consulting",
      services: [
        {
          title: "Strategy Development",
          description: "Develop comprehensive AI strategies tailored to your business needs, from ideation to execution.",
          icon: Search
        },
        {
          title: "Performance Evaluation",
          description: "Assess the effectiveness of your AI initiatives to ensure alignment with goals and expected results.",
          icon: BarChart3
        },
        {
          title: "Use Case Identification",
          description: "Analyze operations to pinpoint the most valuable AI use cases for your business.",
          icon: Search
        },
        {
          title: "Feasibility Assessments",
          description: "Conduct thorough assessments to ensure AI initiatives are viable and aligned with technical and business goals.",
          icon: BarChart3
        }
      ]
    },
    {
      title: "Chatbot Development",
      services: [
        {
          title: "GPT Development",
          description: "Create advanced chatbots powered by cutting-edge GPT models for human-like interactions.",
          icon: MessageSquare
        },
        {
          title: "Secure Solutions",
          description: "Build chatbots with robust security features to protect your data without compromising functionality.",
          icon: Shield
        },
        {
          title: "Knowledge Response",
          description: "Develop chatbots that tap into vast data sources for real-time, context-aware information delivery.",
          icon: Brain
        },
        {
          title: "Model Tuning",
          description: "Optimize chatbots for your specific use case, ensuring peak performance and relevant interactions.",
          icon: Robot
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-8">
            Our Services
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-center text-gray-500 mb-12">
            Harness the power of AI to transform your business with ZaidiStudio's cutting-edge solutions.
          </p>
          {serviceCategories.map((category, index) => (
            <ServiceCategory key={index} title={category.title} services={category.services} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;