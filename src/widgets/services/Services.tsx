import { ArrowUpRight, Droplets, Hammer, Paintbrush, PlugZap, Sofa, Wrench, type LucideIcon } from 'lucide-react'

type Service = {
  number: string
  title: string
  description: string
  examples: string[]
  icon: LucideIcon
  variant: 'featured' | 'standard'
}

const services: Service[] = [
  { number: '01', title: 'Электрика', description: 'Поможем с безопасностью и светом — от замены розетки до подключения новой техники.', examples: ['Розетки и выключатели', 'Светильники и люстры', 'Подключение техники'], icon: PlugZap, variant: 'featured' },
  { number: '02', title: 'Сантехника', description: 'Устраним бытовые неполадки и поможем обновить сантехнику без лишних хлопот.', examples: ['Смесители и сифоны', 'Устранение протечек', 'Установка оборудования'], icon: Droplets, variant: 'standard' },
  { number: '03', title: 'Отделка', description: 'Освежим пространство и аккуратно выполним небольшие отделочные работы.', examples: ['Поклейка обоев', 'Покраска стен', 'Мелкий ремонт поверхностей'], icon: Paintbrush, variant: 'standard' },
  { number: '04', title: 'Сборка и монтаж', description: 'Соберём мебель и надёжно закрепим то, что должно быть на своём месте.', examples: ['Сборка мебели', 'Полки и карнизы', 'Крепление телевизоров'], icon: Sofa, variant: 'standard' },
  { number: '05', title: 'Мастер на час', description: 'Возьмём на себя несколько небольших домашних задач за один визит.', examples: ['Мелкий бытовой ремонт', 'Регулировка дверей', 'Разные задачи по дому'], icon: Wrench, variant: 'standard' },
]

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className={`service-card service-card--${service.variant} service-card--${service.number}`}>
      <div className="service-card__top">
        <span className="service-card__number">{service.number} / 05</span>
        <span className="service-card__icon" aria-hidden="true"><Icon size={23} strokeWidth={1.65} /></span>
      </div>
      <div className="service-card__content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul>{service.examples.map((example) => <li key={example}>{example}</li>)}</ul>
      </div>
      <a className="service-card__link" href="#contacts" aria-label={`Обсудить услугу: ${service.title}`}>
        Обсудить задачу <ArrowUpRight size={18} strokeWidth={1.7} />
      </a>
    </article>
  )
}

function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-section__inner">
        <div className="services-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow__dot" />Чем можем помочь</p>
            <h2 id="services-title">Домашние задачи —<br /><span>наша работа.</span></h2>
          </div>
          <p className="services-heading__description">
            От небольшой неполадки до обновления комнаты. Выберите направление
            или расскажите, что нужно сделать — поможем разобраться.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => <ServiceCard service={service} key={service.number} />)}
          <div className="services-aside">
            <div className="services-aside__mark"><Hammer size={22} strokeWidth={1.6} /></div>
            <p>Не нашли нужную услугу?</p>
            <span>Расскажите о задаче — подскажем, чем можем помочь.</span>
            <a href="#contacts">Задать вопрос <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="services-footnote"><span>FIXORA HOME / НАПРАВЛЕНИЯ РАБОТ</span><span>01 — 05</span></div>
      </div>
    </section>
  )
}

export default Services
