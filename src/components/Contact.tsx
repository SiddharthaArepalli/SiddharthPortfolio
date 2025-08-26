
const Contact = () => {
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
            Contact
          </span>
        </div>
        {/* Main heading */}
        <h1 className="text-center text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-gray-400 leading-tight mb-6 font-gilroy">
          Let's Get in Touch
        </h1>
        {/* Subheading */}
        <p className="text-center text-xl text-white font-gilroy mb-10">Let's connect.</p>
        {/* Hire Me Button */}
        <a
          href="mailto:siddharthaarepalli@gmail.com"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-gray-400 text-white text-2xl font-semibold font-gilroy bg-transparent hover:bg-white/10 transition-all duration-200 mb-8 shadow-md"
          style={{ minWidth: 200 }}
        >
          Hire Me
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6m6 0v6" />
          </svg>
        </a>
        {/* Email text */}
        <div className="text-center text-gray-400 text-lg font-gilroy">
          Or email siddharthaarepalli@gmail.com
        </div>
      </div>
    </section>
  );
};

export default Contact;