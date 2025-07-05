import { motion, useInView } from 'framer-motion'
import { Star, Award, Clock, Users, ExternalLink, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { SiUpwork } from 'react-icons/si'
import CountUp from 'react-countup'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import { TbBrandFiverr } from 'react-icons/tb'

// StatsCard component with scroll trigger
const StatsCard = ({ stats, colors, isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="grid grid-cols-1 gap-3 mb-6">
      {stats.map((stat, statIndex) => (
        <div
          key={statIndex}
          className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
            isDarkMode ? 'bg-dev-elevated' : 'bg-gray-50'
          }`}
        >
          <div className="flex items-center">
            <div className={`mr-2 ${colors.accent}`}>
              {stat.icon}
            </div>
            <span className={`text-sm transition-colors ${
              isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
            }`}>{stat.label}</span>
          </div>
          <span className={`text-sm font-semibold transition-colors ${
            isDarkMode ? 'text-dev-text' : 'text-gray-900'
          }`}>
            {typeof stat.value === 'number' && isInView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                delay={statIndex * 0.1}
                prefix={stat.prefix || ''}
                suffix={stat.suffix || ''}
                enableScrollSpy = {true}
              />
            ) : typeof stat.value === 'number' ? (
              0
            ) : (
              stat.value
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

StatsCard.propTypes = {
  stats: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
  isDarkMode: PropTypes.bool.isRequired
}

const Freelance = ({ isDarkMode }) => {
  const platforms = [
    {
      name: 'Fiverr',
      title: 'Level 2 Seller',
      badge: 'Top Rated Plus',
      url: 'https://fiverr.com/jashedulislam',
      description: 'Get your web development project done with guaranteed quality and fast delivery.',
      features: [
        'React & Node.js Development',
        'E-commerce Solutions',
        'Custom Web Applications',
        'API Integration & Development'
      ],
      stats: [
        { icon: <Star size={16} />, label: '4.9/5 Rating', value: 400, suffix: '+ Reviews' },
        { icon: <Users size={16} />, label: 'Completed Orders', value: 250, suffix: '+' },
        { icon: <Clock size={16} />, label: 'Avg. Response', value: 1, prefix: '< ', suffix: ' Hour' }
      ],
      color: 'green',
      price: 'Starting at $25'
    },
    {
      name: 'Upwork',
      title: 'Top Rated Developer',
      badge: '100% Job Success',
      url: 'https://www.upwork.com/freelancers/~01c75e88b6540d813f',
      description: 'Professional full-stack development services for businesses and startups.',
      features: [
        'Full-Stack Web Development',
        'MongoDB & Database Design',
        'React & Modern Frontend',
        'Consulting & Code Review'
      ],
      stats: [
        { icon: <Award size={16} />, label: 'Success Rate', value: 100, suffix: '%' },
        { icon: <Users size={16} />, label: 'Happy Clients', value: 50, suffix: '+' },
        { icon: <Clock size={16} />, label: 'Hours Worked', value: 679, suffix: '+' }
      ],
      color: 'blue',
      price: 'Starting at $35/hr'
    }
  ]

  const getColorClasses = (color, isDarkMode) => {
    const colors = {
      green: {
        bg: isDarkMode ? 'from-green-500/10 to-green-600/10' : 'from-green-50 to-green-100',
        border: isDarkMode ? 'border-green-500/30' : 'border-green-200',
        button: 'bg-green-600 hover:bg-green-700',
        accent: 'text-green-500'
      },
      blue: {
        bg: isDarkMode ? 'from-blue-500/10 to-blue-600/10' : 'from-blue-50 to-blue-100',
        border: isDarkMode ? 'border-blue-500/30' : 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        accent: 'text-blue-500'
      }
    }
    return colors[color]
  }

  return (
    <section 
      id="experience" 
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-dev-bg' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <Zap className="text-primary-500" size={24} />
            <h2 className={`text-3xl sm:text-4xl font-bold font-mono transition-colors ${
              isDarkMode ? 'text-dev-text' : 'text-gray-900'
            }`}>
              <span className="text-dev-keyword">const</span>{' '}
              <span className="text-dev-variable">experience</span>{' '}
              <span className={isDarkMode ? 'text-dev-operator' : 'text-gray-600'}>=</span>{' '}
              <span className="text-dev-string">&quot;Freelance Journey & Hire Me&quot;</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono transition-colors ${
            isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
          }`}>
            <span className="text-dev-comment">{`/* `}</span>
            Building successful partnerships with clients worldwide through quality work and reliable service.
            Ready to bring your ideas to life on top freelancing platforms.
            <span className="text-dev-comment">{` */`}</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {platforms.map((platform, index) => {
            const colors = getColorClasses(platform.color, isDarkMode)
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 ${colors.border} hover:border-opacity-50 ${
                  isDarkMode ? 'bg-dev-surface' : 'bg-white'
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-50`}></div>
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold mb-1 transition-colors ${
                        isDarkMode ? 'text-dev-text' : 'text-gray-900'
                      }`}>{platform.name}</h3>
                      <p className={`transition-colors ${
                        isDarkMode ? 'text-dev-textSecondary' : 'text-gray-600'
                      }`}>{platform.title}</p>
                    </div>
                    <div className={`px-3 py-1 ${colors.button} text-white rounded-full text-sm font-medium`}>
                      {platform.badge}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed transition-colors ${
                    isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                  }`}>{platform.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 transition-colors ${
                      isDarkMode ? 'text-dev-text' : 'text-gray-900'
                    }`}>What I Offer:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {platform.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center transition-colors ${
                            isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                          }`}
                        >
                          <CheckCircle size={16} className={`mr-2 ${colors.accent}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <StatsCard stats={platform.stats} colors={colors} isDarkMode={isDarkMode} />

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-lg font-bold ${colors.accent}`}>
                        {platform.price}
                      </span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 ${colors.button} text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl`}
                    >
                      {platform.name === 'Fiverr' && <TbBrandFiverr size={16} className="mr-2" />}
                      {platform.name === 'Upwork' && <SiUpwork size={16} className="mr-2" />}
                      <span className="font-mono">
                        <span className="opacity-70">{`// `}</span>hire_now()
                      </span>
                      <ArrowRight size={16} className="ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`text-center rounded-2xl p-8 border backdrop-blur-sm transition-colors ${
            isDarkMode 
              ? 'bg-dev-surface/50 border-dev-border' 
              : 'bg-white/50 border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-4 font-mono transition-colors ${
            isDarkMode ? 'text-dev-text' : 'text-gray-900'
          }`}>
            <span className="text-dev-comment">{`// `}</span>Need a Custom Solution?
          </h3>
          <p className={`mb-6 max-w-2xl mx-auto transition-colors ${
            isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
          }`}>
            Looking for something specific? I also offer custom development packages tailored to your unique requirements. 
            Let&apos;s discuss your project and find the perfect solution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl font-mono"
          >
            <span className="text-primary-200 mr-2">{`// `}</span>discuss_project()
            <ExternalLink size={16} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

Freelance.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
}

export default Freelance
