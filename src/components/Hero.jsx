import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { WA_URL } from '../constants'

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
    <section id="hero" className="relative z-10 bg-white min-h-[88vh] flex items-center pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Monitor — LEFT on desktop, below text on mobile */}
        <motion.div
          className="order-2 lg:order-1 flex justify-center lg:justify-start"
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
              style={{ background: 'radial-gradient(circle, #5e5e5e, #0153A7)', opacity: 0.12 }}
            />
            <img
              src="/mock.png"
              alt="Rambo ERP Dashboard"
              className="relative w-full max-w-xl xl:max-w-2xl drop-shadow-2xl"
            />
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 h-6 rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text — RIGHT on desktop, first on mobile */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2 flex flex-col gap-6"
        >
          <motion.div variants={item}>
            <span className="inline-block bg-primary/10 text-primary text-s font-semibold px-4 py-2 rounded-full tracking-widest uppercase border border-primary/20">
              ERP Completo para Qualquer Negócio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-navy-deep"
          >
            Gerencie sua empresa com{' '}
            <span className="gradient-text">inteligência</span>{' '}
            e simplicidade
          </motion.h1>

          <motion.p variants={item} className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Do estoque ao financeiro, das ordens de serviço aos seus funcionários, tudo em um único sistema.{' '}
            <span className="text-primary font-semibold">Implementação gratuita.</span>
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
              className="flex items-center gap-2 border border-navy-mid/30 text-navy-deep hover:bg-navy-deep/5 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-200"
            >
              Conhecer o Sistema
              <ChevronDown size={18} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
