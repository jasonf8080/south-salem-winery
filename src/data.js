// Single source of truth for all site copy and content.
// Components map over this data — no copy is hardcoded directly in JSX.

export const business = {
  name: 'South Salem Winery',
  tagline: 'Handcrafted, Small-Batch New York Wines',
  shortAbout:
    "South Salem Winery is a small, family-owned micro winery founded in 2014 in South Salem, New York, producing handcrafted wines from grapes sourced primarily from small vineyards on the North Fork of Long Island.",
  about: [
    "South Salem Winery is a small, family-owned micro winery founded in 2014 in South Salem, New York. We specialize in producing small batches of handcrafted New York wines, using grapes sourced primarily from small vineyards on the North Fork of Long Island. Our wines are produced in-house, from fermentation through bottling, with an emphasis on traditional winemaking techniques, quality, and character.",
    "South Salem Winery is led by winemaker John Vuolo, whose passion for winemaking began at an early age alongside his father and grandfather. With decades of winemaking experience, John continues that family tradition today by producing small-batch New York wines at our micro winery in South Salem.",
    "We produce handcrafted, small-batch New York wines using traditional techniques including long fermentations, soft pressing, and barrel aging. Our winemaking process is handled in-house, allowing us to carefully oversee each wine from fermentation through bottling. Visitors can experience our wines through walk-in tastings and discover a selection of locally crafted reds, whites, and rosés.",
  ],
  industry: 'Winery / wine tasting room',
  city: 'South Salem',
  state: 'NY',
  cityState: 'South Salem, NY',
  founded: 2014,
  winemaker: 'John Vuolo',
}

export const contact = {
  phone: '917-837-1131',
  phoneHref: 'tel:+19178371131',
  email: 'jvino65@gmail.com',
  address: '1202 Route 35, South Salem, NY',
  addressLine1: '1202 Route 35',
  addressLine2: 'South Salem, NY',
  mapHref: 'https://maps.google.com/?q=1202+Route+35+South+Salem+NY',
  hours: [
    { days: 'Thursday – Friday', time: '8:00 AM – 7:00 PM' },
    { days: 'Saturday', time: '8:00 AM – 7:00 PM' },
    { days: 'Sunday', time: '8:00 AM – 5:00 PM' },
    { days: 'Monday – Wednesday', time: 'Closed' },
  ],
}

export const socialLinks = {
  instagram: null,
  facebook: null,
  googleBusiness: null,
}

export const services = [
  {
    id: 'walk-in-tastings',
    name: 'Walk-In Wine Tastings',
    description:
      'Choice of 3 wines paired with 3 cheeses, no reservation required.',
    price: '$20',
  },
  {
    id: 'wines-by-the-glass',
    name: 'Wines by the Glass',
    description:
      'Full 6oz glass or half 3oz glass of any current-release wine.',
    price: 'Full glass $12 / Half glass $6',
  },
  {
    id: 'wines-by-the-bottle',
    name: 'Wines by the Bottle',
    description:
      'Take a bottle home, or enjoy on premise (uncorking fee applies for on-site consumption).',
    price: 'Uncorking fee $10',
  },
  {
    id: 'estate-wines',
    name: 'Estate Wines',
    description:
      'Cabernet Franc, Cabernet Sauvignon, Malbec, Chardonnay, Rosé of Pinot Noir & Petit Verdot, Rosé of Zweigelt, and Dry Cider — all produced in-house from New York-grown grapes.',
    price: null,
  },
  {
    id: 'beer-cider-cocktails',
    name: 'Beer, Cider & Cocktails',
    description:
      'Local NYS pint beer, hard cider, champagne, mimosa/bellini, and a maple-smoked Old Fashioned made with NYS spirits.',
    price: 'Pint $9 / Hard Cider $6 / Champagne $10 / Mimosa or Bellini $12 / Old Fashioned $16',
  },
  {
    id: 'wine-food-pairings',
    name: 'Wine & Food Pairings',
    description:
      'Wines paired with cheeseboards, focaccias, and pastries from our partner, Gardenside Kitchen.',
    price: null,
  },
]

