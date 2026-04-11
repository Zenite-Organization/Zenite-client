import type { Lang } from "@/components/i18n";

export function About({ lang }: { lang: Lang }) {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {lang === "pt" ? "Sobre o Zênite" : "About Zenite"}
        </h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          {lang === "pt"
            ? "O Zênite é um plugin que usa Inteligência Artificial para ajudar times ágeis a estimarem melhor tarefas e demandas, com mais consistência e menos esforço manual."
            : "Zenite is a plugin that uses Artificial Intelligence to help agile teams estimate tasks and demands more consistently, with less manual effort."}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold">
            {lang === "pt" ? "O problema" : "The problem"}
          </h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            {lang === "pt"
              ? "Estimativas imprecisas e subjetivas durante planning, variando muito entre pessoas e sprints."
              : "Inaccurate and subjective estimates during planning, with high variance across people and sprints."}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold">
            {lang === "pt" ? "A solução" : "The solution"}
          </h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            {lang === "pt"
              ? "IA combinada com histórico e contexto do trabalho para sugerir uma estimativa inicial mais realista."
              : "AI combined with work context and (when available) history to suggest a more realistic starting estimate."}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold">
            {lang === "pt" ? "O resultado" : "The outcome"}
          </h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            {lang === "pt"
              ? "Planning mais rápido, decisões mais consistentes e maior previsibilidade para o time."
              : "Faster planning, more consistent decisions, and better predictability for the team."}
          </p>
        </div>
      </div>
    </section>
  );
}
