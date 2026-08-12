import { ArrowUpRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../../components/ui/Button.tsx'
import { LazyImage } from '../../components/ui/LazyImage.tsx'
import { Reveal } from '../../components/ui/Reveal.tsx'
import { exploreCards, galleryImages, heroSlides, homeUpdates, impactStats, presidentImage, quickActions } from '../../data/homeData.ts'

export function HomeHero() {
  const slide = heroSlides[0]

  return (
    <section className="relative overflow-hidden bg-party-forest text-white" aria-label="Bharatiya Mitra Party campaign highlights">
      <picture className="absolute inset-0">
        <source media="(max-width: 639px)" srcSet="/Bmp.png" />
        <img src="/Banner_image.png" alt="Bharatiya Mitra Party banner" width="1800" height="900" className="h-full w-full object-cover object-top" />
      </picture>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,60,36,0.32)_0%,rgba(0,60,36,0.2)_48%,rgba(0,60,36,0.5)_100%)] sm:hidden" />
      <div className="pointer-events-none absolute inset-0 z-10 hidden bg-[linear-gradient(90deg,rgba(0,60,36,0.96)_0%,rgba(0,60,36,0.78)_45%,rgba(0,60,36,0.2)_100%)] sm:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-party-forest/45 to-transparent sm:from-party-forest/80" />
      <div className="page-container relative z-20 flex min-h-[33rem] flex-col justify-end pb-14 pt-28 sm:min-h-[39rem] sm:pb-16">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-white">{slide.kicker}</span>
          <h1 className="mt-5 max-w-2xl font-body text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[5.7rem]">{slide.title}<span className="block text-party-saffron">{slide.highlight}</span></h1>
          <p className="mt-5 max-w-lg text-base font-bold leading-7 text-white/80 sm:text-lg">{slide.description}</p>
          <div className="mt-7 flex flex-wrap gap-3"><ButtonLink to="/join" icon={undefined}>Join Our Party</ButtonLink><ButtonLink to="/donate" variant="outline" icon={undefined}>Fund Our Party</ButtonLink></div>
        </Reveal>
      </div>
    </section>
  )
}

