# Rambo Sistemas de Gestão — Landing Page Design Spec

**Date:** 2026-06-02
**Status:** Approved

---

## Overview

Single-page landing page for **Rambo Sistemas de Gestão**, a full-featured ERP available at `portal.ramboerp.com.br`. The goal is to convert business owners into leads via WhatsApp contact or a contact form that dispatches an email to management.

The page must communicate three core value propositions:
1. The system is extremely complete (all-in-one ERP)
2. Implementation is free and can happen the same day
3. It works for any type of business

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18+ | UI framework |
| Vite | Latest | Build tool |
| Tailwind CSS | v3 | Utility-first styling |
| Framer Motion | Latest | Animations |
| EmailJS | Latest | Form-to-email (no backend) |
| Lucide React | Latest | Icons |

---

## Visual Design System

### Color Palette (extracted from logo SVG + portal aesthetic)

| Role | Color | Hex |
|---|---|---|
| Background deep | Dark navy | `#041D33` |
| Background mid | Navy | `#0B3562` |
| Background accent | Navy blue | `#002E53` |
| Primary CTA | Medium blue | `#0153A7` |
| Accent / highlight | Cyan | `#7BCFF3` |
| Text primary | White-blue | `#E8ECF5` |
| Text secondary | Blue-gray | `#9FB3DB` |
| Dark navy (logo) | Deep navy | `#011B72` |

**Global background:** Animated mesh gradient from `#041D33` (top) to `#0B3562` (bottom), with subtle noise texture overlay.

### Glassmorphism Cards

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(123, 207, 243, 0.15);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
border-radius: 16px;
```

### Typography

- **Font:** Inter (Google Fonts)
- **Headings:** Bold (700) / Semibold (600)
- **Body:** Regular (400)
- **Text primary:** `#E8ECF5`
- **Text secondary:** `#9FB3DB`

### Buttons

**Primary (CTA):**
- Background: gradient `#0153A7` → `#7BCFF3` (135deg)
- Hover: glow shadow `0 0 24px rgba(123,207,243,0.4)`
- Text: white, semibold
- Border radius: 8px

**Secondary (outlined):**
- Border: `rgba(123,207,243,0.4)`
- Background: transparent
- Hover: `rgba(123,207,243,0.1)` fill

---

## Page Sections

### 1. Navbar

**Layout:** Fixed top, full-width, glassmorphism background on scroll.

**Content:**
- Left: Rambo logo SVG (`rambo_logo.svg`)
- Right: Link "Acessar o Sistema" (→ `portal.ramboerp.com.br`) + WhatsApp button

**Behavior:** Transparent at top, glassmorphism background activates on scroll down.

---

### 2. Hero

**Layout:** Two-column (text left, mockup right) on desktop. Stacked on mobile.

**Left column:**
- Badge pill: "ERP Completo para Qualquer Negócio"
- H1: "Gerencie sua empresa com inteligência e simplicidade"
- Subtitle: "Do estoque ao financeiro, das ordens de serviço aos seus funcionários — tudo em um único sistema. Implementação gratuita no mesmo dia."
- CTA buttons:
  - Primary: "Falar com a Gerência" → WhatsApp link (`https://wa.me/5546999167623`)
  - Secondary: "Conhecer o Sistema" → scrolls to features section

**Right column:**
- Image: `mock.png` (monitor mockup with real dashboard screenshot)
- Framer Motion: float animation (subtle vertical oscillation, 3s loop)
- Decorative: faint cyan glow ring behind the monitor

**Animations (Framer Motion):**
- Text column: fade-in + slide-up on mount (staggered children)
- Monitor: fade-in + scale-up on mount, then continuous float loop

---

### 3. Features Grid

**Heading:** "Tudo que sua empresa precisa, em um só lugar"
**Subheading:** "Módulos completos para cada área do seu negócio"

**11 feature cards in responsive grid (3 cols desktop, 2 tablet, 1 mobile):**

| Icon | Title | Description |
|---|---|---|
| Package | Controle de Estoque | Entradas, saídas e inventário em tempo real |
| Receipt | Emissão de Nota Fiscal | NF-e integrada direto no sistema |
| Monitor | PDV / Frente de Caixa | Vendas rápidas com controle total |
| BarChart | Relatórios Gerenciais | Dados em tempo real para decisões estratégicas |
| DollarSign | Controle Financeiro | Fluxo de caixa, contas a pagar e receber |
| Users | Gestão de Clientes | Histórico completo e fidelização |
| UserCheck | Controle de Funcionários | Ponto, performance e folha |
| Star | Sistema de Gratificação | Incentive sua equipe com métricas claras |
| FileText | Emissão de Orçamentos | Propostas profissionais em segundos |
| ClipboardList | Ordens de Serviço | Acompanhe cada serviço do início ao fim |
| ShoppingBag | Condicionais | Gerencie empréstimos de produtos com facilidade |

