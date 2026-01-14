import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fuegolatino.dance'
  const now = new Date()

  const galleryCategories = [
    'brisa-cup',
    'fuego-clases',
    'fuego-ladies',
    'mambolee-one',
  ]

  const galleryPages = galleryCategories.map((category) => ({
    url: `${baseUrl}/gallery/${category}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...galleryPages,
  ]
}

