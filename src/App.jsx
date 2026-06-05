import { Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import FeaturedBox from './components/FeaturedBox'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import Location from './components/Location'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

import AllTreatments from './components/AllTreatments'

import Legal from './pages/Legal'
import Endodoncia from './pages/Endodoncia'
import ImplantesDentales from './pages/ImplantesDentales'

const Home = () => (
  <>
    <div className="relative">
      <Navbar />
      <Hero />
    </div>

    <Treatments />
    <WhyUs />
    <FeaturedBox />
    <HowWeWork />
    <Testimonials />
    <BlogSection />
    <Location />
    <ContactSection />
    <Footer />
  </>
)

function App() {
  return (
    <main className="bg-white text-black">
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* TRATAMIENTOS */}
        <Route
          path="/tratamientos"
          element={
            <>
              <Navbar />
              <AllTreatments />
              <Footer />
            </>
          }
        />

        {/* ENDODONCIA */}
        <Route
          path="/endodoncia"
          element={
            <>
              <Navbar />
              <Endodoncia />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* IMPLANTES */}
        <Route
          path="/implantes-dentales"
          element={
            <>
              <Navbar />
              <ImplantesDentales />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* LEGALES */}
        <Route
          path="/legal"
          element={
            <>
              <Navbar />
              <Legal />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App