import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { EventItem } from '../../types/index.ts'
import { formatEventDate } from '../../utils/formatters.ts'

export function EventCard({ event }: { event: EventItem }) {
  return <article className="group rounded-2xl border border-border bg-white p-5 hover:border-blaze-orange"><div className="flex gap-4"><div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-orange-50 text-blaze-orange"><span className="text-xs font-bold uppercase">{new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}</span><span className="display-heading text-2xl font-bold leading-none">{new Date(event.date).getDate()}</span></div><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate">{event.type}</p><h3 className="mt-1 text-lg font-bold leading-snug text-movement-navy">{event.title}</h3><p className="mt-3 flex items-center gap-2 text-xs text-slate"><CalendarDays size={14} />{formatEventDate(event.date)} · {event.time}</p><p className="mt-1 flex items-center gap-2 text-xs text-slate"><MapPin size={14} />{event.location}</p></div></div><Link to="/events" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-movement-navy hover:text-blaze-orange">View event details <ArrowUpRight size={15} /></Link></article>
}
