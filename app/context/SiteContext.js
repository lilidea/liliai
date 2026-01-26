"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  
  // Default Initial State
  const defaultState = {
    companyName: "",
    sector: "", // New: Sector selection
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
    generatedContent: {}, // New: Stores AI/Template generated text
  };

  const [siteData, setSiteData] = useState(defaultState);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("siteData");
      if (saved) {
        try {
          setSiteData(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse site data", e);
        }
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (typeof window !== "undefined") {
        localStorage.setItem("siteData", JSON.stringify(siteData));
    }
  }, [siteData]);

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
