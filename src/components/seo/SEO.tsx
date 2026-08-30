import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://janawaaz.in'
const siteName = 'Bharatiya Mitra Party / भारतीय मित्र पार्टी'
const logoUrl = `${siteUrl}/Logo_bmp.webp`
const socialLinks = [
  'https://www.facebook.com/share/1P1ko7Hh9T/',
  'https://www.instagram.com/bhartiyamitraparty?igsi=aHZjYjM0NHZqOWxh',
  'https://x.com/DhaneshwarBMP',
  'https://youtube.com/@bhartiyamitrapartybmp?si=7qfx77PMcBgPv7nT',
]
const seoHindi: Record<string, string> = {
  'Together for Development & Unity': 'विकास और एकता के लिए साथ',
  'Bharatiya Mitra Party is a people-first movement for development, unity, and a stronger India.': 'भारतीय मित्र पार्टी विकास, एकता और मजबूत भारत के लिए जनता-प्रथम आंदोलन है।',
  'About the party': 'पार्टी के बारे में',
  'Founder & national president': 'संस्थापक और राष्ट्रीय अध्यक्ष',
  'Vision & mission': 'दृष्टि और मिशन',
  'Party history': 'पार्टी इतिहास',
  'Party leadership': 'पार्टी नेतृत्व',
  'Join the movement': 'आंदोलन से जुड़ें',
  'News & press': 'समाचार और प्रेस',
  'Events & campaigns': 'कार्यक्रम और अभियान',
  Gallery: 'गैलरी',
  Manifesto: 'घोषणापत्र',
  'Sankalp Patra': 'संकल्प पत्र',
  'Public issues': 'सार्वजनिक मुद्दे',
  Donate: 'दान करें',
  Contact: 'संपर्क',
  Offices: 'कार्यालय',
  'Media centre': 'मीडिया केंद्र',
}

function translateSeoText(text: string) {
  return seoHindi[text]
}

export function SEO({ title, description, path = '' }: { title: string; description: string; path?: string }) {
  const titleHindi = translateSeoText(title)
  const descriptionHindi = translateSeoText(description)
  const bilingualTitle = titleHindi ? `${title} / ${titleHindi}` : title
  const bilingualDescription = descriptionHindi ? `${description} / ${descriptionHindi}` : description
  const siteTitle = `${bilingualTitle} | ${siteName}`
  const canonical = `${siteUrl}${path}`

  return <Helmet>
    <html lang="en-IN" />
    <title>{siteTitle}</title>
    <meta name="description" content={bilingualDescription} />
    <meta name="robots" content={path === '/404' ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
    <link rel="canonical" href={canonical} />
    <link rel="alternate" href={canonical} hrefLang="en-IN" />
    <link rel="alternate" href={canonical} hrefLang="hi-IN" />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={bilingualDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:image" content={`${siteUrl}/Banner_image.jpg`} />
    <meta property="og:image:alt" content="Bharatiya Mitra Party campaign banner" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={bilingualDescription} />
    <meta name="twitter:image" content={`${siteUrl}/Banner_image.jpg`} />
    <script type="application/ld+json">{JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'PoliticalParty',
      name: 'Bharatiya Mitra Party',
      alternateName: 'भारतीय मित्र पार्टी',
      url: siteUrl,
      logo: logoUrl,
      image: `${siteUrl}/Banner_image.jpg`,
      description: bilingualDescription,
      telephone: '+919334368012',
      email: 'bhartiyamitrapartybmp@gmail.com',
      sameAs: socialLinks,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4th Floor, Dhanesh Electronic, Bakarganj, Gola Road',
        addressLocality: 'Patna',
        postalCode: '800004',
        addressCountry: 'IN',
      },
    })}</script>
    <script type="application/ld+json">{JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      inLanguage: ['en-IN', 'hi-IN'],
      publisher: {
        '@type': 'PoliticalParty',
        name: 'Bharatiya Mitra Party',
        logo: logoUrl,
      },
    })}</script>
  </Helmet>
}
