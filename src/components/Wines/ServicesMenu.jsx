import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { services } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

export const ServicesMenu = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-row', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-primary py-20 text-cream md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl uppercase leading-tight md:text-5xl">Tastings & Pricing</h2>
        <div className="mt-14 divide-y divide-white/10">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-row flex flex-col gap-2 py-6 md:flex-row md:items-start md:justify-between md:gap-8"
            >
              <div>
                <h3 className="text-xl md:text-2xl">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75 md:text-base">
                  {service.description}
                </p>
              </div>
              {service.price && (
                <p className="shrink-0 text-sm font-semibold text-accent md:text-base">
                  {service.price}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
