import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet';
import { Users, Target, Lightbulb, CheckCircle, Info, Star } from 'lucide-react';

const TeamMember = ({ name, role, description }) => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-4">
      <CardTitle className="text-lg font-semibold mb-2">{name}</CardTitle>
      <p className="text-sm text-gray-600 mb-2">{role}</p>
      <p className="text-sm">{description}</p>
    </CardContent>
  </Card>
);

const About = () => {
  const teamMembers = [
    {
      name: "Juma Nasoro",
      role: "CEO & Co-founder",
      description: "With a strong vision and leadership, Juma steers ZaidiStudio toward new heights, ensuring we are at the forefront of AI innovation."
    },
    {
      name: "Vincent Omondi",
      role: "CTO & Co-founder",
      description: "Vincent brings his extensive knowledge in AI and technology strategy to lead the technical development at ZaidiStudio."
    },
    {
      name: "Mercy Mwaniki",
      role: "Business Development",
      description: "Mercy is the bridge between ZaidiStudio and its clients, building strong relationships and identifying opportunities for growth."
    },
    {
      name: "Zaeeyd Sana",
      role: "Lead AI Engineer",
      description: "As our Lead AI Engineer, Zaeeyd oversees the technical development and implementation of all AI projects."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>About ZaidiStudio - AI-Powered Business Solutions</title>
        <meta name="description" content="Learn about ZaidiStudio's mission to empower businesses with cutting-edge AI solutions. Meet our team of experts dedicated to transforming your business through AI innovation." />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 md:py-32 max-w-5xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-8 md:mb-12">About ZaidiStudio</h1>
        
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Info className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
            <h2 className="text-2xl font-semibold text-blue-800">Our Story</h2>
          </div>
          <p className="text-base mb-4 leading-relaxed">
            At ZaidiStudio, we are pioneering the future of AI-powered business solutions. With a passion for innovation and a drive for excellence, we empower companies across diverse industries to harness the transformative potential of artificial intelligence.
          </p>
          <p className="text-base leading-relaxed">
            From automation and machine learning to AI-driven insights, ZaidiStudio delivers practical solutions that give businesses a competitive edge in an increasingly digital world.
          </p>
        </section>

        <section className="mb-12 bg-blue-100 p-6 md:p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
            <h2 className="text-2xl font-semibold text-blue-800">Our Mission</h2>
          </div>
          <p className="text-base">
            To empower businesses of all sizes with advanced, cutting-edge AI solutions that simplify processes, drive growth, and unlock new opportunities. We believe that by democratizing AI, we can help companies thrive in a rapidly changing business landscape.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'AI Expertise: With a team of AI engineers and business strategists, we stay at the cutting edge of artificial intelligence.',
              'Results-Driven: Our success is measured by the tangible improvements we bring to your operations and bottom line.',
              'Client-Centric: We prioritize your needs, working closely to create personalized solutions that align with your goals.',
              'Innovation & Adaptability: Technology moves fast, and so do we. We constantly evolve our services to stay ahead of the curve.'
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Our Team</h2>
          </div>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Behind every success story is a diverse and talented team that brings the vision to life. At ZaidiStudio, we pride ourselves on having a dynamic team of AI experts, developers, and business strategists, each dedicated to making sure our clients succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;