import Image from "next/image";

const MARKETPLACE_URL = "https://github.com/marketplace";

export function Hero() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/zenite-logo.png"
            alt="ZÊNITE Logo"
            width={420}
            height={420}
          />
        </div>

        <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-widest text-white">
          ZÊNITE
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
          A INTELIGÊNCIA QUE ELEVA SUAS DECISÕES
        </p>

        <div className="mt-8 h-px w-32 bg-white/20" />

        <a
          className="mt-10 px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
          href={MARKETPLACE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instalar no GitHub Marketplace
        </a>

        <a
          className="mt-6 text-sm text-white/60 hover:text-white/80 transition"
          href="#install"
        >
          Ver como instalar
        </a>
      </div>
    </section>
  );
}

