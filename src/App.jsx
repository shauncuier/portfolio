import { useState, useEffect, lazy, Suspense } from 'react'

import { ThemeProvider, useTheme } from './context/ThemeContext'
// Hero & Header load eagerly — they are above-the-fold (LCP critical)
import Header from './Components/Header'
import Hero from './Components/Hero'
// All below-fold sections are lazy-loaded for faster initial paint
const About    = lazy(() => import('./Components/About'))
const Skills   = lazy(() => import('./Components/Skills'))
const Projects = lazy(() => import('./Components/Projects'))
const Freelance = lazy(() => import('./Components/Freelance'))
const Contact  = lazy(() => import('./Components/Contact'))
const Footer   = lazy(() => import('./Components/Footer'))
import './index.css'
function AppContent() {
  const { isDarkMode } = useTheme()
  const [activeSection, setActiveSection] = useState('hero')

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-dev-bg text-dev-text' : 'bg-white text-gray-900'
    }`}>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        {/* Suspense boundary: below-fold sections load after hero is painted */}
        <Suspense fallback={
          <div className={`min-h-screen flex items-center justify-center ${
            isDarkMode ? 'bg-dev-surface' : 'bg-gray-50'
          }`}>
            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <About />
          <Skills />
          <Projects />
          <Freelance />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
