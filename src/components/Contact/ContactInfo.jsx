import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import { contact } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

export const ContactInfo = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-info-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-16">
      <div className="mx-auto max-w-4xl px-6">
      <h2 className="sr-only">Contact Details</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a
          href={contact.mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info-card flex flex-col items-center rounded-lg border border-cream/10 p-8 text-center transition-colors hover:border-accent"
        >
          <HiOutlineLocationMarker className="text-accent" size={28} />
          <h3 className="mt-4 text-lg">Address</h3>
          <p className="mt-2 text-sm text-cream/70">{contact.address}</p>
        </a>

        <a
          href={contact.phoneHref}
          className="contact-info-card flex flex-col items-center rounded-lg border border-cream/10 p-8 text-center transition-colors hover:border-accent"
        >
          <HiOutlinePhone className="text-accent" size={28} />
          <h3 className="mt-4 text-lg">Phone</h3>
          <p className="mt-2 text-sm text-cream/70">{contact.phone}</p>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="contact-info-card flex flex-col items-center rounded-lg border border-cream/10 p-8 text-center transition-colors hover:border-accent"
        >
          <HiOutlineMail className="text-accent" size={28} />
          <h3 className="mt-4 text-lg">Email</h3>
          <p className="mt-2 text-sm text-cream/70">{contact.email}</p>
        </a>

        <div className="contact-info-card flex flex-col items-center rounded-lg border border-cream/10 p-8 text-center">
          <HiOutlineClock className="text-accent" size={28} />
          <h3 className="mt-4 text-lg">Hours</h3>
          <ul className="mt-2 space-y-1 text-sm text-cream/70">
            {contact.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  )
}
