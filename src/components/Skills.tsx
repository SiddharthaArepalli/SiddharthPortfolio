import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = [
    { category: "Frontend", items: ["React", "Java Script", "Tailwind CSS", "GSAP", "HTML5" , "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
    { category: "UI-UX Designing", items: ["Figma", "Canva"] },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      });

      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        scale: 0,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        delay: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/10 p-8 rounded-2xl border border-white/20">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 className="text-2xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-item px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-700/20 border border-white/10 text-white hover:from-blue-500/30 hover:to-blue-700/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;