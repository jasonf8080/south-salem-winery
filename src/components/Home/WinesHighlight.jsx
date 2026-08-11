import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { estateWines } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

const featured = estateWines.slice(0, 3)

export const WinesHighlight = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wine-card', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Estate Wines</p>
          <h2 className="mt-4 text-3xl uppercase leading-tight md:text-5xl">Award-Winning, Small-Batch</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
            Every bottle is produced in-house from fermentation through bottling, using grapes
            sourced primarily from the North Fork of Long Island.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((wine) => (
            <div key={wine.id} className="wine-card flex flex-col items-center text-center">
              <img
                src={wine.image}
                alt={`Bottle of South Salem Winery ${wine.name}${wine.award ? `, ${wine.award}` : ''}`}
                className="h-56 w-auto object-contain"
                width="700"
                height="700"
                loading="lazy"
              />
              <h3 className="mt-6 text-2xl uppercase tracking-wide md:text-3xl">{wine.name}</h3>
              {wine.award && <p className="mt-2 text-sm text-accent">{wine.award}</p>}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/wines"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-accent/90"
          >
            See All Wines
          </Link>
        </div>
      </div>
    </section>
  )
}
