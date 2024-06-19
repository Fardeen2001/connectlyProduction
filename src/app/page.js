import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
        <div className="px-5">
          <Section1 />
          <Section2 />
        </div>
        <Section3 />
        <Contact />
      </main>
    </>
  );
}
