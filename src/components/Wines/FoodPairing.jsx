import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { partner } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

export const FoodPairing = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pairing-image', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
      gsap.from('.pairing-copy', {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="pairing-image overflow-hidden rounded-lg">
          <img
            src={partner.image}
            alt={partner.imageAlt}
            className="h-full w-full object-cover"
            width="1000"
            height="1250"
            loading="lazy"
          />
        </div>
        <div className="pairing-copy">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Wine & Food Pairings</p>
          <h2 className="mt-4 text-3xl uppercase leading-tight md:text-5xl">
            Better with {partner.name}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-lg">
            {partner.description}
          </p>
        </div>
      </div>
    </section>
  )
}
