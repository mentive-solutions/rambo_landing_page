import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="border-t border-cyan/10 py-12 px-6"
      style={{ background: 'rgba(4,29,51,0.8)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/rambo_logo.svg" alt="Rambo" className="h-10 w-auto" />
            <div className="leading-tight">
              <p className="text-text-primary font-bold text-sm tracking-widest uppercase">Rambo</p>
              <p className="text-text-secondary text-xs tracking-wider">Gestão Empresarial</p>
            </div>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
            Gestão inteligente para o seu negócio. Simples de implementar, poderoso para crescer.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-text-primary font-semibold text-sm tracking-wider uppercase">Links</h4>
          <div className="flex flex-col gap-3">
            <a href="https://portal.ramboerp.com.br" target="_blank" rel="noopener noreferrer"
              className="text-text-secondary hover:text-cyan text-sm transition-colors duration-200">
              Acessar o Sistema
            </a>
            <a href="#features"
              className="text-text-secondary hover:text-cyan text-sm transition-colors duration-200">
              Funcionalidades
            </a>
            <a href="#contato"
              className="text-text-secondary hover:text-cyan text-sm transition-colors duration-200">
              Contato
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-text-primary font-semibold text-sm tracking-wider uppercase">Contato</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:gerencia@ramboerp.com.br"
              className="flex items-center gap-2 text-text-secondary hover:text-cyan text-sm transition-colors duration-200">
              <Mail size={15} />
              gerencia@ramboerp.com.br
            </a>
            <a href="https://wa.me/5546999167623" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-cyan text-sm transition-colors duration-200">
              <Phone size={15} />
              (46) 99916-7623
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-cyan/5">
        <p className="text-text-secondary text-xs text-center">
          ©2026 Mentive Soluções em Tecnologia . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
