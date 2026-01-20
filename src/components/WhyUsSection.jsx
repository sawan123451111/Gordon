import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Rocket, Eye, Target } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-First Workflow',
    description:
      'We leverage cutting-edge AI tools and custom models to create content that was impossible just years ago.',
    stat: '10x',
    statLabel: 'Creative Output',
  },
  {
    icon: Rocket,
    title: 'Faster Delivery',
    description:
      'What takes traditional agencies weeks, we deliver in days. Speed without sacrificing quality.',
    stat: '48h',
    statLabel: 'Average Turnaround',
  },
  {
    icon: Eye,
    title: 'High-Retention Visuals',
    description:
      'Every frame is optimized for attention. We create content that hooks viewers and keeps them watching.',
    stat: '89%',
    statLabel: 'Avg. Watch Rate',
  },
  {
    icon: Target,
    title: 'Built for Algorithms',
    description:
      'Content engineered to perform on every platform. We understand what the algorithms want.',
    stat: '3.2x',
    statLabel: 'Engagement Lift',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="flex gap-6 p-6 rounded-2xl transition-all duration-300 hover:bg-white/5">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 flex items-center justify-center border border-white/10 group-hover:border-electric-blue/30 transition-colors duration-300">
            <feature.icon className="w-6 h-6 text-electric-blue" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-electric-blue transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            {feature.description}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold gradient-text-blue">
              {feature.stat}
            </span>
            <span className="text-xs text-white/40 uppercase tracking-wider">
              {feature.statLabel}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyUsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-4 block">
              Why Trim Therapy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
              Built for the{' '}
              <span className="gradient-text-blue">AI Era</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              We're not just using AI—we're pioneering new ways to create content
              that resonates with modern audiences. Our approach combines
              cutting-edge technology with human creativity.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '50M+', label: 'Views Generated' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
