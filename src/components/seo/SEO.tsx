import { Helmet } from 'react-helmet-async'

export function SEO({ title, description, path = '' }: { title: string; description: string; path?: string }) {
  const siteTitle = `${title} | Jan Awaaz`
  const canonical = `https://janawaaz.in${path}`
  return <Helmet>
    <title>{siteTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content="https://images.unsplash.com/photo-1695290513916-8b4048b1ffaf?auto=format&fit=crop&w=1200&q=80" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Jan Awaaz', url: 'https://janawaaz.in', description })}</script>
  </Helmet>
}
