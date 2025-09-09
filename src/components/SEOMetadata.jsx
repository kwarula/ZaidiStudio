import React from 'react';
import { Helmet } from 'react-helmet';

const SEOMetadata = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zaidistudio.co.ke/#organization",
        "name": "ZaidiStudio",
        "description": "Leading AI Services Kenya provider offering AI agents, automation, and chatbot solutions for Kenyan businesses.",
        "url": "https://zaidistudio.co.ke",
        "logo": {
          "@type": "ImageObject",
          "url": "https://zaidistudio.co.ke/logos/ZaidiStudio_logo_web.png",
          "width": 300,
          "height": 100
        },
        "sameAs": [
          "https://www.facebook.com/zaidistudio",
          "https://www.twitter.com/zaidistudio",
          "https://www.linkedin.com/company/zaidistudio"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nairobi",
          "addressLocality": "Nairobi",
          "addressCountry": "Kenya",
          "addressRegion": "Nairobi County"
        },
        "telephone": "+254722135913",
        "email": "info@zaidistudio.co.ke",
        "areaServed": [
          {
            "@type": "Country",
            "name": "Kenya"
          },
          {
            "@type": "City", 
            "name": "Nairobi"
          },
          {
            "@type": "City",
            "name": "Mombasa"
          },
          {
            "@type": "City",
            "name": "Kisumu"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://zaidistudio.co.ke/#localbusiness",
        "name": "ZaidiStudio - AI Services Kenya",
        "description": "Premier AI consulting and automation services in Kenya. Specializing in AI agents, chatbots, and business automation for Kenyan enterprises.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nairobi",
          "addressLocality": "Nairobi", 
          "addressCountry": "Kenya",
          "addressRegion": "Nairobi County"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-1.2921",
          "longitude": "36.8219"
        },
        "telephone": "+254722135913",
        "priceRange": "$$",
        "openingHours": "Mo-Fr 08:00-18:00",
        "serviceArea": {
          "@type": "Country",
          "name": "Kenya"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://zaidistudio.co.ke/#website", 
        "url": "https://zaidistudio.co.ke",
        "name": "ZaidiStudio - AI Services Kenya",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://zaidistudio.co.ke/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://zaidistudio.co.ke/#services",
        "name": "AI Services Kenya",
        "description": "Comprehensive AI solutions including AI agents, chatbots, automation, and machine learning for Kenyan businesses.",
        "provider": {
          "@id": "https://zaidistudio.co.ke/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Kenya"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Agents Kenya",
                "description": "Custom AI agents for business automation in Kenya"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "AI Chatbots Kenya",
                "description": "Intelligent chatbot solutions for Kenyan businesses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Business Automation Kenya",
                "description": "AI-powered business process automation for Kenyan enterprises"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://zaidistudio.co.ke/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What AI services do you offer in Kenya?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer comprehensive AI services in Kenya including AI agents, chatbots, business automation, machine learning solutions, and AI consulting specifically designed for Kenyan businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How can AI agents help my Kenyan business?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "AI agents can automate customer service, sales processes, lead generation, and operational tasks, helping Kenyan businesses increase efficiency by up to 60% and reduce operational costs."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide AI automation services in Nairobi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide AI automation services throughout Kenya, with a strong presence in Nairobi, Mombasa, Kisumu, and other major cities. We serve businesses of all sizes across various industries."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <title>AI Services Kenya | AI Agents Kenya | ZaidiStudio - #1 AI Solutions Provider</title>
      <meta name="description" content="Leading AI Services Kenya provider. Transform your business with AI agents, chatbots & automation. Trusted by 500+ Kenyan businesses. Free consultation available." />
      <meta name="keywords" content="AI services Kenya, AI agents Kenya, AI automation Kenya, AI chatbots Kenya, AI solutions Nairobi, business automation Kenya, AI consulting Kenya, machine learning Kenya, AI development Kenya, artificial intelligence Kenya" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="AI Services Kenya | AI Agents Kenya | ZaidiStudio" />
      <meta property="og:description" content="Transform your Kenyan business with AI. Leading provider of AI agents, chatbots & automation solutions in Kenya. 500+ businesses trust us." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zaidistudio.co.ke" />
      <meta property="og:image" content="https://zaidistudio.co.ke/logos/ZaidiStudio_logo_web.png" />
      <meta property="og:site_name" content="ZaidiStudio" />
      <meta property="og:locale" content="en_KE" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Services Kenya | AI Agents Kenya | ZaidiStudio" />
      <meta name="twitter:description" content="Leading AI Services Kenya provider. Transform your business with AI agents, chatbots & automation solutions." />
      <meta name="twitter:image" content="https://zaidistudio.co.ke/logos/ZaidiStudio_logo_web.png" />
      <meta name="twitter:site" content="@zaidistudio" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="geo.position" content="-1.2921;36.8219" />
      <meta name="ICBM" content="-1.2921, 36.8219" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="ZaidiStudio" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      <link rel="canonical" href="https://zaidistudio.co.ke" />
      <link rel="alternate" hreflang="en-ke" href="https://zaidistudio.co.ke" />
      <link rel="alternate" hreflang="en" href="https://zaidistudio.co.ke" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;