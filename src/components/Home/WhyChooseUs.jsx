import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { whyChooseUs } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

export const WhyChooseUs = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Why Choose Us</p>
        <h2 className="mt-4 text-3xl uppercase leading-tight md:text-5xl">What Makes Us Different</h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {whyChooseUs.map((item, index) => (
          <div
            key={item.id}
            className={`why-card px-2 text-center md:border-l md:px-8 md:text-left ${
              index === 0 ? 'md:border-l-0 md:px-0' : 'md:border-cream/10'
            }`}
          >
            <h3 className="text-xl uppercase tracking-wide md:text-2xl">{item.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-cream/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
