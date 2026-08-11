import { SEO } from '../components/SEO'
import { TornDivider } from '../components/Divider'
import { AboutHero, OurStory, LocationFeature } from '../components/About'

const PRIMARY = '#111111'
const SECONDARY = '#151515'

export const About = () => {
  return (
    <>
      <SEO
        title="About South Salem Winery | Family-Owned NY Micro Winery"
        description="Meet winemaker John Vuolo and learn the story behind South Salem Winery, a family-owned micro winery crafting small-batch New York wines since 2014."
        path="/about"
      />
      <AboutHero />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <OurStory />
      <TornDivider from={SECONDARY} to={PRIMARY} variant="b" />
      <LocationFeature />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
    </>
  )
}
