import { Helmet } from 'react-helmet-async'
import { translateText } from '../../i18n/translations.ts'

export function SEO({ title, description, path = '' }: { title: string; description: string; path?: string }) {
  const titleHindi = translateText(title)
  const descriptionHindi = translateText(description)
  const bilingualTitle = titleHindi ? `${title} / ${titleHindi}` : title
  const bilingualDescription = descriptionHindi ? `${description} / ${descriptionHindi}` : description
  const siteTitle = `${bilingualTitle} | Jan Awaaz / जन आवाज`
  const canonical = `https://janawaaz.in${path}`
  return <Helmet>
    <title>{siteTitle}</title>
    <meta name="description" content={bilingualDescription} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={bilingualDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content="https://images.unsplash.com/photo-1695290513916-8b4048b1ffaf?auto=format&fit=crop&w=1200&q=80" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Jan Awaaz / जन आवाज', url: 'https://janawaaz.in', description: bilingualDescription })}</script>
  </Helmet>
}
