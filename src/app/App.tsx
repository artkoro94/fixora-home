function App() {
  return (
    <main className="min-h-screen bg-cream px-6 py-10 text-forest">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home"
          className="text-xl font-extrabold tracking-[-0.06em]"
          aria-label="FIXORA HOME — на главную"
        >
          FIXORA<span className="text-lime">.</span>
          <span className="ml-2 text-xs font-semibold tracking-[0.16em] text-forest/55">
            HOME
          </span>
        </a>
        <span className="rounded-full border border-forest/15 px-4 py-2 text-xs font-semibold">
          PROJECT FOUNDATION
        </span>
      </div>

      <section
        id="home"
        className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center"
      >
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-forest/55">
          Дом требует внимания
        </p>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] sm:text-7xl">
          Мы знаем, <span className="text-forest/45">что делать.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-forest/70">
          Бытовые и технические услуги для вашего дома. От небольшой задачи до
          полноценного обновления пространства.
        </p>
        <div className="mt-9">
          <span className="inline-flex rounded-full bg-lime px-6 py-4 text-sm font-bold">
            Скоро здесь будет FIXORA HOME
          </span>
        </div>
      </section>
    </main>
  )
}

export default App
