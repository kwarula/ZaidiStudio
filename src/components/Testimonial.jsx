
import React from 'react';
import { Card, CardContent } from './ui/card';

const Testimonial = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-blue-50">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-8">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "ZaidiStudio's strategy not only streamlined our operations—it supercharged our revenue. It's the best 30 minutes I've ever spent."
          </blockquote>
          <p className="text-right font-semibold">- CEO, Growth-Driven Company</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Testimonial;
