import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Obrigado por instalar o Zênite",
  description: "Instalação concluída. Próximos passos para começar a usar.",
};

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#4a67a1,#0a0f1f)] text-white">
      <main className="py-20 px-6 max-w-5xl mx-auto">
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center">
            <Image
              src="/zenite-logo.png"
              alt="ZÊNITE Logo"
              width={420}
              height={420}
            />
          </div>

          <h1 className="mt-10 text-3xl sm:text-4xl font-semibold text-white">
            Obrigado por instalar o Zênite!
          </h1>

          <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
            A partir de agora, sua produtividade tende a aumentar com estimativas
            mais consistentes e um planning mais rápido.
          </p>

          <Link
            className="mt-8 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:opacity-90 transition"
            href="/#como-usar"
          >
            Ver como utilizar
          </Link>
        </div>
      </main>
    </div>
  );
}

