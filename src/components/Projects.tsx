import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import cryptoImage from './crpto.png'; // Ensure the image is in the components folder

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
      tech: ["React.js", "Node.js", "Gemini APIKEY'S", "Trade viewApi"],
      github: "https://github.com/SiddharthaArepalli/",
      live: "https://arthgyan23.netlify.app/"
    },
    {
      title: "The Flash Cards",
      description: "Generate flashcards from text",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["Node.js", "Express.js", "Nodemon(NPM)", "File System"],
      github: "https://github.com/SiddharthaArepalli/The-Flash-Cards",
      live: "https://theflashcards.com"
    },
    {
      title: "Crypto BazZar",
      description: "Feature-rich social platform with real-time messaging",
      image: cryptoImage,
      tech: ["ReactJs", "CSS 3", "JavaScript", "Coingecho API"],
      github: "https://github.com/SiddharthaArepalli/CryptoBazaar",
      live: "https://crypto-bazaar-green.vercel.app/"
    }
  ];

  return (
    <div ref={projectsRef} className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Featured Projects
      </h2>
      
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
        <div key={index} className="project-card group relative overflow-hidden rounded-xl">
          <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent p-8 flex flex-col justify-end transform transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-white rounded-full text-sm">
              {tech}
            </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.github} className="text-gray-100 hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
            </a>
            <a href={project.live} className="text-gray-100 hover:text-purple-400 transition-colors">
            <ExternalLink className="w-6 h-6" />
            </a>
          </div>
          </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;