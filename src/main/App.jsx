import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/Divider'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Wines } from '../pages/Wines'
import { Gallery } from '../pages/Gallery'
import { Contact } from '../pages/Contact'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
