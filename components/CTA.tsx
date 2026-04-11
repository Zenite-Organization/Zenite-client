import type { Lang } from "@/components/i18n";

const MARKETPLACE_URL = "https://github.com/marketplace";

export function CTA({ lang }: { lang: Lang }) {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          {lang === "pt" ? "Comece a estimar melhor hoje mesmo" : "Start estimating better today"}
        </h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          {lang === "pt"
            ? "Instale o Zênite no GitHub Marketplace e traga mais previsibilidade para o seu time."
            : "Install Zenite from GitHub Marketplace and bring more predictability to your team."}
        </p>
        <a
          className="mt-8 inline-flex px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
          href={MARKETPLACE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {lang === "pt" ? "Instalar agora" : "Install now"}
        </a>
      </div>
    </section>
  );
}
