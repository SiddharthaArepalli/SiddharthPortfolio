import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-white">
      <p className="mt-2">© {new Date().getFullYear()} Developed by <span className='text-blue-400'>Siddhartha</span> with 💗</p>
    </footer>
  );
};

export default Footer;
