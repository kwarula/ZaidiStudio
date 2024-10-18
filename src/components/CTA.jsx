import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

const CTA = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"20-minute-consulting-call"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 text-center bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-6">Ready to see the magic in action?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Book a consultation with us and discover how we can transform your business with AI-powered automation.
      </p>
      <div className="flex justify-center">
        <button
          data-cal-namespace="20-minute-consulting-call"
          data-cal-link="vincent-omondi/20-minute-consulting-call"
          data-cal-config='{"layout":"month_view"}'
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-100 transition-colors duration-300"
        >
          Book Your Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTA;