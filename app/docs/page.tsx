import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spec · C² Language",
  description: "The C² language specification.",
};

export default function DocsPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Specification
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
              The official C² language spec, mirrored into this site.
            </p>
            <div className="text-sm">
              <Link
                href="/"
                className="font-semibold text-blue-800 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <iframe
              title="C² Spec"
              src="/spec/index.html"
              className="h-[75vh] w-full rounded-xl"
            />
          </div>

          <div className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            Prefer the standalone spec site?{" "}
            <a
              className="font-semibold text-blue-800 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
              href="https://csq-lang.github.io/spec"
              target="_blank"
              rel="noreferrer"
            >
              Open it here
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
}
