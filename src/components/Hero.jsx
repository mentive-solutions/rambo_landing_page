import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'

const WA_URL = 'https://wa.me/5546999167623?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Rambo%20ERP%20e%20gostaria%20de%20saber%20mais.'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col gap-6">
          <motion.div variants={item}>
            <span className="inline-block glass text-cyan text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase">
              ERP Completo para Qualquer Negócio
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Gerencie sua empresa com{' '}
            <span className="gradient-text">inteligência</span> e simplicidade
          </motion.h1>

          <motion.p variants={item} className="text-text-secondary text-lg leading-relaxed max-w-xl">
            Do estoque ao financeiro, das ordens de serviço aos seus funcionários — tudo em um único sistema.{' '}
            <span className="text-cyan font-semibold">Implementação gratuita no mesmo dia.</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-primary text-white font-semibold px-6 py-3 rounded-lg text-base"
            >
              <MessageCircle size={20} />
              Falar com a Gerência
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 border border-cyan/30 text-text-primary hover:bg-cyan/10 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-200"
            >
              Conhecer o Sistema
              <ChevronDown size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, #7BCFF3, #0153A7)', opacity: 0.2 }}
            />
            <img
              src="/mock.png"
              alt="Rambo ERP Dashboard"
              className="relative w-full max-w-xl xl:max-w-2xl drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
