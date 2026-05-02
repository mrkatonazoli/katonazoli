import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Vision } from "@/components/Vision";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Mission />
        <Vision />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
