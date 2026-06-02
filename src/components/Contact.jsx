import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import { WA_URL } from '../constants'

const EMPTY = { name: '', company: '', segment: '', phone: '' }

const inputClass =
  'w-full glass rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/60 ' +
  'border border-cyan/10 focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20 ' +
  'transition-colors duration-200 bg-transparent text-sm'

function Field({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="text-text-secondary text-xs font-medium block mb-1.5">
        {label} *
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm]     = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, company: form.company, segment: form.segment, phone: form.phone },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Entre em <span className="gradient-text">contato</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Nossa equipe retorna em minutos. Implementamos no mesmo dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-text-primary font-semibold text-xl mb-6">Envie uma mensagem</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle size={48} className="text-cyan" />
                <p className="text-text-primary font-semibold text-lg">Mensagem enviada!</p>
                <p className="text-text-secondary">Entraremos em contato em breve.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-cyan text-sm hover:underline mt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Field label="Nome completo"               name="name"    value={form.name}    onChange={handleChange} placeholder="João da Silva" />
                <Field label="Nome da empresa"             name="company" value={form.company} onChange={handleChange} placeholder="Empresa Ltda." />
                <Field label="Segmento / tipo de negócio"  name="segment" value={form.segment} onChange={handleChange} placeholder="Ex: Mecânica, Loja de Roupas, Mercado..." />
                <Field label="Telefone / WhatsApp" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(00) 00000-0000" />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Erro ao enviar. Tente novamente ou use o WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 btn-primary text-white font-semibold px-6 py-3 rounded-xl mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full inline-block" />
                  ) : (
                    <><Send size={18} /> Enviar mensagem</>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 flex flex-col gap-6"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={32} color="white" />
            </div>
            <div>
              <h3 className="text-text-primary font-semibold text-xl mb-2">Prefere falar direto?</h3>
              <p className="text-text-secondary leading-relaxed">
                Nossa equipe está disponível para tirar suas dúvidas e iniciar a implementação no mesmo dia.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                'Atendimento imediato',
                'Implementação gratuita no mesmo dia',
                'Suporte completo durante a configuração',
              ].map((it) => (
                <li key={it} className="flex items-center gap-3 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 font-semibold px-6 py-4 rounded-xl text-white hover:shadow-lg transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={20} />
              Abrir WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
