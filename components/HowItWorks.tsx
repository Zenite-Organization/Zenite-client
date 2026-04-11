import type { Lang } from "@/components/i18n";

type UsageItem = {
  title: string;
  description: string;
};

function getUsage(lang: Lang): UsageItem[] {
  if (lang === "en") {
    return [
      {
        title: 'Add the "Estimate" label',
        description:
          'Apply the "Estimate" label to the issue you want to estimate to trigger the estimation flow.',
      },
      {
        title: "Generate an estimate",
        description:
          "Zenite suggests a starting estimate based on the description and available history.",
      },
      {
        title: "Adjust the result",
        description:
          "Refine the suggestion with your team—humans keep the final decision.",
      },
      {
        title: "Fit into Scrum",
        description:
          "Use it during planning and learn from execution to improve over time.",
      },
    ];
  }

  return [
    {
      title: 'Adicionar label "Estimate"',
      description:
        'Aplique a label "Estimate" na issue que você quer estimar para disparar o fluxo de estimativa.',
    },
    {
      title: "Gerar estimativa",
      description:
        "O Zênite sugere uma estimativa inicial com base na descrição e no histórico.",
    },
    {
      title: "Ajustar resultado",
      description:
        "Refine a sugestão com o time, mantendo a decisão final humana e alinhada.",
    },
    {
      title: "Integrar no fluxo Scrum",
      description:
        "Use a estimativa no planning e acompanhe a execução para melhorar continuamente.",
    },
  ];
}

function getSignals(lang: Lang) {
  if (lang === "en") {
    return ["Task description", "Perceived complexity", "History (if available)"];
  }
  return ["Descrição da task", "Complexidade percebida", "Histórico (se houver)"];
}

export function HowItWorks({ lang }: { lang: Lang }) {
  const usageItems = getUsage(lang);
  const signals = getSignals(lang);

  return (
    <section id="como-usar" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          {lang === "pt" ? "Como usar e como funciona" : "How to use and how it works"}
        </h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          {lang === "pt"
            ? "Um fluxo simples para o time — e um diferencial que melhora a qualidade das estimativas."
            : "A simple flow for your team—and a differentiator that improves estimate quality."}
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-white font-semibold text-xl">
            {lang === "pt" ? "Como usar" : "How to use"}
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {usageItems.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="mt-2 text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-xl">
            {lang === "pt" ? "Como funciona" : "How it works"}
          </h3>
          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/80 leading-relaxed">
              {lang === "pt"
                ? "A IA analisa sinais do seu trabalho para sugerir uma estimativa inicial:"
                : "AI analyzes signals from your work to suggest a starting estimate:"}
            </p>
            <ul className="mt-5 space-y-3">
              {signals.map((label) => (
                <li key={label} className="flex items-center gap-3 text-white/60">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-white/60 leading-relaxed">
              {lang === "pt"
                ? "Com o tempo, quanto mais contexto e histórico disponíveis, mais consistente tende a ficar a base para discussão no planning."
                : "Over time, the more context and history available, the more consistent the baseline tends to become for planning discussions."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
