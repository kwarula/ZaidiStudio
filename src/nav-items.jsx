import { HomeIcon, CreditCardIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Pricing from "./pages/Pricing.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
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
];