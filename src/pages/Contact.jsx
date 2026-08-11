import { SEO } from '../components/SEO'
import { TornDivider } from '../components/Divider'
import { ContactHero, ContactInfo, ContactForm } from '../components/Contact'

const PRIMARY = '#111111'
const SECONDARY = '#151515'

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact & Hours | South Salem Winery"
        description="Visit South Salem Winery at 1202 Route 35, South Salem, NY. Walk-in tastings Thursday through Sunday — call, email, or stop by."
        path="/contact"
      />
      <ContactHero />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <ContactInfo />
      <TornDivider from={SECONDARY} to={PRIMARY} variant="b" />
      <ContactForm />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
    </>
  )
}
