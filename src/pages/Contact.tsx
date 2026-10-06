import { SITE } from '../site'

export default function Contact() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Contact</h1>
        <p className="page__lede">
          For deal conversations, speaking, writing, or anything on this site.
          Messages reach me directly, and I read all of them.
        </p>
      </header>

      <form
        className="contact-form"
        action={SITE.contactFormAction}
        method="POST"
      >
        <div className="contact-form__row">
          <label className="contact-form__label" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
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
            rows={7}
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

        <button type="submit" className="btn btn--primary">
          Send message
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
