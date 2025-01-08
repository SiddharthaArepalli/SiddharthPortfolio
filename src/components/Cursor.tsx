import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e: MouseEvent) => {
      // Move the main cursor immediately
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: 'none',
      });

      // Smooth movement for the follower
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const handleHover = (e: MouseEvent) => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.2,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleUnhover = (e: MouseEvent) => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, input, textarea').forEach((el) => {
      el.addEventListener('mouseenter', handleHover as EventListener);
      el.addEventListener('mouseleave', handleUnhover as EventListener);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, input, textarea').forEach((el) => {
        el.removeEventListener('mouseenter', handleHover as EventListener);
        el.removeEventListener('mouseleave', handleUnhover as EventListener);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="cursor w-4 h-4 bg-purple-500 rounded-full fixed pointer-events-none z-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Cursor follower */}
      <div
        ref={followerRef}
        className="cursor-follower w-6 h-6 border-2  border-pink-500  rounded-full fixed pointer-events-none z-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default Cursor;
