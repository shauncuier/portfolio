import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const NotFound = () => {
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-300 ${
      isDarkMode ? 'bg-dev-bg text-dev-text' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          className="relative"
        >
          {/* Subtle glow effect behind the 404 */}
          <div className="absolute inset-0 blur-3xl opacity-20 bg-primary-500 rounded-full w-full h-full transform scale-150"></div>
          <h1 className="relative text-[8rem] sm:text-[12rem] font-bold font-mono leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-primary-600 drop-shadow-sm">
            404
          </h1>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 text-3xl font-bold sm:text-4xl tracking-tight"
        >
          Page not found
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`mt-4 text-lg max-w-md mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Oops! The page you're looking for seems to have vanished into the digital void or doesn't exist.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={() => navigate(-1)}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium transition-all duration-200 ${
              isDarkMode 
                ? 'bg-dev-surface hover:bg-gray-800 text-white border border-gray-800 hover:border-gray-700' 
                : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <Link 
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-white bg-primary-600 hover:bg-primary-500 transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
