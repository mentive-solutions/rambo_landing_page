import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Diferenciais from './components/Diferenciais'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen font-inter relative">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Diferenciais />
        <CtaBanner />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </div>
  )
}

export default App
