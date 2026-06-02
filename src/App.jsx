import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen font-inter relative">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}

export default App
