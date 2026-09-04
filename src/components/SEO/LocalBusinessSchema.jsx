import { Helmet } from 'react-helmet-async'
import { business, contact, seo } from '../../data.js'

// Thu-Sat 8:00am-7:00pm, Sun 8am-5pm (from contact.hours)
const openingHours = [
  { dayOfWeek: ['Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
  { dayOfWeek: ['Saturday'], opens: '08:00', closes: '19:00' },
  { dayOfWeek: ['Sunday'], opens: '08:00', closes: '17:00' },
]

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': seo.siteUrl,
    name: business.name,
    description: seo.defaultDescription,
    image: `${seo.siteUrl}${seo.ogImage}`,
    url: seo.siteUrl,
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.addressLine1,
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: 'US',
    },
    areaServed: ['South Salem, NY', 'Lewisboro, NY', 'Westchester County, NY'],
    openingHoursSpecification: openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
