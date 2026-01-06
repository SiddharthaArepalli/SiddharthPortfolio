
import mypic from './mypic.jpg';
import { useState } from 'react';
import { HyperText } from "@/components/ui/hyper-text"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="flex flex-col items-center min-h-[90vh] px-4 pt-20 bg-black w-full">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto mt-0">
        {/* Circular Personal Image with hover effect */}
        <div
          className="w-32 h-32 mt-0 mb-6 flex items-center justify-center relative group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={mypic}
            alt="Siddhartha Arepalli"
            className={`w-32 h-32 rounded-full object-cover bg-white/10 border-4 border-white/20 shadow-lg transition-opacity duration-300 absolute top-0 left-0 ${hovered ? 'opacity-0' : 'opacity-100'}`}
            style={{ zIndex: 2 }}
          />
          <span
            className={`flex items-center justify-center w-32 h-32 rounded-full bg-neutral-900 text-white text-2xl font-bold transition-opacity duration-300 absolute top-0 left-0 ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'} select-none`}
            style={{ zIndex: 3 }}
          >
            <span className="animate-bounce text-center italic">Heyoo👀</span>
          </span>
        </div>
        {/* Pill hover message */}
        <div className="mb-8">
          <span className="inline-block px-6 py-3 rounded-full bg-neutral-800 text-white text-lg font-medium shadow-md cursor-pointer transition hover:bg-neutral-700">
            Hover to say Hi, I'm Siddhartha Arepalli, a Full Stack Developer 👋
          </span>
        </div>
        {/* Main heading */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-4xl font-bold text-white leading-tight mb-4">
          Love turning ideas into real products that make a difference.
        </h1>
        {/* Subheading */}
        <p className="text-center text-lg sm:text-xl text-gray-300 font-light mb-10 font-serif">
          <span className="italic text-white/90">Experiences</span> that feel <span className="italic text-white/80">simple</span> and <span className="italic text-white/80">meaningful</span>
        </p>
        {/* Connect button */}
        <a
          href="https://linkedin.com/in/siddharthaarepalli" target='_blank'
          className="inline-block px-8 py-3 rounded-full border border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-colors duration-200"
        >
          <HyperText>Let's connect</HyperText>
        </a>
      </div>
    </section>
  );
};

export default Hero;