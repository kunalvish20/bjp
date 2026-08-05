import { useState } from 'react'
import { ArrowRight, BarChart3, Building2, CalendarDays, CheckCircle2, Eye, Facebook, Handshake, Heart, HeartHandshake, Images, Instagram, Landmark, Linkedin, Mail, Menu, Newspaper, PhoneCall, Play, ShieldCheck, UsersRound, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnnouncementBar } from '../components/layout/AnnouncementBar.tsx'
import { FloatingActions } from '../components/layout/FloatingActions.tsx'
import { Navbar } from '../components/layout/Navbar.tsx'
import { ScrollToTop } from '../components/layout/ScrollToTop.tsx'
import { PartyMark } from '../components/brand/PartyMark.tsx'
import { Button, ButtonLink } from '../components/ui/Button.tsx'
import { LazyImage } from '../components/ui/LazyImage.tsx'
import { Reveal } from '../components/ui/Reveal.tsx'
import { SEO } from '../components/seo/SEO.tsx'
import { exploreCards, galleryImages, homeUpdates, impactStats, presidentImage, quickActions } from '../data/homeData.ts'

const demoQuickActions = [
  ...quickActions.slice(0, 7),
  { label: 'Donate', hindi: 'योगदान करें', to: '/donate', icon: HeartHandshake },
  { label: 'Offices', hindi: 'कार्यालय', to: '/offices', icon: Landmark },
  { label: 'Contact Us', hindi: 'संपर्क करें', to: '/contact', icon: PhoneCall },
]

const principles = [
  { title: 'People First', hindi: 'जनता प्रथम', body: 'हर आवाज़ को सुनना और लोगों की सेवा करना।', icon: UsersRound },
  { title: 'Transparency', hindi: 'पारदर्शिता', body: 'हर फैसले में ईमानदारी और जवाबदेही।', icon: ShieldCheck },
  { title: 'Development for All', hindi: 'सर्वांगीण विकास', body: 'सबके लिए विकास और समान अवसर।', icon: BarChart3 },
  { title: 'Secular & Inclusive', hindi: 'समावेशी समाज', body: 'विविधता का सम्मान और सभी को साथ लेकर चलना।', icon: Landmark },
]

const demoNews = [
  { image: homeUpdates[0].image, title: 'भारतीय मित्र पार्टी ने शुरू किया नया विकास अभियान', date: 'May 12, 2025' },
  { image: homeUpdates[2].image, title: 'राष्ट्रीय अध्यक्ष ने दिल्ली में विकास सम्मेलन को संबोधित किया', date: 'May 10, 2025' },
  { image: homeUpdates[1].image, title: 'पार्टी के कार्यकर्ताओं की बैठक हुई सम्पन्न', date: 'May 08, 2025' },
]

const demoEvents = [
  { day: '25', month: 'MAY', title: 'Youth Empowerment Conference', hindi: 'युवा सशक्तिकरण सम्मेलन', location: 'New Delhi' },
  { day: '05', month: 'JUN', title: "State Leaders' Meet", hindi: 'राज्य नेताओं की बैठक', location: 'Lucknow' },
  { day: '15', month: 'JUN', title: 'Public Rally for Development', hindi: 'विकास के लिए जनसभा', location: 'Bhopal' },
]

const sectionLinks = [
  { title: 'Join Our Party', hindi: 'हमसे जुड़ें', to: '/join', image: exploreCards[0].image },
  { title: 'Service Activities', hindi: 'सेवा कार्य', to: '/about', image: exploreCards[1].image },
  { title: 'Donate / Support Us', hindi: 'योगदान करें', to: '/donate', image: exploreCards[2].image },
  { title: 'Offices', hindi: 'कार्यालय', to: '/offices', image: exploreCards[3].image },
  { title: 'Achievements', hindi: 'उपलब्धियाँ', to: '/news', image: exploreCards[4].image },
  { title: 'Contact Us', hindi: 'संपर्क करें', to: '/contact', image: exploreCards[5].image },
]

