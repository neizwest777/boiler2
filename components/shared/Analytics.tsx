"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function AnalyticsWrapper() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        const prefs = JSON.parse(
          localStorage.getItem("cookie_preferences") || "{}"
        );
        setAllowed(prefs.analytics === true);
      } catch (e) {}
    };

    check();

    // слушаем изменения выбора
    window.addEventListener("cookie_preferences_updated", check);

    return () => {
      window.removeEventListener("cookie_preferences_updated", check);
    };
  }, []);

  if (!allowed) return null;

  return (
    <>
      {/* GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-000000000"
        strategy="afterInteractive"
      />

      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-000000000');
        `}
      </Script>
    </>
  );
}
