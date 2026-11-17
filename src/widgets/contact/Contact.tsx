import { useEffect, useLayoutEffect, useRef, useState, type ChangeEvent } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUpRight, Check, ChevronDown, Mail, MapPin, Phone, X } from 'lucide-react'
import { contactSchema, formatRussianPhone, getPhoneCaretPosition, type ContactFormValues } from './contact-validation'

const services = [
  'Электрика',
  'Сантехника',
  'Отделка',
  'Сборка и монтаж',
  'Мастер на час',
  'Другое',
]


function Contact() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const successDialogRef = useRef<HTMLDialogElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const pendingCaret = useRef<number | null>(null)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { name: '', phone: '', service: '', message: '' },
  })

  useLayoutEffect(() => {
    if (pendingCaret.current === null || !phoneInputRef.current) return
    phoneInputRef.current.setSelectionRange(pendingCaret.current, pendingCaret.current)
    pendingCaret.current = null
  }, [phone])

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const inputValue = event.currentTarget.value
    const rawDigits = inputValue.replace(/\D/g, '')
    const rawDigitsBeforeCaret = inputValue
      .slice(0, event.currentTarget.selectionStart ?? inputValue.length)
      .replace(/\D/g, '').length
    const hasCountryPrefix = rawDigits.startsWith('7') || rawDigits.startsWith('8')
    const nationalDigits = hasCountryPrefix ? rawDigits.slice(1) : rawDigits
    const nationalDigitsBeforeCaret = Math.max(0, rawDigitsBeforeCaret - (hasCountryPrefix ? 1 : 0))
    const formatted = rawDigits.length ? formatRussianPhone(nationalDigits) : ''

    pendingCaret.current = getPhoneCaretPosition(
      formatted,
      Math.min(nationalDigitsBeforeCaret, nationalDigits.length, 10),
    )
    setPhone(formatted)
    onChange(formatted)
  }

  useEffect(() => {
    const dialog = successDialogRef.current
    if (!dialog) return

    if (isSuccessOpen && !dialog.open) dialog.showModal()
    if (!isSuccessOpen && dialog.open) dialog.close()
  }, [isSuccessOpen])

  const onSubmit = () => {
    setIsSuccessOpen(true)
  }

  const nameField = register('name')
  const serviceField = register('service')
  const messageField = register('message')

  return (
    <section className="bg-[#e9e8df] px-[5.5%] py-[112px] text-forest max-[900px]:px-[5%] max-[900px]:py-[88px] max-[620px]:px-[22px] max-[620px]:py-[76px]" id="contacts" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] grid-rows-[auto_1fr] items-start gap-x-[clamp(42px,7vw,104px)] [grid-template-areas:'heading_form'_'details_form'] max-[900px]:grid-cols-1 max-[900px]:grid-rows-[auto] max-[900px]:justify-items-center max-[900px]:gap-[42px] max-[900px]:[grid-template-areas:'heading'_'form'_'details']">
        <div className="[grid-area:heading] w-full max-[900px]:text-center">
          <p className="inline-flex items-center gap-[10px] text-[10px] font-extrabold tracking-[1.8px] text-[rgb(32_45_40_/_62%)] uppercase max-[900px]:justify-center"><span className="size-[7px] rounded-full bg-[#a8c94a] shadow-[0_0_0_4px_rgb(168_201_74_/_16%)]" />Давайте обсудим</p>
          <h2 className="mt-[22px] mb-[18px] text-[clamp(42px,5vw,68px)] leading-[1.02] font-extrabold tracking-[-.075em] max-[620px]:text-[clamp(40px,10vw,54px)]" id="contact-title">Расскажите,<br /><span className="text-[rgb(32_45_40_/_40%)]">что нужно сделать.</span></h2>
          <p className="mt-0 mb-0 max-w-[420px] text-[14px] leading-[1.85] text-[rgb(32_45_40_/_66%)] max-[900px]:mx-auto max-[620px]:max-w-[34ch]">
            Опишите задачу и оставьте телефон. Подскажем, с чего лучше начать.
          </p>
        </div>

          <div className="[grid-area:details] mt-12 grid w-full max-w-[440px] gap-0 border-t border-[rgb(32_45_40_/_16%)] max-[900px]:mt-8 max-[900px]:max-w-[560px]">
            <a className="group relative flex items-center gap-[14px] border-b border-[rgb(32_45_40_/_16%)] py-[17px] max-[900px]:min-h-[82px] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_auto] max-[900px]:gap-2 max-[900px]:bg-[rgb(255_255_255_/_28%)] max-[900px]:px-[14px] max-[900px]:text-center max-[900px]:hover:bg-[rgb(215_243_106_/_22%)] min-[621px]:max-[900px]:grid-cols-[1fr_auto_auto_1fr]" href="tel:+79991234567">
              <span className="grid size-[42px] shrink-0 place-items-center rounded-full border border-[rgb(32_45_40_/_20%)] max-[900px]:hidden"><Phone size={18} /></span>
              <span className="grid flex-1 gap-1 max-[900px]:col-start-1 max-[900px]:justify-items-center min-[621px]:max-[900px]:col-start-2"><small className="text-[11px] text-[rgb(32_45_40_/_55%)]">Позвонить</small><strong className="text-[13px] font-extrabold">+7 (999) 123-45-67</strong></span>
              <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] max-[900px]:col-start-2 max-[900px]:row-start-1 max-[900px]:size-[22px] max-[900px]:rounded-full max-[900px]:border max-[900px]:border-[rgb(32_45_40_/_28%)] max-[900px]:p-[3px] min-[621px]:max-[900px]:col-start-3" size={18} />
            </a>
            <div className="flex items-center gap-[14px] border-b border-[rgb(32_45_40_/_16%)] py-[17px] max-[900px]:min-h-[82px] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_auto] max-[900px]:gap-2 max-[900px]:px-[14px] max-[900px]:text-center">
              <span className="grid size-[42px] shrink-0 place-items-center rounded-full border border-[rgb(32_45_40_/_20%)] max-[900px]:hidden"><Mail size={18} /></span>
              <span className="grid flex-1 gap-1 max-[900px]:col-span-2 max-[900px]:justify-items-center"><small className="text-[11px] text-[rgb(32_45_40_/_55%)]">Напишите нам</small><strong className="text-[13px] font-extrabold">Контактный канал скоро появится</strong></span>
            </div>
            <div className="flex items-center gap-[14px] border-b border-[rgb(32_45_40_/_16%)] py-[17px] max-[900px]:min-h-[82px] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_auto] max-[900px]:gap-2 max-[900px]:px-[14px] max-[900px]:text-center">
              <span className="grid size-[42px] shrink-0 place-items-center rounded-full border border-[rgb(32_45_40_/_20%)] max-[900px]:hidden"><MapPin size={18} /></span>
              <span className="grid flex-1 gap-1 max-[900px]:col-span-2 max-[900px]:justify-items-center"><small className="text-[11px] text-[rgb(32_45_40_/_55%)]">Где работаем</small><strong className="text-[13px] font-extrabold">Уточняется при обращении</strong></span>
            </div>
          </div>
        <form className="[grid-area:form] grid w-full gap-5 border border-[rgb(32_45_40_/_9%)] bg-cream p-[clamp(24px,3.5vw,42px)] max-[900px]:w-full max-[900px]:max-w-[620px] max-[620px]:gap-[18px] max-[620px]:p-[22px]" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-1 grid gap-[9px]">
            <span className="text-[10px] font-extrabold tracking-[1.6px] text-[rgb(32_45_40_/_48%)]">ФОРМА ОБРАЩЕНИЯ</span>
            <p className="m-0 max-w-[420px] text-[13px] leading-[1.7] text-[rgb(32_45_40_/_65%)] max-[620px]:max-w-[34ch]">Укажите телефон и коротко расскажите, что нужно сделать.</p>
          </div>

          <label className="grid gap-[9px]">
            <span className="text-[12px] font-extrabold">Как к вам обращаться</span>
            <input
              {...nameField}
              type="text"
              className="w-full min-w-0 border border-[rgb(32_45_40_/_20%)] bg-transparent px-[15px] py-[14px] text-[13px] text-forest outline-none focus-visible:outline-none transition-[border-color,background] duration-200 placeholder:text-[rgb(32_45_40_/_42%)] focus:border-[#789c35] focus:bg-white aria-[invalid=true]:border-[#b42318] aria-[invalid=true]:bg-[rgb(180_35_24_/_3%)] aria-[invalid=true]:focus:border-[#b42318] max-[620px]:text-base"
              placeholder="Ваше имя"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && <span className="text-[12px] leading-[1.5] text-[#b42318]" id="contact-name-error" role="alert">{errors.name.message}</span>}
          </label>

          <label className="grid gap-[9px]">
            <span className="text-[12px] font-extrabold">Номер телефона</span>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  ref={(element) => {
                    field.ref(element)
                    phoneInputRef.current = element
                  }}
                  name={field.name}
                  type="tel"
                  className="w-full min-w-0 border border-[rgb(32_45_40_/_20%)] bg-transparent px-[15px] py-[14px] text-[13px] text-forest outline-none focus-visible:outline-none transition-[border-color,background] duration-200 placeholder:text-[rgb(32_45_40_/_42%)] focus:border-[#789c35] focus:bg-white aria-[invalid=true]:border-[#b42318] aria-[invalid=true]:bg-[rgb(180_35_24_/_3%)] aria-[invalid=true]:focus:border-[#b42318] max-[620px]:text-base"
                  inputMode="numeric"
                  placeholder="+7 (___) ___-__-__"
                  autoComplete="tel"
                  value={phone}
                  onBlur={field.onBlur}
                  onChange={(event) => handlePhoneChange(event, field.onChange)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                />
              )}
            />
            {errors.phone && <span className="text-[12px] leading-[1.5] text-[#b42318]" id="contact-phone-error" role="alert">{errors.phone.message}</span>}
          </label>

          <label className="grid gap-[9px]">
            <span className="text-[12px] font-extrabold">Направление работ</span>
            <span className="relative block">
              <select
                className="w-full min-w-0 appearance-none border border-[rgb(32_45_40_/_20%)] bg-transparent px-[15px] py-[14px] pr-12 text-[13px] text-forest outline-none focus-visible:outline-none transition-[border-color,background] duration-200 placeholder:text-[rgb(32_45_40_/_42%)] focus:border-[#789c35] focus:bg-white aria-[invalid=true]:border-[#b42318] aria-[invalid=true]:bg-[rgb(180_35_24_/_3%)] aria-[invalid=true]:focus:border-[#b42318] max-[620px]:text-base cursor-pointer"
                {...serviceField}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'contact-service-error' : undefined}
              >
                <option value="">Выберите услугу</option>
                {services.map((service) => <option value={service} key={service}>{service}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-forest" size={18} aria-hidden="true" />
            </span>
            {errors.service && <span className="text-[12px] leading-[1.5] text-[#b42318]" id="contact-service-error" role="alert">{errors.service.message}</span>}
          </label>

          <label className="grid gap-[9px]">
            <span className="text-[12px] font-extrabold">Коротко о задаче</span>
            <textarea
              className="w-full min-w-0 border border-[rgb(32_45_40_/_20%)] bg-transparent px-[15px] py-[14px] text-[13px] text-forest outline-none focus-visible:outline-none transition-[border-color,background] duration-200 placeholder:text-[rgb(32_45_40_/_42%)] focus:border-[#789c35] focus:bg-white aria-[invalid=true]:border-[#b42318] aria-[invalid=true]:bg-[rgb(180_35_24_/_3%)] aria-[invalid=true]:focus:border-[#b42318] max-[620px]:text-base min-h-[100px] resize-y"
              {...messageField}
              rows={3}
              placeholder="Что нужно сделать?"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && <span className="text-[12px] leading-[1.5] text-[#b42318]" id="contact-message-error" role="alert">{errors.message.message}</span>}
          </label>

          <button className="contact-submit flex min-h-[54px] w-full cursor-pointer items-center justify-center border-0 bg-forest px-[18px] text-[13px] font-extrabold text-cream transition-colors duration-200 hover:bg-[#34483e]" type="submit">
            Отправить форму
          </button>
          <p className="-mt-2 mb-0 min-h-5 text-[11px] leading-[1.6] text-[rgb(32_45_40_/_55%)]">
            Демонстрационная форма — данные никуда не отправляются.
          </p>

          <dialog
            ref={successDialogRef}
            className="fixed inset-0 m-auto w-[min(calc(100%_-_32px),460px)] max-w-[460px] border border-[rgb(32_45_40_/_12%)] bg-cream p-[42px] text-center text-forest shadow-[0_24px_80px_rgb(20_29_25_/_24%)] backdrop:bg-[rgb(17_25_21_/_62%)] backdrop:backdrop-blur-[5px] max-[620px]:px-6 max-[620px]:pt-[34px] max-[620px]:pb-[26px]"
            aria-labelledby="contact-success-title"
            aria-describedby="contact-success-description"
            onClose={() => setIsSuccessOpen(false)}
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsSuccessOpen(false)
            }}
          >
            <div className="mx-auto mb-[22px] grid size-[58px] place-items-center rounded-full bg-lime" aria-hidden="true"><Check size={25} /></div>
            <button
              className="absolute top-[14px] right-[14px] grid size-9 cursor-pointer place-items-center border-0 bg-transparent text-current transition-colors duration-200 hover:bg-[rgb(32_45_40_/_6%)]"
              type="button"
              aria-label="Закрыть окно"
              onClick={() => setIsSuccessOpen(false)}
            >
              <X size={19} />
            </button>
            <p className="mb-3 text-[10px] font-extrabold tracking-[1.6px] text-[rgb(32_45_40_/_54%)]">FIXORA HOME</p>
            <h3 className="m-0 text-[clamp(25px,5vw,32px)] font-extrabold tracking-[-.055em]" id="contact-success-title">Заявка оформлена</h3>
            <p className="mt-[14px] mb-[26px] text-[13px] leading-[1.75] text-[rgb(32_45_40_/_68%)]" id="contact-success-description">
              Спасибо! Это демонстрационная версия сайта. Данные формы никуда не отправляются.
            </p>
            <button className="contact-success-action min-h-[50px] w-full cursor-pointer border-0 bg-forest text-[13px] font-extrabold text-cream hover:bg-[#34483e]" type="button" onClick={() => setIsSuccessOpen(false)}>
              Понятно
            </button>
          </dialog>
        </form>
      </div>
    </section>
  )
}

export default Contact
