"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "E-Commerce Product Launch",
    category: "Video Ads",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop",
    description: "Scroll-stopping video ad campaign for Shopify brand",
  },
  {
    title: "Lifestyle Brand Photography",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
    description: "Complete product photography for e-commerce store",
  },
  {
    title: "TikTok Campaign",
    category: "Short-Form",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2874&auto=format&fit=crop",
    description: "Viral TikTok content series generating millions of views",
  },
  {
    title: "Corporate Brand Story",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop",
    description: "Brand documentary for Fortune 500 company",
  },
  {
    title: "UGC Campaign",
    category: "UGC",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop",
    description: "Authentic creator content for DTC beauty brand",
  },
  {
    title: "Product Photography Suite",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop",
    description: "Premium product shots for Amazon listings",
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    "All",
    "Video Ads",
    "Photography",
    "Short-Form",
    "Corporate",
    "UGC",
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

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
      id="portfolio"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-[#ff6b35] font-medium text-sm tracking-wider uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore our portfolio of creative work that has helped brands
            increase their visibility and drive conversions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-[#ff6b35] text-white"
                  : "bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-[#1a1a1a] hover-card ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative image-hover">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#ff6b35] bg-[#ff6b35]/10 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-12 ${
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <button className="btn-secondary">
            View All Projects
            <svg
              className="w-4 h-4 inline-block ml-2"
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
