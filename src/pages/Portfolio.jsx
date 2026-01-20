import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, Sparkles, X } from 'lucide-react'
import CTASection from '../components/CTASection'

const categories = ['All', 'Reels', 'Ads', 'Cinematic AI', 'Brand Content']

const projects = [
  {
    id: 1,
    title: 'NeuralVerse Launch Campaign',
    category: 'Ads',
    description: 'Complete AI-powered product launch generating 2M+ impressions across platforms. Custom visuals, ad creatives, and video content.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    stats: { views: '2.1M', engagement: '8.4%', roi: '340%' },
    client: 'NeuralVerse',
    duration: '2 weeks',
  },
  {
    id: 2,
    title: 'TechFlow Brand Reels',
    category: 'Reels',
    description: 'Series of 15 viral short-form videos that drove massive organic growth. Each video optimized for TikTok and Instagram Reels.',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop',
    stats: { views: '5.2M', engagement: '12.1%', roi: '520%' },
    client: 'TechFlow',
    duration: '3 weeks',
  },
  {
    id: 3,
    title: 'CyberNova Cinematic Trailer',
    category: 'Cinematic AI',
    description: 'Full AI-generated cinematic brand film showcasing the future of technology. Complete with custom soundtrack and VFX.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    stats: { views: '890K', engagement: '15.3%', roi: '280%' },
    client: 'CyberNova',
    duration: '4 weeks',
  },
  {
    id: 4,
    title: 'DataPulse Social Campaign',
    category: 'Brand Content',
    description: 'Complete visual identity refresh and content strategy. 50+ pieces of branded content for social media launch.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    stats: { views: '1.4M', engagement: '9.7%', roi: '390%' },
    client: 'DataPulse',
    duration: '5 weeks',
  },
  {
    id: 5,
    title: 'AIForge Product Demo',
    category: 'Ads',
    description: 'High-converting product demo video series that drove 340% ROI. Multiple variations for A/B testing.',
    image: 'https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e?w=800&h=600&fit=crop',
    stats: { views: '780K', engagement: '11.2%', roi: '340%' },
    client: 'AIForge',
    duration: '2 weeks',
  },
  {
    id: 6,
    title: 'Synthwave Series',
    category: 'Reels',
    description: 'Viral AI art animation series that captured the aesthetic of retro-futurism. 25 unique pieces.',
    image: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&h=600&fit=crop',
    stats: { views: '3.8M', engagement: '14.5%', roi: '480%' },
    client: 'Independent',
    duration: '6 weeks',
  },
  {
    id: 7,
    title: 'QuantumLeap Brand Film',
    category: 'Cinematic AI',
    description: 'Emotional brand documentary combining AI visuals with human storytelling. Award-winning production.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    stats: { views: '1.2M', engagement: '18.2%', roi: '310%' },
    client: 'QuantumLeap',
    duration: '6 weeks',
  },
  {
    id: 8,
    title: 'NeonPulse Ad Campaign',
    category: 'Ads',
    description: 'Multi-platform advertising campaign with 20+ ad variations. Data-driven creative optimization.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    stats: { views: '2.5M', engagement: '7.8%', roi: '420%' },
    client: 'NeonPulse',
    duration: '4 weeks',
  },
  {
    id: 9,
    title: 'Aurora Visual Identity',
    category: 'Brand Content',
    description: 'Complete brand visual system built with AI. Logo animations, social templates, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
    stats: { views: '650K', engagement: '10.4%', roi: '290%' },
    client: 'Aurora Tech',
    duration: '3 weeks',
  },
]

function ProjectCard({ project, onClick }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: isHovered ? 0.95 : 0.6 }}
        transition={{ duration: 0.3 }}
      />

      {/* Play Button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-6 h-6 text-white ml-1" fill="white" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-electric-blue text-xs font-medium uppercase tracking-wider mb-2 block">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-electric-blue transition-colors">
          {project.title}
        </h3>

        {/* Stats */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-sm">
            <span className="text-white/40">Views:</span>{' '}
            <span className="text-electric-blue font-medium">{project.stats.views}</span>
          </div>
          <div className="text-sm">
            <span className="text-white/40">ROI:</span>{' '}
            <span className="text-neon-purple font-medium">{project.stats.roi}</span>
          </div>
        </motion.div>
      </div>

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-electric-blue/30 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-t-[20px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-2 block">
            {project.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-family-display)]">
            {project.title}
          </h2>
          <p className="text-white/60 text-lg mb-8">{project.description}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-bold gradient-text-blue mb-1">
                {project.stats.views}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Views</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-bold gradient-text-blue mb-1">
                {project.stats.engagement}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Engagement</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-bold gradient-text-blue mb-1">
                {project.stats.roi}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">ROI</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-bold gradient-text-blue mb-1">
                {project.duration}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Duration</div>
            </div>
          </div>

          {/* Client */}
          <div className="flex items-center justify-between border-t border-white/5 pt-6">
            <div>
              <span className="text-white/40 text-sm">Client:</span>{' '}
              <span className="font-medium">{project.client}</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-purple transition-colors"
            >
              View Live
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />

        <div className="container-custom relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm text-white/70">Our Work</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
              Featured <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Explore our portfolio of AI-powered creative work. Every project
              is a testament to what's possible when technology meets creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <CTASection />
    </motion.main>
  )
}
