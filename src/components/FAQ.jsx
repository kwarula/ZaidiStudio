import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What is ZaidiStudio?",
    answer: "ZaidiStudio is an AI-powered business automation platform designed to help businesses streamline their operations, increase efficiency, and boost conversion rates."
  },
  {
    question: "How can ZaidiStudio help my business?",
    answer: "ZaidiStudio offers customized automation solutions that can help optimize your workflows, improve customer engagement, and ultimately increase your conversion rates."
  },
  {
    question: "Is ZaidiStudio suitable for small businesses?",
    answer: "Yes, ZaidiStudio is designed to cater to businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to meet your specific needs."
  },
  {
    question: "How long does it take to see results?",
    answer: "While results can vary depending on your specific situation, many of our clients see significant improvements within 30 days of implementing our solutions."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide comprehensive customer support to ensure you get the most out of our platform. Our team is always ready to assist you with any questions or issues you may have."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center text-blue-900"
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <h3>{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
