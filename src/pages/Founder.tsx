import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/seo/SEO.tsx'
import { PageIntro, ContentBand, ConversionBanner } from './PagePrimitives.tsx'
import { leaders } from '../data/leadersData.ts'
import { milestones } from '../data/historyData.ts'
import { Timeline } from '../components/ui/Timeline.tsx'
import { LazyImage } from '../components/ui/LazyImage.tsx'
import { Reveal } from '../components/ui/Reveal.tsx'

export default function Founder() {
  const leader = leaders[0]

  return (
    <>
      <SEO title="Founder & national president" description={`Meet ${leader.name}, the founder and national president of Bharatiya Mitra Party.`} path="/founder" />
      <PageIntro
        eyebrow="Founder & national president"
        title={leader.name}
        description={leader.bio}
        image={leader.image.src}
      />
      <section className="bg-white py-20 md:py-28">
        <div className="page-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <LazyImage src={leader.image.src} alt={leader.image.alt} wrapperClassName="aspect-[4/5] rounded-3xl" className="grayscale" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Meet the founder</span>
            <h2 className="display-heading mt-6 text-4xl font-bold leading-tight text-movement-navy sm:text-5xl">{leader.name}</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate">
              {leader.bio}
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-movement-navy underline decoration-blaze-orange decoration-2 underline-offset-8">
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
      <ContentBand eyebrow="The work so far" title="Working with communities.">
        <p>Bharatiya Mitra Party brings people together around public service, local participation, and accountable leadership.</p>
      </ContentBand>
      <section className="bg-white py-20 md:py-28">
        <div className="page-container grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <span className="eyebrow">Leadership timeline</span>
            <h2 className="display-heading mt-5 max-w-sm text-4xl font-bold text-movement-navy sm:text-5xl">The chapters behind the work.</h2>
          </div>
          <Timeline items={milestones} />
        </div>
      </section>
      <ConversionBanner title="Leadership is shared here." description="Meet the people carrying the movement into cities, districts, and neighbourhoods." to="/leadership" label="Meet the team" dark />
    </>
  )
}
