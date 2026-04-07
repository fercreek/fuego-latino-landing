import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fuegolatino.dance'

  // Use fixed dates that reflect actual content updates.
  // Update these manually when content changes significantly.
  const homepageLastModified = new Date('2026-04-06')
  const galleryLastModified = new Date('2025-03-01')

  const galleryCategories = [
    'brisa-cup',
    'fuego-clases',
    'fuego-ladies',
    'mambolee-one',
  ]

  const galleryPages = galleryCategories.map((category) => ({
    url: `${baseUrl}/gallery/${category}`,
    lastModified: galleryLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: homepageLastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...galleryPages,
  ]
}

