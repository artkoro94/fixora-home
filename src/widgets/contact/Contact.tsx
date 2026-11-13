import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const services = [
  'Электрика',
  'Сантехника',
  'Отделка',
  'Сборка и монтаж',
  'Мастер на час',
  'Другое',
]

function Contact() {
  const [notice, setNotice] = useState('')

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
            <input name="phone" type="tel" placeholder="+7 (___) ___-__-__" autoComplete="tel" required />
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
