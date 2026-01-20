import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  Target,
  Lightbulb,
  Users,
  Rocket,
  ArrowRight,
  Award,
  Globe,
  Zap,
} from 'lucide-react'
import CTASection from '../components/CTASection'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We push the boundaries of what\'s possible with AI. Yesterday\'s impossible is today\'s portfolio piece.',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description:
      'Beautiful content is great, but content that converts is better. We optimize for outcomes, not just aesthetics.',
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description:
      'We\'re not just vendors—we\'re partners in your growth. Your success is our success.',
  },
  {
    icon: Rocket,
    title: 'Speed & Quality',
    description:
      'We refuse to choose between fast and good. AI enables us to deliver both, every time.',
  },
]

const milestones = [
  { year: '2023', event: 'Founded Trim Therapy with a vision to revolutionize content creation' },
  { year: '2023', event: 'Completed first 50 client projects' },
  { year: '2024', event: 'Reached 50M+ views across client campaigns' },
  { year: '2024', event: 'Expanded team to 15 AI-native creatives' },
  { year: '2025', event: 'Launched proprietary AI content automation platform' },
]

const stats = [
  { value: '500+', label: 'Projects Completed', icon: Award },
  { value: '50M+', label: 'Views Generated', icon: Globe },
  { value: '98%', label: 'Client Retention', icon: Users },
  { value: '48h', label: 'Avg. Turnaround', icon: Zap },
]

function ValueCard({ value, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card glass-card-hover p-8"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 flex items-center justify-center mb-6 border border-white/10">
        <value.icon className="w-6 h-6 text-electric-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
      <p className="text-white/50 leading-relaxed">{value.description}</p>
    </motion.div>
  )
}

export default function About() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const storyRef = useRef(null)
  const isStoryInView = useInView(storyRef, { once: true })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />

        <div className="container-custom relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm text-white/70">About Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
              We're Building the Future of{' '}
              <span className="gradient-text">Creative Content</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Trim Therapy is a premium AI creative studio helping brands cut
              through the noise with content that captivates, converts, and scales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-secondary border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 mb-4 border border-white/10">
                  <stat.icon className="w-5 h-5 text-electric-blue" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
                Born from a Simple <span className="gradient-text-blue">Belief</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  We founded Trim Therapy with a simple belief: the future of
                  content creation lies at the intersection of human creativity
                  and artificial intelligence.
                </p>
                <p>
                  Traditional agencies move too slow. In-house teams are stretched
                  too thin. And the content landscape changes faster than either
                  can adapt. We saw an opportunity to build something different.
                </p>
                <p>
                  Today, we're a team of AI-native creatives, technologists, and
                  strategists who help brands create content that performs at
                  the speed of culture.
                </p>
              </div>
              <Link to="/contact" className="btn-primary mt-8 group inline-flex">
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-neon-purple to-transparent" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-dark-secondary border border-white/10 flex items-center justify-center">
                        <span className="text-xs font-bold gradient-text-blue">
                          {milestone.year}
                        </span>
                      </div>
                      <div className="absolute top-1/2 -left-[3px] w-2 h-2 rounded-full bg-electric-blue" />
                    </div>
                    <div className="pt-4">
                      <p className="text-white/70">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
              What <span className="gradient-text-blue">Drives Us</span>
            </h2>
            <p className="text-white/50 text-lg">
              These principles guide everything we do, from the way we work to the
              results we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-4 block">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
              AI-Native <span className="gradient-text-blue">Creatives</span>
            </h2>
            <p className="text-white/50 text-lg mb-8">
              We're a distributed team of designers, developers, strategists, and
              AI specialists united by a passion for pushing creative boundaries.
            </p>
            <Link to="/contact" className="btn-secondary inline-flex">
              Join Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.main>
  )
}
