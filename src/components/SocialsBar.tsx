import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socials = [
  { icon: <Github />, url: 'https://github.com/SiddharthaArepalli', label: 'GitHub' },
  { icon: <Linkedin />, url: 'https://linkedin.com/in/siddharthaarepalli', label: 'LinkedIn' },
  { icon: <Instagram />, url: 'https://instagram.com/', label: 'Instagram' },
  { icon: <Mail />, url: 'mailto:siddharthaarepalli@gmail.com', label: 'Email' },
];

const SocialsBar = () => (
  <div className="fixed top-1/3 left-6 z-50">
    <div className="flex flex-col gap-4 bg-neutral-900/90 border border-white/10 rounded-xl px-3 py-4 shadow-lg">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-300 hover:text-white transition-colors w-10 h-10"
          title={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  </div>
);

export default SocialsBar;
