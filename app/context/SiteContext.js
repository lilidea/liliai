"use client";

import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [siteData, setSiteData] = useState({
    companyName: "",
    aboutText: "",
    primaryColor: "#E69419", // Corporate Orange
    secondaryColor: "#0073FF", // Corporate Blue
    accentColor: "#000000",
    designStyle: "modern", // modern, corporate, minimal
    pages: [],
    selectedComponents: {
      header: "header1",
      hero: "hero1",
      footer: "footer1",
    },
  });

  const triggerLoading = (duration = 1200) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), duration);
  };

  const updateSiteData = (newData) => {
    setSiteData((prev) => ({ ...prev, ...newData }));
  };

  const updateSelection = (section, componentId) => {
    setSiteData((prev) => ({
      ...prev,
      selectedComponents: {
        ...prev.selectedComponents,
        [section]: componentId,
      },
    }));
  };

  return (
    <SiteContext.Provider value={{ siteData, updateSiteData, updateSelection, isLoading, triggerLoading }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext);
}
