import Header from '../widgets/header/Header'
import Hero from '../widgets/hero/Hero'
import Services from '../widgets/services/Services'
import Advantages from '../widgets/advantages/Advantages'
import Process from '../widgets/process/Process'
import Footer from '../widgets/footer/Footer'
import Contact from '../widgets/contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
