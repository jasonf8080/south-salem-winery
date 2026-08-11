import { SEO, LocalBusinessSchema } from '../components/SEO'
import { TornDivider } from '../components/Divider'
import {
  Hero,
  AboutTeaser,
  WelcomeIntro,
  WinesHighlight,
  WhyChooseUs,
  PartnerCrossPromo,
  VisitCta,
} from '../components/Home'

const PRIMARY = '#111111'
const SECONDARY = '#151515'

export const Home = () => {
  return (
    <>
      <SEO
        title="South Salem Winery | Small-Batch New York Wines in South Salem, NY"
        description="South Salem Winery crafts small-batch New York wines inside the greenhouse at Gossett's Nursery. Walk-in tastings, wines by the glass, and wine & cheese pairings."
        path="/"
      />
      <LocalBusinessSchema />
      <Hero />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <AboutTeaser />
      <TornDivider from={SECONDARY} to={PRIMARY} variant="b" />
      <WelcomeIntro />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <WinesHighlight />
      <TornDivider from={SECONDARY} to={PRIMARY} variant="b" />
      <WhyChooseUs />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <PartnerCrossPromo />
      <TornDivider from={SECONDARY} to={PRIMARY} variant="b" />
      <VisitCta />
    </>
  )
}
