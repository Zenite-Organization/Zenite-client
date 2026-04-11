const usage = [
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

const signals = [
  "Descrição da task",
  "Complexidade percebida",
  "Histórico (se houver)",
];

export function HowItWorks() {
  return (
    <section id="como-usar" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Como usar e como funciona
        </h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          Um fluxo simples para o time — e um diferencial que melhora a qualidade
          das estimativas.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-white font-semibold text-xl">Como usar</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {usage.map((item) => (
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
          <h3 className="text-white font-semibold text-xl">Como funciona</h3>
          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/80 leading-relaxed">
              A IA analisa sinais do seu trabalho para sugerir uma estimativa
              inicial:
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
              Com o tempo, quanto mais contexto e histórico disponíveis, mais
              consistente tende a ficar a base para discussão no planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
