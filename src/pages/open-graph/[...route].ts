import { OGImageRoute } from 'astro-og-canvas'

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it's `route`, because the file is named `[...route].ts`.
  param: 'route',

  // Pass the glob result to pages
  pages: await import.meta.glob('/src/pages/**/*.md', { eager: true }),

  // Extract `title` and `description` from the glob result's `frontmatter` property
  getImageOptions: (path, page) => ({
    title: page.frontmatter.title,
    description: page.frontmatter.description,
    border: { color: [10, 117, 113], width: 20, side: 'inline-start' },
    bgGradient: [
      [55, 210, 233],
      [167, 241, 248],
    ],
    fonts: ['./public/fonts/poppins-v21-latin_latin-ext-regular.woff2'],
    font: {
      title: { color: [49, 49, 49] },
      description: { color: [49, 49, 49] },
    },
  }),
})
