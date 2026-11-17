import { Phone } from 'lucide-react'

const footerNavigation = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Как мы работаем', href: '#process' },
]

function Footer() {
  return (
    <footer className="site-footer bg-forest px-[5.5%] pt-[88px] pb-[26px] text-cream max-[900px]:px-[5%] max-[900px]:pt-[76px] max-[900px]:pb-6 max-[620px]:px-[22px] max-[620px]:pt-[68px] max-[620px]:pb-[22px] max-[900px]:min-[621px]:px-[6%] max-[900px]:min-[621px]:pt-[68px] max-[900px]:min-[621px]:pb-7 max-[620px]:pt-16" >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between gap-12 pb-[72px] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] max-[900px]:items-center max-[900px]:gap-7 max-[900px]:pb-12 max-[700px]:flex max-[700px]:flex-col max-[700px]:items-center max-[700px]:gap-7 max-[700px]:pb-[42px] max-[700px]:text-center">
          <div className="max-w-[560px] max-[900px]:w-auto max-[700px]:w-full">
            <p className="inline-flex items-center gap-[10px] text-[10px] font-extrabold tracking-[1.8px] text-[rgb(245_243_236_/_58%)] uppercase max-[900px]:justify-center"><span className="size-[7px] rounded-full bg-[#a8c94a] shadow-[0_0_0_4px_rgb(168_201_74_/_16%)]" />На связи</p>
            <h2 className="mt-[22px] mb-4 text-[clamp(44px,5.2vw,70px)] font-extrabold leading-[.98] tracking-[-.075em] max-[620px]:text-[clamp(40px,10vw,52px)]">Есть задача<br /><span className="text-lime">для дома?</span></h2>
            <p className="m-0 max-w-[430px] text-[14px] leading-[1.85] text-[rgb(245_243_236_/_65%)] max-[700px]:mx-auto max-[700px]:max-w-[34ch] max-[700px]:text-[13px]">Расскажите, что нужно сделать. Обсудим детали и подскажем, с чего начать.</p>
          </div>
          <a className="footer-phone flex min-w-[300px] items-center gap-4 border-y border-[rgb(245_243_236_/_24%)] py-5 transition-colors duration-200 hover:text-lime max-[900px]:min-w-0 max-[900px]:gap-[14px] max-[700px]:w-full max-[700px]:max-w-[420px] max-[700px]:justify-center max-[700px]:gap-3" href="tel:+79991234567">
            <span className="grid size-[46px] shrink-0 place-items-center rounded-full border border-[rgb(245_243_236_/_30%)]"><Phone size={18} strokeWidth={1.7} /></span>
            <span className="grid flex-1 gap-[5px]"><small className="text-[11px] text-[rgb(245_243_236_/_55%)]">Позвонить нам</small><strong className="text-[17px] font-extrabold max-[620px]:text-[15px]">+7 (999) 123-45-67</strong></span>
          </a>
        </div>
        <div className="flex items-center justify-between gap-6 border-t border-[rgb(245_243_236_/_18%)] pt-6 max-[620px]:grid max-[620px]:grid-cols-[minmax(0,1fr)_auto] max-[620px]:gap-[22px_12px] max-[620px]:pt-[22px] max-[380px]:gap-2 [&_.brand__caption]:max-[380px]:text-[8px] [&_.brand__caption]:max-[380px]:tracking-[1px]">
          <a className="inline-flex min-w-0 flex-col whitespace-nowrap" href="#top" aria-label="FIXORA.HOME — на главную">
            <span className="brand-wordmark text-[22px] font-extrabold tracking-[-1.5px] text-cream">FIXORA<span className="text-[#a6c93f]">.</span>HOME</span>
          </a>
          <nav className="flex flex-wrap gap-6 max-[700px]:hidden" aria-label="Навигация в подвале">
            {footerNavigation.map((item) => <a className="footer-nav-link text-[11px] text-[rgb(245_243_236_/_58%)] transition-colors duration-200 hover:text-lime" href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <span className="text-right text-[11px] text-[rgb(245_243_236_/_58%)] max-[620px]:col-start-2 max-[620px]:justify-self-end max-[620px]:whitespace-nowrap max-[620px]:text-[10px] max-[380px]:text-[9px]">© {new Date().getFullYear()} FIXORA.HOME</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
