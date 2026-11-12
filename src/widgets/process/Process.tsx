import { ArrowUpRight, ClipboardList, MessageCircle, CalendarClock, CheckCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Расскажите о задаче',
    description: 'Опишите, что нужно сделать. Можно выбрать услугу или просто задать вопрос.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Обсудим детали',
    description: 'Уточним объём работ, важные нюансы и ответим на ваши вопросы.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Согласуем время',
    description: 'Договоримся о подходящем времени и подтвердим, что именно предстоит сделать.',
    icon: CalendarClock,
  },
  {
    number: '04',
    title: 'Выполним работу',
    description: 'Приступим к согласованным задачам. Дополнительные работы сначала обсудим отдельно.',
    icon: CheckCheck,
  },
]

function Process() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-section__inner">
        <div className="process-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow__dot" />Всего четыре шага</p>
            <h2 id="process-title">От задачи<br /><span>до результата.</span></h2>
          </div>
          <div className="process-heading__aside">
            <p>Никакой сложной схемы. Обсуждаем, договариваемся и делаем то, о чём условились.</p>
            <a href="#contacts">Обсудить задачу <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <ol className="process-steps">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <li className="process-step" key={number}>
              <div className="process-step__top">
                <span className="process-step__number">{number}</span>
                <span className="process-step__icon"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></span>
              </div>
              <div className="process-step__content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="process-step__connector" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <div className="process-footnote">
          <span>ПОНЯТНЫЙ ПУТЬ К РЕШЕНИЮ</span>
          <span>01 — 04</span>
        </div>
      </div>
    </section>
  )
}

export default Process
