import { SEO } from '../components/seo/SEO.tsx'
import { AboutSection, ExploreSection, GallerySection, HomeHero, ImpactSection, JoinCta, PresidentSection, QuickActions, UpdatesSection } from '../sections/home/HomeSections.tsx'

export default function Home() {
  return (
    <>
      <SEO title="Together for Development & Unity" description="Bharatiya Mitra Party is a people-first movement for development, unity, and a stronger India." path="/" />
      <HomeHero />
      <QuickActions />
      <AboutSection />
      <UpdatesSection />
      <PresidentSection />
      <ImpactSection />
      <ExploreSection />
      <GallerySection />
      <JoinCta />
    </>
  )
}
