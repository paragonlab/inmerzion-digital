"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  CONSENT_STORAGE_KEY,
  type ConsentChoice,
  updateAnalyticsConsent,
} from "@/lib/analytics";

const emptySubscribe = () => () => {};

function readStoredConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    /* private mode / blocked storage */
  }
  return null;
}

function persistConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* ignore */
  }
}

export function CookieConsent() {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [localChoice, setLocalChoice] = useState<ConsentChoice | null>(null);

  const stored = isClient ? readStoredConsent() : null;
  const resolved = localChoice ?? stored;

  useEffect(() => {
    if (resolved === "accepted") updateAnalyticsConsent(true);
    else if (resolved === "rejected") updateAnalyticsConsent(false);
  }, [resolved]);

  function accept() {
    persistConsent("accepted");
    updateAnalyticsConsent(true);
    setLocalChoice("accepted");
  }

  function reject() {
    persistConsent("rejected");
    updateAnalyticsConsent(false);
    setLocalChoice("rejected");
  }

  if (!isClient || resolved !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-line/70 bg-ink-soft/95 px-5 py-4 shadow-[0_-8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-5">
        <p className="text-sm leading-relaxed text-fog md:max-w-xl">
          Usamos cookies de analítica para mejorar el sitio. Puedes aceptar o
          rechazar.{" "}
          <Link
            href="/contacto"
            className="text-mist underline decoration-line underline-offset-2 hover:text-mint"
          >
            Más info
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-lg border border-line/80 px-4 py-2 text-sm font-medium text-mist transition hover:border-fog/40 hover:text-fog focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-mint px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mint-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
