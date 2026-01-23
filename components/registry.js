import dynamic from "next/dynamic";

// Registry mapping
// We use dynamic imports to keep the initial bundle size small as the library grows
const components = {
  header1: dynamic(() => import("./headers/Header1")),
  header2: dynamic(() => import("./headers/Header2")),
  header3: dynamic(() => import("./headers/Header3")), // Glassmorphism
  header4: dynamic(() => import("./headers/Header4")), // Corporate
  hero1: dynamic(() => import("./heroes/Hero1")),
  hero2: dynamic(() => import("./heroes/Hero2")),
  hero3: dynamic(() => import("./heroes/Hero3")), // Abstract Shapes
  hero4: dynamic(() => import("./heroes/Hero4")), // Grid Layout
  about1: dynamic(() => import("./abouts/About1")),
  about2: dynamic(() => import("./abouts/About2")),
  about3: dynamic(() => import("./abouts/About3")),
  about4: dynamic(() => import("./abouts/About4")),
  contact1: dynamic(() => import("./contact/Contact1")),
  contact2: dynamic(() => import("./contact/Contact2")),
  contact3: dynamic(() => import("./contact/Contact3")),
  faq1: dynamic(() => import("./faq/FAQ1")),
  faq2: dynamic(() => import("./faq/FAQ2")),
  faq3: dynamic(() => import("./faq/FAQ3")),
  team1: dynamic(() => import("./team/Team1")),
  team2: dynamic(() => import("./team/Team2")),
  team3: dynamic(() => import("./team/Team3")),
  services1: dynamic(() => import("./services/Services1")),
  services2: dynamic(() => import("./services/Services2")),
  services3: dynamic(() => import("./services/Services3")),
  projects1: dynamic(() => import("./projects/Projects1")),
  projects2: dynamic(() => import("./projects/Projects2")),
  projects3: dynamic(() => import("./projects/Projects3")),
  pricing1: dynamic(() => import("./pricing/Pricing1")),
  pricing2: dynamic(() => import("./pricing/Pricing2")),
  pricing3: dynamic(() => import("./pricing/Pricing3")),
  testimonials1: dynamic(() => import("./testimonials/Testimonials1")),
  testimonials2: dynamic(() => import("./testimonials/Testimonials2")),
  stats1: dynamic(() => import("./stats/Stats1")),
  stats2: dynamic(() => import("./stats/Stats2")),
  cta1: dynamic(() => import("./cta/Cta1")),
  cta2: dynamic(() => import("./cta/Cta2")),
  blog1: dynamic(() => import("./blog/Blog1")),
  blog2: dynamic(() => import("./blog/Blog2")),
  blog3: dynamic(() => import("./blog/Blog3")),
  footer1: dynamic(() => import("./footers/Footer1")),
  footer2: dynamic(() => import("./footers/Footer2")),
  footer3: dynamic(() => import("./footers/Footer3")),
};

export const getComponent = (category, id) => {
  // If category is provided (legacy or specific access)
  if (components[category] && components[category][id]) {
     return components[category][id];
  }
  
  // Direct access (flat structure for new components)
  if (components[id]) {
      return components[id];
  }
  
  // Fallback for flat structure passed as category/id mismatch
  if (components[category]) {
      return components[category];
  }

  console.warn(`Component not found: ${id} (Category: ${category})`);
  return null;
};

export const getAvailableComponents = (category) => {
  if (!category) return Object.keys(components);
  return Object.keys(components).filter(key => key.startsWith(category));
};
