import { useLayoutEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const services = [
  'Электрика',
  'Сантехника',
  'Отделка',
  'Сборка и монтаж',
  'Мастер на час',
  'Другое',
]

function formatRussianPhone(nationalDigits: string) {
  const digits = nationalDigits.slice(0, 10)
  if (!digits) return ''

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

  useLayoutEffect(() => {
    if (pendingCaret.current === null || !phoneInputRef.current) return
    phoneInputRef.current.setSelectionRange(pendingCaret.current, pendingCaret.current)
    pendingCaret.current = null
  }, [phone])

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value
    const rawDigits = inputValue.replace(/\D/g, '')
    const rawDigitsBeforeCaret = inputValue
      .slice(0, event.currentTarget.selectionStart ?? inputValue.length)
      .replace(/\D/g, '').length

    // The leading 7 or 8 is the country/trunk prefix, not part of the national number.
    const nationalDigits = rawDigits.startsWith('7') || rawDigits.startsWith('8')
      ? rawDigits.slice(1)
      : rawDigits
    const nationalDigitsBeforeCaret = Math.max(
      0,
      rawDigitsBeforeCaret - (rawDigits.startsWith('7') || rawDigits.startsWith('8') ? 1 : 0),
    )
    const formatted = formatRussianPhone(nationalDigits)

    pendingCaret.current = getPhoneCaretPosition(
      formatted,
      Math.min(nationalDigitsBeforeCaret, nationalDigits.length, 10),
    )
    setPhone(formatted)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice('Форма пока работает в демонстрационном режиме. Отправка заявок будет подключена позже.')
  }

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__intro">
            <span>ФОРМА ОБРАЩЕНИЯ</span>
            <p>Заполните несколько полей — это поможет быстрее разобраться в задаче.</p>
          </div>
          <label className="contact-field">
            <span>Как к вам обращаться</span>
            <input name="name" type="text" placeholder="Ваше имя" autoComplete="name" required />
          </label>
          <label className="contact-field">
            <span>Номер телефона</span>
            <input ref={phoneInputRef} name="phone" type="tel" inputMode="numeric" placeholder="+7 (___) ___-__-__" autoComplete="tel" value={phone} onChange={handlePhoneChange} maxLength={18} pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}" title="Введите полный номер: 10 цифр после +7" required />
          </label>
          <label className="contact-field">
            <span>Направление работ</span>
            <select name="service" defaultValue="">
              <option value="" disabled>Выберите услугу</option>
              {services.map((service) => <option value={service} key={service}>{service}</option>)}
            </select>
          </label>
          <label className="contact-field">
            <span>Коротко о задаче</span>
            <textarea name="message" rows={3} placeholder="Что нужно сделать?" />
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
