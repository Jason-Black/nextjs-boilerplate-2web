import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCases from './components/UseCases'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <ProductShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

