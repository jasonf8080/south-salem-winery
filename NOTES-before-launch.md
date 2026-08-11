# Before You Launch

Things flagged during the build that need your input before this goes live.

## Needs your decision

- **Domain**: `robots.txt`, `sitemap.xml`, and all SEO/OG tags currently point to `https://www.southsalemwinery.com`. Update `src/data.js` (`seo.siteUrl`) and the two files in `public/` once you know the real domain.
- **Social links**: no Instagram, Facebook, or Google Business links were provided, so the footer doesn't currently link out anywhere social. Send those over and I'll wire them in.
- **Reviews**: no customer reviews or testimonials were provided, so there's no reviews section. Happy to add one once you have a few to share.
- **Contact form**: the form on `/contact` is a front-end demo only — submitting it doesn't send an email anywhere yet (per the build rules, no backend was set up unless asked). Options: a service like Formspree/Netlify Forms (quick to wire up since you're already on Netlify), or a real backend if you want more control.
- **Tasting menu chalkboard photo**: I included the chalkboard pricing photo in the gallery for atmosphere, but all the actual prices are also typed into the Wines page as real text — worth double-checking the chalkboard photo doesn't go stale if prices change, since photos don't update themselves.

## Good to know

- The logo you sent (`logo.jpg`) was used to generate the full favicon set (browser tab icon, Apple touch icon, Android icons) — no placeholder graphics anywhere.
- All 18 photos were compressed to WebP and renamed to SEO-friendly filenames (e.g. `south-salem-winery-cabernet-franc-silver-medal.webp`). Total image weight dropped from ~30MB of source photos to about 1.6MB shipped on the site.
- The Netlify `_redirects` file is in place, so refreshing on `/about`, `/wines`, `/gallery`, or `/contact` won't 404.
- A "Better Together" cross-promotion section on the homepage links South Salem Winery to Gardenside Kitchen (food pairings) and Gossett's Nursery (the tasting room's location) — matching the reciprocal partner panel already built into Gardenside Kitchen's own site.
