import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ContactPage from './components/ContactPage'
import EcommerceTemplate from './components/EcommerceTemplate'
import ProductDetail from './components/ProductDetail'
import ProductGros from './components/ProductGros'
import Footer from './components/Footer'
import FacebookPixelTracker from './components/FacebookPixelTracker'
import PixelInitializer from './components/PixelInitializer'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <PixelInitializer />
        <FacebookPixelTracker />
        {/* <PixelDebugger /> */}
        {/* <FacebookPixelTest /> */}
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-gros" element={<ProductGros />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ecommerce-template" element={<EcommerceTemplate />} />
            <Route path="/template/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
          <SpeedInsights />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
