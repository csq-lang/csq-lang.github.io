export default function Home() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                C² Language
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-slate-700">
                A simple and efficient programming language designed for modern
                software development. Compiled, pragmatic, and built to keep you
                in control.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#getting-started"
                  className="inline-flex items-center justify-center rounded-md bg-blue-800 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-900"
                >
                  Get started
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Read docs
                </a>
                <a
                  href="https://github.com/csq-lang/csquared"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-white/60 hover:text-slate-900"
                >
                  View on GitHub
                </a>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    Static typing
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    With type inference where it helps.
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    Fast execution
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Low-level performance focus.
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    Cross-platform
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Designed to run anywhere you build.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">
                  Basic syntax
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clean, familiar, and focused on clarity.
                </p>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
                  <code>{`int count = 10;
double pi = 3.14159;
bool active = true;
ulong id = 9143145u;`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Overview
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                C² aims to combine the performance you expect from systems
                languages with the readability and ergonomics you want day to
                day. The philosophy is pragmatic: avoid unnecessary abstraction
                and make behavior explicit.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                For detailed language rules and semantics, see the spec.
              </p>
              <div className="mt-6">
                <a
                  href="https://csq-lang.github.io/spec"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900"
                >
                  Read the spec →
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Features
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Static typing with type inference",
                  "Memory safe compilation",
                  "Fast execution",
                  "Simple syntax",
                  "Cross-platform support",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-semibold text-slate-900">
                    Functions
                  </div>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
                    <code>{`int add(int a, int b) {
    return a + b
}`}</code>
                  </pre>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-semibold text-slate-900">
                    Control flow
                  </div>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
                    <code>{`if (count > 5) {
    // Greater than
} else {
    // Less or Equal than
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="getting-started"
        className="border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Getting started
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            C² is open source. The best way to begin is to explore the
            repository, read the spec, and follow the project's build and usage
            instructions.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">
                1) Read
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Start with the spec to understand syntax, types, and semantics.
              </p>
              <div className="mt-4">
                <a
                  href="https://csq-lang.github.io/spec"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900"
                >
                  Spec →
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">
                2) Explore
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Browse the repo for examples, the compiler/runtime, and roadmap.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/csq-lang/csquared"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">
                3) Docs
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn what the project is and how it's shaped by the community.
              </p>
              <div className="mt-4">
                <a
                  href="/docs"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900"
                >
                  About C² →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
