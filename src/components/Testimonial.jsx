import React from 'react';
import { Card, CardContent } from './ui/card';

const Testimonial = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-blue-50">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-8">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "ZaidiStudio helped us automate over 50% of our daily tasks. Now we spend more time on strategy and less on managing the nitty-gritty details. We're more productive, more efficient, and more profitable!"
          </blockquote>
          <p className="text-right font-semibold">- Satisfied Client</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Testimonial;