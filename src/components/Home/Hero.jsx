import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { business } from '../../data.js'

const chips = ['Cabernet Franc', 'Chardonnay', 'Tastings']

export const Hero = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { opacity: 0, y: 24, duration: 0.8, ease: 'power2.out' })
      gsap.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.8, delay: 0.15, ease: 'power2.out' })
      gsap.from('.hero-chip', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        delay: 0.3,
        stagger: 0.1,
        ease: 'power2.out',
      })
      gsap.from('.hero-cta', { opacity: 0, y: 16, duration: 0.7, delay: 0.55, ease: 'power2.out' })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[90vh] flex-col justify-end overflow-hidden pb-20 md:pb-28"
    >
      <img
        src="/images/south-salem-winery-homepage-hero.jpg"
        alt="Featured hero image for South Salem Winery"
        className="absolute inset-0 h-full w-full object-cover"
        width="1400"
        height="1750"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <h1 className="hero-title max-w-3xl text-4xl uppercase leading-[1.05] tracking-tight text-cream md:text-7xl">
          Small Batch Wine Awaits
        </h1>
        <p className="hero-subtitle mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          Handcrafted since {business.founded}, made in-house inside the greenhouse at Gossett&apos;s
          Nursery. Walk in for a tasting — no reservation needed.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          {chips.map((chip, index) => (
            <span key={chip} className="flex items-center gap-x-6">
              {index > 0 && <span className="hidden h-4 w-px bg-accent sm:block" aria-hidden="true" />}
              <span className="hero-chip text-xs uppercase tracking-[0.25em] text-cream/90 md:text-sm">
                {chip}
              </span>
            </span>
          ))}
        </div>

        <div className="hero-cta mt-10 flex flex-wrap items-center gap-8">
          <Link
            to="/contact"
            className="rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-accent/90"
          >
            Plan Your Visit
          </Link>
          <Link
            to="/wines"
            className="border-b border-cream/40 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-accent hover:text-accent"
          >
            Explore Our Wines
          </Link>
        </div>
      </div>
    </section>
  )
}
