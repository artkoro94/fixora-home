import { ArrowUpRight, ClipboardList, MessageCircle, CalendarClock, CheckCheck } from 'lucide-react'

const steps = [
  { title: 'Расскажите о задаче', description: 'Опишите, что нужно сделать. Можно выбрать услугу или просто задать вопрос.', icon: MessageCircle },
  { title: 'Обсудим детали', description: 'Уточним объём работ, важные нюансы и ответим на ваши вопросы.', icon: ClipboardList },
  { title: 'Согласуем время', description: 'Договоримся о подходящем времени и подтвердим, что именно предстоит сделать.', icon: CalendarClock },
  { title: 'Выполним работу', description: 'Приступим к согласованным задачам. Дополнительные работы сначала обсудим отдельно.', icon: CheckCheck },
]

function Process() {
  return (
    <section className="bg-cream px-[5.5%] pt-[112px] pb-[38px] text-forest max-[900px]:px-[5%] max-[900px]:pt-[88px] max-[900px]:pb-[30px] max-[620px]:px-[22px] max-[620px]:pt-[76px] max-[620px]:pb-7" id="process" aria-labelledby="process-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-[58px] flex items-end justify-between gap-12 max-[900px]:mb-[38px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-[18px] max-[900px]:text-center">
          <div>
            <p className="inline-flex items-center gap-[10px] text-[10px] font-extrabold tracking-[1.8px] text-[rgb(32_45_40_/_62%)] uppercase max-[900px]:justify-center"><span className="size-[7px] rounded-full bg-[#a8c94a] shadow-[0_0_0_4px_rgb(168_201_74_/_16%)]" />Всего четыре шага</p>
            <h2 className="mt-[22px] text-[clamp(42px,5vw,68px)] leading-[1.02] font-extrabold tracking-[-.075em] max-[620px]:text-[clamp(40px,10vw,54px)]">От задачи<br /><span className="text-[rgb(32_45_40_/_38%)]">до результата.</span></h2>
          </div>
          <div className="mb-[6px] grid max-w-[390px] justify-items-start gap-5 max-[900px]:max-w-[560px] max-[900px]:justify-items-center max-[900px]:text-center max-[620px]:justify-items-center">
            <p className="m-0 text-[14px] leading-[1.85] text-[rgb(32_45_40_/_66%)]">Никакой сложной схемы. Обсуждаем, договариваемся и делаем то, о чём условились.</p>
            <a className="inline-flex items-center gap-2.5 border-b border-forest pb-1.5 text-[13px] font-extrabold transition-[gap] duration-200 hover:gap-4 max-[620px]:justify-center" href="#contacts">Обсудить задачу <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <ol className="m-0 grid list-none grid-cols-4 border-y border-[rgb(32_45_40_/_18%)] p-0 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <li className={`group relative flex min-h-[310px] flex-col justify-between gap-[46px] border-r border-[rgb(32_45_40_/_13%)] px-6 py-[26px] pb-7 max-[900px]:min-h-[250px] max-[900px]:border-b max-[900px]:p-6 max-[900px]:text-center max-[900px]:[&:nth-child(2)]:border-r-0 max-[900px]:[&:nth-child(3)]:border-b-0 max-[620px]:min-h-0 max-[620px]:items-center max-[620px]:gap-[26px] max-[620px]:border-r-0 max-[620px]:border-b max-[620px]:px-0 max-[620px]:py-[22px] max-[620px]:[&:nth-child(3)]:border-b max-[620px]:last:border-b-0 ${index === 0 ? 'pl-0 max-[900px]:pl-6' : ''} ${index === 3 ? 'border-r-0 pr-0' : ''}`} key={title}>
              <div className="flex items-center justify-between max-[900px]:justify-center"><span className="grid size-12 place-items-center rounded-full border border-[rgb(32_45_40_/_22%)] text-forest transition-colors duration-200 group-hover:border-lime group-hover:bg-lime"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></span></div>
              <div className="w-full">
                <h3 className="mb-3 text-[clamp(19px,1.7vw,24px)] font-extrabold leading-[1.2] tracking-[-.045em] max-[620px]:text-[22px]">{title}</h3>
                <p className="m-0 max-w-[270px] text-[13px] leading-[1.8] text-[rgb(32_45_40_/_66%)] max-[900px]:mx-auto max-[620px]:max-w-[460px]">{description}</p>
              </div>
              <span className="absolute right-6 bottom-[-1px] left-6 h-0.5 bg-transparent transition-colors duration-200 group-hover:bg-lime group-first:left-0 group-last:right-0 max-[900px]:hidden" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
