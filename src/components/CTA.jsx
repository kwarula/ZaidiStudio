import React, { useState } from 'react';
import { Button } from './ui/button';
import WaitlistForm from './WaitlistForm';

const CTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 px-6 md:px-12 text-center bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-6">Ready to take your business to the next level?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Sign up for our waitlist today and be the first to experience the future of automation with ZaidiStudio.
      </p>
      <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => setIsFormOpen(true)}>
        Secure Your Spot on the Waitlist
      </Button>
      <p className="mt-6 text-sm">
        Limited spots available. Don't miss out on getting early access and a special launch discount!
      </p>
      <WaitlistForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default CTA;