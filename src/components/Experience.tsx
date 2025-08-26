import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      role: "Technical Team Lead & Full Stack Developer",
      company: "Wission Axis",
      period: "June 2024 - Sep 2024",
      description: "Led a team of developers to build and deploy enterprise applications using React, Node.js, and AWS."
    },
    {
      role: "Deputy Technical Lead",
      company: "Students Developers Community",
      period: "2024 - present",
      description: "Oversaw the development and maintenance of multiple client projects using modern web technologies."
    },
    {
      role: "UI-UX Designer Intern",
      company: "Coding Idol",
      period: "Nov 2023 - Mar 2024",
      description: "Designed and implemented responsive and interactive web applications using React and Vue.js."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-card", {
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
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-neutral-900/80 p-8 rounded-2xl border border-white/10 shadow-lg">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card flex gap-6 p-6 rounded-xl bg-gray-800/60 border border-white/10">
                <div className="hidden md:flex items-start">
                  <div className="p-3 rounded-full bg-gray-700/40">
                    <Briefcase className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white font-gilroy">{exp.role}</h3>
                  <p className="text-gray-300 mb-2 font-gilroy">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3 font-gilroy">{exp.period}</p>
                  <p className="text-gray-200 font-gilroy">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;