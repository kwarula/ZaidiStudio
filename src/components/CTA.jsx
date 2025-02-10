
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
      <h2 className="text-3xl font-bold mb-6">Ready to Crush Your Targets?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Stop letting outdated processes hold you back. Leverage the power of AI to automate, scale, and dominate your market.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          data-cal-namespace="20-minute-consulting-call"
          data-cal-link="vincent-omondi/20-minute-consulting-call"
          data-cal-config='{"layout":"month_view"}'
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-100 transition-colors duration-300"
        >
          Free 30-Minute Strategy
        </button>
        <button
          onClick={() => window.location.href = '/dojo'}
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Join the AI Dojo
        </button>
      </div>
      <p className="mt-8 text-sm opacity-90">
        ZaidiStudio: Where businesses go from "just getting by" to crushing their targets every single day.
      </p>
    </section>
  );
};

export default CTA;
