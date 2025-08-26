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
          x: '100%',
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
            href="/utils/Siddhartha_Arepalli_Resume%20(1).pdf"
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
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 max-w-xs z-50 shadow-lg transform translate-x-full opacity-0 flex flex-col p-6 bg-black border-l border-neutral-800"
      >
        <div className="flex justify-between items-center mb-6">
          <span className="w-7 h-7 bg-white rounded-md flex items-center justify-center font-bold text-black text-lg">N</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-3 py-2 rounded-md text-white font-medium hover:bg-neutral-800 transition-colors text-base"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/utils/Siddhartha_Arepalli_Resume%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-colors text-base flex items-center gap-1"
          >
            See Resume <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
