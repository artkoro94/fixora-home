import { useEffect, useLayoutEffect, useRef, useState, type ChangeEvent } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUpRight, Check, Mail, MapPin, Phone, X } from 'lucide-react'
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
    <section className="contact-section" id="contacts" aria-labelledby="contact-title">
      <div className="contact-section__inner">
        <div className="contact-heading">
          <p className="eyebrow"><span className="eyebrow__dot" />Давайте обсудим</p>
          <h2 id="contact-title">Расскажите,<br /><span>что нужно сделать.</span></h2>
          <p className="contact-heading__description">
            Опишите задачу и оставьте телефон. Подскажем, с чего лучше начать.
          </p>
        </div>

          <div className="contact-details">
            <a href="tel:+79991234567">
              <span className="contact-details__icon"><Phone size={18} /></span>
              <span><small>Позвонить</small><strong>+7 (999) 123-45-67</strong></span>
              <ArrowUpRight size={18} />
            </a>
            <div>
              <span className="contact-details__icon"><Mail size={18} /></span>
              <span><small>Напишите нам</small><strong>Контактный канал скоро появится</strong></span>
            </div>
            <div>
              <span className="contact-details__icon"><MapPin size={18} /></span>
              <span><small>Где работаем</small><strong>Уточняется при обращении</strong></span>
            </div>
          </div>
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="contact-form__intro">
            <span>ФОРМА ОБРАЩЕНИЯ</span>
            <p>Укажите телефон и коротко расскажите, что нужно сделать.</p>
          </div>

          <label className="contact-field">
            <span>Как к вам обращаться</span>
            <input
              {...nameField}
              type="text"
              placeholder="Ваше имя"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && <span className="contact-field__error" id="contact-name-error" role="alert">{errors.name.message}</span>}
          </label>

          <label className="contact-field">
            <span>Номер телефона</span>
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
            {errors.phone && <span className="contact-field__error" id="contact-phone-error" role="alert">{errors.phone.message}</span>}
          </label>

          <label className="contact-field">
            <span>Направление работ</span>
            <select
              {...serviceField}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'contact-service-error' : undefined}
            >
              <option value="">Выберите услугу</option>
              {services.map((service) => <option value={service} key={service}>{service}</option>)}
            </select>
            {errors.service && <span className="contact-field__error" id="contact-service-error" role="alert">{errors.service.message}</span>}
          </label>

          <label className="contact-field">
            <span>Коротко о задаче</span>
            <textarea
              {...messageField}
              rows={3}
              placeholder="Что нужно сделать?"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && <span className="contact-field__error" id="contact-message-error" role="alert">{errors.message.message}</span>}
          </label>

          <button className="contact-form__submit" type="submit">
            Отправить форму
          </button>
          <p className="contact-form__note">
            Демонстрационная форма — данные никуда не отправляются.
          </p>

          <dialog
            ref={successDialogRef}
            className="contact-success-dialog"
            aria-labelledby="contact-success-title"
            aria-describedby="contact-success-description"
            onClose={() => setIsSuccessOpen(false)}
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsSuccessOpen(false)
            }}
          >
            <div className="contact-success-dialog__icon" aria-hidden="true"><Check size={25} /></div>
            <button
              className="contact-success-dialog__close"
              type="button"
              aria-label="Закрыть окно"
              onClick={() => setIsSuccessOpen(false)}
            >
              <X size={19} />
            </button>
            <p className="contact-success-dialog__eyebrow">FIXORA HOME</p>
            <h3 id="contact-success-title">Заявка оформлена</h3>
            <p id="contact-success-description">
              Спасибо! Это демонстрационная версия сайта. Данные формы никуда не отправляются.
            </p>
            <button className="contact-success-dialog__action" type="button" onClick={() => setIsSuccessOpen(false)}>
              Понятно
            </button>
          </dialog>
        </form>
      </div>
    </section>
  )
}

export default Contact
