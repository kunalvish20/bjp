import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Leader } from '../../types/index.ts'
import { LazyImage } from '../ui/LazyImage.tsx'

export function LeaderCard({ leader }: { leader: Leader }) {
  return <article className="group grid overflow-hidden rounded-3xl border border-border bg-white sm:grid-cols-[0.72fr_1fr]"><LazyImage src={leader.image.src} alt={leader.image.alt} wrapperClassName="aspect-[4/4.5] sm:aspect-auto" className="grayscale group-hover:scale-105 group-hover:grayscale-0" /><div className="flex flex-col justify-between p-6 sm:p-7"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-blaze-orange">{leader.group}</p><h3 className="display-heading mt-3 text-3xl font-bold leading-tight text-movement-navy">{leader.name}</h3><p className="mt-2 text-sm font-semibold text-slate">{leader.role}</p><p className="mt-5 text-sm leading-6 text-slate">{leader.bio}</p></div><Link to="/founder" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-movement-navy hover:text-blaze-orange">Read profile <ArrowUpRight size={16} /></Link></div></article>
}
