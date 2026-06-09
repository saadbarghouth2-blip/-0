# Netlify Launch Checklist

## 1. Netlify Site
- Import the project into Netlify.
- Build command: `npm run build`
- Publish directory: `dist`
- Production branch: your main deployment branch

## 2. Environment Variables
- `VITE_SITE_URL=https://xn--2gbwk.site`
- `VITE_SITE_TECHNICAL_URL=https://xn--2gbwk.site`
- `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- `VITE_WHATSAPP_NUMBER=201507631264`

## 3. Domain Setup in Netlify
- Add `نطق.site` as the primary domain.
- Add `www.نطق.site` as a secondary domain that redirects to the primary domain.
- Netlify should redirect `www` to the apex after the domain is assigned.
- If a dashboard refuses Arabic domains, use the technical form: `xn--2gbwk.site` and `www.xn--2gbwk.site`.

## 4. DNS in Hostinger
- `@` record:
  - Prefer `ALIAS/ANAME` to `apex-loadbalancer.netlify.com` if Hostinger offers it.
  - Otherwise use `A` record to `75.2.60.5`.
- `www` record:
  - `CNAME` to your Netlify subdomain: `<your-site>.netlify.app`

## 5. Netlify Form
- Production form name: `lead-intake`
- Form is already embedded in `index.html` and rendered on `/contact`.
- After first deploy, submit one live test from the production site and confirm it appears in:
  - Netlify Dashboard -> Forms

## 6. Analytics
- Add your real GA4 ID to `VITE_GA_MEASUREMENT_ID`.
- Verify these events in GA4 DebugView:
  - `lead_form_submit`
  - `whatsapp_click`
  - `phone_click`
  - `portfolio_open`
  - `page_view`

## 7. Search Console
- Add a Domain property for `نطق.site`.
- If the interface requires ASCII, use `xn--2gbwk.site`.
- Submit:
  - `https://نطق.site/sitemap.xml`

## 8. Final Checks
- Confirm direct route loading works:
  - `/services`
  - `/projects/...`
  - `/blog/...`
  - `/en/...`
- Confirm HTTPS works on both:
  - `https://نطق.site`
  - `https://www.نطق.site`
- Confirm Open Graph preview uses:
  - `/images/notaq-og-cover.jpg`
