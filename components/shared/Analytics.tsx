"use client";

import { useEffect, useState } from "react";

// Type for cookie preferences
export type CookieConsent = {
  analytics?: boolean;
  marketing?: boolean;
  essential?: boolean;
  necessary?: boolean;
};

// Global type declarations
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url: string, sendTo: string, value?: number) => boolean;
    __updateConsent?: (consent: Record<string, string>) => void;
    sendGAEvent?: (action: string, params?: Record<string, string | number>) => void;
    sendFormConversion?: () => void;
  }
}

export function AnalyticsWrapper() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      try {
        const prefs = JSON.parse(
          localStorage.getItem("cookie_preferences") || "{}"
        ) as CookieConsent;

        const enabled = prefs.analytics === true;
        setAllowed(enabled);

        // Update Google Consent Mode based on stored preferences
        if (typeof window.gtag === "function") {
          window.gtag("consent", "update", {
            analytics_storage: prefs.analytics ? "granted" : "denied",
            ad_storage: prefs.marketing ? "granted" : "denied",
            ad_user_data: prefs.marketing ? "granted" : "denied",
            ad_personalization: prefs.marketing ? "granted" : "denied",
          });
        }
      } catch (error) {
        console.error("Error reading cookie preferences:", error);
      }
    };

    updateConsent();

    const handleCookieUpdate = () => updateConsent();
    window.addEventListener("cookie_preferences_updated", handleCookieUpdate);

    return () => {
      window.removeEventListener("cookie_preferences_updated", handleCookieUpdate);
    };
  }, []);

  // Debug in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics allowed:", allowed);
    }
  }, [allowed]);

  return null;
}
