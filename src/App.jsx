import './App.css'
import Header from './components/Header'
import ContactCall from './components/ContactCall'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Process from './components/Process'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Services from './components/Services'
import Faq from './components/Faq'


function App() {

  return (
  <div>
    <Header />
    <Hero />
     <ContactCall />
    <Services />
    <Process />
    <Projects />
    <Testimonials />
    <Faq />
    <ContactForm />
    <Footer />
  
  </div>
  )
};

export default App
