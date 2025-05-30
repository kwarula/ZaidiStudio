export const templates = [
  {
    id: 1,
    name: "Lead-to-Client Auto-Converter",
    description: "Turns raw leads into scheduled calls automatically using AI qualification and personalized follow-up.",
    useCase: "Turns raw leads into scheduled calls automatically.",
    stack: "Typeform/Google Forms → Notion/Airtable → OpenAI → Calendly → Gmail/WhatsApp",
    keyActions: [
      "Auto-qualify leads using GPT",
      "Auto-personalize email follow-up",
      "Auto-schedule via Calendly",
      "Track in Notion"
    ]
  },
  {
    id: 2,
    name: "Content Multiplier Machine",
    description: "Converts one piece of content into 10+ formats across multiple platforms with automated posting and analytics tracking.",
    useCase: "Converts one piece of content into 10+ formats.",
    stack: "Notion → OpenAI → Buffer/Meta API/YouTube API",
    keyActions: [
      "Generate threads, captions, scripts, carousels, shorts",
      "Auto-post or queue content",
      "Store analytics in Airtable"
    ]
  },
  {
    id: 3,
    name: "Zero-Touch Client Onboarding",
    description: "Fully automates the entire client onboarding process after payment, from folder creation to task assignment.",
    useCase: "Fully automates onboarding after client payment.",
    stack: "Stripe/PayPal → Gmail → Notion → Slack/WhatsApp → DocuSign",
    keyActions: [
      "Create client folder",
      "Send welcome email + contract",
      "Add to CRM & Slack",
      "Assign internal tasks"
    ]
  },
  {
    id: 4,
    name: "AI-Powered Social DM Sales Bot",
    description: "Monitors and responds to Instagram/Twitter/LinkedIn DMs with AI-powered qualification and automated follow-up.",
    useCase: "Turns Instagram/Twitter/LinkedIn DMs into sales.",
    stack: "Integromat Webhook → OpenAI → Instagram API → Notion CRM",
    keyActions: [
      "Monitor incoming DMs",
      "Qualify lead using GPT prompt",
      "Auto-reply & track",
      "Push to CRM if warm"
    ]
  },
  {
    id: 5,
    name: "Live Order Fulfillment Tracker (Ecom)",
    description: "Provides real-time order status updates to customers through multiple channels with automated notifications.",
    useCase: "Updates customers in real time on order status.",
    stack: "Shopify → Google Sheets/Airtable → WhatsApp/SMS → Email",
    keyActions: [
      "Auto-send shipping updates",
      "Trigger WhatsApp alerts",
      "Update CRM + ticketing system"
    ]
  },
  {
    id: 6,
    name: "Proposal Generator & Sender",
    description: "Creates and sends custom client proposals in minutes using AI-generated content and automated tracking.",
    useCase: "Create and send custom client proposals in minutes.",
    stack: "Notion/Typeform → OpenAI → Google Docs → Gmail → Notion CRM",
    keyActions: [
      "Collect project details",
      "Draft proposal using GPT",
      "Auto-convert to PDF",
      "Email + track client response"
    ]
  },
  {
    id: 7,
    name: "AI-Enhanced Job Application Screener",
    description: "Automatically filters and ranks job applicants using AI analysis of CVs and application responses.",
    useCase: "Filters and ranks job applicants automatically.",
    stack: "Google Forms/Typeform → OpenAI → Notion/Airtable",
    keyActions: [
      "Analyze CVs & answers",
      "Auto-rank top candidates",
      "Notify HR with summaries"
    ]
  },
  {
    id: 8,
    name: "Client Feedback Analyzer",
    description: "Transforms survey responses and reviews into actionable insights with sentiment analysis and automated reporting.",
    useCase: "Turns survey responses or reviews into insights.",
    stack: "Google Forms → OpenAI → Notion",
    keyActions: [
      "Summarize tone + key pain points",
      "Create tags for sentiment",
      "Send weekly digest to team"
    ]
  },
  {
    id: 9,
    name: "Sales Dashboard with Daily Email Digest",
    description: "Provides real-time sales reporting with automated alerts and daily team summaries with zero manual effort.",
    useCase: "Real-time reporting with zero manual effort.",
    stack: "Stripe/Shopify → Airtable/Google Sheets → n8n → Email/Slack",
    keyActions: [
      "Update dashboards",
      "Trigger alerts if sales drop",
      "Email team with daily summary"
    ]
  },
  {
    id: 10,
    name: "AI-Powered Cold Email Engine",
    description: "Fully automated cold email campaigns with personalized outreach, follow-ups, and lead data enrichment.",
    useCase: "Cold emails + follow-ups, fully automated.",
    stack: "Google Sheets → OpenAI → Gmail → Notion CRM",
    keyActions: [
      "Generate personalized outreach",
      "Auto-send in staggered intervals",
      "Log replies + enrich lead data"
    ]
  },
  {
    id: 11,
    name: "Clone Viral TikToks with AI Avatars & Auto-Post to 9 Platforms",
    description: "Analyzes viral TikTok content, recreates it using AI avatars, and automatically distributes across multiple social platforms.",
    useCase: "Clone viral TikToks and auto-post to multiple platforms.",
    stack: "TikTok API → OpenAI → AI Avatar Tools → Multi-Platform APIs",
    keyActions: [
      "Downloads and analyzes existing TikTok videos",
      "Generates new content using AI avatars",
      "Auto-posts to platforms like Instagram, YouTube, Facebook, and more"
    ]
  },
  {
    id: 12,
    name: "AI-Powered Short-Form Video Generator with OpenAI, Flux, Kling, and ElevenLabs",
    description: "Transforms ideas into fully produced short-form videos through a comprehensive five-step AI-powered process.",
    useCase: "Transform ideas into fully produced short-form videos.",
    stack: "Google Sheets → OpenAI → Flux → Kling → ElevenLabs → Video APIs",
    keyActions: [
      "Generates video captions from ideas stored in Google Sheets",
      "Creates AI-generated images and converts them into videos",
      "Adds voice-overs and finalizes video production with templates and transitions"
    ]
  }
];
