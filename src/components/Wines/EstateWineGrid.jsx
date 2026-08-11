import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { estateWines } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

export const EstateWineGrid = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.estate-wine-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">The Collection</p>
          <h2 className="mt-4 text-3xl uppercase leading-tight md:text-5xl">Estate Wines</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {estateWines.map((wine) => (
            <div
              key={wine.id}
              className="estate-wine-card flex flex-col items-center rounded-lg border border-cream/10 p-8 text-center transition-colors hover:border-accent/50"
            >
              <img
                src={wine.image}
                alt={`Bottle of South Salem Winery ${wine.name}${wine.vintage ? `, ${wine.vintage}` : ''}${wine.award ? `, ${wine.award}` : ''}`}
                className="h-48 w-auto object-contain"
                width="700"
                height="700"
                loading="lazy"
              />
              <h3 className="mt-6 text-xl uppercase tracking-wide md:text-2xl">{wine.name}</h3>
              <p className="mt-1 text-sm text-cream/50">
                {[wine.vintage, wine.region].filter(Boolean).join(' · ')}
              </p>
              {wine.award && <p className="mt-2 text-sm font-semibold text-accent">{wine.award}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
