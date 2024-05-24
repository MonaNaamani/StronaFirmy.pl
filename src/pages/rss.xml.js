import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'Blog StronaFirmy.pl',
    // `<description>` field in output xml
    description:
      'Blog na tematy związane z tworzeniem stron internetowych oraz tego, jak wykorzystywać stronę internetową w biznesie',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.{md,mdx}')),
  })
}
