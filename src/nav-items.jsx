
import { HomeIcon, CreditCardIcon, LayoutListIcon, InfoIcon, FileJsonIcon, LayoutDashboardIcon, BrainCircuitIcon, GiftIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Pricing from "./pages/Pricing.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Templates from "./pages/Templates.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AIDojo from "./pages/AIDojo.jsx";
import Classroom from "./pages/dojo/Classroom.jsx";
import AIStarterKit from "./pages/AIStarterKit.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "AI Starter Kit",
    to: "/starter-kit",
    icon: <GiftIcon className="h-4 w-4" />,
    page: <AIStarterKit />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "AI Dojo",
    to: "/dojo",
    icon: <BrainCircuitIcon className="h-4 w-4" />,
    page: <AIDojo />,
  },
  {
    title: "AI Dojo Classroom",
    to: "/dojo/classroom",
    icon: <BrainCircuitIcon className="h-4 w-4" />,
    page: <Classroom />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <CreditCardIcon className="h-4 w-4" />,
    page: <Pricing />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <LayoutListIcon className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Templates",
    to: "/templates",
    icon: <FileJsonIcon className="h-4 w-4" />,
    page: <Templates />,
  },
];
