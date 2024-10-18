import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet';

const TeamMember = ({ name, role, imageUrl, description }) => (
  <Card className="overflow-hidden">
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
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About ZaidiStudio</h1>
        
        <section className="mb-12">
          <p className="text-lg mb-4">
            At ZaidiStudio, we are pioneering the future of AI-powered business solutions. With a passion for innovation and a drive for excellence, we empower companies across diverse industries to harness the transformative potential of artificial intelligence. Our solutions are designed to streamline operations, boost productivity, and ultimately fuel growth, making your business not just efficient, but future-ready.
          </p>
          <p className="text-lg mb-4">
            From automation and machine learning to AI-driven insights, ZaidiStudio delivers practical solutions that give businesses a competitive edge in an increasingly digital world. Whether you're looking to enhance customer engagement, optimize workflows, or unlock data-driven decision-making, we are here to make that possible.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-lg">
            To empower businesses of all sizes with advanced, cutting-edge AI solutions that simplify processes, drive growth, and unlock new opportunities. We believe that by democratizing AI, we can help companies thrive in a rapidly changing business landscape.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Approach</h2>
          <p className="text-lg mb-4">
            At ZaidiStudio, we understand that every business is unique. That's why we take a tailored approach, blending our deep industry expertise with the latest AI technology to deliver solutions that fit your specific needs. Our team works closely with you from ideation to implementation, ensuring that the AI solutions we design not only integrate seamlessly into your business but also offer measurable impact.
          </p>
          <p className="text-lg mb-4">Our process includes:</p>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>Comprehensive Consultation: Understanding your business challenges and goals.</li>
            <li>Custom AI Solutions: Crafting AI-driven tools to meet your unique requirements.</li>
            <li>End-to-End Support: Offering continuous support, monitoring, and improvement to maximize results.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>AI Expertise: With a team of AI engineers and business strategists, we stay at the cutting edge of artificial intelligence.</li>
            <li>Results-Driven: Our success is measured by the tangible improvements we bring to your operations and bottom line.</li>
            <li>Client-Centric: We prioritize your needs, working closely to create personalized solutions that align with your goals.</li>
            <li>Innovation & Adaptability: Technology moves fast, and so do we. We constantly evolve our services to stay ahead of the curve.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">Our Team</h2>
          <p className="text-lg mb-8">
            Behind every success story is a diverse and talented team that brings the vision to life. At ZaidiStudio, we pride ourselves on having a dynamic team of AI experts, developers, and business strategists, each dedicated to making sure our clients succeed. Our diversity of thought, experience, and expertise is what makes our solutions unique.
          </p>
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