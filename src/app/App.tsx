import Header from '../widgets/header/Header'
import Hero from '../widgets/hero/Hero'
import Services from '../widgets/services/Services'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <div id="advantages" />
        <div id="process" />
        <div id="contacts" />
      </main>
    </>
  )
}

export default App
