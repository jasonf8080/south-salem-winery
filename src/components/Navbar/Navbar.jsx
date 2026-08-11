import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { business } from '../../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/wines', label: 'Wines' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-xs uppercase tracking-[0.2em] transition-colors md:text-sm ${
      isActive ? 'text-accent' : 'text-cream hover:text-accent'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-primary/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <img
            src="/images/south-salem-winery-logo.webp"
            alt="South Salem Winery logo"
            className="h-10 w-10 object-contain"
            width="40"
            height="40"
          />
          
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-cream md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-primary px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                <span className="block py-3">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
