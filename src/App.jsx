import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-dev-bg text-dev-text' : 'bg-white text-gray-900'
    }`}>
      <Header activeSection={activeSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App