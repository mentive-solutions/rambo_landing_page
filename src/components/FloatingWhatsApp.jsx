import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WA_URL = 'https://wa.me/5546999167623?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Rambo%20ERP%20e%20gostaria%20de%20saber%20mais.'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale Conosco pelo WhatsApp"
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: '#25D366' }}
        animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale Conosco
      </span>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        }}
      >
        <MessageCircle size={26} color="white" />
      </motion.div>
    </a>
  )
}
