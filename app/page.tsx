export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                C² Language
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-slate-700 dark:text-slate-300">
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
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900/40"
                >
                  Read docs
                </a>
                <a
                  href="https://github.com/csq-lang/csquared"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-white/60 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900/40 dark:hover:text-slate-100"
                >
                  View on GitHub
                </a>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Static typing
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    With type inference where it helps.
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Fast execution
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Low-level performance focus.
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Cross-platform
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Designed to run anywhere you build.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Basic syntax
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Clean, familiar, and focused on clarity.
                </p>
                <pre className="mt-4 whitespace-pre overflow-x-auto rounded-lg bg-slate-200 dark:bg-slate-900 p-4 text-sm text-slate-100">
                  <code>
                    <span className="code-type">int</span>{" "}
                    <span className="code-ident">add</span>
                    <span>(</span>
                    <span className="code-type">int</span>{" "}
                    <span className="code-ident">a</span>,{" "}
                    <span className="code-type">int</span>{" "}
                    <span className="code-ident">b</span>
                    <span>) &#123;</span>
                    <br></br>
                    <span className="code-keyword">{"\t"}return</span>{" "}
                    <span className="code-ident">a</span> +{" "}
                    <span className="code-ident">b</span>
                    <br></br>
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Overview
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                C² aims to combine the performance you expect from systems
                languages with the readability and ergonomics you want day to
                day. The philosophy is pragmatic: avoid unnecessary abstraction
                and make behavior explicit.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                For detailed language rules and semantics, see the spec.
              </p>
              <div className="mt-6">
                <a
                  href="https://csq-lang.github.io/spec"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Read the spec →
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
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
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Structures
                  </div>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-200 dark:bg-slate-900 p-4 text-sm text-slate-100">
                    <code className="whitespace-pre">
                      <span className="code-keyword">type</span>{" "}
                      <span className="code-ident">point2d</span> ={" "}
                      <span className="code-keyword">struct</span> &#123;{"\n"}
                      {"\t"}
                      <span className="code-type">int</span>{" "}
                      <span className="code-ident">x</span>;{"\n"}
                      {"\t"}
                      <span className="code-type">int</span>{" "}
                      <span className="code-ident">y</span>;{"\n"}
                      &#125;;{"\n\n"}
                      <span className="code-type">point2d</span>{" "}
                      <span className="code-ident">p</span> <span>=</span>{" "}
                      &#123;
                      <span className="code-number">6</span>,{" "}
                      <span className="code-number">8</span>&#125;;
                      {/*<span className="code-type">int</span>{" "}
                      <span className="code-ident">count</span> ={" "}
                      <span className="code-number">10</span>;{"\n"}
                      <span className="code-type">double</span>{" "}
                      <span className="code-ident">pi</span> ={" "}
                      <span className="code-number">3.14159</span>;{"\n"}
                      <span className="code-type">bool</span>{" "}
                      <span className="code-ident">active</span> ={" "}
                      <span className="code-const">true</span>;{"\n"}
                      <span className="code-type">ulong</span>{" "}
                      <span className="code-ident">id</span> ={" "}
                      <span className="code-number">9143145u</span>;{"\n"}
                      <span className="code-type">int</span>{" "}
                      <span className="code-ident">result</span> ={" "}
                      <span className="code-ident">add</span>(
                      <span className="code-number">5</span>,{" "}
                      <span className="code-number">11</span>);{"\n"}*/}
                    </code>
                  </pre>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Control flow
                  </div>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-200 dark:bg-slate-900 p-4 text-sm text-slate-100">
                    <code className="whitespace-pre">
                      <span className="code-keyword">if</span> (
                      <span className="code-ident">count </span>&gt;{" "}
                      <span className="code-number">5</span>) {"{\n"}
                      <span className="code-comment">{`\t// Greater`}</span>
                      {"\n"}
                      {"}"} <span className="code-keyword">else</span> {"{\n"}
                      <span className="code-comment">{`\t// Less or Equal`}</span>
                      {"\n"}
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="getting-started"
        className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Getting started
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
            C² is open source. The best way to begin is to explore the
            repository, read the docs, and follow the {"project's"} build and
            usage instructions.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                1) Read
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Start with the docs to understand syntax, types, and semantics.
              </p>
              <div className="mt-4">
                <a
                  href="https://csq-lang.github.io/csq-documentation"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Spec →
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                2) Explore
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Browse the repo for examples, the compiler/runtime, and roadmap.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/csq-lang/csquared"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                3) Spec
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Read the technical specification to understand how the language
                works internally.
              </p>
              <div className="mt-4">
                <a
                  href="/docs"
                  className="text-sm font-semibold text-blue-800 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
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
