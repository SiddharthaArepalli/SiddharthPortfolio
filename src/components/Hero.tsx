import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code2, Globe, Server } from 'lucide-react';
import mypic from './mypic.jpg'

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.set(headingRef.current, { perspective: 400 });
      
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // Subtitle animation
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.3
      });

      // Image animation with parallax effect
      gsap.from(".developer-image", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3
      });

      // Icons animation with bounce effect
      gsap.from(".hero-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.6
      });

      // Button animation with float effect
      gsap.from(".cta-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.9
      });

      // Add hover animation for the image
      gsap.to(".developer-image", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 space-y-6 mt-15">
            <div className="overflow-hidden">
          <h1 
          ref={headingRef}
          className="mt-10 text-4xl sm:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight"
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
            
            <div className="flex gap-4 sm:gap-8 py-6 flex-wrap">
              <div className="hero-icon flex flex-col items-center group">
          <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
          </div>
          <span className="mt-2 text-xs sm:text-sm">Frontend</span>
              </div>
              <div className="hero-icon flex flex-col items-center group">
          <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
            <Server className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />
          </div>
          <span className="mt-2 text-xs sm:text-sm">Backend</span>
              </div>
              <div className="hero-icon flex flex-col items-center group">
          <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
          </div>
          <span className="mt-2 text-xs sm:text-sm">OpenSource</span>
              </div>
            </div>

            <button className="cta-button bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-transform">
              View My Work
            </button>
          </div>

          {/* Right Image */}
          <div className="developer-image relative mt-15">
            <div className="rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-0"></div>
              <img src={mypic} alt="Siddhartha Arepalli" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" />
            </div>
            {/* Glass effect overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-white/10"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;