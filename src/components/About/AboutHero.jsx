import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { business } from '../../data.js'

export const AboutHero = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-content > *', {
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
      <div className="about-hero-content mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">About Us</p>
        <h1 className="mt-4 text-4xl uppercase leading-tight md:text-6xl">
          A Family Tradition of New York Winemaking
        </h1>
        <p className="mt-6 text-base leading-relaxed text-cream/80 md:text-lg">
          Founded in {business.founded} in {business.cityState}, {business.name} is led by
          winemaker {business.winemaker}, carrying forward decades of family winemaking tradition.
        </p>
      </div>
    </section>
  )
}
