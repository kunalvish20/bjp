import { useMemo, useState } from 'react'
import { SEO } from '../components/seo/SEO.tsx'
import { PageIntro, ConversionBanner } from './PagePrimitives.tsx'
import { leaders } from '../data/leadersData.ts'
import { LeaderCard } from '../components/cards/LeaderCard.tsx'
import { Reveal } from '../components/ui/Reveal.tsx'
import type { TeamGroup } from '../types/index.ts'

const groups: (TeamGroup | 'All')[] = ['All', 'Founder', 'National Team', 'State Team', 'District Team', 'Youth Wing']

export default function Leadership() {
  const [group, setGroup] = useState<TeamGroup | 'All'>('All')
  const filtered = useMemo(() => group === 'All' ? leaders : leaders.filter((leader) => leader.group === group), [group])
  return <><SEO title="Party leadership" description="Meet the national, state, district, and youth leaders building Bharatiya Mitra Party." path="/leadership" /><PageIntro eyebrow="Party leadership" title="Many hands. One public responsibility." description="Our teams are built around the work, not the hierarchy. Meet the people organising listening, policy, and action across the country." image="https://images.unsplash.com/photo-1593055473884-966a01abbe03?auto=format&fit=crop&w=1800&q=85" /><section className="bg-civic-white py-20 md:py-28"><div className="page-container"><div className="no-scrollbar flex gap-2 overflow-x-auto pb-8" role="tablist" aria-label="Leadership groups">{groups.map((item) => <button type="button" role="tab" aria-selected={group === item} key={item} onClick={() => setGroup(item)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold ${group === item ? 'border-movement-navy bg-movement-navy text-white' : 'border-border bg-white text-slate hover:border-movement-navy hover:text-movement-navy'}`}>{item}</button>)}</div><div className="grid gap-5 lg:grid-cols-2">{filtered.map((leader, index) => <Reveal key={leader.id} delay={index * 0.04}><LeaderCard leader={leader} /></Reveal>)}</div></div></section><ConversionBanner title="Leadership should keep making room." description="Join a local team, bring a new perspective, and help us make the circle wider." to="/join" label="Join a local team" /></>
}
