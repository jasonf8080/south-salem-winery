import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { galleryImages } from '../../data.js'

gsap.registerPlugin(ScrollTrigger)

// Alternating heights give the strip a varied, non-grid-locked rhythm.
const heightClasses = ['aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]']

export const GalleryGrid = () => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-3 md:gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item overflow-hidden rounded-lg ${heightClasses[index % heightClasses.length]}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
              width="1000"
              height="1000"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
