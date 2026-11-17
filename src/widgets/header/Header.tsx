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
    <header className="relative z-20 w-full bg-cream px-[5.5%] max-[760px]:px-[22px]" id="top" onKeyDown={handleHeaderKeyDown}>
      <div className="mx-auto flex min-h-[92px] max-w-[1440px] items-center justify-between border-b border-[rgb(32_45_40_/_10%)] max-[760px]:min-h-[76px]">
        <a className="inline-flex items-baseline gap-[10px] whitespace-nowrap" href="#top" aria-label="FIXORA HOME — на главную" onClick={closeMenu}>
          <span className="text-[22px] font-extrabold tracking-[-1.5px] max-[760px]:text-[20px]">FIXORA<span className="text-[#a6c93f]">.</span></span>
          <span className="text-[9px] font-bold tracking-[1.7px] text-[rgb(32_45_40_/_55%)] max-[760px]:text-[8px]">HOME SERVICE</span>
        </a>

        <nav className="flex items-center gap-[clamp(18px,2.3vw,36px)] max-[1050px]:gap-4 max-[760px]:hidden" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a className="text-xs font-semibold text-[rgb(32_45_40_/_76%)] transition-colors duration-200 hover:text-[#789c35] max-[1050px]:text-[11px]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[22px]">
          <a className="whitespace-nowrap text-xs font-bold max-[1050px]:hidden" href="tel:+79991234567">+7 (999) 123-45-67</a>
          <a className="inline-flex min-h-11 items-center justify-center gap-[18px] rounded-full bg-forest px-[18px] text-[11px] font-extrabold !text-cream transition-[transform,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#34483e] cursor-pointer max-[760px]:hidden" href="#contacts">
            Оставить заявку <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
          <button
            ref={menuToggleRef}
            className="hidden h-[42px] w-[42px] place-items-center border-0 bg-transparent text-forest max-[760px]:grid"
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

      <div
        className={`absolute top-[76px] right-0 left-0 z-30 grid max-h-0 overflow-hidden bg-cream opacity-0 transition-[max-height,opacity] duration-300 min-[761px]:hidden ${isMenuOpen ? 'max-h-[360px] border-b border-[rgb(32_45_40_/_12%)] opacity-100' : ''}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <nav className="grid px-[22px] pt-[10px] pb-6" aria-label="Мобильная навигация">
          {navigation.map((item) => (
            <a className="flex items-center justify-between border-b border-[rgb(32_45_40_/_9%)] py-4 text-sm font-bold" href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}<ArrowUpRight size={18} />
            </a>
          ))}
          <a className="justify-start border-0 pt-[22px] text-[rgb(32_45_40_/_60%)]" href="tel:+79991234567" onClick={closeMenu}>
            +7 (999) 123-45-67
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
