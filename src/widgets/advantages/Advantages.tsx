import { ArrowUpRight, ClipboardCheck, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'

const advantages = [
  {
    title: 'Понятно с самого начала',
    description: 'Обсуждаем задачу, объём работ и детали до того, как приступить.',
    icon: ClipboardCheck,
  },
  {
    title: 'Один контакт по делу',
    description: 'Помогаем сориентироваться в задаче и остаёмся на связи по ходу работы.',
    icon: MessageCircle,
  },
  {
    title: 'Аккуратность в деталях',
    description: 'Бережно относимся к дому, инструментам и пространству вокруг.',
    icon: Sparkles,
  },
  {
    title: 'Без лишних сюрпризов',
    description: 'Если по ходу появляются дополнительные работы, сначала согласуем их с вами.',
    icon: ShieldCheck,
  },
]

function Advantages() {
  return (
    <section className="advantages-section" id="advantages" aria-labelledby="advantages-title">
      <div className="advantages-section__inner">
        <div className="advantages-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow__dot" />Почему FIXORA HOME</p>
            <h2 id="advantages-title">Хороший сервис —<br /><span>это просто.</span></h2>
          </div>
          <p className="advantages-heading__description">
            Домашние дела не должны превращаться в отдельный проект.
            Помогаем пройти путь от вопроса до готового результата спокойно и понятно.
          </p>
        </div>
        <div className="advantages-grid">
          {advantages.map(({ title, description, icon: Icon }) => (
            <article className="advantage-card" key={title}>
              <div className="advantage-card__top">
                <Icon size={25} strokeWidth={1.55} aria-hidden="true" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="advantage-card__line" aria-hidden="true" />
            </article>
          ))}
        </div>
        <a className="advantages-link" href="#process">
          Посмотреть, как мы работаем <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default Advantages
