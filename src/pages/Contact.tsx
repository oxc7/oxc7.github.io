import { useState, type FormEvent } from 'react'
import { SITE } from '../site'

const MIN_WORDS = 20

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )
  const [warning, setWarning] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const words = countWords(String(data.get('message') ?? ''))
    if (words < MIN_WORDS) {
      setWarning(
        `Please write at least ${MIN_WORDS} words so I have enough context to reply well (currently ${words}).`,
      )
      return
    }

    setWarning('')
    setStatus('sending')
    try {
      const res = await fetch(SITE.contactFormAction, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="page">
        <header className="page__header">
          <h1 className="page__title">Contact</h1>
        </header>
        <p className="contact-thanks" role="status">
          Thanks for submitting.
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Contact</h1>
        <p className="page__lede">
          For deal conversations, speaking, writing, or anything on this site.
          Messages reach me directly, and I read all of them.
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <label className="contact-form__label" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            className="contact-form__input"
          />
        </div>

        <div className="contact-form__row">
          <label className="contact-form__label" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="So I can reply"
            className="contact-form__input"
          />
        </div>

        <div className="contact-form__row">
          <label className="contact-form__label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={4000}
            rows={7}
            placeholder={`At least ${MIN_WORDS} words. Context helps me reply well.`}
            className="contact-form__input contact-form__textarea"
          />
        </div>

        {/* Honeypot: hidden from humans, bots that fill it are dropped. */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="contact-form__gotcha"
          aria-hidden="true"
        />

        {warning && (
          <p className="form-msg form-msg--warn" role="alert">
            {warning}
          </p>
        )}
        {status === 'error' && (
          <p className="form-msg form-msg--error" role="alert">
            Something went wrong sending your message. Please try again, or
            reach me on{' '}
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          className="btn btn--primary"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </form>

      <p className="contact-alt">
        Prefer not to use a form? Reach me on{' '}
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </div>
  )
}
