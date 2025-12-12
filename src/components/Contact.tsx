"use client";

import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative"
    >
      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff6b35] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div
            className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="text-[#ff6b35] font-medium text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let&apos;s Create Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Ready to transform your brand with scroll-stopping content? Get in
              touch and let&apos;s discuss how we can help you stand out.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold mb-1">Studio Location</div>
                  <div className="text-gray-400">
                    14431 N 73rd St
                    <br />
                    Scottsdale, AZ 85260
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold mb-1">Business Hours</div>
                  <div className="text-gray-400">
                    Monday - Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <div className="text-gray-400">hello@lyvisuals.com</div>
                </div>
              </div>
            </div>

            {/* Remote Work Notice */}
            <div className="mt-10 p-6 rounded-2xl bg-[#1a1a1a] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📦</div>
                <div>
                  <div className="font-semibold mb-1">Out of State?</div>
                  <p className="text-gray-400 text-sm">
                    If you own an e-commerce brand, you can ship your products
                    directly to our studio and we&apos;ll take care of all the
                    content creation in-house.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <form className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/5">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#ff6b35] focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#ff6b35] focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#ff6b35] focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#ff6b35] focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#ff6b35] focus:outline-none transition-colors text-gray-400">
                    <option value="">Select a service</option>
                    <option value="video-ads">Video Ads</option>
                    <option value="product-photography">
                      Product Photography
                    </option>
                    <option value="ugc">UGC Content</option>
                    <option value="short-form">Short-Form Content</option>
                    <option value="branding">Branding Photography</option>
                    <option value="corporate">Corporate Videos</option>
                    <option value="retainer">Monthly Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#ff6b35] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary justify-center">
                  Send Message
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
