import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqData = [
  {
    question: "What is ZaidiStudio?",
    answer: "ZaidiStudio is a cutting-edge platform that provides AI-powered automation solutions for businesses. We help streamline operations, boost productivity, and drive growth through smart, tailored automation strategies."
  },
  {
    question: "How can automation benefit my business?",
    answer: "Automation can significantly reduce manual tasks, minimize errors, save time, and cut costs. This allows your team to focus on high-value activities, leading to increased efficiency, improved customer satisfaction, and accelerated business growth."
  },
  {
    question: "What types of processes can ZaidiStudio automate?",
    answer: "We can automate a wide range of business processes, including customer service, social media management, inventory and order processing, lead generation, and more. Our solutions are customizable to meet your specific business needs."
  },
  {
    question: "Is ZaidiStudio suitable for small businesses?",
    answer: "Absolutely! ZaidiStudio is designed to cater to businesses of all sizes. Our scalable solutions can be tailored to fit the needs and budget of small businesses, startups, as well as large enterprises."
  },
  {
    question: "How do I get started with ZaidiStudio?",
    answer: "Getting started is easy! Simply join our waitlist, and we'll contact you with early access opportunities. Once you're onboard, our team will work closely with you to understand your needs and implement the right automation solutions for your business."
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