export function QuickActions() {
  return (
    <section className="relative z-20 -mt-1 border-b border-party-line bg-white shadow-[0_8px_18px_rgba(0,60,36,0.08)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
      <div className="no-scrollbar overflow-hidden py-2.5 sm:hidden">
        <div className="quick-actions-marquee flex w-max gap-2.5 px-4">
          {[...quickActions, ...quickActions].map(({ label, hindi, to, icon: Icon }, index) => {
            const duplicate = index >= quickActions.length

            return <Link key={`${label}-${index}`} to={to} aria-hidden={duplicate ? 'true' : undefined} tabIndex={duplicate ? -1 : undefined} className="group flex h-[5.6rem] w-[8.35rem] shrink-0 flex-col items-center justify-center gap-1.5 rounded-[0.4rem] border border-party-line bg-white px-2.5 text-center shadow-[0_5px_13px_rgba(0,60,36,0.07)] transition active:scale-[0.98]"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-party-cream text-party-green transition group-active:bg-party-saffron group-active:text-white"><Icon aria-hidden="true" size={18} strokeWidth={1.8} /></span><span className="text-[0.63rem] font-black leading-tight text-party-forest">{label}<span className="mt-0.5 block text-[0.55rem] font-medium leading-tight text-party-ink/55">{hindi}</span></span></Link>
          })}
        </div>
      </div>
      <div className="page-container hidden sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y sm:divide-party-line lg:grid-cols-8 lg:divide-y-0">
        {quickActions.map(({ label, hindi, to, icon: Icon }) => <Link key={label} to={to} className="group flex flex-col items-center justify-center gap-2 px-3 py-4 text-center transition duration-200 hover:bg-party-cream"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-party-cream text-party-green transition group-hover:bg-party-saffron group-hover:text-white"><Icon aria-hidden="true" size={21} strokeWidth={1.8} /></span><span className="text-[0.68rem] font-black leading-tight text-party-forest">{label}<span className="block mt-0.5 text-[0.6rem] font-medium text-party-ink/55">{hindi}</span></span></Link>)}
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="paper-grid bg-party-cream py-16 sm:py-20">
      <div className="page-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <Reveal className="relative min-h-[22rem] overflow-hidden border-8 border-white bg-party-green shadow-civic sm:min-h-[31rem]">
          <LazyImage src={presidentImage.src} alt={presidentImage.alt} wrapperClassName="absolute inset-0" className="object-top grayscale-[15%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-party-forest/90 via-transparent to-party-forest/10" />
          <div className="absolute bottom-5 left-5 text-white"><p className="font-display text-2xl font-bold">Bharatiya Mitra Party</p><p className="mt-1 text-xs font-bold text-white/75">भारत के लिए, भारत के साथ</p></div>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col justify-center">
          <span className="eyebrow">About us / हमारे बारे में</span>
          <h2 className="display-heading mt-4 max-w-xl text-4xl font-bold leading-[1.03] text-party-forest sm:text-5xl">A party for people, by people.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-party-ink/75">We are committed to building a stronger, more inclusive India where every citizen has a voice and every community has a chance to grow.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="border-l-4 border-party-saffron bg-white p-4"><p className="text-xs font-black uppercase tracking-[0.12em] text-party-saffron">People First</p><p className="mt-2 text-sm leading-6 text-party-ink/70">Listening to citizens and acting on what matters.</p></div><div className="border-l-4 border-party-green bg-white p-4"><p className="text-xs font-black uppercase tracking-[0.12em] text-party-green">Transparent</p><p className="mt-2 text-sm leading-6 text-party-ink/70">Open, honest, and accountable public service.</p></div></div>
          <ButtonLink to="/about" variant="dark" className="mt-7 self-start" icon={undefined}>Know More About Us</ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}

export function UpdatesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-container">
        <div className="mb-9 flex items-end justify-between gap-4"><div><span className="eyebrow">Stay informed / जुड़े रहें</span><h2 className="display-heading mt-3 text-3xl font-bold text-party-forest sm:text-4xl">Latest from our movement</h2></div><Link to="/news" className="hidden items-center gap-1 text-xs font-black text-party-green hover:text-party-saffron sm:inline-flex">View All <ArrowUpRight size={15} /></Link></div>
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1.05fr]">
          <UpdateColumn title="Latest News" hindi="ताज़ा समाचार" item={homeUpdates[0]} />
          <UpdateColumn title="Upcoming Events" hindi="आगामी कार्यक्रम" item={homeUpdates[1]} />
          <UpdateColumn title="Gallery" hindi="फोटो गैलरी" item={homeUpdates[2]} />
        </div>
      </div>
    </section>
  )
}

function UpdateColumn({ title, hindi, item }: { title: string; hindi: string; item: (typeof homeUpdates)[number] }) {
  return (
    <article className="border border-party-line bg-party-cream p-3 shadow-[0_4px_12px_rgba(0,60,36,0.05)]"><div className="flex items-end justify-between gap-3 border-b border-party-line px-2 pb-3"><div><p className="text-xs font-black uppercase tracking-[0.11em] text-party-saffron">{title}</p><p className="mt-0.5 text-[0.66rem] text-party-ink/55">{hindi}</p></div><Link to={item.to} className="text-[0.66rem] font-black text-party-green hover:text-party-saffron">View All <ArrowUpRight className="inline" size={12} /></Link></div><Link to={item.to} className="group mt-3 block"><LazyImage src={item.image.src} alt={item.image.alt} width="900" height="520" wrapperClassName="aspect-[16/8]" className="group-hover:scale-105" /><p className="mt-3 line-clamp-2 text-base font-black leading-snug text-party-forest group-hover:text-party-saffron">{item.hindi}</p><p className="mt-1 line-clamp-2 text-sm leading-5 text-party-ink/75">{item.title}</p><p className="mt-3 text-[0.68rem] font-bold text-party-ink/50">{item.date}</p></Link></article>
  )
}

