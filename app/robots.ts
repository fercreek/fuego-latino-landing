import { MetadataRoute } from 'next'

const siteUrl = 'https://fuegolatino.dance'

const disallow = ['/api/', '/_next/', '/competitions/']

const aiUserAgents = [
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'ClaudeBot', 'Claude-Web', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
  'cohere-ai', 'meta-externalagent',
  'DuckAssistBot', 'YouBot', 'Amazonbot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiUserAgents.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow,
      })),
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
