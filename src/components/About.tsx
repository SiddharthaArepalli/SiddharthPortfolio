import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code, Coffee, Globe } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <div className="about-content max-w-4xl mx-auto backdrop-blur-md bg-black/10 p-8 rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"><span className='text-white'>About</span> Me</h2>
          <p className="text-lg text-gray-300 mb-8">
            Hello! 👋 I’m Siddhartha, a dedicated MERN Stack developer, open-source contributor, and tech enthusiast passionate about solving problems and building innovative solutions.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            I thrive on tackling challenging coding problems and exploring Data Structures and Algorithms to sharpen my problem-solving skills. Participating in hackathons has further fueled my enthusiasm for creating real-world applications under dynamic conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;