export function PresidentSection() {
  return (
    <section className="bg-party-cream py-16 sm:py-20"><div className="page-container grid gap-7 border-y border-party-line py-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><span className="eyebrow">Our promise / हमारा संकल्प</span><h2 className="display-heading mt-4 text-3xl font-bold leading-tight text-party-forest sm:text-4xl">We work for a better tomorrow, today.</h2><Link to="/manifesto" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-party-green hover:text-party-saffron">Read our manifesto <ArrowUpRight size={16} /></Link></div><div className="relative border-l-4 border-party-saffron pl-5 sm:pl-8"><Quote className="absolute -left-3 -top-4 bg-party-cream text-party-saffron" size={26} fill="currentColor" aria-hidden="true" /><blockquote className="font-display text-2xl font-bold leading-tight text-party-forest sm:text-3xl">“India's progress is not measured only by buildings and numbers, but by the dignity and opportunity every family can feel.”</blockquote><p className="mt-4 text-xs font-black text-party-ink/55">— National President, Bharatiya Mitra Party</p></div></div></section>
  )
}

export function ImpactSection() {
  return (
    <section className="bg-party-forest py-12 text-white sm:py-16"><div className="page-container"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{impactStats.map(({ value, label, icon: Icon }, index) => <Reveal key={label} delay={index * 0.05} className="flex items-center gap-3 border-b border-white/15 pb-5 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 last:border-0"><Icon aria-hidden="true" size={26} strokeWidth={1.5} className="shrink-0 text-party-saffron" /><div><p className="font-display text-3xl font-bold">{value}</p><p className="mt-1 text-xs font-bold text-white/65">{label}</p></div></Reveal>)}</div><p className="mt-9 max-w-md text-sm leading-6 text-white/60">हम एक संकल्प, एक साथ — building a stronger India through collective action.</p></div></section>
  )
}

export function ExploreSection() {
  return (
    <section className="bg-party-cream py-16 sm:py-20"><div className="page-container"><div className="mb-8 flex items-end justify-between gap-4"><div><span className="eyebrow">Explore more / और जानें</span><h2 className="display-heading mt-3 text-3xl font-bold text-party-forest sm:text-4xl">Be a part of the change</h2></div><Link to="/about" className="hidden text-xs font-black text-party-green sm:inline-flex">Explore all <ArrowUpRight size={15} className="ml-1" /></Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{exploreCards.map((item, index) => <Link key={item.title} to={item.to} className={`group overflow-hidden border border-party-line bg-white ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}><LazyImage src={item.image.src} alt={item.image.alt} width="800" height="560" wrapperClassName="aspect-[1.35]" className="group-hover:scale-105" /><div className="p-3"><p className="text-sm font-black leading-tight text-party-forest group-hover:text-party-saffron">{item.hindi}</p><p className="mt-1 text-[0.65rem] font-bold text-party-ink/55">{item.title}</p></div></Link>)}</div></div></section>
  )
}

export function GallerySection() {
  return (
    <section className="bg-white py-14 sm:py-16"><div className="page-container"><div className="mb-6 flex items-end justify-between gap-4"><div><span className="eyebrow">In the field / मैदान में</span><h2 className="display-heading mt-3 text-3xl font-bold text-party-forest">People. Purpose. Progress.</h2></div><Link to="/gallery" className="hidden items-center gap-1 text-xs font-black text-party-green sm:inline-flex">View Gallery <ArrowUpRight size={15} /></Link></div><div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">{galleryImages.map((image, index) => <Link key={`${image.src}-${index}`} to="/gallery" className="group relative block h-32 min-w-[10rem] overflow-hidden sm:h-40 sm:min-w-[13rem]"><LazyImage src={image.src} alt={image.alt} width="900" height="600" wrapperClassName="absolute inset-0" className="group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-party-forest/70 to-transparent" /><span className="absolute bottom-2 left-2 text-[0.62rem] font-black text-white">{String(index + 1).padStart(2, '0')}</span></Link>)}</div></div></section>
  )
}

export function JoinCta() {
  return <section className="bg-party-saffron py-12 text-white sm:py-16"><div className="page-container flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-end"><div><span className="eyebrow text-white">The invitation / आमंत्रण</span><h2 className="display-heading mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">Together, we can build a stronger India.</h2></div><ButtonLink to="/join" variant="dark" icon={undefined}>Join Our Party</ButtonLink></div></section>
}
