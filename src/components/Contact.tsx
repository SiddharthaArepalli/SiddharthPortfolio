import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 25,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/10 p-8 rounded-2xl border border-white/20">
          <h2 className="contact-content text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="contact-content">
              <p className="text-xl text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Let's connect and create something amazing together.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
            </div>
            <form className="contact-content space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;