import { HomeIcon, CreditCardIcon, LayoutListIcon, InfoIcon, FileJsonIcon, LayoutDashboardIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Pricing from "./pages/Pricing.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Templates from "./pages/Templates.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
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
  {
    title: "Login",
    to: "/login",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Login />,
  },
];