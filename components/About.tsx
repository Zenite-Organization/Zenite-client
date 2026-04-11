export function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Sobre o Zênite
        </h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          O Zênite é um plugin que usa Inteligência Artificial para ajudar times
          ágeis a estimarem melhor tarefas e demandas, com mais consistência e
          menos esforço manual.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold">O problema</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Estimativas imprecisas e subjetivas durante planning, variando muito
            entre pessoas e sprints.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold">A solução</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            IA combinada com histórico e contexto do trabalho para sugerir uma
            estimativa inicial mais realista.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold">O resultado</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Planning mais rápido, decisões mais consistentes e maior previsibilidade
            para o time.
          </p>
        </div>
      </div>
    </section>
  );
}

