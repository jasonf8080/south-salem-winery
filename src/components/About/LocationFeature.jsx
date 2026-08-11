import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { nursery, whyChooseUs } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

const setting = whyChooseUs.find((item) => item.id === 'unique-setting')

export const LocationFeature = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.location-image', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
      gsap.from('.location-copy', {
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
    <section ref={rootRef} className="bg-primary py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="location-image overflow-hidden rounded-lg">
          <img
            src={nursery.renderingImage}
            alt={nursery.renderingAlt}
            className="h-full w-full object-cover"
            width="1100"
            height="750"
            loading="lazy"
          />
        </div>
        <div className="location-copy">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Our Setting</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{setting.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-cream/80 md:text-lg">
            {nursery.description}
          </p>
        </div>
      </div>
    </section>
  )
}
