"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff6b35] rounded-full blur-[200px] opacity-10 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2940&auto=format&fit=crop"
                alt="LYVISUALS Studio"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 md:bottom-8 md:right-8 p-6 rounded-2xl glass max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35]">
                  <svg
                    className="w-6 h-6"
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
                  <div className="font-semibold">North Scottsdale, AZ</div>
                  <div className="text-sm text-gray-400">2000 sq ft Studio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <span className="text-[#ff6b35] font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your Creative Partner in{" "}
              <span className="gradient-text">Scottsdale</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Based in Scottsdale and Phoenix, LYVISUALS is a boutique creative
              agency and video production company that specializes in creating
              modern content for entrepreneurs and brands.
            </p>
            <p className="text-gray-400 mb-8">
              Our team of talented content creators brings expertise in video
              production, brand photography, motion graphics, and copywriting.
              We transform ad spend into profit by creating high-quality,
              high-performance video ads for DTC brands on Shopify and Amazon.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: "🎬",
                  title: "Video Production",
                  desc: "Professional video content",
                },
                {
                  icon: "📸",
                  title: "Photography",
                  desc: "Stunning product shots",
                },
                {
                  icon: "✨",
                  title: "Motion Graphics",
                  desc: "Eye-catching animations",
                },
                {
                  icon: "📝",
                  title: "Copywriting",
                  desc: "Compelling ad copy",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <div className="font-semibold">{feature.title}</div>
                    <div className="text-sm text-gray-500">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Work With Us
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#2a2a2a] border-2 border-[#0a0a0a] flex items-center justify-center text-xs"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm">50+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div
          className={`mt-24 ${
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <p className="text-center text-gray-500 text-sm mb-8">
            TRUSTED BY LEADING BRANDS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {[
              "American Express",
              "Tom's of Maine",
              "Detox Organics",
              "Shopify",
              "Amazon",
            ].map((brand, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
