import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { business } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

export const OurStory = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-paragraph', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
      gsap.from('.story-image', {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 md:grid-cols-2">
        <div className="story-image overflow-hidden rounded-lg">
          <img
            src="/images/south-salem-winery-oak-barrel-head.webp"
            alt="Close-up of a South Salem Winery oak barrel head stamped 2016, 59 gallons, from Francois Freres Tonnellerie"
            className="h-full w-full object-cover"
            width="1000"
            height="1000"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Our Story</p>
          <h2 className="mt-4 text-3xl uppercase leading-tight md:text-5xl">
            Rooted in Family Tradition
          </h2>
          <div className="mt-6 space-y-5">
            {business.about.map((paragraph, index) => (
              <p key={index} className="story-paragraph text-base leading-relaxed text-cream/75 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
