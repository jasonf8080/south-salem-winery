import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { business } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

// Two-column "Welcome To ___" intro, inspired by the Jordan Winery
// "Welcome to Jordan" section: text block left, single large image right.
export const WelcomeIntro = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.welcome-copy > *', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
      gsap.from('.welcome-image', {
        opacity: 0,
        scale: 0.97,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-primary py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="welcome-copy">
          <h2 className="text-2xl uppercase leading-tight tracking-wide text-cream md:text-3xl">
            Welcome to {business.name}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-lg">
            Since {business.founded}, we&apos;ve focused on just a few things: New York grapes,
            traditional winemaking, and hospitality. We believe wine should complement the moment,
            not overpower it — every bottle made in small batches, by hand, in South Salem.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 border-l-2 border-accent py-2 pl-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:text-accent"
          >
            Who We Are
          </Link>
        </div>
        <div className="welcome-image overflow-hidden rounded-lg">
          <img
            src="/images/gossett-brothers-nursery-exterior.webp"
            alt="Exterior of Gossett Brothers Nursery, home to the South Salem Winery tasting room, with pottery and garden displays out front"
            className="h-[320px] w-full object-cover md:h-[440px]"
            width="1100"
            height="750"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
