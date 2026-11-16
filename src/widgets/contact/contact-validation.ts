import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Укажите имя — не короче двух символов.').max(60, 'Имя должно быть короче 60 символов.'),
  phone: z.string().regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите номер в формате +7 (xxx) xxx-xx-xx.'),
  service: z.string().min(1, 'Выберите направление работ.'),
  message: z.string().max(500, 'Описание должно быть короче 500 символов.'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export function formatRussianPhone(nationalDigits: string) {
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

export function getPhoneCaretPosition(formatted: string, nationalDigitCount: number) {
  if (!formatted) return 0
  if (nationalDigitCount === 0) return 2

  let seen = 0
  for (let index = 2; index < formatted.length; index += 1) {
    if (/\d/.test(formatted[index])) seen += 1
    if (seen === nationalDigitCount) return index + 1
  }
  return formatted.length
}
