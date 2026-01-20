import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'AI Video Content', path: '/services#video' },
    { name: 'AI Visuals', path: '/services#visuals' },
    { name: 'Brand Storytelling', path: '/services#storytelling' },
    { name: 'Content Automation', path: '/services#automation' },
  ],
  social: [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-white/5">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-electric-blue" />
              <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-family-display)]">
                Trim<span className="gradient-text-blue">Therapy</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              We create AI-driven content that converts attention into growth.
              The future of creative is here.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue/20 hover:border-electric-blue/50 border border-transparent transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-white/70 hover:text-electric-blue" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-electric-blue transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-electric-blue transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>hello@trimtherapy.ai</li>
              <li>Los Angeles, CA</li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-electric-blue hover:text-neon-purple transition-colors duration-300 text-sm font-medium"
            >
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Trim Therapy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white/50 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/50 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
