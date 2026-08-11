import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { business } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

// Asymmetric, overlapping-image composition inspired by the "From Our Table
// To Yours" section on the Jordan Winery site: a large image with a second,
// smaller image overlapping its bottom-left corner, paired with copy on the right.
export const AboutTeaser = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.teaser-image-main', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
      gsap.from('.teaser-image-overlap', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
      gsap.from('.teaser-copy > *', {
        opacity: 0,
        x: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-12">
          <div className="relative">
            <div className="teaser-image-main overflow-hidden rounded-lg">
              <img
                src="/images/south-salem-winery-barrel-room.webp"
                alt="Oak barrels stacked and branded with the South Salem Winery name in the barrel aging room"
                className="h-[420px] w-full object-cover md:h-[480px]"
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
            <div className="teaser-image-overlap absolute -bottom-10 left-0 w-2/3 overflow-hidden rounded-lg border-4 border-secondary shadow-2xl sm:w-1/2">
              <img
                src="/images/south-salem-winery-oak-barrel-head.webp"
                alt="Close-up of a South Salem Winery oak barrel head stamped 2016, 59 gallons"
                className="h-40 w-full object-cover md:h-48"
                width="1000"
                height="1000"
                loading="lazy"
              />
            </div>
          </div>

          <div className="teaser-copy mt-10 md:mt-0">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Our Story</p>
            <h2 className="mt-4 text-3xl uppercase leading-tight md:text-5xl">
              From Our Barrels to Your Table
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-lg">
              {business.shortAbout}
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block border-b border-accent pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:text-accent"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
