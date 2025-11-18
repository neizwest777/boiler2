"use client";

import { useEffect, useState } from "react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

// Локальный тип для gtag, без глобального объявления
type GtagFn = (...args: unknown[]) => void;

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  // ==== APPLY CONSENT MODE TO GOOGLE ====
  function applyConsent(prefs: CookiePreferences) {
    if (typeof window === "undefined") return;

    const w = window as Window & { gtag?: GtagFn };

    if (typeof w.gtag !== "function") return;

    w.gtag("consent", "update", {
      ad_storage: prefs.marketing ? "granted" : "denied",
      ad_user_data: prefs.marketing ? "granted" : "denied",
      ad_personalization: prefs.marketing ? "granted" : "denied",
      analytics_storage: prefs.analytics ? "granted" : "denied",
    });
  }

  // ==== LOAD SAVED PREFS ====
  useEffect(() => {
    const saved = typeof window !== "undefined"
      ? window.localStorage.getItem("cookie_preferences")
      : null;

    if (!saved) {
      setOpen(true);
    } else {
      try {
        const prefs = JSON.parse(saved) as CookiePreferences;
        applyConsent(prefs);
      } catch {
        setOpen(true);
      }
    }
  }, []);

  // ==== SAVE PREFS ====
  const savePreferences = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cookie_preferences", JSON.stringify(prefs));
    }

    applyConsent(prefs);
    setOpen(false);

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cookie_preferences_updated"));
    }
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    savePreferences({
      essential: true,
      analytics,
      marketing,
    });
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center z-[9999]">
      <div className="w-[95%] max-w-2xl bg-white border border-gray-200 shadow-2xl rounded-xl p-6">

        {!showSettings && (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Me kasutame küpsiseid 🍪
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Küpsiseid kasutatakse kasutajakogemuse parandamiseks ja statistika kogumiseks.
            </p>

            <div className="flex flex-wrap gap-3 justify-end">
              <button
                onClick={acceptEssential}
                className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Ainult vajalikud
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm rounded-lg border border-blue-600 text-blue-700 hover:bg-blue-50 transition"
              >
                Kohanda
              </button>

              <button
                onClick={acceptAll}
                className="px-5 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Nõustun kõigiga
              </button>
            </div>
          </>
        )}

        {showSettings && (
          <>
            <h2 className="text-lg font-semibold mb-3">Küpsiste seaded ⚙️</h2>

            {/* Essential */}
            <div className="mb-4">
              <h3 className="font-medium flex justify-between">
                Vajalikud
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                  Alati lubatud
                </span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Lehe tööks vajalikud küpsised.
              </p>
            </div>

            {/* Analytics */}
            <div className="mb-4">
              <h3 className="font-medium flex justify-between">
                Analüütika
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={() => setAnalytics(!analytics)}
                    className="sr-only"
                  />
                  <span
                    className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${
                      analytics ? "bg-blue-600" : ""
                    }`}
                  >
                    <span
                      className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                        analytics ? "translate-x-5" : ""
                      }`}
                    />
                  </span>
                </label>
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Aitab analüüsida, kuidas kasutajad lehte kasutavad.
              </p>
            </div>

            {/* Marketing */}
            <div className="mb-4">
              <h3 className="font-medium flex justify-between">
                Turundus
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={() => setMarketing(!marketing)}
                    className="sr-only"
                  />
                  <span
                    className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${
                      marketing ? "bg-pink-600" : ""
                    }`}
                  >
                    <span
                      className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                        marketing ? "translate-x-5" : ""
                      }`}
                    />
                  </span>
                </label>
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Isikupärastatud reklaamide näitamine.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Tagasi
              </button>

              <button
                onClick={saveCustom}
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Salvesta valikud
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
