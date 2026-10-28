import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Leader } from '../../types/index.ts'
import { LazyImage } from '../ui/LazyImage.tsx'

export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-party-line bg-white shadow-civic-soft lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="relative min-h-[19rem] overflow-hidden bg-party-forest sm:min-h-[25rem] lg:min-h-[32rem]">
        <LazyImage
          src={leader.image.src}
          alt={leader.image.alt}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-party-forest/60 via-transparent to-transparent" />
        <div
          data-bilingual-skip
          className="absolute inset-x-4 bottom-4 flex max-w-sm items-center gap-3 rounded-xl border border-white/20 bg-party-forest/95 px-4 py-3 text-white shadow-lg backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[calc(100%-3rem)]"
        >
          <span className="h-9 w-1 shrink-0 rounded-full bg-party-saffron" aria-hidden="true" />
          <div className="min-w-0">
            <span className="block text-[0.68rem] font-extrabold uppercase leading-snug tracking-[0.1em] sm:text-xs">
              Founder &amp; National President
            </span>
            <span lang="hi" className="mt-0.5 block text-xs font-semibold leading-snug text-white/80">
              संस्थापक और राष्ट्रीय अध्यक्ष
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
        <span className="eyebrow">Meet the founder</span>
        <h2 className="display-heading mt-5 text-4xl font-bold leading-tight text-party-forest sm:text-5xl">
          {leader.name}
        </h2>
        <p className="mt-3 text-sm font-bold text-party-saffron sm:text-base">{leader.role}</p>
        <div className="my-6 h-px w-full bg-party-line sm:my-8" />
        <p className="max-w-lg text-base leading-7 text-party-ink/75 sm:text-lg sm:leading-8">{leader.bio}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            to="/founder"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-party-forest px-5 py-3 text-sm font-bold text-white transition hover:bg-party-green"
          >
            Read founder's story <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link
            to="/join"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-party-line px-5 py-3 text-sm font-bold text-party-forest transition hover:border-party-green hover:bg-party-cream"
          >
            Join the movement
          </Link>
        </div>
      </div>
    </article>
  )
}
