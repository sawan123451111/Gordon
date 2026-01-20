import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Reels', 'Ads', 'Cinematic AI', 'Brand Content']

const projects = [
  {
    id: 1,
    title: 'NeuralVerse Launch Campaign',
    category: 'Ads',
    description: 'AI-powered product launch generating 2M+ impressions',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    stats: { views: '2.1M', engagement: '8.4%' },
  },
  {
    id: 2,
    title: 'TechFlow Brand Reels',
    category: 'Reels',
    description: 'Series of 15 viral short-form videos',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop',
    stats: { views: '5.2M', engagement: '12.1%' },
  },
  {
    id: 3,
    title: 'CyberNova Cinematic Trailer',
    category: 'Cinematic AI',
    description: 'Full AI-generated cinematic brand film',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
    stats: { views: '890K', engagement: '15.3%' },
  },
  {
    id: 4,
    title: 'DataPulse Social Campaign',
    category: 'Brand Content',
    description: 'Complete visual identity and content strategy',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    stats: { views: '1.4M', engagement: '9.7%' },
  },
  {
    id: 5,
    title: 'AIForge Product Demo',
    category: 'Ads',
    description: 'Converting product demo with 340% ROI',
    image: 'https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e?w=600&h=400&fit=crop',
    stats: { views: '780K', engagement: '11.2%' },
  },
  {
    id: 6,
    title: 'Synthwave Series',
    category: 'Reels',
    description: 'Viral AI art animation series',
    image: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=600&h=400&fit=crop',
    stats: { views: '3.8M', engagement: '14.5%' },
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

      {/* Play Button (on hover) */}
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
        <p className="text-white/50 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

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
            <span className="text-white/40">Engagement:</span>{' '}
            <span className="text-neon-purple font-medium">{project.stats.engagement}</span>
          </div>
        </motion.div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-electric-blue/30 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-electric-blue text-sm font-medium uppercase tracking-wider mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
            Featured <span className="gradient-text-blue">Case Studies</span>
          </h2>
          <p className="text-white/50 text-lg">
            See how we've helped brands achieve extraordinary results with AI-powered content.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-purple transition-colors duration-300 font-medium"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
