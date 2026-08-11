import { Helmet } from 'react-helmet-async'
import { seo } from '../../data.js'

export const SEO = ({ title, description, path = '/', image = seo.ogImage }) => {
  const fullTitle = title ? `${title}` : seo.defaultTitle
  const fullDescription = description || seo.defaultDescription
  const url = `${seo.siteUrl}${path}`
  const fullImage = image.startsWith('http') ? image : `${seo.siteUrl}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  )
}
