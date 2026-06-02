import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WA_URL = 'https://wa.me/5546999167623?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Rambo%20ERP%20e%20gostaria%20de%20saber%20mais.'

export default function CtaBanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(1,83,167,0.3), rgba(123,207,243,0.1))',
            border: '1px solid rgba(123,207,243,0.3)',
            boxShadow: '0 0 60px rgba(1,83,167,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Pronto para transformar<br />
            <span className="gradient-text">sua gestão?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Implementação gratuita. Sem taxa de adesão. Comece hoje.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary text-white font-bold px-8 py-4 rounded-xl text-lg"
          >
            <MessageCircle size={22} />
            Falar com a Gerência no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