export const estateWines = [
  {
    id: 'cabernet-franc',
    name: 'Cabernet Franc',
    vintage: '2018',
    region: 'New York State',
    award: '2023 New York Wine Classic — Silver',
    image: '/images/south-salem-winery-cabernet-franc-silver-medal.webp',
  },
  {
    id: 'cabernet-sauvignon',
    name: 'Cabernet Sauvignon',
    vintage: '2018',
    region: 'New York State',
    award: '2023 New York Wine Classic — Silver',
    image: '/images/south-salem-winery-cabernet-sauvignon-silver-medal.webp',
  },
  {
    id: 'malbec',
    name: 'Malbec',
    vintage: '2018',
    region: 'New York State',
    award: '2023 New York Wine Classic — Gold',
    image: '/images/south-salem-winery-malbec-gold-medal.webp',
  },
  {
    id: 'chardonnay',
    name: 'Chardonnay',
    vintage: '2018',
    region: 'New York State',
    award: null,
    image: '/images/south-salem-winery-chardonnay.webp',
  },
  {
    id: 'rose-pinot-noir-petit-verdot',
    name: 'Rosé of Pinot Noir & Petit Verdot',
    vintage: '2018',
    region: 'New York State',
    award: null,
    image: '/images/south-salem-winery-rose-pinot-noir-petit-verdot.webp',
  },
  {
    id: 'rose-zweigelt',
    name: 'Rosé of Zweigelt',
    vintage: '2018',
    region: 'New York State',
    award: null,
    image: '/images/south-salem-winery-rose-zweigelt.webp',
  },
  {
    id: 'dry-cider',
    name: 'Dry Cider',
    vintage: null,
    region: 'New York State',
    award: null,
    image: '/images/south-salem-winery-dry-cider.webp',
  },
]

export const whyChooseUs = [
  {
    id: 'personal-approach',
    title: 'A Personal Approach',
    description:
      "A personal, hands-on approach that's hard to find with larger producers — every wine is made in limited quantities with careful attention at each stage.",
  },
  {
    id: 'ny-grapes',
    title: 'New York Grapes, New York Made',
    description:
      'Grapes sourced primarily from New York vineyards on the North Fork of Long Island, with all winemaking done locally in South Salem from fermentation through bottling.',
  },
  {
    id: 'unique-setting',
    title: 'A One-of-a-Kind Setting',
    description:
      "Our tasting room sits inside the greenhouse at Gossett's Nursery, giving visitors an intimate, distinctive experience you won't find anywhere else.",
  },
]

export const serviceAreas = ['South Salem, NY', 'Lewisboro, NY', 'Westchester County and the surrounding region']

export const reviews = []

export const partner = {
  name: 'Gardenside Kitchen',
  description:
    'Our wines pair perfectly with cheeseboards, focaccias, and pastries from our neighbor and partner, Gardenside Kitchen — a café located alongside us at Gossett\'s Nursery.',
  image: '/images/south-salem-winery-gardenside-kitchen-cheese-pairing.webp',
  imageAlt: 'A glass of South Salem Winery sparkling wine served with a cheese pairing plate from Gardenside Kitchen',
}

export const nursery = {
  name: "Gossett's Nursery",
  description:
    "South Salem Winery's tasting room is located inside the greenhouse at Gossett's Nursery — a distinctive, garden-set backdrop for tasting locally crafted wine.",
  image: '/images/gossett-brothers-nursery-exterior.webp',
  imageAlt: "Exterior of Gossett Brothers Nursery, home to the South Salem Winery tasting room, with pottery and garden displays out front",
  renderingImage: '/images/gossett-brothers-nursery-greenhouse-rendering.webp',
  renderingAlt: "Architectural rendering of the Gossett Brothers Nursery greenhouse building that houses the South Salem Winery tasting room",
}

export const galleryImages = [
  {
    id: 'award-winning-wines',
    src: '/images/south-salem-winery-award-winning-wines.webp',
    alt: 'Three South Salem Winery bottles — Cabernet Sauvignon, Malbec, and Cabernet Franc — displayed with their 2023 New York Wine Classic medals',
  },
  {
    id: 'barrel-room',
    src: '/images/south-salem-winery-barrel-room.webp',
    alt: 'Oak barrels stacked and branded with the South Salem Winery name in the barrel aging room',
  },
  {
    id: 'oak-barrel-head',
    src: '/images/south-salem-winery-oak-barrel-head.webp',
    alt: 'Close-up of a South Salem Winery oak barrel head stamped 2016, 59 gallons, from Francois Freres Tonnellerie',
  },
  {
    id: 'bottle-shelf-display',
    src: '/images/south-salem-winery-bottle-shelf-display.webp',
    alt: 'Shelf display of the full South Salem Winery bottle lineup alongside port and spirits at the tasting room',
  },
  {
    id: 'tasting-menu-chalkboard',
    src: '/images/south-salem-winery-tasting-menu-chalkboard.webp',
    alt: 'Chalkboard menu at South Salem Winery listing tasting flights, wines by the glass, beer, cider, and cocktail pricing',
  },
  {
    id: 'wine-glass-pour',
    src: '/images/south-salem-winery-wine-glass-pour.webp',
    alt: 'A glass of South Salem Winery red wine etched with the winery logo, poured on a wooden barrel table',
  },
]

export const seo = {
  siteUrl: 'https://www.southsalemwinery.com',
  defaultTitle: 'South Salem Winery | Small-Batch New York Wines in South Salem, NY',
  defaultDescription:
    "South Salem Winery crafts small-batch New York wines inside the greenhouse at Gossett's Nursery. Walk-in tastings, wines by the glass, and wine & cheese pairings.",
  ogImage: '/og-image.jpg',
}
