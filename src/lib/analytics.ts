/** GA4 Measurement ID — prefer NEXT_PUBLIC_GA_ID in Vercel; fallback for local/marketing site. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-LNZMJB1HEZ";

export const CONSENT_STORAGE_KEY = "inmerzion-consent";

export type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** Update Consent Mode v2 after the user chooses. Accept = analytics only. */
export function updateAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
