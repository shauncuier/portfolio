import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { useForm } from '@formspree/react'
import PropTypes from 'prop-types'

const Contact = ({ isDarkMode }) => {
  const [state, handleSubmit] = useForm("meokvyze")

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'jashedulislamshaun@gmail.com',
      href: 'mailto:jashedulislamshaun@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'WhatsApp',
      value: '+880-1835-927634',
      href: 'https://wa.me/+8801835927634'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Chittagong, Bangladesh',
      href: null
    }
  ]

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-dev-surface' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
              isDarkMode ? 'bg-green-500/20' : 'bg-green-100'
            }`}>
              <Send className="text-green-500" size={32} />
            </div>
            <h2 className={`text-3xl font-bold mb-4 font-mono transition-colors ${
              isDarkMode ? 'text-dev-text' : 'text-gray-900'
            }`}>
              {`// message_sent_successfully()`}
            </h2>
            <p className={`text-lg mb-8 transition-colors ${
              isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
            }`}>
              Thank you for reaching out! I&apos;ll get back to you within 2-4 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-mono hover:bg-primary-700 transition-colors"
            >
              {`// send_another_message()`}
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-dev-surface' : 'bg-white'
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
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 font-mono transition-colors ${isDarkMode ? 'text-dev-text' : 'text-gray-900'
            }`}>
            <span className="text-dev-comment">{`// `}</span>
            <span className="text-dev-keyword">const</span>{' '}
            <span className="text-dev-variable">contact</span>{' '}
            <span className={isDarkMode ? 'text-dev-operator' : 'text-gray-600'}>=</span>{' '}
            <span className="text-dev-string">&quot;Get In Touch&quot;</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono transition-colors ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
            }`}>
            <span className="text-dev-comment">{`/* `}</span>
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            Let&apos;s create something amazing together!
            <span className="text-dev-comment">{` */`}</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 font-mono transition-colors ${isDarkMode ? 'text-dev-text' : 'text-gray-900'
              }`}>
              <span className="text-dev-comment">{`// `}</span>Let&apos;s Talk
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'bg-primary-100 text-primary-600'
                    }`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-sm transition-colors ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-500'
                      }`}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium transition-colors ${isDarkMode
                            ? 'text-dev-text hover:text-primary-400'
                            : 'text-gray-900 hover:text-primary-600'
                          }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`font-medium transition-colors ${isDarkMode ? 'text-dev-text' : 'text-gray-900'
                        }`}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={`rounded-xl p-6 border transition-colors ${isDarkMode
                ? 'bg-dev-elevated border-dev-border'
                : 'bg-gradient-to-br from-primary-50 to-secondary-50 border-gray-200'
              }`}>
              <h4 className={`font-semibold mb-3 transition-colors ${isDarkMode ? 'text-dev-text' : 'text-gray-900'
                }`}>Quick Response</h4>
              <p className={`text-sm mb-4 transition-colors ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
                }`}>
                I typically respond to messages within 2-4 hours during business hours.
                For urgent matters, feel free to reach out via WhatsApp.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/+8801835927634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:jashedulislamshaun@gmail.com"
                  className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  Email
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                    }`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${isDarkMode
                        ? 'bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                    }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${isDarkMode
                        ? 'bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                  }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${isDarkMode
                      ? 'bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                  }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${isDarkMode
                      ? 'bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              {state.errors && state.errors.length > 0 && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">
                    There was an error sending your message. Please try again.
                  </p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} className="mr-2" />
                <span className="font-mono">
                  {state.submitting ? (
                    <>{`// sending_message()...`}</>
                  ) : (
                    <>{`// send_message()`}</>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
}

export default Contact
