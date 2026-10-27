import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNav } from '../../constants/navigation.ts'
import { useScrolled } from '../../hooks/useScrolled.ts'
import { PartyMark } from '../brand/PartyMark.tsx'
import { ButtonLink } from '../ui/Button.tsx'

const mobileNavItems = primaryNav.flatMap((item) => [
  { label: item.label, to: item.to },
  ...item.children.map((child) => ({ label: child.label, to: child.to })),
])

const navHindi: Record<string, string> = {
  Home: 'होम',
  'Sankalp Patra': 'संकल्प पत्र',
  'Bharatiya Mitra Party': 'भारतीय मित्र पार्टी',
  'About the party': 'पार्टी के बारे में',
  'Our history': 'हमारा इतिहास',
  'Vision & Mission': 'दृष्टि और मिशन',
  'Vision & mission': 'दृष्टि और मिशन',
  Manifesto: 'घोषणापत्र',
  Leadership: 'नेतृत्व',
  'National president': 'राष्ट्रीय अध्यक्ष',
  'Our leadership': 'हमारा नेतृत्व',
  'Join Us': 'हमसे जुड़ें',
  'Join the party': 'पार्टी से जुड़ें',
  Volunteer: 'स्वयंसेवक',
  'Media centre': 'मीडिया केंद्र',
  'News & Media': 'समाचार और मीडिया',
  'News & press': 'समाचार और प्रेस',
  Events: 'कार्यक्रम',
  'Upcoming events': 'आगामी कार्यक्रम',
  Campaigns: 'अभियान',
}

