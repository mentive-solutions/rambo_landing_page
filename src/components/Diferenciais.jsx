import { motion } from 'framer-motion'
import { Zap, Gift, Layers } from 'lucide-react'

const CARDS = [
  {
    icon: Zap,
    title: 'Implementação Rápida',
    desc: 'Entre em contato hoje pois o processo é totalmente remoto. Nossa equipe realiza a implementação completa e você não precisa sair de casa.',
  },
  {
    icon: Gift,
    title: 'Implementação Gratuita',
    desc: 'Sem custo de implantação, sem taxas de adesão. Você paga apenas pelo uso contínuo do sistema.',
  },
  {
    icon: Layers,
    title: 'Para Qualquer Negócio',
    desc: 'O Rambo se adapta à realidade da sua empresa. Qualquer segmento, qualquer porte.',
  },
]

export default function Diferenciais() {
  return (
    <section className="relative z-10 bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            Por que escolher o <span className="gradient-text">Rambo?</span>
          </h2>
          <p className="text-slate-500 text-xl max-w-xl mx-auto">
            Vantagens que fazem a diferença desde o primeiro contato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card-light rounded-2xl p-8 flex flex-col gap-5 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #0153A7, #7BCFF3)',
                    boxShadow: '0 0 20px rgba(123,207,243,0.25)',
                  }}
                >
                  <Icon size={32} color="white" />
                </div>
                <h3 className="text-navy-deep font-bold text-xl">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
