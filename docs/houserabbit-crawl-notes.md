# House Rabbit Society public URL inventory

Sources: https://houserabbit.org/sitemap.xml and https://houserabbit.org/robots.txt, retrieved 2026-09-24. The sitemap lists 455 URLs: 91 pages, 290 updates/articles, and 74 events. The CSV inventory includes each URL and sitemap metadata. A separate metadata crawl requested all 455 listed pages and recorded response status and HTML title; 412 returned successfully and 43 were rate-limited (HTTP 429). Those 43 entries have no captured title. The crawl did not save full page HTML or article bodies. Sitemap discovery does not include private, unlisted, or blocked routes. Search and system/query endpoints disallowed by robots.txt are not included.

## Use in the Amish Homestead project

These files are a route and content-planning reference. They do not contain copied page HTML or article bodies. Page layouts, wording, images, logos, and articles belong to House Rabbit Society. Build Amish Homestead pages with original writing and assets that you own or are licensed to use. Verify care and medical facts before publishing. Do not transfer HRS-specific identity, address, nonprofit status, or donation details to Amish Homestead.

The current app contains the home page design and navigation data in src/data/siteData.ts; many secondary links still point to the source website. Use the inventory to select relevant pages, then implement them as original local pages.

## Files

- houserabbit-public-url-inventory.csv: canonical URLs plus sitemap metadata
- house-rabbit-public-page-inventory.csv: request status and title metadata for each URL; status 0 indicates the request failed, including rate limiting

## URL inventory columns

- type: sitemap route class (page, article, or event)
- title: readable title generated from the URL slug, not verified page copy
- path: source pathname
- source_url: canonical source URL
- sitemap_lastmod, changefreq, priority: sitemap metadata
