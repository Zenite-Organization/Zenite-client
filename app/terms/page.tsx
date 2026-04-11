export const metadata = {
  title: "Terms of Service — Zênite",
  description: "Termos de Uso do Zênite.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#4a67a1,#0a0f1f)] text-white">
      <main className="py-20 px-6 max-w-5xl mx-auto">
        <article className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Terms of Service
            </h1>
            <p className="mt-3 text-white/60">Last updated: April 2026</p>

            <div className="mt-10 text-left space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  By installing or using Zênite ("the App"), you agree to these
                  Terms of Service.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  2. Description of Service
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Zênite is a GitHub integration designed for Scrum teams that:
                </p>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Estimates task effort using artificial intelligence</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Enhances Scrum workflows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Integrates with GitHub Issues and Projects</span>
                  </li>
                </ul>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  3. Acceptable Use
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  You agree to use the App only for lawful purposes and in
                  accordance with these Terms.
                </p>
                <p className="mt-3 text-white/80 leading-relaxed">
                  You must not:
                </p>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Misuse or attempt to exploit the App</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Interfere with system performance or security</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Use the App in violation of GitHub’s terms</span>
                  </li>
                </ul>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  4. AI Disclaimer
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Zênite uses artificial intelligence services to estimate task
                  effort.
                </p>
                <p className="mt-3 text-white/80 leading-relaxed">
                  These estimations are generated automatically and may not be
                  accurate. They should be used as guidance only.
                </p>
                <p className="mt-3 text-white/80 leading-relaxed">
                  We are not responsible for decisions made based on these
                  estimations.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  5. Data and Processing
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  The App processes GitHub data (such as issue title, description,
                  and type) to provide its functionality.
                </p>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Data may be processed by third-party AI services and stored for
                  improving estimation quality.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  6. Availability
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  The App is provided "as is" without guarantees of availability,
                  reliability, or performance.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  7. Limitation of Liability
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  We are not liable for:
                </p>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Incorrect estimations generated by the App</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Data loss or service interruptions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>Any indirect or consequential damages</span>
                  </li>
                </ul>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  8. Termination
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  We reserve the right to suspend or terminate access to the App
                  at any time in case of misuse.
                </p>
                <p className="mt-3 text-white/80 leading-relaxed">
                  You may stop using the App at any time by uninstalling it from
                  your GitHub account or organization.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">
                  9. Changes to Terms
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  We may update these Terms at any time. Continued use of the App
                  indicates acceptance of the updated Terms.
                </p>
              </section>

              <div className="h-px w-full bg-white/10" />

              <section>
                <h2 className="text-xl font-semibold text-white">10. Contact</h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  For questions or support:
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