import type { Metadata } from "next";
import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "Docs · C² Language",
  description: "Documentation and project overview for the C² programming language.",
};

function stripFrontmatter(markdown: string): string {
  if (!markdown.startsWith("---")) return markdown;
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return markdown;
  return markdown.slice(end + "\n---".length).trimStart();
}

async function loadAboutMarkdown(): Promise<string> {
  const aboutPath = path.join(process.cwd(), "Docs", "ABOUT.md");
  const raw = await fs.readFile(aboutPath, "utf8");
  return stripFrontmatter(raw);
}

export default async function DocsPage() {
  const markdown = await loadAboutMarkdown();

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Docs
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700">
              Project documentation and background for the C² language.
            </p>
            <div className="text-sm">
              <Link
                href="/"
                className="font-semibold text-blue-800 hover:text-blue-900"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <article className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </article>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">Links</div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a
                className="font-semibold text-blue-800 hover:text-blue-900"
                href="https://csq-lang.github.io/spec"
                target="_blank"
                rel="noreferrer"
              >
                Spec
              </a>
              <a
                className="font-semibold text-blue-800 hover:text-blue-900"
                href="https://github.com/csq-lang/csquared"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
