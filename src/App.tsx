import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to("body", {
      css: { visibility: "visible", cursor: "auto" },
      duration: 0
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-black to-blue-900">
      <div className="fixed bg-cover bg-center bg-no-repeat" />
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative z-10">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;