import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-content", {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:s1ddh4rth4goud@gmail.com?subject=Contact from Portfolio&body=Email: ${email}%0D%0AMessage: ${message}`;
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/10 p-8 rounded-2xl border border-white/20">
          <h2 className="newsletter-content text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="newsletter-content text-xl text-gray-300 mb-8">
            Reach out to me for any inquiries, collaborations, or just to say hi. Let's connect and create something amazing together!
          </p>
          <form className="newsletter-content space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
                style={{ cursor: 'text' }}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                rows="4"
                required
                style={{ cursor: 'text' }}
              ></textarea>
            </div>
            <button type="submit" className="w-auto py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 transition-opacity" style={{ cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
