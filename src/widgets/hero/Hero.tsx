import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="eyebrow">
          <span className="eyebrow__dot" />
          Сервис заботы о вашем доме
        </div>

        <h1 className="hero__title" id="hero-title">
          Дом в порядке.
          <br />
          <span>Голова свободна.</span>
        </h1>

        <p className="hero__description">
          Решаем бытовые задачи, ремонтируем и устанавливаем. Один сервис —
          десятки способов сделать ваш дом удобнее.
        </p>

        <div className="hero__actions">
          <a className="button button--lime" href="#contacts">
            Обсудить задачу <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
          <a className="hero__secondary-link" href="#services">
            Смотреть услуги <ArrowDown size={17} strokeWidth={1.8} />
          </a>
        </div>

        <div className="hero-proof">
          <div className="hero-proof__icon">
            <Check size={16} strokeWidth={2.2} />
          </div>
          <p>
            <strong>От одной розетки до ремонта комнаты</strong>
            <span>Помогаем с задачами любого масштаба</span>
          </p>
        </div>
      </div>

      <div className="hero-visual">
        <img
          className="hero-visual__image"
          src="https://www.woodendot.com/cdn/shop/files/ibon_web_home_horizontal_tables3.jpg?v=1772356516&width=2100"
          alt="Светлая современная гостиная с натуральными материалами и мягким дневным светом"
          fetchPriority="high"
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />

        <div className="hero-visual__topline">
          <span>ЗАБОТА О ПРОСТРАНСТВЕ</span>
          <span>01 / 04</span>
        </div>

        <div className="hero-note">
          <span className="hero-note__mark"><Check size={15} /></span>
          <span>
            <strong>Всё по делу</strong>
            <small>Понятно с первого шага</small>
          </span>
        </div>

        <div className="hero-visual__caption">
          <span>КОМФОРТ НАЧИНАЕТСЯ С МЕЛОЧЕЙ</span>
          <span>FIXORA HOME</span>
        </div>
      </div>

      <div className="hero-bottomline">
        <span>БЫТОВЫЕ И ТЕХНИЧЕСКИЕ УСЛУГИ</span>
        <span>ДЛЯ ДОМА И КАЖДОГО ДНЯ</span>
      </div>
    </section>
  )
}

export default Hero
