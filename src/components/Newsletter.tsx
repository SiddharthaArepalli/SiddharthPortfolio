
const Newsletter = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-24 bg-black overflow-hidden">
      {/* Abstract background effect (optional: can use a static image or CSS effect) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-90" />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        {/* Pill label */}
        <div className="mb-8">
          <span className="inline-block px-8 py-2 rounded-full bg-neutral-900 text-white text-lg font-medium shadow-md cursor-default border border-white/10">
            Get In Touch
          </span>
        </div>
        {/* Main heading */}
        <h1 className="text-center text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-gray-400 leading-tight mb-6 font-gilroy">
          Let's connect.
        </h1>
        {/* Subheading */}
        <p className="text-center text-xl text-white font-gilroy mb-10">Reach out for any inquiries, collaborations, or just to say hi.</p>
        {/* Hire Me Button */}
        <a
          href="https://www.linkedin.com/in/siddharthaarepalli/"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-gray-400 text-white text-2xl font-semibold font-gilroy bg-transparent hover:bg-white/10 transition-all duration-200 mb-8 shadow-md"
          style={{ minWidth: 200 }}
        >
          Hire Me
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6m6 0v6" />
          </svg>
        </a>
        {/* Email text */}
        <div className="text-center text-gray-400 text-lg font-gilroy mb-8">
          Or email asiddharthagoud@gmail.com
        </div>
  {/* Socials Bar below newsletter */}
        <div className="flex flex-row justify-center gap-6 w-fit mx-auto mt-2">
          <a href="https://github.com/SiddharthaArepalli/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors w-10 h-10" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/siddharthaarepalli/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors w-10 h-10" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a2 2 0 00-4 0v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5a6 6 0 016-6z" /><circle cx="8.5" cy="7" r="4" /></svg>
          </a>
          <a href="https://www.instagram.com/s1ddh4rth_dev/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors w-10 h-10" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <a href="mailto:siddharthaarepalli@gmail.com" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors w-10 h-10" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
