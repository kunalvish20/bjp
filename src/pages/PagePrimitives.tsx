import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ButtonLink } from '../components/ui/Button.tsx'
import { PageHero } from '../components/ui/PageHero.tsx'
import { Reveal } from '../components/ui/Reveal.tsx'

export function PageIntro({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image?: string }) {
  return <PageHero eyebrow={eyebrow} title={title} description={description} image={image} imageAlt="Bharatiya Mitra Party civic movement" breadcrumbs={[{ label: 'Home', to: '/' }, { label: title }]} />
}

export function ContentBand({ eyebrow, title, children, dark = false }: { eyebrow: string; title: string; children: ReactNode; dark?: boolean }) {
  return <section className={dark ? 'bg-movement-navy py-20 text-white md:py-28' : 'bg-civic-white py-20 md:py-28'}><div className="page-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><Reveal><span className="eyebrow">{eyebrow}</span><h2 className={`display-heading mt-5 max-w-sm text-4xl font-bold leading-tight sm:text-5xl ${dark ? 'text-white' : 'text-movement-navy'}`}>{title}</h2></Reveal><Reveal delay={0.1}><div className={`max-w-3xl space-y-5 text-lg leading-8 ${dark ? 'text-white/70' : 'text-slate'}`}>{children}</div></Reveal></div></section>
}

export function Subnav({ items }: { items: { label: string; to: string }[] }) {
  return <nav aria-label="Page sections" className="border-b border-border bg-white"><div className="page-container no-scrollbar flex gap-6 overflow-x-auto py-4">{items.map((item) => <Link key={item.to} to={item.to} className="shrink-0 text-sm font-bold text-slate hover:text-blaze-orange">{item.label}</Link>)}</div></nav>
}

export function ConversionBanner({ title, description, to, label, dark = false }: { title: string; description: string; to: string; label: string; dark?: boolean }) {
  return <section className={dark ? 'bg-movement-navy py-16 text-white md:py-20' : 'bg-blaze-orange py-16 text-white md:py-20'}><div className="page-container flex flex-col items-start justify-between gap-7 md:flex-row md:items-end"><div><h2 className="display-heading max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h2><p className="mt-4 max-w-xl leading-7 text-white/70">{description}</p></div><ButtonLink to={to} variant={dark ? 'primary' : 'dark'}>{label}</ButtonLink></div></section>
}
