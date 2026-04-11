const MARKETPLACE_URL = "https://github.com/marketplace";

const steps = [
  {
    title: "Acesse o GitHub Marketplace",
    description: (
      <>
        Abra o{" "}
        <a
          className="text-white/80 underline underline-offset-4 hover:text-white transition"
          href={MARKETPLACE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Marketplace
        </a>
        .
      </>
    ),
  },
  {
    title: 'Busque por "Zênite"',
    description:
      "Encontre o plugin e confira os detalhes e permissões necessárias.",
  },
  {
    title: "Clique em instalar",
    description:
      "Selecione a organização/conta e avance no fluxo de instalação.",
  },
  {
    title: "Autorize o acesso ao repositório",
    description:
      "Conceda as permissões solicitadas para o Zênite atuar no seu fluxo de trabalho.",
  },
];

export function Installation() {
  return (
    <section id="install" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Instalação
        </h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          Instale em poucos passos e comece a gerar estimativas com IA.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white font-semibold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-white font-semibold">{step.title}</h3>
                <p className="mt-2 text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

