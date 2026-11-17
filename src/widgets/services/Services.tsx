import { ArrowUpRight, Droplets, MessageCircleQuestion, Paintbrush, PlugZap, Sofa, Wrench, type LucideIcon } from 'lucide-react'

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
  const featured = service.variant === 'featured'
  return (
    <article className={`service-card relative grid min-h-[370px] grid-rows-[auto_1fr_auto] grid-cols-1 gap-[26px] max-[900px]:grid-rows-[auto_auto] overflow-hidden border border-[rgb(32_45_40_/_9%)] p-[30px] transition-[transform,border-color] duration-[250ms] ease-out hover:-translate-y-1 hover:border-[rgb(32_45_40_/_24%)] max-[900px]:min-h-[360px] max-[900px]:min-w-0 max-[900px]:grid-cols-1 max-[900px]:p-6 max-[900px]:items-center max-[900px]:justify-start max-[900px]:text-center max-[620px]:!min-h-[310px] max-[620px]:!w-full max-[620px]:!max-w-full max-[620px]:!px-[22px] max-[620px]:!py-[22px] ${featured ? 'col-span-7 min-h-[410px] bg-forest text-cream max-[620px]:!min-h-[350px]' : 'col-span-4 bg-white text-forest'} max-[900px]:col-span-1 ${service.number === '02' ? 'col-span-5' : ''}`}>
      <a className="service-card__overlay-link absolute inset-0 z-10 hidden max-[900px]:block" href="#contacts" aria-label={`Обсудить услугу: ${service.title}`} />
      <div className="flex items-start justify-between max-[900px]:justify-center">
        <span className={`grid h-12 w-12 place-items-center rounded-full border border-current opacity-[.82] ${featured ? 'border-[rgb(215_243_106_/_35%)] text-lime' : ''}`} aria-hidden="true"><Icon size={23} strokeWidth={1.65} /></span>
      </div>
      <div className="min-w-0 max-[900px]:mt-8 max-[900px]:w-full max-[900px]:flex-[1_1_auto] max-[620px]:mt-[30px]">
        <h3 className="mb-3 text-[clamp(24px,2.4vw,34px)] font-extrabold tracking-[-.055em]">{service.title}</h3>
        <p className="max-w-[500px] text-[15px] leading-[1.75] opacity-[.68] max-[900px]:mx-auto max-[620px]:text-sm">{service.description}</p>
        <ul className="mt-[22px] flex flex-wrap gap-[9px] max-[900px]:items-center max-[900px]:justify-center">
          {service.examples.map((example) => <li className="rounded-[2px] border border-current px-3 py-[9px] text-xs leading-[1.35] opacity-[.68] max-[900px]:max-w-full max-[900px]:[overflow-wrap:anywhere] max-[620px]:text-[11px]" key={example}>{example}</li>)}
        </ul>
      </div>
      <a className={`service-card__link mt-0 inline-flex max-[900px]:hidden w-fit min-w-[190px] cursor-pointer items-center justify-between gap-[14px] self-end border-b border-current pb-[7px] text-[13px] font-extrabold transition-[gap] duration-200 hover:gap-[22px] max-[900px]:mx-auto max-[900px]:mt-7 max-[900px]:min-w-0 max-[900px]:max-w-full max-[900px]:justify-center max-[620px]:mx-auto max-[620px]:justify-center ${featured ? 'text-lime' : ''}`} href="#contacts" aria-label={`Обсудить услугу: ${service.title}`}>
        Обсудить задачу <ArrowUpRight size={18} strokeWidth={1.7} />
      </a>
    </article>
  )
}

function Services() {
  return (
    <section className="bg-cream px-[5.5%] pt-28 pb-[38px] max-[900px]:px-[5%] max-[900px]:pt-[88px] max-[900px]:pb-[30px] max-[620px]:px-[22px] max-[620px]:pt-[76px] max-[620px]:pb-7" id="services" aria-labelledby="services-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-[54px] flex items-end justify-between gap-12 max-[900px]:mb-9 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-[18px] max-[900px]:text-center">
          <div>
            <p className="inline-flex items-center gap-[10px] text-[10px] font-extrabold tracking-[1.8px] text-[rgb(32_45_40_/_62%)] uppercase max-[900px]:justify-center"><span className="h-[7px] w-[7px] rounded-full bg-[#a8c94a] shadow-[0_0_0_4px_rgb(168_201_74_/_16%)]" />Чем можем помочь</p>
            <h2 className="mt-[22px] text-[clamp(42px,5vw,68px)] leading-[1.02] font-extrabold tracking-[-.075em] max-[620px]:text-[clamp(40px,10vw,54px)]" id="services-title">Домашние задачи —<br /><span className="text-[rgb(32_45_40_/_38%)]">наша работа.</span></h2>
          </div>
          <p className="mb-[6px] max-w-[390px] text-sm leading-[1.85] text-[rgb(32_45_40_/_66%)] max-[900px]:mx-auto max-[900px]:max-w-[560px] max-[900px]:text-center max-[620px]:max-w-[38ch]">
            От небольшой неполадки до обновления комнаты. Выберите направление
            или расскажите, что нужно сделать — поможем разобраться.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[14px] max-[900px]:grid-cols-2 max-[620px]:w-full max-[620px]:min-w-0 max-[620px]:grid-cols-[minmax(0,1fr)] max-[620px]:gap-[10px]">
          {services.map((service) => <ServiceCard service={service} key={service.number} />)}
        </div>
        <aside className="mx-auto mt-7 flex w-full max-w-[760px] items-center justify-center gap-[22px] border border-[rgb(32_45_40_/_10%)] bg-lime px-7 py-[22px] max-[900px]:justify-center max-[900px]:text-center max-[760px]:flex-col max-[760px]:gap-3 max-[620px]:mt-[18px] max-[620px]:flex-wrap max-[620px]:!flex-row max-[620px]:justify-start max-[620px]:gap-3 px-4 max-[620px]:py-5">
          <MessageCircleQuestion size={21} strokeWidth={1.6} aria-hidden="true" />
          <div className="text-left max-[900px]:text-center max-[620px]:flex-[1_1_calc(100%-44px)] max-[620px]:text-left">
            <h3 className="mb-[5px] text-[17px] font-extrabold tracking-[-.04em]" id="services-contact-title">Не нашли нужную услугу?</h3>
            <p className="text-[13px] leading-[1.6] text-[rgb(32_45_40_/_68%)]">Расскажите о задаче — подскажем, чем можем помочь.</p>
          </div>
          <a className="ml-2 inline-flex shrink-0 items-center gap-[9px] border-b border-current pb-[5px] text-xs font-extrabold transition-[gap] duration-200 hover:gap-[14px] max-[900px]:ml-0 max-[760px]:mx-auto max-[760px]:mt-1 max-[620px]:ml-[37px]" href="#contacts">Задать вопрос <ArrowUpRight size={17} /></a>
        </aside>
      </div>
    </section>
  )
}

export default Services
