// ✅ ИСПРАВЛЕНО: добавлен экспорт для типа
export type CookieConsent = {
  analytics?: boolean;
  necessary?: boolean;
};

// Добавляем глобальные типы, чтобы TS не ругался
declare global {
  interface Window {
    __updateConsent?: (consent: Record<string, string>) => void;
    sendGAEvent?: (action: string, params?: Record<string, string | number>) => void;
  }
}

"use client";

import { useEffect, useState } from "react";

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

        // ✅ ИСПРАВЛЕНО: выражение теперь является вызовом функции
        if (enabled && typeof window.__updateConsent === "function") {
          window.__updateConsent({
            analytics_storage: "granted",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied"
          });
        }
      } catch (error) {
        // ✅ Улучшенная обработка ошибок
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

  // ✅ ДОБАВЛЕНО: использование состояния allowed для отладки
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics allowed:', allowed);
    }
  }, [allowed]);

  return null; // Ничего не рендерим — GA подключён в layout.tsx
}
