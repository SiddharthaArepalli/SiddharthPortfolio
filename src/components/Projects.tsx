import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import cryptoImage from './crpto.png'; // Ensure the image is in the components folder
import payKaroImage from './payKaro.png'; // Ensure the image is in the components folder

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power4.out"
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Arth Gyan",
      description: "Financial Literacy Platform",
      image: "https://camo.githubusercontent.com/a4a94e10a38321ed235cd78366435ed3a358334b046f42bcebaab050a3992270/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f4a3961344b6a41454553672f6d617872657364656661756c742e6a7067",
      tech: ["React.js", "Node.js", "Express","Gemini APIKEY'S", "Trade viewApi"],
      github: "https://github.com/SiddharthaArepalli/",
      live: "https://arthgyan23.netlify.app/"
    },
    {
      title: "PayKaro",
      description: "Peer to Peer Payment System",
      image: payKaroImage,
      tech: ["Node.js", "Express.js", "Nodemon(NPM)", "MongoDB", "Mongoose" , "React" , "JWT"],
      github: "https://github.com/SiddharthaArepalli/payKaro---Frontend",
      live: "https://pay-karo-frontend-navy.vercel.app/"
    },
    {
      title: "Crypto Bazzar",
      description: "Feature-rich social platform with real-time messaging",
      image: cryptoImage,
      tech: ["ReactJs", "CSS 3", "JavaScript", "Coingecho API"],
      github: "https://github.com/SiddharthaArepalli/CryptoBazaar",
      live: "https://crypto-bazaar-green.vercel.app/"
    }
  ];

  return (
    <div ref={projectsRef} className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          <span className="text-white">My <span className='text-gray-400'>Projects</span></span>
        </h2>
        {projects.map((project, index) => (
          <div key={index} className="projects-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 bg-neutral-900/80 rounded-2xl border border-white/10 shadow-lg p-8">
            {/* Left Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg border border-white/10 bg-black/20"
              />
            </div>
            {/* Right Content */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 font-gilroy">{project.title}</h3>
              <p className="text-gray-200 mb-6 font-gilroy">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700/40 text-white rounded-full text-sm font-gilroy border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition cursor-pointer font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Website
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;