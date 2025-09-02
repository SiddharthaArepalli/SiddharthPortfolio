import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
      });

      gsap.from('.nav-item', {
        opacity: 0,
        y: -10,
        duration: 0.3,
        stagger: 0.05,
        delay: 0.3,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
        });
      } else {
        gsap.to(menuRef.current, {
          x: '-100%',
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        });
      }
    }
  }, [isOpen]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-2 py-3 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-2 select-none">
          <span className="w-7 h-7 bg-white rounded-md flex items-center justify-center font-bold text-black text-lg mr-1">S</span>
          <span className="text-white font-semibold text-lg tracking-tight">Siddhartha Arepalli</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 ml-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-item px-3 py-2 rounded-md text-white font-medium hover:bg-neutral-800 transition-colors text-base"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/14ragzUGGOdGr8dha0Y8biBSH3dLx2-Oq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-colors text-base flex items-center gap-1"
          >
            See Resume <span aria-hidden>↗</span>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu Links as Buttons */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[60px] z-40 flex flex-col items-center gap-4 py-6 bg-neutral-900/95 shadow-lg animate-fadeIn">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="w-11/12 max-w-md py-3 rounded-lg bg-neutral-800 text-white font-semibold text-lg text-center shadow hover:bg-neutral-700 transition-colors border border-neutral-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/14ragzUGGOdGr8dha0Y8biBSH3dLx2-Oq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11/12 max-w-md py-3 rounded-lg bg-black text-white font-bold text-lg text-center shadow hover:bg-neutral-800 transition-colors border border-white"
          >
            See Resume <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
