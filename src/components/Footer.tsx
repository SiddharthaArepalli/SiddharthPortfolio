
const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-neutral-800 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Name/Logo and Contact */}
        <div className="flex flex-col gap-6 min-w-[220px]">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <span className="block w-7 h-7 bg-white rounded-md mr-2" />
            <span className="text-white text-xl font-bold tracking-wide">Siddhartha Arepalli</span>
          </div>
          <div className="text-gray-300 text-base leading-relaxed">
            Full Stack developer crafting<br />clean & modern products
          </div>
          <div className="text-gray-400 text-sm select-all">siddharthaarepalli@gmail.com</div>
        </div>
        {/* Right: Links */}
        <div className="ml-20 flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-3 text-gray-300 text-base min-w-[220px]">
          <span className="block">Portfolio</span>
          <span className="block">G mail</span>
          <span className="block">Instagram</span>
          <span className="block">About</span>
          <span className="block">LinkedIn</span>
          <span className="block">Contact me</span>
          <span className="block">Behance</span>
          <span className="block">Book a call</span>
        </div>
      </div>
      {/* Big Name Footer Heading */}
      <div className="w-full mt-16">
        <h1 className="w-full text-center text-[clamp(2.5rem,10vw,7rem)] font-bold uppercase tracking-tight text-gray-700 font-gilroy select-none" style={{letterSpacing: '-0.04em', lineHeight: 1}}>
          SIDDHARTHA AREPALLI
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
