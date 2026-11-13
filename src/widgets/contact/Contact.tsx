import { useLayoutEffect, useRef, useState, type ChangeEvent } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const services = [
  'Электрика',
  'Сантехника',
  'Отделка',
  'Сборка и монтаж',
  'Мастер на час',
  'Другое',
]

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Укажите имя — не короче двух символов.').max(60, 'Имя должно быть короче 60 символов.'),
  phone: z.string().regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите все 10 цифр номера после +7.'),
  service: z.string().min(1, 'Выберите направление работ.'),
  message: z.string().max(500, 'Описание должно быть короче 500 символов.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

function formatRussianPhone(nationalDigits: string) {
  const digits = nationalDigits.slice(0, 10)
  if (!digits) return '+7'

  let formatted = '+7'
  if (digits.length > 0) formatted += ' (' + digits.slice(0, 3)
  if (digits.length >= 3) formatted += ')'
  if (digits.length > 3) formatted += ' ' + digits.slice(3, 6)
  if (digits.length > 6) formatted += '-' + digits.slice(6, 8)
  if (digits.length > 8) formatted += '-' + digits.slice(8, 10)
  return formatted
}

function getPhoneCaretPosition(formatted: string, nationalDigitCount: number) {
  if (!formatted) return 0
  if (nationalDigitCount === 0) return 2

  let seen = 0
  for (let index = 2; index < formatted.length; index += 1) {
    if (/\d/.test(formatted[index])) seen += 1
    if (seen === nationalDigitCount) return index + 1
  }
  return formatted.length
}

function Contact() {
  const [notice, setNotice] = useState('')
  const [phone, setPhone] = useState('')
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

  const onSubmit = () => {
    setNotice('Поля заполнены верно. Отправка заявок пока не подключена — данные никуда не передаются.')
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
            Оставьте описание задачи — станет понятнее, с чего начать и чем мы сможем помочь.
          </p>
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
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="contact-form__intro">
            <span>ФОРМА ОБРАЩЕНИЯ</span>
            <p>Заполните несколько полей — это поможет быстрее разобраться в задаче.</p>
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
            Проверить заполнение <ArrowUpRight size={18} />
          </button>
          <p className="contact-form__note" aria-live="polite">
            {notice || 'Демонстрационная форма: данные никуда не отправляются.'}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