const footerLinks = [
  { title: 'Quick Links', links: [{ label: 'Home', to: '/demohome' }, { label: 'Bharatiya Mitra Party', to: '/about' }, { label: 'Vision & Mission', to: '/vision-mission' }, { label: 'Leadership', to: '/leadership' }, { label: 'Join Our Party', to: '/join' }, { label: 'Gallery', to: '/gallery' }, { label: 'News & Media', to: '/media-centre' }, { label: 'Events', to: '/events' }] },
  { title: 'Important Links', links: [{ label: 'Manifesto', to: '/manifesto' }, { label: 'Service Activities', to: '/about' }, { label: 'Donate / Support Us', to: '/donate' }, { label: 'Offices', to: '/offices' }, { label: 'Contact Us', to: '/contact' }, { label: 'Achievements', to: '/news' }, { label: 'Downloads', to: '/media-centre' }] },
]

function SectionKicker({ children, light = false }) {
  return <span className={`eyebrow ${light ? 'text-white' : 'text-party-saffron'}`}>{children}</span>
}

function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-party-forest text-white" aria-label="Bharatiya Mitra Party campaign highlights">
      <img src="/Banner_image.png" alt="Bharatiya Mitra Party leader speaking at a public gathering" width="1800" height="900" className="absolute inset-0 h-full w-full object-cover object-top" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,38,24,0.95)_0%,rgba(0,60,36,0.76)_37%,rgba(0,60,36,0.15)_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-party-forest/75 to-transparent" />
      <div className="page-container relative z-20 flex min-h-[31rem] items-end pb-16 pt-16 sm:min-h-[37rem] sm:pb-20 lg:min-h-[39rem]">
        <Reveal className="max-w-xl">
          <p className="font-body text-xs font-bold text-white/80 sm:text-sm">भारत के लिए, भारत के साथ</p>
          <h1 className="mt-4 max-w-xl font-body text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[5.25rem]">Together for <span className="block text-party-saffron">Development</span><span className="block text-party-green">&amp; Unity</span></h1>
          <p className="mt-4 max-w-md font-display text-xl font-bold text-white sm:text-2xl">विकास भी, विश्वास भी</p>
          <p className="mt-2 text-sm font-bold text-white/80 sm:text-base">A party for people, by people.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink to="/join" icon={UsersRound} className="min-h-10 px-4 text-xs sm:text-sm">Join Our Party</ButtonLink>
            <ButtonLink to="/donate" variant="dark" icon={Heart} className="min-h-10 border border-white/20 bg-party-forest/80 px-4 text-xs sm:text-sm">Donate Now</ButtonLink>
          </div>
        </Reveal>
        <div className="absolute right-[6%] top-[23%] z-20 hidden h-36 w-36 rotate-6 items-center justify-center rounded-full border-4 border-party-saffron bg-white/95 p-3 text-center text-party-forest shadow-civic sm:flex lg:h-44 lg:w-44">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-party-green">
            <Handshake size={35} strokeWidth={1.6} className="text-party-saffron" aria-hidden="true" />
            <span className="mt-1 font-display text-[0.62rem] font-black leading-tight">भारतीय मित्र पार्टी</span>
            <span className="mt-1 text-[0.5rem] font-black uppercase tracking-[0.08em]">Bharatiya Mitra Party</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickActionStrip() {
  return (
    <section className="relative z-30 -mt-7 px-4 sm:-mt-10" aria-label="Explore party pages">
      <div className="page-container overflow-hidden rounded-[0.35rem] border border-party-line bg-white shadow-civic-soft">
        <div className="no-scrollbar grid grid-cols-2 divide-x divide-y divide-party-line overflow-x-auto sm:grid-cols-5 lg:grid-cols-10 lg:divide-y-0">
          {demoQuickActions.map(({ label, hindi, to, icon: Icon }) => (
            <Link key={label} to={to} className="group flex min-h-[5.4rem] min-w-[8.4rem] flex-col items-center justify-center gap-2 px-2 py-3 text-center transition duration-200 hover:bg-party-cream focus-visible:bg-party-cream">
              <Icon aria-hidden="true" size={22} strokeWidth={1.6} className="text-party-green transition duration-200 group-hover:-translate-y-0.5 group-hover:text-party-saffron" />
              <span className="text-[0.64rem] font-black leading-tight text-party-forest">{label}<span className="mt-1 block text-[0.57rem] font-medium text-party-ink/60">{hindi}</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSnapshot() {
  return (
    <section className="paper-grid bg-party-cream py-12 sm:py-16 lg:py-20">
      <div className="page-container grid gap-7 lg:grid-cols-[0.84fr_0.92fr_1.24fr] lg:items-stretch">
        <Reveal className="relative min-h-[22rem] overflow-hidden border-8 border-white bg-party-green shadow-civic sm:min-h-[29rem]">
          <LazyImage src={presidentImage.src} alt={presidentImage.alt} wrapperClassName="absolute inset-0" className="object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-party-forest/90 via-transparent to-party-forest/5" />
          <div className="absolute bottom-5 left-5 text-white"><p className="font-display text-xl font-bold">भारतीय मित्र पार्टी</p><p className="mt-1 text-xs font-bold text-white/80">Bharatiya Mitra Party</p></div>
        </Reveal>
        <Reveal delay={0.06} className="flex flex-col justify-center">
          <SectionKicker>About / हमारे बारे में</SectionKicker>
          <h2 className="display-heading mt-4 text-3xl font-bold leading-[1.04] text-party-forest sm:text-4xl">Bharatiya Mitra Party</h2>
          <p className="mt-4 font-display text-lg font-bold leading-7 text-party-ink">भारतीय मित्र पार्टी विकास, एकता, पारदर्शिता और समावेशी भारत के निर्माण के लिए समर्पित है।</p>
          <p className="mt-3 text-sm leading-6 text-party-ink/70">We are committed to development, unity, transparency and inclusive growth for every citizen of India.</p>
          <ButtonLink to="/about" className="mt-6 self-start px-4 text-xs">Read More</ButtonLink>
        </Reveal>
        <Reveal delay={0.12} className="grid grid-cols-2 divide-x divide-y divide-party-line overflow-hidden rounded-[0.3rem] border border-party-line bg-white shadow-[0_5px_18px_rgba(0,60,36,0.07)]">
          {principles.map(({ title, hindi, body, icon: Icon }) => (
            <div key={title} className="p-4 sm:p-5">
              <Icon aria-hidden="true" size={28} strokeWidth={1.5} className="text-party-green" />
              <p className="mt-3 text-sm font-black text-party-forest">{hindi}</p>
              <p className="mt-0.5 text-[0.68rem] font-black text-party-saffron">{title}</p>
              <p className="mt-2 text-xs leading-5 text-party-ink/65">{body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function PanelHeader({ hindi, title, to }) {
  return <div className="flex items-end justify-between gap-3 border-b border-party-line px-2 pb-3"><div><p className="font-display text-sm font-bold text-party-forest">{hindi}</p><p className="mt-0.5 text-[0.62rem] font-black uppercase tracking-[0.08em] text-party-saffron">{title}</p></div><Link to={to} className="inline-flex items-center gap-1 text-[0.62rem] font-black text-party-green hover:text-party-saffron">View All <ArrowRight size={12} /></Link></div>
}

function PanelButton({ children, to, variant = 'primary' }) {
  return <ButtonLink to={to} variant={variant} icon={ArrowRight} className="mt-4 min-h-9 w-full px-3 text-[0.62rem]">{children}</ButtonLink>
}

function LatestNewsPanel() {
  return <article className="border border-party-line bg-white p-3 shadow-[0_4px_12px_rgba(0,60,36,0.05)]"><PanelHeader hindi="ताज़ा समाचार" title="Latest News" to="/news" /><div className="mt-3 space-y-3">{demoNews.map((item) => <Link key={item.date} to="/news" className="group grid grid-cols-[4.7rem_1fr] gap-3"><LazyImage src={item.image.src} alt={item.image.alt} wrapperClassName="aspect-[1.2] rounded-[0.2rem]" /><div><p className="line-clamp-2 text-xs font-black leading-4 text-party-forest group-hover:text-party-saffron">{item.title}</p><p className="mt-1 text-[0.62rem] text-party-ink/55">{item.date}</p></div></Link>)}</div><PanelButton to="/news">सभी समाचार देखें / View All News</PanelButton></article>
}

function UpcomingEventsPanel() {
  return <article className="border border-party-line bg-white p-3 shadow-[0_4px_12px_rgba(0,60,36,0.05)]"><PanelHeader hindi="आगामी कार्यक्रम" title="Upcoming Events" to="/events" /><div className="mt-3 space-y-2">{demoEvents.map((event) => <Link key={event.day} to="/events" className="group flex gap-3 border-b border-party-line/70 pb-2 last:border-0"><span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-[0.2rem] bg-party-cream text-center"><strong className="font-display text-xl leading-none text-party-saffron">{event.day}</strong><small className="mt-1 text-[0.56rem] font-black text-party-green">{event.month}</small></span><span className="min-w-0"><span className="block text-[0.64rem] font-bold text-party-ink/55">{event.hindi}</span><span className="mt-0.5 block text-xs font-black leading-4 text-party-forest group-hover:text-party-saffron">{event.title}</span><span className="mt-1 block text-[0.6rem] text-party-ink/55">{event.location}</span></span></Link>)}</div><PanelButton to="/events" variant="dark">सभी कार्यक्रम देखें / View All Events</PanelButton></article>
}

function GalleryPanel() {
  const [activeTab, setActiveTab] = useState('images')
  return <article className="border border-party-line bg-white p-3 shadow-[0_4px_12px_rgba(0,60,36,0.05)]"><PanelHeader hindi="गैलरी" title="Gallery" to="/gallery" /><div className="mt-2 flex border-b border-party-line"><button type="button" role="tab" aria-selected={activeTab === 'images'} onClick={() => setActiveTab('images')} className={`flex-1 border-b-2 px-2 py-2 text-[0.62rem] font-black transition ${activeTab === 'images' ? 'border-party-saffron text-party-saffron' : 'border-transparent text-party-ink/55 hover:text-party-forest'}`}>फोटो गैलरी / Image Gallery</button><button type="button" role="tab" aria-selected={activeTab === 'videos'} onClick={() => setActiveTab('videos')} className={`flex-1 border-b-2 px-2 py-2 text-[0.62rem] font-black transition ${activeTab === 'videos' ? 'border-party-saffron text-party-saffron' : 'border-transparent text-party-ink/55 hover:text-party-forest'}`}>वीडियो गैलरी / Video Gallery</button></div>{activeTab === 'images' ? <div className="mt-3 grid grid-cols-3 gap-2">{galleryImages.slice(0, 6).map((image, index) => <Link key={`${image.src}-${index}`} to="/gallery" className="group aspect-[1.05] overflow-hidden rounded-[0.2rem]"><LazyImage src={image.src} alt={image.alt} wrapperClassName="h-full w-full" className="group-hover:scale-105" /></Link>)}</div> : <div className="mt-3 flex min-h-[9.7rem] flex-col items-center justify-center rounded-[0.25rem] bg-party-cream text-center"><Play size={28} className="text-party-saffron" aria-hidden="true" /><p className="mt-2 text-xs font-black text-party-forest">वीडियो जल्द ही उपलब्ध होंगे</p><p className="mt-1 text-[0.62rem] text-party-ink/55">Video gallery coming soon</p></div>}<PanelButton to="/gallery">सभी फोटो देखें / View All Photos</PanelButton></article>
}

function UpdatesSnapshot() {
  return <section className="bg-white py-12 sm:py-16"><div className="page-container"><div className="mb-7 flex items-end justify-between gap-4"><div><SectionKicker>Updates / जुड़े रहें</SectionKicker><h2 className="display-heading mt-3 text-3xl font-bold text-party-forest sm:text-4xl">Latest News &amp; Events</h2></div><Link to="/news" className="hidden items-center gap-1 text-xs font-black text-party-green hover:text-party-saffron sm:inline-flex">View All <ArrowRight size={14} /></Link></div><div className="grid gap-5 lg:grid-cols-3"><LatestNewsPanel /><UpcomingEventsPanel /><GalleryPanel /></div></div></section>
}

function ImpactBanner() {
  return <section className="relative overflow-hidden bg-party-forest py-10 text-white sm:py-12"><img src="/Banner_image.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center opacity-25" /><div className="absolute inset-0 bg-party-forest/85" /><div className="page-container relative grid gap-7 lg:grid-cols-[1.2fr_2.6fr_1.15fr] lg:items-center"><div><p className="font-display text-2xl font-bold leading-tight sm:text-3xl">एक सोच, एक संकल्प<br />एक बेहतर भारत</p><p className="mt-2 text-xs font-bold text-white/75">A better India begins with you.</p></div><div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4">{impactStats.map(({ value, label, icon: Icon }) => <Reveal key={label} className="flex items-center gap-2"><Icon aria-hidden="true" size={24} strokeWidth={1.5} className="shrink-0 text-party-saffron" /><div><p className="font-display text-2xl font-bold">{value}</p><p className="mt-1 text-[0.62rem] font-bold leading-4 text-white/70">{label}</p></div></Reveal>)}</div><div className="rounded-[0.25rem] bg-party-green p-5"><p className="font-display text-lg font-bold leading-tight">आपका योगदान,<br />भारत का भविष्य</p><p className="mt-2 text-[0.65rem] text-white/80">Your contribution can build a better tomorrow.</p><ButtonLink to="/donate" variant="outline" icon={Heart} className="mt-4 min-h-9 w-full border-white bg-white px-3 text-xs text-party-green hover:bg-party-cream">Donate Now</ButtonLink></div></div></section>
}

function ExploreGrid() {
  return <section className="bg-party-cream py-12 sm:py-16"><div className="page-container"><div className="mb-7 flex items-end justify-between gap-4"><div><SectionKicker>Explore More / और जानें</SectionKicker><h2 className="display-heading mt-3 text-3xl font-bold text-party-forest sm:text-4xl">हमारी सेवाएं / Explore More</h2></div><Link to="/about" className="hidden items-center gap-1 text-xs font-black text-party-green sm:inline-flex">Explore All <ArrowRight size={14} /></Link></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{sectionLinks.map(({ title, hindi, to, image }) => <Link key={title} to={to} className="group overflow-hidden rounded-[0.25rem] border border-party-line bg-white shadow-[0_3px_10px_rgba(0,60,36,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-civic-soft"><LazyImage src={image.src} alt={image.alt} wrapperClassName="aspect-[1.35]" className="group-hover:scale-105" /><div className="p-3"><p className="font-display text-sm font-bold leading-tight text-party-forest group-hover:text-party-saffron">{hindi}</p><p className="mt-1 text-[0.63rem] font-black text-party-ink/55">{title}</p><p className="mt-3 inline-flex items-center gap-1 text-[0.58rem] font-black uppercase tracking-[0.08em] text-party-saffron">Learn More <ArrowRight size={11} /></p></div></Link>)}</div></div></section>
}

function GalleryRail() {
  return <section className="bg-white pb-10 sm:pb-14"><div className="page-container"><div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">{galleryImages.map((image, index) => <Link key={`${image.src}-${index}`} to="/gallery" className="group relative block h-28 min-w-[10rem] overflow-hidden rounded-[0.2rem] sm:h-36 sm:min-w-[13rem]"><LazyImage src={image.src} alt={image.alt} wrapperClassName="absolute inset-0" className="group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-party-forest/70 to-transparent" /><span className="absolute bottom-2 left-2 text-[0.6rem] font-black text-white">{String(index + 1).padStart(2, '0')}</span></Link>)}</div></div></section>
}

function DemoFooter() {
  const [subscribed, setSubscribed] = useState(false)
  return <footer className="bg-party-forest text-white"><div className="tricolor-rule" /><div className="page-container py-9 sm:py-12"><div className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[1.25fr_1fr_1fr_1.4fr]"><div><PartyMark compact /><p className="mt-4 max-w-xs text-xs leading-5 text-white/65">एक सोच, एक संकल्प, एक बेहतर भारत।<br />Together for Development &amp; Unity.<br />A party for people, by people.</p><div className="mt-4 flex gap-2"><a href="https://www.facebook.com" aria-label="Facebook" className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/75 transition hover:border-party-saffron hover:text-white"><Facebook size={13} /></a><a href="https://www.instagram.com" aria-label="Instagram" className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/75 transition hover:border-party-saffron hover:text-white"><Instagram size={13} /></a><a href="https://www.youtube.com" aria-label="YouTube" className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/75 transition hover:border-party-saffron hover:text-white"><Youtube size={13} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn" className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/75 transition hover:border-party-saffron hover:text-white"><Linkedin size={13} /></a></div></div>{footerLinks.map(({ title, links }) => <div key={title}><p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-white">{title}</p><ul className="mt-3 space-y-1.5">{links.map((link) => <li key={link.label}><Link to={link.to} className="text-[0.68rem] text-white/65 transition hover:text-party-saffron">{link.label}</Link></li>)}</ul></div>)}<div><p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-white">Newsletter</p><p className="mt-3 text-xs leading-5 text-white/70">लेटेस्ट अपडेट के लिए हमारे न्यूज़लेटर से जुड़ें।</p><form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }} className="mt-3 flex max-w-sm gap-2"><label htmlFor="demo-newsletter-email" className="sr-only">Email address</label><input id="demo-newsletter-email" type="email" required placeholder="Enter your email" className="h-9 min-w-0 flex-1 rounded-[0.2rem] border border-white/15 bg-white px-3 text-xs text-party-ink placeholder:text-party-ink/45 focus:border-party-saffron focus:outline-none" /><Button type="submit" icon={Mail} className="min-h-9 shrink-0 px-3 text-[0.6rem]">Subscribe</Button></form>{subscribed ? <p className="mt-2 inline-flex items-center gap-1 text-[0.62rem] font-bold text-party-saffron"><CheckCircle2 size={13} /> Thank you for subscribing.</p> : null}</div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[0.62rem] text-white/45 sm:flex-row"><p>© 2025 Bharatiya Mitra Party. All Rights Reserved.</p><div className="flex gap-4"><Link to="/contact" className="hover:text-white">Privacy Policy</Link><span>|</span><Link to="/contact" className="hover:text-white">Terms &amp; Conditions</Link></div></div></div></footer>
}

export default function DemoHome() {
  return <div className="min-h-screen bg-civic-white"><SEO title="Together for Development & Unity | Demo Home" description="Bharatiya Mitra Party demo homepage." path="/demohome" /><ScrollToTop /><AnnouncementBar /><Navbar /><main><DemoHero /><QuickActionStrip /><AboutSnapshot /><UpdatesSnapshot /><ImpactBanner /><ExploreGrid /><GalleryRail /></main><DemoFooter /><FloatingActions /></div>
}
