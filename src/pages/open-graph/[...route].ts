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
    border: { color: [114, 221, 64], width: 20, side: 'inline-start' },
    bgGradient: [
      [6, 38, 45],
      [8, 3, 2],
    ],
    fonts: ['./public/fonts/poppins-v21-latin_latin-ext-regular.woff2'],
  }),
})
