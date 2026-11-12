import Header from '../widgets/header/Header'
import Hero from '../widgets/hero/Hero'
import Services from '../widgets/services/Services'
import Advantages from '../widgets/advantages/Advantages'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <div id="process" />
        <div id="contacts" />
      </main>
    </>
  )
}

export default App
