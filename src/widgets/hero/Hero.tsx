import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'

function Hero() {
  const imageBase = `${import.meta.env.BASE_URL}images/`

  return (
    <section className="relative isolate flex min-h-[min(760px,calc(100svh-92px))] w-full items-center overflow-hidden px-[5.5%] pt-[70px] pb-[90px] max-[1050px]:min-h-[680px] max-[760px]:min-h-[850px] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:px-[22px] max-[760px]:pt-[58px] max-[760px]:pb-[340px] max-[390px]:min-h-[800px] max-[390px]:pb-[300px]" id="home" aria-labelledby="hero-title">
      <div className="relative z-[2] w-[min(620px,56%)] py-6 pb-9 max-[1050px]:w-[min(580px,62%)] max-[760px]:mx-auto max-[760px]:flex max-[760px]:w-full max-[760px]:max-w-[560px] max-[760px]:flex-col max-[760px]:items-center max-[760px]:p-0 max-[760px]:text-center">
        <div className="inline-flex items-center gap-[10px] text-[10px] font-extrabold tracking-[1.8px] text-[rgb(32_45_40_/_62%)] uppercase">
          <span className="h-[7px] w-[7px] rounded-full bg-[#a8c94a] shadow-[0_0_0_4px_rgb(168_201_74_/_16%)]" />
          Сервис заботы о вашем доме
        </div>

        <h1 className="mt-7 text-[clamp(48px,5.3vw,78px)] leading-[.99] font-extrabold tracking-[-.075em] max-[1050px]:text-[clamp(46px,6vw,66px)] max-[760px]:mt-[23px] max-[760px]:text-[clamp(46px,11vw,68px)] max-[390px]:text-[44px]" id="hero-title">
          Помогаем с ремонтом<br />
          <span className="text-[rgb(32_45_40_/_38%)]">и делами по дому.</span>
        </h1>

        <p className="mt-[26px] max-w-[440px] text-[15px] leading-[1.9] text-[rgb(32_45_40_/_70%)] max-[760px]:mx-auto max-[760px]:mt-5 max-[760px]:max-w-[520px] max-[760px]:text-sm max-[620px]:max-w-[34ch]">
          Ремонтируем, устанавливаем и помогаем с повседневными задачами по дому.
        </p>

        <div className="mt-[34px] flex flex-wrap items-center gap-[25px] max-[760px]:mt-[26px] max-[760px]:w-full max-[760px]:justify-center max-[760px]:gap-[18px] max-[390px]:items-start max-[390px]:flex-col">
          <a className="inline-flex min-h-[54px] items-center justify-center gap-[18px] rounded-full bg-lime px-6 text-[13px] font-extrabold text-forest transition duration-200 hover:-translate-y-0.5 hover:bg-[#c8e85a] max-[760px]:min-h-[52px] max-[760px]:px-[19px] max-[760px]:text-xs" href="#contacts">
            Обсудить задачу <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
          <a className="inline-flex items-center gap-[9px] text-xs font-extrabold transition-[gap] duration-200 hover:gap-[14px] max-[760px]:justify-center" href="#services">
            Смотреть услуги <ArrowDown size={17} strokeWidth={1.8} />
          </a>
        </div>

        <div className="mt-[62px] flex items-center gap-[13px] max-[760px]:mt-[34px] max-[760px]:w-full max-[760px]:justify-center max-[760px]:text-left">
          <div className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border border-[rgb(32_45_40_/_18%)]"><Check size={16} strokeWidth={2.2} /></div>
          <p className="m-0 grid gap-1">
            <strong className="text-[11px]">От одной розетки до ремонта комнаты</strong>
            <span className="text-[10px] text-[rgb(32_45_40_/_55%)]">Помогаем с задачами любого масштаба</span>
          </p>
        </div>
      </div>

      <div className="absolute inset-0 -z-[1] min-h-0 overflow-hidden bg-[linear-gradient(145deg,#d9d1c1_0%,#b7ad9c_48%,#817d6e_100%)]">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center max-[760px]:[object-position:62%_center]"
          src={`${imageBase}hero-living-room-hq.webp`}
          srcSet={`${imageBase}hero-living-room-hq.webp 1x, ${imageBase}hero-living-room-2x.webp 2x`}
          sizes="100vw"
          width="1536"
          height="1024"
          alt="Светлая гостиная с кремовым диваном, деревянной мебелью и мягким дневным светом"
          fetchPriority="high"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#f5f3ec_0%,rgb(245_243_236_/_94%)_22%,rgb(245_243_236_/_72%)_36%,rgb(245_243_236_/_0%)_50%)]" />
        <div className="absolute top-[25px] right-[5.5%] left-[5.5%] z-[1] flex justify-between text-[9px] font-extrabold tracking-[1.5px] text-forest max-[760px]:right-[18px] max-[760px]:left-[18px] max-[760px]:text-[8px]">
          <span>ЗАБОТА О ПРОСТРАНСТВЕ</span>
        </div>
        <div className="absolute right-[5.5%] bottom-[25px] left-[5.5%] z-[1] flex justify-between text-[9px] font-extrabold tracking-[1.5px] text-forest max-[760px]:right-[18px] max-[760px]:left-[18px] max-[760px]:text-[8px] max-[390px]:gap-3">
          <span>КОМФОРТ НАЧИНАЕТСЯ С МЕЛОЧЕЙ</span><span>FIXORA HOME</span>
        </div>
      </div>

      <div className="absolute right-[5.5%] bottom-[76px] z-[2] flex items-center gap-[11px] rounded-[3px] border border-white/50 bg-[rgb(245_243_236_/_94%)] px-[18px] py-[14px] shadow-[0_12px_35px_rgb(32_45_40_/_12%)] backdrop-blur-[12px] max-[760px]:right-4 max-[760px]:bottom-[65px]">
        <span className="grid h-[27px] w-[27px] place-items-center rounded-full bg-lime"><Check size={15} /></span>
        <span className="grid gap-[3px]"><strong className="text-[11px]">Всё по делу</strong><small className="text-[9px] text-[rgb(32_45_40_/_58%)]">Понятно с первого шага</small></span>
      </div>
    </section>
  )
}

export default Hero
