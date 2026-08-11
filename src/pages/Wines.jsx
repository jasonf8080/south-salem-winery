import { SEO } from '../components/SEO'
import { TornDivider } from '../components/Divider'
import { WinesHero, EstateWineGrid, ServicesMenu, FoodPairing } from '../components/Wines'

const PRIMARY = '#111111'
const SECONDARY = '#151515'

export const Wines = () => {
  return (
    <>
      <SEO
        title="Wines & Tastings | South Salem Winery"
        description="Explore South Salem Winery's estate wines — Cabernet Franc, Cabernet Sauvignon, Malbec, Chardonnay, Rosé, and Dry Cider — plus walk-in tastings and pricing."
        path="/wines"
      />
      <WinesHero />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <EstateWineGrid />
      <TornDivider from={SECONDARY} to={PRIMARY} variant="b" />
      <ServicesMenu />
      <TornDivider from={PRIMARY} to={SECONDARY} variant="a" />
      <FoodPairing />
    </>
  )
}
