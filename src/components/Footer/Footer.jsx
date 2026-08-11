import { Link } from 'react-router-dom'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { business, contact } from '../../data.js'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/images/south-salem-winery-logo.webp"
              alt="South Salem Winery logo"
              className="h-10 w-10 object-contain"
              width="40"
              height="40"
              loading="lazy"
            />
           
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            {business.tagline}. Located inside the greenhouse at Gossett&apos;s Nursery in {business.cityState}.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-base text-cream">Visit Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-accent" size={18} />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <HiOutlinePhone className="mt-0.5 shrink-0 text-accent" size={18} />
              <a href={contact.phoneHref} className="hover:text-accent">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <HiOutlineMail className="mt-0.5 shrink-0 text-accent" size={18} />
              <a href={`mailto:${contact.email}`} className="hover:text-accent">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-base text-cream">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {contact.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link to="/wines" className="text-cream/70 hover:text-accent">Wines</Link>
            <Link to="/gallery" className="text-cream/70 hover:text-accent">Gallery</Link>
            <Link to="/contact" className="text-cream/70 hover:text-accent">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-cream/50">
        © {year} {business.name}. All rights reserved.
      </div>
    </footer>
  )
}
