import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqData = [
  {
    question: "What is ZaidiStudio and how can it help my business?",
    answer: "ZaidiStudio is a cutting-edge AI-powered platform that provides automation solutions for businesses. We help streamline operations, boost productivity, and drive growth through smart, tailored automation strategies. Our solutions can help you reduce manual tasks, minimize errors, save time, and cut costs, allowing your team to focus on high-value activities."
  },
  {
    question: "What types of businesses can benefit from ZaidiStudio's solutions?",
    answer: "ZaidiStudio's solutions are versatile and can benefit businesses of all sizes across various industries. Whether you're a small startup, a growing mid-size company, or a large enterprise, our AI-powered automation can be tailored to meet your specific needs. We've worked with businesses in e-commerce, finance, healthcare, manufacturing, and many other sectors."
  },
  {
    question: "What specific processes can ZaidiStudio automate?",
    answer: "We can automate a wide range of business processes, including but not limited to: customer service (chatbots, email responses), social media management, inventory and order processing, lead generation and nurturing, data analysis and reporting, HR processes (recruitment, onboarding), financial processes (invoicing, expense management), and more. Our team works closely with you to identify the most impactful areas for automation in your business."
  },
  {
    question: "How does ZaidiStudio's AI differ from other automation tools?",
    answer: "ZaidiStudio's AI is more advanced and adaptable than traditional automation tools. Our solutions use machine learning to continuously improve performance, can handle complex decision-making processes, and can work with unstructured data. Unlike rigid, rule-based systems, our AI can adapt to changing conditions and learn from new data, providing more flexible and intelligent automation."
  },
  {
    question: "Is my data safe with ZaidiStudio?",
    answer: "Absolutely. Data security is our top priority. We employ industry-standard encryption, secure cloud storage, and strict access controls to protect your data. Our systems are regularly audited and updated to maintain the highest level of security. We are also compliant with major data protection regulations. You retain full ownership of your data, and we never share or sell it to third parties."
  },
  {
    question: "How long does it take to implement ZaidiStudio's solutions?",
    answer: "The implementation timeline can vary depending on the complexity of your needs and the scale of automation required. Simple automations can be set up in a few weeks, while more complex, enterprise-wide solutions might take a few months. We work closely with your team to ensure a smooth implementation process and provide ongoing support and optimization."
  },
  {
    question: "What kind of support does ZaidiStudio provide?",
    answer: "We offer comprehensive support throughout your journey with us. This includes initial consultation and needs assessment, custom solution design, implementation support, staff training, and ongoing technical support. Our team is available via email, phone, and chat to address any questions or issues you may have. We also provide regular check-ins and performance reviews to ensure you're getting the most out of our solutions."
  },
  {
    question: "Can ZaidiStudio integrate with my existing systems and software?",
    answer: "Yes, ZaidiStudio is designed to integrate seamlessly with a wide range of existing systems and software. We support integration with popular CRM systems, ERP software, marketing tools, and many other business applications. If you use custom or legacy systems, our team can work on creating custom integrations to ensure smooth data flow and process automation across your entire tech stack."
  },
  {
    question: "How do I get started with ZaidiStudio?",
    answer: "Getting started is easy! Simply join our waitlist, and we'll contact you with early access opportunities. Once you're onboard, we'll schedule an initial consultation to understand your business needs. Our team will then work closely with you to design and implement the right automation solutions for your business. We guide you through every step of the process, from initial setup to staff training and ongoing optimization."
  },
  {
    question: "What are the costs involved in using ZaidiStudio?",
    answer: "Our pricing is flexible and depends on the scale and complexity of the automation solutions you need. We offer different tiers of service to accommodate businesses of all sizes. While we can't provide exact pricing without understanding your specific needs, we strive to ensure our solutions provide a strong return on investment. We'll work with you to create a custom package that fits your budget and maximizes value for your business."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;