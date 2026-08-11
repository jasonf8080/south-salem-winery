import { useEffect, useState } from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi'

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-1 rounded-full border border-cream/20 bg-primary/90 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream backdrop-blur transition-colors hover:border-accent hover:text-accent"
    >
      Top
      <HiOutlineChevronUp size={14} />
    </button>
  )
}