**Each card:** glassmorphism, icon in cyan gradient circle, hover: border brightens + slight lift (Framer Motion `whileHover`).

---

### 4. Diferenciais ("Por que o Rambo?")

**Layout:** 3 large highlight cards in a row (desktop), stacked (mobile).

| Icon | Title | Description |
|---|---|---|
| Zap | Implementação no Mesmo Dia | Entre em contato hoje e comece a usar ainda hoje |
| Gift | Implementação Gratuita | Sem custo de implantação. Valor justo pelo uso do sistema |
| Layers | Para Qualquer Negócio | Mecânicas, lojas, mercados — o Rambo se adapta à sua realidade |

**Visual treatment:** Cards larger than features, accent cyan border glow, icon bigger (48px).

**Animation:** Cards animate in from bottom when scrolled into view (Framer Motion `useInView` + `whileInView`).

---

### 5. CTA Section (pre-contact)

**Layout:** Full-width, centered. Dark card with gradient border.

**Content:**
- Headline: "Pronto para transformar sua gestão?"
- Subtext: "Implementação gratuita. Sem taxa de adesão. Comece hoje."
- Primary button: "Falar com a Gerência no WhatsApp"
- WhatsApp pre-filled message: `Olá! Tenho interesse no Rambo ERP e gostaria de saber mais.`

---

### 6. Contact Section

**Layout:** Two columns side by side (desktop): Form (left) + WhatsApp card (right).

**Form fields:**
- Nome completo (required)
- Nome da empresa (required)
- Segmento / tipo de negócio (required)
- Telefone / WhatsApp (required)

**Form submission:**
- Uses EmailJS (service + template configured by user)
- On success: show inline success message ("Mensagem enviada! Entraremos em contato em breve.")
- On error: show inline error message
- Loading state on submit button

**EmailJS destination:** `gerencia@ramboerp.com.br`

**Right card (WhatsApp):**
- WhatsApp icon + "Prefere falar direto?"
- Text: "Nossa equipe está disponível para tirar suas dúvidas e iniciar a implementação no mesmo dia."
- Button: "Abrir WhatsApp" → `https://wa.me/5546999167623?text=...`

---

### 7. Floating WhatsApp Button

Persistent fixed button (bottom-right), visible on all sections.
- Green WhatsApp icon circle
- Pulse animation (Framer Motion)
- Tooltip: "Fale Conosco"

---

### 8. Footer

**Layout:** Logo left, links center, contact right.

**Content:**
- Logo + tagline "Gestão inteligente para o seu negócio"
- Links: Acessar o Sistema, Contato
- Contact: `gerencia@ramboerp.com.br` | `(46) 99916-7623`
- Copyright: "© 2026 Rambo Sistemas de Gestão. Todos os direitos reservados."

---

## Project Structure

```
rambo-la-page/
├── public/
│   └── mock.png          # monitor mockup image (already in root, move to public/)
│   └── rambo_logo.svg    # logo (already in root, move to public/)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Diferenciais.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── Contact.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## EmailJS Setup (user action required)

1. Create account at emailjs.com
2. Add email service connected to `gerencia@ramboerp.com.br`
3. Create email template with variables: `{{from_name}}`, `{{company}}`, `{{segment}}`, `{{phone}}`
4. Copy `Service ID`, `Template ID`, `Public Key` into `.env`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

---

## Animations Summary (Framer Motion)

| Element | Animation |
|---|---|
| Hero text | Staggered fade-in + slide-up on mount |
| Hero monitor | Fade-in + scale, then continuous float loop |
| Feature cards | `whileHover` lift + border brighten |
| Diferencial cards | `whileInView` slide-up |
| WhatsApp button | Pulse ring loop |
| Navbar | Background opacity transition on scroll |

---

## Out of Scope

- Dashboard mockup creation (user provides `mock.png`)
- EmailJS account setup (user action)
- Backend / API
- Multiple pages / routing
- Portuguese language toggle
- Analytics integration
- Blog / news section
