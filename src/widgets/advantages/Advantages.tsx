import { ArrowUpRight, ClipboardCheck, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'

const advantages = [
  { title: 'Понятно с самого начала', description: 'Обсуждаем задачу, объём работ и детали до того, как приступить.', icon: ClipboardCheck },
  { title: 'Один контакт по делу', description: 'Помогаем сориентироваться в задаче и остаёмся на связи по ходу работы.', icon: MessageCircle },
  { title: 'Аккуратность в деталях', description: 'Бережно относимся к дому, инструментам и пространству вокруг.', icon: Sparkles },
  { title: 'Без лишних сюрпризов', description: 'Если по ходу появляются дополнительные работы, сначала согласуем их с вами.', icon: ShieldCheck },
]

function Advantages() {
  return (
    <section className="bg-forest px-[5.5%] py-[112px] text-cream max-[900px]:px-[5%] max-[900px]:py-[88px] max-[620px]:px-[22px] max-[620px]:py-[76px]" id="advantages" aria-labelledby="advantages-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex items-end justify-between gap-12 max-[900px]:mb-[38px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-[18px] max-[900px]:text-center">
          <div>
            <p className="eyebrow text-[rgb(245_243_236_/_58%)] max-[900px]:justify-center"><span className="eyebrow__dot" />Почему FIXORA HOME</p>
            <h2 className="mt-[22px]">Хороший сервис —<br /><span className="text-lime">это просто.</span></h2>
          </div>
          <p className="mb-[6px] max-w-[410px] text-[14px] leading-[1.85] text-[rgb(245_243_236_/_65%)] max-[900px]:max-w-[560px] max-[900px]:text-center">
            Домашние дела не должны превращаться в отдельный проект.
            Помогаем пройти путь от вопроса до готового результата спокойно и понятно.
          </p>
        </div>
        <div className="grid grid-cols-4 border-y border-[rgb(245_243_236_/_18%)] max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {advantages.map(({ title, description, icon: Icon }, index) => (
            <article className={`group flex min-h-[270px] flex-col justify-between gap-[42px] border-r border-[rgb(245_243_236_/_15%)] px-6 py-[26px] pb-6 transition-colors duration-300 hover:bg-[rgb(245_243_236_/_3%)] max-[900px]:min-h-[240px] max-[900px]:items-center max-[900px]:border-b max-[900px]:p-6 max-[900px]:text-center max-[900px]:[&:nth-child(2)]:border-r-0 max-[900px]:[&:nth-child(3)]:border-b-0 max-[620px]:min-h-[210px] max-[620px]:border-r-0 max-[620px]:border-b max-[620px]:px-0 max-[620px]:py-[22px] max-[620px]:[&:nth-child(3)]:border-b max-[620px]:last:border-b-0 ${index === 0 ? 'pl-0 max-[900px]:pl-6' : ''} ${index === 3 ? 'border-r-0 pr-0' : ''}`} key={title}>
              <div className="flex items-center justify-between text-lime"><Icon size={25} strokeWidth={1.55} aria-hidden="true" /></div>
              <div>
                <h3 className="mb-3 max-w-[240px] text-[clamp(19px,1.7vw,24px)] font-extrabold leading-[1.2] tracking-[-.045em] max-[900px]:mx-auto max-[620px]:text-[22px]">{title}</h3>
                <p className="m-0 max-w-[260px] text-[13px] leading-[1.75] text-[rgb(245_243_236_/_62%)] max-[900px]:mx-auto">{description}</p>
              </div>
              <span className="h-0.5 w-[34px] self-start bg-lime transition-[width] duration-300 group-hover:w-16 max-[900px]:self-center" aria-hidden="true" />
            </article>
          ))}
        </div>
        <a className="mt-[30px] inline-flex items-center gap-3 border-b border-[rgb(215_243_106_/_60%)] pb-[7px] text-[13px] font-extrabold text-lime transition-[gap] duration-200 hover:gap-[18px] max-[900px]:mx-auto max-[900px]:flex max-[900px]:w-fit max-[900px]:justify-center" href="#process">
          Посмотреть, как мы работаем <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default Advantages
