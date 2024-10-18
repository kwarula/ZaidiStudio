import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet';
import { Users, Target, Lightbulb, CheckCircle } from 'lucide-react';

const TeamMember = ({ name, role, imageUrl, description }) => (
  <Card className="overflow-hidden h-full">
    <CardHeader className="p-0">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
    </CardHeader>
    <CardContent className="p-6">
      <CardTitle className="text-xl font-semibold mb-2">{name}</CardTitle>
      <p className="text-sm text-gray-600 mb-3">{role}</p>
      <p className="text-sm">{description}</p>
    </CardContent>
  </Card>
);

const About = () => {
  const teamMembers = [
    {
      name: "Juma Nasoro",
      role: "CEO & Co-founder",
      imageUrl: "/juma.png",
      description: "With a strong vision and leadership, Juma steers ZaidiStudio toward new heights, ensuring we are at the forefront of AI innovation. He is passionate about helping businesses transform through AI and drives our mission to empower companies globally."
    },
    {
      name: "Vincent Omondi",
      role: "CTO & Co-founder",
      imageUrl: "/vince.png",
      description: "Vincent brings his extensive knowledge in AI and technology strategy to lead the technical development at ZaidiStudio. With a background in AI systems and automation, he ensures our solutions are built for scalability and success."
    },
    {
      name: "Mercy Mwaniki",
      role: "Business Development",
      imageUrl: "/mercy.png",
      description: "Mercy is the bridge between ZaidiStudio and its clients, building strong relationships and identifying opportunities for growth. Her experience in business strategy and development helps us align our solutions with market needs and client goals."
    },
    {
      name: "Zaeeyd Sana",
      role: "Lead AI Engineer",
      imageUrl: "/sana.png",
      description: "As our Lead AI Engineer, Zaeeyd oversees the technical development and implementation of all AI projects. With a deep understanding of machine learning, natural language processing, and data science, Zaeeyd ensures our AI solutions deliver exceptional performance and impact."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>About ZaidiStudio - AI-Powered Business Solutions</title>
        <meta name="description" content="Learn about ZaidiStudio's mission to empower businesses with cutting-edge AI solutions. Meet our team of experts dedicated to transforming your business through AI innovation." />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">About ZaidiStudio</h1>
        
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <p className="text-xl mb-6 leading-relaxed">
            At ZaidiStudio, we are pioneering the future of AI-powered business solutions. With a passion for innovation and a drive for excellence, we empower companies across diverse industries to harness the transformative potential of artificial intelligence. Our solutions are designed to streamline operations, boost productivity, and ultimately fuel growth, making your business not just efficient, but future-ready.
          </p>
          <p className="text-xl leading-relaxed">
            From automation and machine learning to AI-driven insights, ZaidiStudio delivers practical solutions that give businesses a competitive edge in an increasingly digital world. Whether you're looking to enhance customer engagement, optimize workflows, or unlock data-driven decision-making, we are here to make that possible.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">Our Mission</h2>
          <div className="flex items-center justify-center mb-8">
            <Target className="w-16 h-16 text-blue-600 mr-4" />
            <p className="text-xl max-w-3xl">
              To empower businesses of all sizes with advanced, cutting-edge AI solutions that simplify processes, drive growth, and unlock new opportunities. We believe that by democratizing AI, we can help companies thrive in a rapidly changing business landscape.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-blue-100 p-8 rounded-lg">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">Our Approach</h2>
          <div className="flex items-start mb-6">
            <Lightbulb className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <p className="text-lg">
              At ZaidiStudio, we understand that every business is unique. That's why we take a tailored approach, blending our deep industry expertise with the latest AI technology to deliver solutions that fit your specific needs. Our team works closely with you from ideation to implementation, ensuring that the AI solutions we design not only integrate seamlessly into your business but also offer measurable impact.
            </p>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Our process includes:</h3>
          <ul className="list-none space-y-4">
            {['Comprehensive Consultation: Understanding your business challenges and goals.',
              'Custom AI Solutions: Crafting AI-driven tools to meet your unique requirements.',
              'End-to-End Support: Offering continuous support, monitoring, and improvement to maximize results.'].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['AI Expertise: With a team of AI engineers and business strategists, we stay at the cutting edge of artificial intelligence.',
              'Results-Driven: Our success is measured by the tangible improvements we bring to your operations and bottom line.',
              'Client-Centric: We prioritize your needs, working closely to create personalized solutions that align with your goals.',
              'Innovation & Adaptability: Technology moves fast, and so do we. We constantly evolve our services to stay ahead of the curve.'].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">Our Team</h2>
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 text-blue-600 mr-4" />
            <p className="text-xl max-w-3xl">
              Behind every success story is a diverse and talented team that brings the vision to life. At ZaidiStudio, we pride ourselves on having a dynamic team of AI experts, developers, and business strategists, each dedicated to making sure our clients succeed. Our diversity of thought, experience, and expertise is what makes our solutions unique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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