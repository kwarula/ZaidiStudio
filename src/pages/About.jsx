import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = ({ title, description, icon: Icon }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const TeamMember = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4 mx-auto object-cover" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const About = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      description: "To empower businesses with cutting-edge AI solutions that drive growth and efficiency.",
      icon: Target
    },
    {
      title: "Our Approach",
      description: "We combine deep industry knowledge with advanced AI technology to deliver tailored solutions.",
      icon: Lightbulb
    },
    {
      title: "Our Team",
      description: "A diverse group of AI experts, developers, and business strategists committed to your success.",
      icon: Users
    }
  ];

  const teamMembers = [
    { name: "Juma Nasoro", role: "CEO & Cofounder", imageUrl: "/placeholder.svg" },
    { name: "Vincent Omondi", role: "CTO & Cofounder", imageUrl: "/placeholder.svg" },
    { name: "Mercy Mwaniki", role: "Business Development", imageUrl: "/placeholder.svg" },
    { name: "Zaeeyd Sana", role: "Lead AI Engineer", imageUrl: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-12">
            About ZaidiStudio
          </h1>
          
          <section className="mb-16">
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              ZaidiStudio is at the forefront of AI-powered business solutions. We're dedicated to helping companies leverage the power of artificial intelligence to streamline operations, boost productivity, and drive growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutSections.map((section, index) => (
                <AboutSection key={index} {...section} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;