import { SEO } from '../components/SEO'
import { TornDivider } from '../components/Divider'
import { GalleryHero, GalleryGrid } from '../components/Gallery'

const PRIMARY = '#111111'
const SECONDARY = '#151515'

export const Gallery = () => {
  return (
    <>
      <SEO
        title="Photo Gallery | South Salem Winery"
        description="See South Salem Winery's barrel room, award-winning bottles, and tasting room inside Gossett's Nursery in South Salem, NY."
        path="/gallery"
      />
      <GalleryHero />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <GalleryGrid />
    </>
  )
}
