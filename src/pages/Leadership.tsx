import { LeaderCard } from '../components/cards/LeaderCard.tsx'
import { SEO } from '../components/seo/SEO.tsx'
import { Reveal } from '../components/ui/Reveal.tsx'
import { leaders } from '../data/leadersData.ts'

export default function Leadership() {
  const founder = leaders[0]

  return (
    <>
      <SEO
        title="Party leadership"
        description="Meet the founder and national president of Bharatiya Mitra Party."
        path="/leadership"
      />
      <section className="relative overflow-hidden bg-party-forest py-14 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border-[3rem] border-white/5 sm:h-[30rem] sm:w-[30rem]" />
        <div className="page-container relative">
          <span className="eyebrow text-party-saffron">Leadership / नेतृत्व</span>
          <h1 className="display-heading mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Leadership rooted in public service.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Meet the founder whose vision guides Bharatiya Mitra Party and its work with communities.
          </p>
        </div>
      </section>
      <section aria-label="Founder profile" className="bg-party-cream py-10 sm:py-16 lg:py-20">
        <div className="page-container">
          <Reveal className="mx-auto max-w-5xl">
            <LeaderCard leader={founder} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
