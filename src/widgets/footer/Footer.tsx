import { ArrowUpRight, Phone } from 'lucide-react'

const footerNavigation = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Как мы работаем', href: '#process' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__contact">
          <div className="site-footer__contact-copy">
            <p className="eyebrow"><span className="eyebrow__dot" />На связи</p>
            <h2>Есть задача<br /><span>для дома?</span></h2>
            <p className="site-footer__description">
              Расскажите, что нужно сделать. Обсудим детали и подскажем, с чего начать.
            </p>
          </div>
          <a className="site-footer__phone" href="tel:+79991234567">
            <span><Phone size={18} strokeWidth={1.7} /></span>
            <span>
              <small>Позвонить нам</small>
              <strong>+7 (999) 123-45-67</strong>
            </span>
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="site-footer__bottom">
          <a className="brand site-footer__brand" href="#top" aria-label="FIXORA — на главную">
            <span className="brand__name">FIXORA<span>.</span></span>
            <span className="brand__caption">HOME SERVICE</span>
          </a>
          <nav className="site-footer__nav" aria-label="Навигация в подвале">
            {footerNavigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
          <span className="site-footer__copyright">© {new Date().getFullYear()} FIXORA HOME</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
