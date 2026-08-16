import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { primaryNav } from '../../constants/navigation.ts'
import { useScrolled } from '../../hooks/useScrolled.ts'
import { PartyMark } from '../brand/PartyMark.tsx'
import { ButtonLink } from '../ui/Button.tsx'

export function Navbar() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(primaryNav[0]?.label ?? null)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setDesktopOpen(null)
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
        <div className="page-container flex min-h-[4.9rem] items-center justify-between gap-5 py-2">
          <Link to="/" aria-label="Bharatiya Mitra Party home" className="shrink-0"><PartyMark /></Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
            {primaryNav.map((item) => (
              <div key={item.label} onMouseEnter={() => setDesktopOpen(item.label)} onMouseLeave={() => setDesktopOpen(null)} className="relative py-4">
                <NavLink to={item.to} onFocus={() => setDesktopOpen(item.label)} className={({ isActive }) => `inline-flex items-center gap-1 rounded-full px-2 py-1 text-[0.72rem] font-black transition ${isActive || isNavActive(item) ? 'bg-orange-50 text-party-saffron' : 'text-party-forest/80 hover:bg-party-cream hover:text-party-saffron'}`}>
                  {item.label}<ChevronDown size={12} aria-hidden="true" className={`transition-transform ${desktopOpen === item.label ? 'rotate-180' : ''}`} />
                </NavLink>
                <div className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 border border-party-line bg-white p-2 shadow-civic-soft transition duration-200 ${desktopOpen === item.label ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}>
                  {item.children.map((child) => <Link key={child.label} to={child.to} className={`block rounded-[0.35rem] px-3 py-2 text-xs font-bold transition ${child.to === pathname ? 'bg-orange-50 text-party-saffron' : 'text-party-forest hover:bg-party-cream hover:text-party-saffron'}`}>{child.label}</Link>)}
                </div>
              </div>
            ))}
          </nav>
          <div className="hidden items-center gap-3 xl:flex">
            <Link to="/join" className="text-xs font-black text-party-forest hover:text-party-saffron">Join Us</Link>
            <ButtonLink to="/donate" className="min-h-9 px-4 text-xs" icon={undefined}>Donate</ButtonLink>
          </div>
          <button type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-[0.3rem] border border-party-line text-party-forest xl:hidden">
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </header>
      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[5.1rem] z-30 overflow-y-auto bg-[#FAFAFA] px-4 pb-5 pt-4 text-party-ink shadow-[inset_0_12px_24px_rgba(0,60,36,0.05)] xl:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex min-h-full w-full max-w-md flex-col">
            <div className="mb-4 rounded-2xl border border-party-line bg-white p-4 shadow-[0_10px_24px_rgba(0,60,36,0.06)]">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-party-saffron">Menu / मेनू</p>
              <p className="mt-2 display-heading text-2xl font-bold leading-tight text-party-forest">Explore Bharatiya Mitra Party</p>
            </div>
            <div className="space-y-2.5">
              {primaryNav.map((item, index) => {
                const open = mobileSection === item.label
                const active = isNavActive(item)
                return <div key={item.label} className={`overflow-hidden rounded-2xl border bg-white shadow-[0_8px_20px_rgba(0,60,36,0.045)] transition ${active ? 'border-party-saffron/40' : 'border-party-line'}`}><button type="button" onClick={() => setMobileSection(open ? null : item.label)} aria-expanded={open} className="flex w-full items-center justify-between gap-3 p-3.5 text-left"><span className="flex min-w-0 items-center gap-3"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-black ${active ? 'bg-orange-50 text-party-saffron' : 'bg-party-cream text-party-forest/70'}`}>{String(index + 1).padStart(2, '0')}</span><span className={`truncate text-base font-black leading-tight ${active ? 'text-party-saffron' : 'text-party-forest'}`}>{item.label}</span></span><ChevronDown size={18} aria-hidden="true" className={`shrink-0 text-party-forest/45 transition-transform ${open ? 'rotate-180 text-party-saffron' : ''}`} /></button><div className={`grid overflow-hidden transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><div className="min-h-0"><div className="grid gap-1.5 border-t border-party-line bg-[#FAFAFA] p-2">{item.children.map((child) => <Link onClick={() => setMobileOpen(false)} key={child.label} to={child.to} className={`rounded-xl px-3 py-2.5 text-sm font-bold transition ${child.to === pathname ? 'bg-orange-50 text-party-saffron' : 'text-party-ink/70 hover:bg-white hover:text-party-saffron'}`}>{child.label}</Link>)}</div></div></div></div>
              })}
            </div>
            <div className="sticky bottom-0 mt-auto grid gap-2 bg-[#FAFAFA] pt-4"><ButtonLink to="/join" onClick={() => setMobileOpen(false)} variant="ghost" className="w-full" icon={undefined}>Join our Party</ButtonLink><ButtonLink to="/donate" onClick={() => setMobileOpen(false)} className="w-full" icon={undefined}>Donate now</ButtonLink></div>
          </nav>
        </div>
      ) : null}
    </>
  )
}
