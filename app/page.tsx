import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
