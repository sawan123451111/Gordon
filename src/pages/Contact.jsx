import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Sparkles,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Calendar,
  MessageSquare,
  CheckCircle,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@trimtherapy.ai',
    href: 'mailto:hello@trimtherapy.ai',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Los Angeles, CA',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
  },
]

const projectTypes = [
  'AI Video Content',
  'AI Visuals & Graphics',
  'Brand Storytelling',
  'Content Automation',
  'Full Campaign',
  'Other',
]

const budgetRanges = [
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />

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
              <span className="text-sm text-white/70">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-family-display)]">
              Let's Create Something{' '}
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Ready to transform your content strategy? Tell us about your project
              and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-family-display)]">
                  Contact Information
                </h2>
                <p className="text-white/50 mb-8">
                  Have a question or want to discuss a project? Reach out through
                  any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 flex items-center justify-center border border-white/10 group-hover:border-electric-blue/30 transition-colors">
                      <info.icon className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Book a Call Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-electric-blue" />
                  <h3 className="font-semibold">Book a Discovery Call</h3>
                </div>
                <p className="text-white/50 text-sm mb-4">
                  Prefer to talk? Schedule a 30-minute call to discuss your project
                  in detail.
                </p>
                <button className="btn-secondary w-full justify-center text-sm">
                  Schedule Call
                </button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-family-display)]">
                      Message Sent!
                    </h3>
                    <p className="text-white/50 mb-8">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          projectType: '',
                          budget: '',
                          message: '',
                        })
                      }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <MessageSquare className="w-5 h-5 text-electric-blue" />
                      <h2 className="text-xl font-bold">Tell Us About Your Project</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm text-white/60 mb-2"
                          >
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric-blue/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/30"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm text-white/60 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric-blue/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/30"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm text-white/60 mb-2"
                        >
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric-blue/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/30"
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Project Type */}
                        <div>
                          <label
                            htmlFor="projectType"
                            className="block text-sm text-white/60 mb-2"
                          >
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric-blue/50 focus:bg-white/10 transition-all outline-none text-white appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-dark-secondary">
                              Select a project type
                            </option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type} className="bg-dark-secondary">
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Budget */}
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-sm text-white/60 mb-2"
                          >
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric-blue/50 focus:bg-white/10 transition-all outline-none text-white appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-dark-secondary">
                              Select a budget range
                            </option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range} className="bg-dark-secondary">
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm text-white/60 mb-2"
                        >
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric-blue/50 focus:bg-white/10 transition-all outline-none text-white placeholder-white/30 resize-none"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center group"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-white/30 text-center">
                        By submitting this form, you agree to our privacy policy and
                        terms of service.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-family-display)]">
              Frequently Asked <span className="gradient-text-blue">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How quickly can you start on a new project?',
                a: 'We typically can begin new projects within 1-2 weeks of finalizing the scope. For urgent projects, we offer expedited timelines.',
              },
              {
                q: 'What does your typical process look like?',
                a: 'Our process follows four phases: Discover (understanding your brand and goals), Create (AI-powered content production), Optimize (testing and refinement), and Scale (expanding what works).',
              },
              {
                q: 'Do you work with startups or only large brands?',
                a: 'We work with businesses of all sizes, from early-stage startups to enterprise companies. Our AI-first approach allows us to deliver premium quality at various price points.',
              },
              {
                q: 'What makes Trim Therapy different from other agencies?',
                a: 'We\'re built from the ground up as an AI-native studio. This allows us to work faster, produce more variations, and optimize content in ways traditional agencies simply cannot.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
