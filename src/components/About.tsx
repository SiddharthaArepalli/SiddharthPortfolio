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
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg text-gray-300 mb-8">
            Hello! 👋 I’m Siddhartha, a dedicated MERN Stack developer, open-source contributor, and tech enthusiast passionate about solving problems and building innovative solutions.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            My journey in tech has been shaped by hands-on experience in open-source projects, where I’ve had the opportunity to collaborate with talented developers and contribute to impactful repositories during programs like GSSoC and Hacktoberfest.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            I thrive on tackling challenging coding problems and exploring Data Structures and Algorithms to sharpen my problem-solving skills. Participating in hackathons has further fueled my enthusiasm for creating real-world applications under dynamic conditions.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            As a lifelong learner, I’m always excited to grow, share knowledge, and take on new challenges in the ever-evolving tech landscape. Let’s connect and build something amazing together! 🚀
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="about-content flex flex-col items-center text-center p-6 rounded-xl bg-white/5">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tech Enthusiast</h3>
              <p className="text-gray-400">Passionate about exploring and embracing new technologies</p>
            </div>
            <div className="about-content flex flex-col items-center text-center p-6 rounded-xl bg-white/5">
              <Code className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Open Source Contribution</h3>
              <p className="text-gray-400">Actively contributing to open-source projects and communities</p>
            </div>
            <div className="about-content flex flex-col items-center text-center p-6 rounded-xl bg-white/5">
              <Coffee className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Always Learning</h3>
              <p className="text-gray-400">Constantly expanding my knowledge and skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;