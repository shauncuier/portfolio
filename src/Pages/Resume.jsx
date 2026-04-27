import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, Download, MapPin, Mail, Phone, Globe, Github, Linkedin,
  Facebook, ExternalLink, Briefcase, GraduationCap, Code2, Award,
  Languages, Calendar, Building2, ChevronRight, Sun, Moon, Terminal
} from 'lucide-react'
import { SiStackoverflow, SiUpwork } from 'react-icons/si'
import { TbBrandFiverr } from 'react-icons/tb'
import { useTheme } from '../context/ThemeContext'
import {
  personalInfo, experience, education, skills,
  featuredProjects, certifications, languages
} from '../data/resumeData'

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                           */
/* ------------------------------------------------------------------ */

const SectionHeader = ({ icon, title, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-8"
  >
    <div className="p-2.5 bg-primary-600 text-white rounded-lg">{icon}</div>
    <h2 className={`text-2xl sm:text-3xl font-bold font-mono ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>
      <span className="text-dev-comment">{'// '}</span>
      <span className="text-dev-keyword">const </span>
      <span className="text-dev-variable">{title}</span>
    </h2>
    <div className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent ml-4" />
  </motion.div>
)

const SkillBar = ({ name, level, isDarkMode, delay = 0 }) => (
  <div className="group">
    <div className="flex justify-between mb-1.5">
      <span className={`text-sm font-mono font-medium ${isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'}`}>{name}</span>
      <span className={`text-xs font-mono ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-500'}`}>{level}%</span>
    </div>
    <div className={`w-full rounded-full h-2 overflow-hidden ${isDarkMode ? 'bg-dev-border' : 'bg-gray-200'}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 relative"
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse" />
      </motion.div>
    </div>
  </div>
)

const TechBadge = ({ name, isDarkMode }) => (
  <span className={`inline-block px-2.5 py-1 text-xs font-mono rounded-md border ${
    isDarkMode
      ? 'bg-dev-elevated border-dev-border text-dev-textSecondary'
      : 'bg-gray-100 border-gray-200 text-gray-700'
  }`}>{name}</span>
)

/* ------------------------------------------------------------------ */
/*  Main Resume Page                                                  */
/* ------------------------------------------------------------------ */

const Resume = () => {
  const { isDarkMode, setIsDarkMode } = useTheme()

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-dev-bg text-dev-text' : 'bg-gray-50 text-gray-900'}`}>

      {/* ─── Top Navigation Bar ─── */}
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${
          isDarkMode ? 'bg-dev-surface/90 border-dev-border' : 'bg-white/90 border-gray-200'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 font-mono text-sm font-medium transition-colors ${
              isDarkMode ? 'text-dev-textSecondary hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            <ArrowLeft size={16} />
            <span className="text-dev-comment">{'// '}</span>cd ~/portfolio
          </Link>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'bg-dev-elevated hover:bg-dev-border text-dev-textSecondary' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-mono font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Download size={14} />
              <span className="hidden sm:inline">.pdf</span>
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* ─── Main Content ─── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 print:py-4 print:px-0">

        {/* ═══════ PROFILE HEADER ═══════ */}
        <motion.section {...fadeUp} className={`rounded-2xl p-6 sm:p-8 mb-10 border backdrop-blur-sm ${
          isDarkMode ? 'bg-dev-surface/80 border-dev-border' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Photo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="relative shrink-0"
            >
              <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 shadow-xl ${
                isDarkMode ? 'ring-dev-elevated shadow-primary-500/20' : 'ring-white shadow-primary-500/30'
              }`}>
                <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" width="128" height="128" />
              </div>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-500 rounded-full border-4 border-white dark:border-dev-surface" />
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className={`text-3xl sm:text-4xl font-bold mb-1 ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>
                {personalInfo.name}
              </h1>
              <p className={`text-lg font-mono mb-3 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                <Terminal size={16} className="inline mr-1.5 -mt-0.5" />
                {personalInfo.title}
              </p>
              <div className={`flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 text-sm ${
                isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
              }`}>
                <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{personalInfo.location}</span>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-1.5 hover:text-primary-500 transition-colors">
                  <Mail size={14} />{personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="inline-flex items-center gap-1.5 hover:text-primary-500 transition-colors">
                  <Phone size={14} />{personalInfo.phone}
                </a>
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary-500 transition-colors">
                  <Globe size={14} />jashedulislamshaun.com
                </a>
              </div>

              {/* Social row */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                {[
                  { url: personalInfo.socialLinks.github, icon: <Github size={16} />, label: 'GitHub' },
                  { url: personalInfo.socialLinks.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
                  { url: personalInfo.socialLinks.facebook, icon: <Facebook size={16} />, label: 'Facebook' },
                  { url: personalInfo.socialLinks.stackoverflow, icon: <SiStackoverflow size={16} />, label: 'Stack Overflow' },
                  { url: personalInfo.socialLinks.fiverr, icon: <TbBrandFiverr size={16} />, label: 'Fiverr' },
                  { url: personalInfo.socialLinks.upwork, icon: <SiUpwork size={16} />, label: 'Upwork' },
                ].map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                    className={`p-2 rounded-lg transition-all hover:scale-110 ${
                      isDarkMode ? 'bg-dev-elevated text-dev-textSecondary hover:text-primary-400 hover:bg-dev-border' : 'bg-gray-100 text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >{s.icon}</a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══════ PROFESSIONAL SUMMARY ═══════ */}
        <motion.section {...fadeUp} className="mb-12">
          <SectionHeader icon={<Code2 size={20} />} title="summary" isDarkMode={isDarkMode} />
          <div className={`rounded-xl p-6 border font-mono text-sm leading-relaxed ${
            isDarkMode ? 'bg-dev-surface border-dev-border text-dev-textSecondary' : 'bg-white border-gray-200 text-gray-700 shadow-sm'
          }`}>
            <span className="text-dev-comment">{'/**'}</span>
            <p className="mt-2 pl-2 border-l-2 border-primary-500/30">{personalInfo.summary}</p>
            <span className="text-dev-comment block mt-2">{' */'}</span>
          </div>
        </motion.section>

        {/* ═══════ WORK EXPERIENCE ═══════ */}
        <motion.section {...fadeUp} className="mb-12">
          <SectionHeader icon={<Briefcase size={20} />} title="experience" isDarkMode={isDarkMode} />
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-[19px] top-2 bottom-2 w-0.5 ${isDarkMode ? 'bg-dev-border' : 'bg-gray-200'}`} />
            <div className="space-y-8">
              {experience.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-4 ${
                    isDarkMode ? 'bg-primary-500 border-dev-bg' : 'bg-primary-500 border-gray-50'
                  }`} />

                  <div className={`rounded-xl p-6 border transition-all hover:shadow-md ${
                    isDarkMode ? 'bg-dev-surface border-dev-border hover:border-primary-500/30' : 'bg-white border-gray-200 shadow-sm hover:border-primary-300'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>{job.role}</h3>
                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-400 font-medium text-sm transition-colors">
                          <Building2 size={14} />{job.company}<ExternalLink size={12} />
                        </a>
                      </div>
                      <div className={`flex items-center gap-2 text-sm font-mono ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-500'}`}>
                        <Calendar size={14} />{job.period}
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          job.type === 'Full-time'
                            ? 'bg-secondary-500/20 text-secondary-400'
                            : 'bg-primary-500/20 text-primary-400'
                        }`}>{job.type}</span>
                      </div>
                    </div>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'}`}>{job.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {job.highlights.map((h, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'}`}>
                          <ChevronRight size={14} className="text-primary-500 mt-0.5 shrink-0" />{h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {job.technologies.map(t => <TechBadge key={t} name={t} isDarkMode={isDarkMode} />)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══════ TECHNICAL SKILLS ═══════ */}
        <motion.section {...fadeUp} className="mb-12">
          <SectionHeader icon={<Code2 size={20} />} title="skills" isDarkMode={isDarkMode} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(skills).map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className={`rounded-xl p-5 border ${
                  isDarkMode ? 'bg-dev-surface border-dev-border' : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <h3 className={`font-mono font-semibold mb-4 text-sm ${isDarkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                  <span className="text-dev-comment">{'// '}</span>{cat.title.toLowerCase()}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((s, si) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} isDarkMode={isDarkMode} delay={si * 0.08} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ═══════ EDUCATION ═══════ */}
        <motion.section {...fadeUp} className="mb-12">
          <SectionHeader icon={<GraduationCap size={20} />} title="education" isDarkMode={isDarkMode} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-xl p-5 border transition-all ${
                  isDarkMode ? 'bg-dev-surface border-dev-border hover:border-primary-500/30' : 'bg-white border-gray-200 shadow-sm hover:border-primary-300'
                }`}
              >
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono mb-3 ${
                  isDarkMode ? 'bg-primary-500/10 text-primary-400' : 'bg-primary-50 text-primary-600'
                }`}><Calendar size={12} />{edu.period}</div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>{edu.degree}</h3>
                <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'}`}>{edu.institution}</p>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'}`}>{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ═══════ KEY PROJECTS ═══════ */}
        <motion.section {...fadeUp} className="mb-12">
          <SectionHeader icon={<Terminal size={20} />} title="projects" isDarkMode={isDarkMode} />
          <div className="space-y-4">
            {featuredProjects.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl p-5 border flex flex-col sm:flex-row sm:items-center gap-4 transition-all hover:shadow-md ${
                  isDarkMode ? 'bg-dev-surface border-dev-border hover:border-primary-500/30' : 'bg-white border-gray-200 shadow-sm hover:border-primary-300'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>{proj.title}</h3>
                    <span className={`text-xs font-mono ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-500'}`}>{proj.year}</span>
                  </div>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'}`}>{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map(t => <TechBadge key={t} name={t} isDarkMode={isDarkMode} />)}
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-dev-elevated text-dev-textSecondary hover:text-primary-400' : 'bg-gray-100 text-gray-600 hover:text-primary-600'}`}>
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-dev-elevated text-dev-textSecondary hover:text-primary-400' : 'bg-gray-100 text-gray-600 hover:text-primary-600'}`}>
                    <Github size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ═══════ CERTIFICATIONS & LANGUAGES (side by side) ═══════ */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Certifications */}
          <motion.section {...fadeUp}>
            <SectionHeader icon={<Award size={20} />} title="certifications" isDarkMode={isDarkMode} />
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-3 p-4 rounded-xl border ${
                    isDarkMode ? 'bg-dev-surface border-dev-border' : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <span className="text-2xl">{c.badge}</span>
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>{c.name}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-500'}`}>{c.issuer} · {c.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section {...fadeUp}>
            <SectionHeader icon={<Languages size={20} />} title="languages" isDarkMode={isDarkMode} />
            <div className="space-y-3">
              {languages.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    isDarkMode ? 'bg-dev-surface border-dev-border' : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <span className={`font-semibold text-sm ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>{l.name}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                    l.level === 'Native'
                      ? 'bg-secondary-500/20 text-secondary-500'
                      : 'bg-primary-500/20 text-primary-500'
                  }`}>{l.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ═══════ CTA FOOTER ═══════ */}
        <motion.section {...fadeUp} className={`text-center rounded-2xl p-8 border mb-8 ${
          isDarkMode ? 'bg-dev-surface/50 border-dev-border' : 'bg-white/50 border-gray-200'
        }`}>
          <h3 className={`text-xl font-bold font-mono mb-3 ${isDarkMode ? 'text-dev-text' : 'text-gray-900'}`}>
            <span className="text-dev-comment">{'// '}</span>Let&apos;s Work Together
          </h3>
          <p className={`mb-6 max-w-lg mx-auto text-sm ${isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'}`}>
            I&apos;m available for freelance projects and full-time opportunities. Let&apos;s discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-mono font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm">
              <Mail size={16} />
              <span className="text-primary-200">{'// '}</span>send_email()
            </a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className={`inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 font-mono font-semibold rounded-xl transition-all text-sm ${
                isDarkMode ? 'text-primary-400 hover:bg-primary-600 hover:text-white' : 'text-primary-600 hover:bg-primary-600 hover:text-white'
              }`}
            >
              <Download size={16} />
              <span className="text-dev-comment">{'// '}</span>download_pdf()
            </motion.a>
          </div>
        </motion.section>

      </main>

      {/* ─── Print Styles ─── */}
      <style>{`
        @media print {
          header, .no-print { display: none !important; }
          main { max-width: 100% !important; padding: 0 !important; }
          section { break-inside: avoid; }
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  )
}

export default Resume
