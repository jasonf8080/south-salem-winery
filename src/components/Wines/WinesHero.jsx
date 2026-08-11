import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export const WinesHero = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wines-hero-content > *', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-primary py-20 text-cream md:py-28">
      <div className="wines-hero-content mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Wines & Tastings</p>
        <h1 className="mt-4 text-4xl uppercase leading-tight md:text-6xl">Our Wines</h1>
        <p className="mt-6 text-base leading-relaxed text-cream/80 md:text-lg">
          Handcrafted reds, whites, rosés, and dry cider — every bottle made in-house from
          New York-grown grapes.
        </p>
      </div>
    </section>
  )
}
