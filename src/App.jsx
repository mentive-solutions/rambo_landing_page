import Background from './components/Background'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen font-inter relative">
      <Background />
      <Navbar />
      <main className="pt-24">
        <p className="text-text-primary p-6">Content coming soon</p>
      </main>
    </div>
  )
}

export default App
