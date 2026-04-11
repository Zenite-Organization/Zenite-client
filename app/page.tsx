"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import type { Lang } from "@/components/i18n";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Installation } from "@/components/Installation";

const STORAGE_KEY = "zenite_lang";

export default function Home() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "pt";

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;

    const browserLang = window.navigator.language?.toLowerCase();
    return browserLang?.startsWith("en") ? "en" : "pt";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const footer =
    lang === "pt"
      ? { privacy: "Política de Privacidade", terms: "Termos de Serviço" }
      : { privacy: "Privacy Policy", terms: "Terms of Service" };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#4a67a1,#0a0f1f)] text-white">
      <header className="py-6 px-6 max-w-5xl mx-auto flex items-center justify-between">
        <div className="text-white/80 font-semibold tracking-widest">ZÊNITE</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang("pt")}
            aria-label="Português"
            aria-pressed={lang === "pt"}
            className={`w-10 h-10 rounded-xl border transition ${
              lang === "pt"
                ? "bg-white text-black border-white/60"
                : "bg-white/10 text-white border-white/10 hover:bg-white/20"
            }`}
          >
            🇧🇷
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-label="English"
            aria-pressed={lang === "en"}
            className={`w-10 h-10 rounded-xl border transition ${
              lang === "en"
                ? "bg-white text-black border-white/60"
                : "bg-white/10 text-white border-white/10 hover:bg-white/20"
            }`}
          >
            🇺🇸
          </button>
        </div>
      </header>

      <main className="flex flex-col">
        <Hero lang={lang} />
        <About lang={lang} />
        <Installation lang={lang} />
        <HowItWorks lang={lang} />
        <CTA lang={lang} />
      </main>

      <footer className="py-10 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-white/60">
          <Link className="hover:text-white/80 transition" href="/privacy">
            {footer.privacy}
          </Link>
          <span className="hidden sm:inline text-white/30">•</span>
          <Link className="hover:text-white/80 transition" href="/terms">
            {footer.terms}
          </Link>
        </div>
      </footer>
    </div>
  );
}
