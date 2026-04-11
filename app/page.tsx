import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Installation } from "@/components/Installation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#4a67a1,#0a0f1f)] text-white">
      <main className="flex flex-col">
        <Hero />
        <About />
        <Installation />
        <HowItWorks />
        <CTA />
      </main>
    </div>
  );
}
