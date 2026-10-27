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
        <span className="absolute bottom-5 left-5 rounded-full border border-white/45 bg-party-forest/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:bottom-7 sm:left-7">
          Founder &amp; national president
        </span>
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
