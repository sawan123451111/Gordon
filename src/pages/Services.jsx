import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Video,
  Image,
  BookOpen,
  Zap,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import CTASection from '../components/CTASection'

const services = [
  {
    id: 'video',
    icon: Video,
    title: 'AI Video Content',
    subtitle: 'Reels, Shorts & Ads',
    description:
      'Transform your brand with scroll-stopping video content. Our AI-powered production creates high-quality videos that capture attention in the first second and drive real engagement.',
    features: [
      'Short-form videos optimized for TikTok, Reels & Shorts',
      'High-converting ad creatives with A/B variations',
      'Platform-specific optimization for maximum reach',
      'Rapid turnaround—from concept to delivery in 48-72 hours',
      'Unlimited revisions until you\'re satisfied',
    ],
    stats: [
      { value: '500+', label: 'Videos Created' },
      { value: '89%', label: 'Avg. Watch Rate' },
      { value: '3.2x', label: 'Engagement Lift' },
    ],
    gradient: 'from-electric-blue to-cyan-400',
  },
  {
    id: 'visuals',
    icon: Image,
    title: 'AI Image & Visual Creation',
    subtitle: 'Stunning Graphics at Scale',
    description:
      'From brand assets to social graphics, we create visually stunning AI-generated imagery that stops the scroll and tells your story.',
    features: [
      'Custom AI art and illustrations',
      'Brand-consistent visual systems',
      'Social media graphics and templates',
      'Product visualizations and mockups',
      'Scalable asset libraries',
    ],
    stats: [
      { value: '2,000+', label: 'Visuals Created' },
      { value: '10x', label: 'Faster Production' },
      { value: '98%', label: 'Client Satisfaction' },
    ],
    gradient: 'from-neon-purple to-pink-500',
  },
  {
    id: 'storytelling',
    icon: BookOpen,
    title: 'AI Brand Storytelling',
    subtitle: 'Narratives That Resonate',
    description:
      'Every brand has a story. We use AI to help you tell it in a way that connects emotionally and drives action.',
    features: [
      'Brand voice development and guidelines',
      'Content strategy and planning',
      'AI-assisted copywriting and scripting',
      'Narrative frameworks for campaigns',
      'Multi-platform content adaptation',
    ],
    stats: [
      { value: '150+', label: 'Brands Served' },
      { value: '45%', label: 'Avg. Conversion Lift' },
      { value: '24/7', label: 'Content Ideas' },
    ],
    gradient: 'from-neon-pink to-orange-400',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Content Automation',
    subtitle: 'Scale Without Limits',
    description:
      'Automate your content production with AI workflows. Produce more, spend less, and maintain quality at any scale.',
    features: [
      'Custom AI content workflows',
      'Batch content creation pipelines',
      'Automated publishing and scheduling',
      'AI-powered content repurposing',
      'Performance analytics and optimization',
    ],
    stats: [
      { value: '10x', label: 'Content Output' },
      { value: '60%', label: 'Cost Reduction' },
      { value: '100+', label: 'Automations Built' },
    ],
    gradient: 'from-green-400 to-electric-blue',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 ${
        index !== 0 ? 'border-t border-white/5' : ''
      }`}
    >
      {/* Content */}
      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
        {/* Icon & Subtitle */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}
          >
            <div className="w-full h-full rounded-xl bg-dark-secondary flex items-center justify-center">
              <service.icon className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-sm text-white/50 uppercase tracking-wider">
            {service.subtitle}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-4 mb-10">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="btn-primary group">
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Stats Card */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
          {/* Background Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}
          />

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-8">
            {service.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-center py-6 border-b border-white/5 last:border-0"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />

        <div className="container-custom relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm text-white/70">Our Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
              AI-Powered <span className="gradient-text">Creative Services</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              From concept to creation, we offer a full suite of AI-driven
              creative services designed to help your brand stand out in the
              digital noise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-dark-secondary">
        <div className="container-custom">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </motion.main>
  )
}
