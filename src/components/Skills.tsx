import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = [
  {
    category: "Programming Languages",
    items: ["Java (DSA & OOP)", "JavaScript", "TypeScript", "Python", "C"]
  },
  {
    category: "Web & Backend",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Zustand"
    ]
  },
  {
    category: "AI & Automation",
    items: [
      "LLMs",
      "ADK",
      "Agent-Based Systems",
      "Workflow Automation",
      "Proposal Automation"
    ]
  },
  {
    category: "Databases & Infra",
    items: ["MongoDB", "MySQL", "Redis", "Docker", "GCP"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Postman", "Socket.IO", "VS Code", "Figma"]
  }
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
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-neutral-900/80 p-8 rounded-2xl border border-white/10 shadow-lg">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            <span className='text-white'>Technical</span> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 className="text-2xl font-semibold mb-6 text-white font-gilroy">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-item px-4 py-2 rounded-full bg-gradient-to-r from-gray-700/40 to-gray-900/40 border border-white/10 text-white font-gilroy hover:from-gray-700/60 hover:to-gray-900/60 transition-colors cursor-default"
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