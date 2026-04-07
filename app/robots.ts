import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/competitions/'],
      },
    ],
    sitemap: 'https://fuegolatino.dance/sitemap.xml',
  }
}
