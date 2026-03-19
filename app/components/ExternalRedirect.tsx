"use client";

import { useEffect } from "react";

export default function ExternalRedirect({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  useEffect(() => {
    // Works on static hosting too; still leaves a clickable link as fallback.
    window.location.replace(to);
  }, [to]);

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Redirecting…
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
          Opening {label}. If you are not redirected automatically, use this
          link:
        </p>
        <p className="mt-4">
          <a
            className="font-semibold text-blue-800 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            href={to}
          >
            {to}
          </a>
        </p>
      </div>
    </div>
  );
}
