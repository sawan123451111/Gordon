import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Palette, LineChart, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We dive deep into your brand, audience, and goals. Understanding your unique position is the foundation of everything we create.',
    color: 'electric-blue',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Create',
    description:
      'Our AI-powered creative process generates multiple concepts and variations. We refine and perfect until it exceeds expectations.',
    color: 'neon-purple',
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Optimize',
    description:
      'Every piece of content is tested and optimized for maximum performance. Data drives our creative decisions.',
    color: 'neon-pink',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale',
    description:
      'What works, we scale. Our automated workflows ensure you can produce quality content consistently at any volume.',
    color: 'electric-blue',
  },
]

function ProcessStep({ step, index, total }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector Line */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-60px)] h-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-electric-blue/50 to-neon-purple/50"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      )}

      <div className="text-center relative z-10">
        {/* Number Badge */}
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-dark-tertiary to-dark-secondary border border-white/10 mb-6 relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow Effect */}
          <div className={`absolute inset-0 rounded-full bg-${step.color}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

          {/* Icon Container */}
          <div className={`relative z-10`}>
            <step.icon className={`w-8 h-8 text-${step.color}`} />
          </div>

          {/* Number */}
          <span className="absolute -bottom-2 -right-2 text-xs font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
            {step.number}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-family-display)]">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function ProcessSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
            From Concept to{' '}
            <span className="gradient-text-blue">Conversion</span>
          </h2>
          <p className="text-white/50 text-lg">
            A streamlined, AI-enhanced workflow that delivers results faster than
            traditional agencies.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              step={step}
              index={index}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
