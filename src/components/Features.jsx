import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Package, Receipt, Monitor, BarChart2, DollarSign, Users,
  UserCheck, Star, FileText, ClipboardList, ShoppingBag,
} from 'lucide-react'

const FEATURES = [
  { icon: Package,       title: 'Controle de Estoque',      desc: 'Entradas, saídas e inventário em tempo real com alertas de reposição.' },
  { icon: Receipt,       title: 'Emissão de Nota Fiscal',   desc: 'NF-e integrada direto no sistema, sem ferramentas externas.' },
  { icon: Monitor,       title: 'PDV / Frente de Caixa',    desc: 'Vendas rápidas e controle total do ponto de venda.' },
  { icon: BarChart2,     title: 'Relatórios Gerenciais',    desc: 'Dados em tempo real para decisões estratégicas e planejamento.' },
  { icon: DollarSign,    title: 'Controle Financeiro',      desc: 'Fluxo de caixa, contas a pagar e receber em um painel único.' },
  { icon: Users,         title: 'Gestão de Clientes',       desc: 'Histórico completo de compras e ferramentas de fidelização.' },
  { icon: UserCheck,     title: 'Controle de Funcionários', desc: 'Ponto eletrônico, metas e acompanhamento de performance.' },
  { icon: Star,          title: 'Sistema de Gratificação',  desc: 'Incentive sua equipe com métricas e bônus automatizados.' },
  { icon: FileText,      title: 'Emissão de Orçamentos',    desc: 'Gere propostas profissionais em segundos e converta mais vendas.' },
  { icon: ClipboardList, title: 'Ordens de Serviço',        desc: 'Acompanhe cada serviço do início ao fim com histórico detalhado.' },
  { icon: ShoppingBag,   title: 'Condicionais',             desc: 'Gerencie empréstimos de produtos para experimentação em casa.' },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4, borderColor: 'rgba(123,207,243,0.4)' }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #0153A7, #7BCFF3)' }}
      >
        <Icon size={22} color="white" />
      </div>
      <div>
        <h3 className="text-text-primary font-semibold text-base mb-1">{feature.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Tudo que sua empresa precisa,{' '}
            <span className="gradient-text">em um só lugar</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Módulos completos para cada área do seu negócio, integrados e prontos para usar no dia 1.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
