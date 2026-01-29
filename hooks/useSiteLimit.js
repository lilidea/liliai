"use client";

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'liliai_sites';
const MAX_SITES = 3;
const RESET_HOURS = 24;

export function useSiteLimit() {
  const [sites, setSites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Filter out sites older than RESET_HOURS
        const now = Date.now();
        const validSites = parsed.filter(site => {
          const age = (now - site.createdAt) / (1000 * 60 * 60);
          return age < RESET_HOURS;
        });
        setSites(validSites);
        // Update storage if we filtered some out
        if (validSites.length !== parsed.length) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(validSites));
        }
      }
    } catch (e) {
      console.error('Error loading site limit data:', e);
    }
    setIsLoaded(true);
  }, []);

  // Check if user can create more sites
  const canCreateSite = useCallback(() => {
    return sites.length < MAX_SITES;
  }, [sites]);

  // Get remaining site count
  const getRemainingCount = useCallback(() => {
    return Math.max(0, MAX_SITES - sites.length);
  }, [sites]);

  // Record a new site creation
  const recordSiteCreation = useCallback((siteData = {}) => {
    if (typeof window === 'undefined') return false;
    
    if (!canCreateSite()) {
      return false;
    }

    const newSite = {
      createdAt: Date.now(),
      sector: siteData.sector || 'unknown',
      companyName: siteData.companyName || 'Adsız'
    };

    const updatedSites = [...sites, newSite];
    setSites(updatedSites);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSites));
    } catch (e) {
      console.error('Error saving site limit data:', e);
    }
    
    return true;
  }, [sites, canCreateSite]);

  // Get time until reset (oldest site expires)
  const getTimeUntilReset = useCallback(() => {
    if (sites.length === 0) return null;
    
    const oldest = Math.min(...sites.map(s => s.createdAt));
    const resetTime = oldest + (RESET_HOURS * 60 * 60 * 1000);
    const remaining = resetTime - Date.now();
    
    if (remaining <= 0) return null;
    
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    
    return { hours, minutes, totalMs: remaining };
  }, [sites]);

  // Reset all sites (for testing or admin)
  const resetLimit = useCallback(() => {
    if (typeof window === 'undefined') return;
    setSites([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    sites,
    isLoaded,
    canCreateSite: canCreateSite(),
    remainingCount: getRemainingCount(),
    recordSiteCreation,
    getTimeUntilReset,
    resetLimit,
    maxSites: MAX_SITES
  };
}

export default useSiteLimit;
