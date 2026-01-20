import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CMO',
    company: 'TechFlow',
    avatar: 'SC',
    content:
      'Trim Therapy transformed our content strategy. The AI-generated visuals outperformed everything we had before. Our engagement increased by 340% in just two months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Founder',
    company: 'NeuralVerse',
    avatar: 'MR',
    content:
      'Working with Trim Therapy felt like having a creative superpower. They delivered our entire launch campaign in a week—something that would have taken us months.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Head of Growth',
    company: 'DataPulse',
    avatar: 'EW',
    content:
      'The quality of AI content they produce is unmatched. Every video, every visual—it all feels premium and on-brand. They truly understand the future of content.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Park',
    role: 'Creative Director',
    company: 'CyberNova',
    avatar: 'JP',
    content:
      'As a creative director, I was skeptical about AI content. Trim Therapy changed my mind completely. The possibilities are endless, and the results speak for themselves.',
    rating: 5,
  },
]

function TestimonialCard({ testimonial, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-8 md:p-10 ${isActive ? '' : 'pointer-events-none'}`}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-10 h-10 text-electric-blue/30" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center text-sm font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-white/50">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
            What Our <span className="gradient-text-blue">Clients Say</span>
          </h2>
          <p className="text-white/50 text-lg">
            Don't just take our word for it. Here's what industry leaders think
            about working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[activeIndex].id}
              testimonial={testimonials[activeIndex]}
              isActive={true}
            />
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-electric-blue/50 hover:bg-electric-blue/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-electric-blue to-neon-purple'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-electric-blue/50 hover:bg-electric-blue/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
