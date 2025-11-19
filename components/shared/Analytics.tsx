"use client";

import { useEffect, useState } from "react";

export function AnalyticsWrapper() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const update = () => {
      try {
        const prefs = JSON.parse(
          localStorage.getItem("cookie_preferences") || "{}"
        );

        const enabled = prefs.analytics === true;
        setAllowed(enabled);

        // Если пользователь дал согласие — обновляем Consent Mode
        if (enabled && typeof window.__updateConsent === "function") {
          window.__updateConsent({
            analytics_storage: "granted",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied"
          });
        }
      } catch (_) {}
    };

    update();
    window.addEventListener("cookie_preferences_updated", update);

    return () => {
      window.removeEventListener("cookie_preferences_updated", update);
    };
  }, []);

  return null; // важное изменение: НИЧЕГО НЕ РЕНДЕРИМ
}
