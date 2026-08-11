import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { partner, nursery } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

const panels = [
  {
    id: 'gardenside-kitchen',
    title: partner.name,
    description: partner.description,
    image: partner.image,
    imageAlt: partner.imageAlt,
  },
  {
    id: 'gossetts-nursery',
    title: nursery.name,
    description: nursery.description,
    image: nursery.image,
    imageAlt: nursery.imageAlt,
  },
]

export const PartnerCrossPromo = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partner-panel', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Our Neighbors</p>
          <h2 className="mt-4 text-3xl uppercase leading-tight md:text-5xl">Better Together</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
            South Salem Winery shares a home with two businesses that make every visit even better.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {panels.map((panel) => (
            <div key={panel.id} className="partner-panel relative overflow-hidden rounded-lg">
              <img
                src={panel.image}
                alt={panel.imageAlt}
                className="h-80 w-full object-cover"
                width="1000"
                height="700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl md:text-3xl">{panel.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/85 md:text-base">
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
