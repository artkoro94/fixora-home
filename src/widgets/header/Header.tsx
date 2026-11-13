import { useRef, useState, type KeyboardEvent } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Как мы работаем', href: '#process' },
  { label: 'Контакты', href: '#contacts' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  const handleHeaderKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu()
      menuToggleRef.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleHeaderKeyDown}>
      <div className="site-header__inner">
        <a className="brand" href="#home" aria-label="FIXORA HOME — на главную" onClick={closeMenu}>
          <span className="brand__name">FIXORA<span>.</span></span>
          <span className="brand__caption">HOME SERVICE</span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a className="desktop-nav__link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="header-phone" href="tel:+79991234567">
            +7 (999) 123-45-67
          </a>
          <a className="button button--small button--dark header-cta" href="#contacts">
            Оставить заявку <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav--open' : ''}`} id="mobile-navigation" aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
        <nav aria-label="Мобильная навигация">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a className="mobile-nav__phone" href="tel:+79991234567" onClick={closeMenu}>
            +7 (999) 123-45-67
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
