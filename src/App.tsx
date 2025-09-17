import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/OfferForYou'
import Pricing from './components/Pricing'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  )
}

export default App
