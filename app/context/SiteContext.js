"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  // Default Initial State
  const defaultState = {
    id: null,
    companyName: "",
    sector: "",
    aboutText: "",
    primaryColor: "#E69419",
    secondaryColor: "#0073FF",
    accentColor: "#000000",
    designStyle: "modern",
    fontStyle: "Inter",
    pages: [],
    selectedComponents: {
      header: "header1",
      hero: "hero1",
      footer: "footer1",
    },
    generatedContent: {},
  };

  const [siteData, setSiteData] = useState(defaultState);

  // Load from localStorage on mount (Active session)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("activeSiteData");
      if (saved) {
        try {
          setSiteData(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse site data", e);
        }
      }
    }
  }, []);

  // Save to localStorage on change (Active session)
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeSiteData", JSON.stringify(siteData));
    }
  }, [siteData]);

  const triggerLoading = (duration = 1200) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), duration);
  };

  const updateSiteData = (newData) => {
    setSiteData((prev) => ({ ...prev, ...newData }));
  };

  const resetSiteData = () => {
    setSiteData({ ...defaultState, id: Date.now().toString() });
  };

  const loadSiteData = (data) => {
    setSiteData(data);
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
    <SiteContext.Provider value={{ siteData, updateSiteData, updateSelection, isLoading, triggerLoading, resetSiteData, loadSiteData }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext);
}
