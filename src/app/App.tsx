import Header from '../widgets/header/Header'
import Hero from '../widgets/hero/Hero'
import Services from '../widgets/services/Services'
import Advantages from '../widgets/advantages/Advantages'
import Process from '../widgets/process/Process'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Process />
        <div id="contacts" />
      </main>
    </>
  )
}

export default App
