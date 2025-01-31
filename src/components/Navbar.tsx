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
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              ASG
            </a> */}

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="nav-item text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 max-w-sm mt-30 z-50 shadow-lg transform translate-x-full opacity-0 flex flex-col p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
