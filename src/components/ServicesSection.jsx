import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Video, Image, BookOpen, Zap, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Video,
    title: 'AI Video Content',
    description: 'Reels, Shorts, and Ads that capture attention in the first second. Optimized for every platform.',
    features: ['Short-form videos', 'Ad creatives', 'Platform optimization'],
    color: 'electric-blue',
    gradient: 'from-electric-blue to-cyan-400',
  },
  {
    icon: Image,
    title: 'AI Image & Visual Creation',
    description: 'Stunning AI-generated visuals that stop the scroll. From concept to creation in hours.',
    features: ['AI art generation', 'Brand visuals', 'Social graphics'],
    color: 'neon-purple',
    gradient: 'from-neon-purple to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'AI Brand Storytelling',
    description: 'Compelling narratives powered by AI that resonate with your audience and drive action.',
    features: ['Brand narratives', 'Content strategy', 'Voice development'],
    color: 'neon-pink',
    gradient: 'from-neon-pink to-orange-400',
  },
  {
    icon: Zap,
    title: 'Content Automation',
    description: 'Scale your content production with AI workflows. More content, less effort, better results.',
    features: ['Automated workflows', 'Batch creation', 'AI scheduling'],
    color: 'electric-blue',
    gradient: 'from-green-400 to-electric-blue',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card glass-card-hover p-8 h-full transition-all duration-500">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}
        >
          <div className="w-full h-full rounded-2xl bg-dark-secondary flex items-center justify-center">
            <service.icon className={`w-6 h-6 text-${service.color}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-electric-blue transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="text-sm text-white/40 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-electric-blue transition-colors duration-300 group/link"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>

        {/* Hover Glow */}
        <div
          className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px]" />

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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
            AI-Powered <span className="gradient-text-blue">Creative Solutions</span>
          </h2>
          <p className="text-white/50 text-lg">
            From concept to creation, we leverage cutting-edge AI to deliver
            content that performs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
