import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { contactSchema, formatRussianPhone, getPhoneCaretPosition } from '../src/widgets/contact/contact-validation.ts'

const validForm = {
  name: 'Артур',
  phone: '+7 (999) 123-45-67',
  service: 'Электрика',
  message: 'Нужно заменить розетку',
}

describe('contactSchema', () => {
  it('accepts a correctly completed form', () => {
    assert.equal(contactSchema.safeParse(validForm).success, true)
  })

  it('rejects a name shorter than two characters', () => {
    const result = contactSchema.safeParse({ ...validForm, name: 'А' })
    assert.equal(result.success, false)
    if (!result.success) assert.match(result.error.issues[0].message, /имя/i)
  })

  it('rejects an incomplete or incorrectly formatted Russian phone number', () => {
    for (const phone of ['+7 (999) 123-45-6', '89991234567', '+7 999 123-45-67']) {
      assert.equal(contactSchema.safeParse({ ...validForm, phone }).success, false)
    }
  })

  it('requires a selected service', () => {
    assert.equal(contactSchema.safeParse({ ...validForm, service: '' }).success, false)
  })

  it('rejects a message longer than 500 characters', () => {
    assert.equal(contactSchema.safeParse({ ...validForm, message: 'а'.repeat(501) }).success, false)
  })

  it('accepts an empty optional message', () => {
    assert.equal(contactSchema.safeParse({ ...validForm, message: '' }).success, true)
  })
})

describe('Russian phone formatting', () => {
  it('formats a complete ten-digit national number', () => {
    assert.equal(formatRussianPhone('9991234567'), '+7 (999) 123-45-67')
  })

  it('formats partial input without adding missing digits', () => {
    assert.equal(formatRussianPhone('99912'), '+7 (999) 12')
  })

  it('limits input to ten national digits', () => {
    assert.equal(formatRussianPhone('999123456789'), '+7 (999) 123-45-67')
  })

  it('returns the country prefix for an empty value', () => {
    assert.equal(formatRussianPhone(''), '+7')
  })

  it('calculates the caret position after the requested digit', () => {
    assert.equal(getPhoneCaretPosition('+7 (999) 123-45-67', 3), 7)
    assert.equal(getPhoneCaretPosition('+7', 0), 2)
  })
})
