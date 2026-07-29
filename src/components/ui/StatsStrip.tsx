import { Users, MapPin, HeartHandshake, FileText } from 'lucide-react'
import { Reveal } from './Reveal.tsx'

const stats = [
  { value: '18,000+', label: 'citizen voices heard', icon: Users },
  { value: '27', label: 'active city circles', icon: MapPin },
  { value: '4,800+', label: 'local volunteers', icon: HeartHandshake },
  { value: '36', label: 'open policy notes', icon: FileText },
]

export function StatsStrip() {
  return <section className="border-y border-border bg-white"><div className="page-container grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">{stats.map(({ value, label, icon: Icon }, index) => <Reveal key={label} delay={index * 0.05} className="flex items-center gap-3 px-3 py-6 sm:px-6"><Icon aria-hidden="true" size={22} className="shrink-0 text-blaze-orange" /><div><p className="display-heading text-2xl font-bold text-movement-navy sm:text-3xl">{value}</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate">{label}</p></div></Reveal>)}</div></section>
}
