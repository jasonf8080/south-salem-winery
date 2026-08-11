import { useState } from 'react'
import { contact } from '../../data.js'

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-primary py-20 text-cream md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center text-3xl uppercase leading-tight md:text-5xl">Send Us a Message</h2>
        <p className="mt-4 text-center text-sm text-cream/70">
          Prefer to talk now? Call {contact.phone} or email{' '}
          <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
            {contact.email}
          </a>
          .
        </p>

        {submitted ? (
          <p className="mt-10 rounded-lg border border-accent/40 bg-secondary p-6 text-center text-cream/90">
            Thanks for reaching out — this form is a front-end demo for now, so please call or
            email us directly and we&apos;ll get back to you.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-cream/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-md border border-cream/20 bg-secondary px-4 py-3 text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-cream/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-cream/20 bg-secondary px-4 py-3 text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-cream/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-md border border-cream/20 bg-secondary px-4 py-3 text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-accent/90"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
