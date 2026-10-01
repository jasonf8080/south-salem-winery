import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { contact } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

export const VisitCta = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="cta-content flex flex-col items-center rounded-lg border border-cream/15 px-8 py-16 text-center text-cream md:py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Visit Us</p>
        <h2 className="mt-4 max-w-2xl text-3xl uppercase leading-tight md:text-5xl">
          Walk-In Tastings, No Reservation Needed
        </h2>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-accent/90">Don't miss your flight!</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
          $25 for a choice of 5 wines and 3 cheeses. Open {contact.hours[0].days} {contact.hours[0].time}
          {' '}and {contact.hours[1].days} {contact.hours[1].time}.
        </p>
        <Link
          to="/contact"
          className="mt-8 rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-accent/90"
        >
          Get Directions
        </Link>
      </div>
    </section>
  )
}
