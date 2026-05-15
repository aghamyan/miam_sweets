import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CakeCatalog from './components/CakeCatalog.jsx'
import CakeModal from './components/CakeModal.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { cakes } from './data/cakes.js'

export default function App() {
  const [selectedCake, setSelectedCake] = useState(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CakeCatalog cakes={cakes} onSelectCake={setSelectedCake} />
        <HowToOrder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CakeModal cake={selectedCake} onClose={() => setSelectedCake(null)} />
    </>
  )
}
