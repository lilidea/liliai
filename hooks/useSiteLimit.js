"use client";

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'liliai_sites';
const MAX_SITES = 3;

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
        setSites(parsed);
      }
    } catch (e) {
      console.error('Error loading site data:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to storage whenever sites change
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
  }, [sites, isLoaded]);

  // Check if user can create more sites
  const canCreateSite = useCallback(() => {
    return sites.length < MAX_SITES;
  }, [sites]);

  // Get remaining site count
  const getRemainingCount = useCallback(() => {
    return Math.max(0, MAX_SITES - sites.length);
  }, [sites]);

  // Record a new site creation or update an existing one
  const recordSiteCreation = useCallback((siteData = {}) => {
    if (typeof window === 'undefined') return false;

    const id = siteData.id || Date.now().toString();
    const existingIndex = sites.findIndex(s => s.id === id);

    const siteInfo = {
      id,
      lastModified: Date.now(),
      createdAt: existingIndex >= 0 ? sites[existingIndex].createdAt : Date.now(),
      sector: siteData.sector || 'Genel',
      companyName: siteData.companyName || 'Adsız',
      data: siteData.fullData || null // We can store a snapshot if needed, but Context handles main data
    };

    if (existingIndex >= 0) {
      // Update existing
      const updated = [...sites];
      updated[existingIndex] = siteInfo;
      setSites(updated);
    } else {
      // Create new
      if (!canCreateSite()) return false;
      setSites(prev => [...prev, siteInfo]);
    }

    return id;
  }, [sites]);

  // Delete a site
  const deleteSite = useCallback((id) => {
    setSites(prev => prev.filter(s => s.id !== id));
  }, []);

  return {
    sites,
    isLoaded,
    canCreateSite: canCreateSite(),
    remainingCount: getRemainingCount(),
    recordSiteCreation,
    deleteSite,
    maxSites: MAX_SITES
  };
}

export default useSiteLimit;
