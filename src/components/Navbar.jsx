import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WA_URL } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-cyan/10 py-3' : 'bg-navy-deep/50 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/rambo_logo.svg" alt="Rambo" className="h-14 w-auto" />
          <div className="leading-tight">
            <p className="text-text-primary font-bold text-x tracking-widest uppercase">Rambo</p>
            <p className="text-text-primary text-s tracking-wider">Gestão Empresarial</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://portal.ramboerp.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-text-primary hover:text-cyan text-m font-medium transition-colors duration-200"
          >
            Acessar o Sistema
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-primary text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            <MessageCircle size={24} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