export function Navbar() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileOpen(false)
      setDesktopOpen(null)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isNavActive = (item: (typeof primaryNav)[number]) => item.to === pathname || item.children.some((child) => child.to === pathname)

  return (
    <>
      <header className={`sticky top-0 z-40 border-b border-party-line bg-white transition-shadow ${scrolled || pathname !== '/' ? 'shadow-civic-soft' : ''}`}>
        <div className="tricolor-rule" />
        <div className="mx-auto grid min-h-[5.25rem] w-[calc(100%-0.75rem)] max-w-[1320px] grid-cols-[5.7rem_1fr_5.7rem] items-center gap-1.5 py-2 sm:w-[calc(100%-1rem)] xl:flex xl:min-h-[6rem] xl:justify-between xl:gap-4">
          <Link to="/" aria-label="Bharatiya Mitra Party home" className="justify-self-start xl:shrink-0">
            <PartyMark />
          </Link>
          <p className="justify-self-center text-center text-[0.98rem] font-black leading-tight text-party-forest sm:text-lg xl:hidden">Bhartiya Mitra Party</p>
          <nav aria-label="Primary navigation" data-bilingual-skip="true" className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 xl:flex">
            {primaryNav.map((item) => (
              <div key={item.label} onMouseEnter={() => setDesktopOpen(item.label)} onMouseLeave={() => setDesktopOpen(null)} className="relative py-3">
                <NavLink to={item.to} onFocus={() => setDesktopOpen(item.label)} className={({ isActive }) => `group inline-flex min-h-11 items-center gap-1.5 rounded-[0.7rem] px-2.5 py-2 text-left transition ${isActive || isNavActive(item) ? 'bg-orange-50 text-party-saffron' : 'text-party-forest hover:bg-party-cream hover:text-party-saffron'}`}>
                  {({ isActive }) => {
                    const active = isActive || isNavActive(item)
                    const hindi = navHindi[item.label]
                    const hasChildren = item.children.length > 0

                    return (
                      <>
                        <span className="min-w-0">
                          <span className="block whitespace-nowrap text-[0.75rem] font-black leading-none">{item.label}</span>
                          {hindi ? <span lang="hi" className={`mt-1 block max-w-[5.9rem] text-[0.62rem] font-bold leading-tight ${active ? 'text-party-saffron/80' : 'text-party-forest/55 group-hover:text-party-saffron/75'}`}>/ {hindi}</span> : null}
                        </span>
                        {hasChildren ? <ChevronDown size={11} aria-hidden="true" className={`mt-0.5 shrink-0 transition-transform ${desktopOpen === item.label ? 'rotate-180' : ''}`} /> : null}
                      </>
                    )
                  }}
                </NavLink>
                {item.children.length > 0 ? <div className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 rounded-xl border border-party-line bg-white p-2 shadow-civic-soft transition duration-200 ${desktopOpen === item.label ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}>
                  {item.children.map((child) => {
                    const hindi = navHindi[child.label]
                    const active = child.to === pathname

                    return (
                      <Link key={child.label} to={child.to} aria-current={active ? 'page' : undefined} className={`block rounded-lg px-3 py-2.5 text-xs font-bold transition ${active ? 'bg-orange-50 text-party-saffron' : 'text-party-forest hover:bg-party-cream hover:text-party-saffron'}`}>
                        <span className="block">{child.label}</span>
                        {hindi ? <span lang="hi" className="mt-0.5 block text-[0.68rem] font-semibold leading-tight text-party-ink/55">/ {hindi}</span> : null}
                      </Link>
                    )
                  })}
                </div> : null}
              </div>
            ))}
          </nav>
          <div className="hidden shrink-0 items-center xl:flex">
            <ButtonLink to="/donate" className="min-h-10 rounded-[0.65rem] px-5 text-xs shadow-[0_12px_24px_rgba(240,90,36,0.18)]" icon={undefined}>Donate</ButtonLink>
          </div>
          <button type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-[0.3rem] border border-party-line text-party-forest xl:hidden">
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </header>
      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[5.5rem] z-30 flex flex-col overflow-hidden bg-[#FAFAFA] px-4 pb-4 pt-3 text-party-ink shadow-[inset_0_12px_24px_rgba(0,60,36,0.05)] xl:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col">
            <div className="mb-3 rounded-xl border border-party-line bg-white p-3.5 shadow-[0_8px_18px_rgba(0,60,36,0.045)]">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-party-saffron">Menu / मेनू</p>
              <p className="mt-1.5 display-heading text-xl font-bold leading-tight text-party-forest">Explore Bharatiya Mitra Party</p>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto pb-28 pr-1">
              <div data-bilingual-skip="true" className="space-y-2.5">
                {mobileNavItems.map((item, index) => {
                  const active = item.to === pathname
                  const hindi = navHindi[item.label]

                  return (
                    <Link
                      key={`${item.label}-${item.to}-${index}`}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`group flex min-h-14 items-start gap-3 rounded-[0.85rem] border px-3 py-3 text-left shadow-[0_5px_14px_rgba(0,60,36,0.04)] transition active:scale-[0.99] ${active ? 'border-party-saffron bg-orange-50/80 text-party-saffron' : 'border-party-line bg-white text-party-forest hover:border-party-green/35 hover:bg-party-cream/60'}`}
                    >
                      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.64rem] font-black ${active ? 'bg-party-saffron text-white' : 'bg-party-cream text-party-forest/70 group-hover:bg-white'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1 pt-0.5">
                        <span className={`block break-words text-[0.95rem] font-black leading-snug ${active ? 'text-party-saffron' : 'text-party-forest'}`}>{item.label}</span>
                        {hindi ? <span lang="hi" className="mt-1 block break-words text-[0.8rem] font-semibold leading-snug text-party-ink/60">/ {hindi}</span> : null}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="sticky bottom-0 mt-auto grid gap-2 border-t border-party-line/70 bg-[#FAFAFA] pt-3"><ButtonLink to="/join" onClick={() => setMobileOpen(false)} variant="ghost" className="w-full" icon={undefined}>Join our Party</ButtonLink><ButtonLink to="/donate" onClick={() => setMobileOpen(false)} className="w-full" icon={undefined}>Donate now</ButtonLink></div>
          </nav>
        </div>
      ) : null}
    </>
  )
}
