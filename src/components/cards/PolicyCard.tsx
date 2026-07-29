import { BriefcaseBusiness, HeartHandshake, ShieldCheck, Sparkles, ArrowUpRight, type LucideIcon } from 'lucide-react'
import type { PolicyPillar } from '../../types/index.ts'

const iconMap: Record<string, LucideIcon> = { HeartHandshake, BriefcaseBusiness, ShieldCheck, Sparkles }

export function PolicyCard({ item }: { item: PolicyPillar }) {
  const Icon = iconMap[item.icon] ?? Sparkles
  return <article className={`group relative min-h-64 overflow-hidden rounded-3xl p-6 ${item.color}`}><Icon aria-hidden="true" size={28} strokeWidth={1.8} /><h3 className="display-heading mt-14 max-w-xs text-2xl font-bold leading-tight text-movement-navy">{item.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-movement-navy/65">{item.summary}</p><ArrowUpRight aria-hidden="true" size={22} className="absolute bottom-6 right-6 text-movement-navy/50 group-hover:text-movement-navy" /></article>
}
