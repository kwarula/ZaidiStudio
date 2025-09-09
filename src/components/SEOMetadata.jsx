import React from 'react';
import { Helmet } from 'react-helmet';

const SEOMetadata = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZaidiStudio",
    "description": "AI-powered business automation solutions to double your conversion rate in 30 days.",
    "url": "https://zaidistudio.co.ke",
    "logo": "https://zaidistudio.co.ke/logo.png",
    "sameAs": [
      "https://www.facebook.com/zaidistudio",
      "https://www.twitter.com/zaidistudio",
      "https://www.linkedin.com/company/zaidistudio"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI-powered automation solutions",
      "price": "0",
      "priceCurrency": "USD"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://zaidistudio.co.ke"
    },
    "potentialAction": {
      "@type": "ConsultAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://zaidistudio.co.ke/#consultation",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Schedule",
        "name": "Free Consultation"
      }
    }
  };

  return (
    <Helmet>
      <title>ZaidiStudio - AI-Powered Business Automation</title>
      <meta name="description" content="ZaidiStudio offers AI-powered business automation solutions to double your conversion rate in 30 days. Streamline operations and boost efficiency with our customized AI strategies." />
      <meta name="keywords" content="AI automation, business automation, conversion optimization, AI solutions, business efficiency" />
      <link rel="canonical" href="https://zaidistudio.co.ke" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;