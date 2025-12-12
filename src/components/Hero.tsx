"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop')",
          }}
        />
        <div className="video-overlay absolute inset-0" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b35] rounded-full blur-[150px] opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#ff8c5a] rounded-full blur-[120px] opacity-15 animate-float delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#ff6b35] border border-[#ff6b35]/30 rounded-full bg-[#ff6b35]/10">
            Scottsdale Creative Agency
          </span>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Create{" "}
          <span className="gradient-text">Scroll-Stopping</span>
          <br />
          Video Ads
        </h1>

        <p className="animate-fade-in-up delay-200 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          We transform your ad spend into profit with high-quality,
          high-performance video content for DTC brands on Shopify and Amazon.
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" className="btn-primary text-lg">
            Start Your Project
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link href="#portfolio" className="btn-secondary text-lg">
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-500 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "7+", label: "Years Experience" },
            { number: "5M+", label: "Views Generated" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
