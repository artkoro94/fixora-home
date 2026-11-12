import Header from '../widgets/header/Header'
import Hero from '../widgets/hero/Hero'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="next-section" id="services" aria-label="Услуги">
          <p className="eyebrow"><span className="eyebrow__dot" /> Что мы умеем</p>
          <h2>Домашние задачи —<br /><span>наша работа.</span></h2>
          <p>Скоро здесь появятся основные направления услуг FIXORA HOME.</p>
        </section>
        <div id="advantages" />
        <div id="process" />
        <div id="contacts" />
      </main>
    </>
  )
}

export default App
