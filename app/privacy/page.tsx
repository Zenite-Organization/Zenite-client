export const metadata = {
  title: "Privacy Policy — Zênite",
  description: "Política de Privacidade do Zênite.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#4a67a1,#0a0f1f)] text-white">
      <main className="py-20 px-6 max-w-5xl mx-auto">
        <article className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-white/60">Last updated: April 2026</p>

            <div className="mt-10 text-left space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-white">
                  1. Introduction
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Zênite ("the App") is a GitHub integration designed to help Scrum
                  teams estimate task effort using artificial intelligence and
                  manage workflows through GitHub Issues and Projects.
                </p>
                <p className="mt-3 text-white/80 leading-relaxed">
                  By using the App, you agree to this Privacy Policy.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  2. Data We Access
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  The App may access the following GitHub data:
                </p>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Repository metadata</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Issue title, description and type</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>GitHub Projects (Project V2)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Basic user or organization information</span>
                  </li>
                </ul>
                <p className="mt-6 text-white/80 leading-relaxed">
                  We only access data strictly necessary to provide the core
                  functionality of the App.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  3. How We Use Data
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  The collected data is used exclusively to:
                </p>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Generate AI-based task time estimations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Enhance Scrum workflows and productivity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Organize and manage GitHub Projects</span>
                  </li>
                </ul>
                <p className="mt-6 text-white/80 leading-relaxed">
                  We do NOT use your data for advertising, profiling, or resale.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  4. AI and Third-Party Processing
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Zênite uses artificial intelligence services to generate task
                  estimations, including:
                </p>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>OpenAI (for embeddings)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Google Gemini (for estimation generation)</span>
                  </li>
                </ul>
                <p className="mt-6 text-white/80 leading-relaxed">
                  The following data may be sent to these services:
                  issue title, description, and type.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  5. Data Storage
                </h2>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>
                      Data is processed temporarily to generate estimations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>
                      Completed issue data may be stored in Pinecone for
                      similarity search and improved future estimations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>
                      No sensitive personal data is intentionally stored.
                    </span>
                  </li>
                </ul>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  6. Data Sharing
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  We do not sell or share your data with third parties, except
                  when required to process AI functionality as described above.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">7. Security</h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  We implement reasonable safeguards to protect your data.
                  However, security also depends on GitHub and third-party
                  infrastructure.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  8. User Control
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  You may revoke access at any time by uninstalling the GitHub App
                  from your account or organization.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  9. Changes to This Policy
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  We may update this Privacy Policy periodically. Continued use
                  of the App constitutes acceptance of any changes.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">10. Contact</h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  If you have any questions, please contact:
                </p>
                <p className="mt-3 text-white/80 leading-relaxed font-mono">
                  zenite.ec@gmail.com
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}