import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Linkedin, Instagram, Github, FileText } from 'lucide-react';
import mypic from './mypic.jpg'; // Make sure to place the image in the appropriate directory

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.set(headingRef.current, { perspective: 400 });
      
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
      });

      // Subtitle animation
      gsap.from(textRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.4,
        ease: "power4.out",
        delay: 0.2
      });

      // Icons animation with bounce effect
      gsap.from(".hero-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.3
      });

      // Zero-gravity bouncy words animation for the name
      const letters = headingRef.current.textContent.split("");
      headingRef.current.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join("");
      gsap.fromTo(".letter", {
        y: -20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.05
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-[70vh] flex flex-col lg:flex-row items-center relative overflow-hidden px-4 lg:px-8 mt-20 lg:mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10 space-y-6 text-center lg:text-left">
            <div className="overflow-hidden">
              <h1 
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white leading-tight"
              >
                Siddhartha Arepalli
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p 
                ref={textRef}
                className="text-lg sm:text-xl lg:text-2xl text-gray-300"
              >
                Crafting digital experiences with code and creativity
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-8 py-6 flex-wrap">
              <div className="hero-icon flex flex-col items-center group">
                <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <span className="mt-2 text-xs sm:text-sm">LinkedIn</span>
              </div>
              <div className="hero-icon flex flex-col items-center group">
                <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <span className="mt-2 text-xs sm:text-sm">Instagram</span>
              </div>
              <div className="hero-icon flex flex-col items-center group">
                <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
                  <Github className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <span className="mt-2 text-xs sm:text-sm">GitHub</span>
              </div>
              <div className="hero-icon flex flex-col items-center group">
                <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <span className="mt-2 text-xs sm:text-sm">Resume</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="developer-image relative flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px]">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply"></div> */}
              <div className="absolute inset-0"></div>
              <img src={mypic} alt="Siddhartha Arepalli" className="w-full h-full object-cover" />
            </div>
            {/* Glass effect overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 backdrop-blur-sm rounded-2xl border border-white/10"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;