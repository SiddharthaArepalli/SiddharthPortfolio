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
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="hidden md:flex items-start">
                  <div className="p-3 rounded-full bg-purple-500/20">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
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