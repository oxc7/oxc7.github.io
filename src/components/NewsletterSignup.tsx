import { SITE } from '../site'

export default function NewsletterSignup() {
  return (
    <aside className="newsletter">
      <h2 className="newsletter__title">Get the next note by email</h2>
      <p className="newsletter__lede">
        Field notes on AI technical due diligence and value creation in private
        equity. A few times a quarter, no noise, unsubscribe anytime.
      </p>
      <form
        className="newsletter__form"
        action={SITE.newsletterAction}
        method="post"
        target="_blank"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          placeholder="you@firm.com"
          className="newsletter__input"
        />
        <button type="submit" className="btn btn--primary newsletter__btn">
          Subscribe
        </button>
      </form>
    </aside>
  )
}
