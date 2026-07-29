import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { primaryNav } from '../../constants/navigation.ts'
import { useScrolled } from '../../hooks/useScrolled.ts'
import { PartyMark } from '../brand/PartyMark.tsx'
import { ButtonLink } from '../ui/Button.tsx'

export function Navbar() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <header className={`sticky top-0 z-40 border-b border-party-line bg-white transition-shadow ${scrolled || pathname !== '/' ? 'shadow-civic-soft' : ''}`}>
        <div className="tricolor-rule" />
        <div className="page-container flex min-h-[4.9rem] items-center justify-between gap-5 py-2">
          <Link to="/" aria-label="Bharatiya Mitra Party home" className="shrink-0"><PartyMark /></Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
            {primaryNav.map((item) => (
              <div key={item.label} className="group relative py-4">
                <NavLink to={item.to} className={({ isActive }) => `inline-flex items-center gap-1 text-[0.72rem] font-black ${isActive ? 'text-party-saffron' : 'text-party-forest/80 hover:text-party-saffron'}`}>
                  {item.label}<ChevronDown size={12} aria-hidden="true" />
                </NavLink>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 border border-party-line bg-white p-2 opacity-0 shadow-civic-soft transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => <Link key={child.label} to={child.to} className="block px-3 py-2 text-xs font-bold text-party-forest hover:bg-party-cream hover:text-party-saffron">{child.label}</Link>)}
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
        <div className="fixed inset-0 z-30 overflow-y-auto bg-party-forest px-5 pb-8 pt-28 text-white xl:hidden">
          <nav aria-label="Mobile navigation" className="page-container">
            <div className="space-y-4">
              {primaryNav.map((item) => <div key={item.label} className="border-b border-white/15 pb-4"><Link onClick={() => setMobileOpen(false)} to={item.to} className="display-heading text-2xl font-bold">{item.label}</Link><div className="mt-2 grid gap-2 pl-1">{item.children.map((child) => <Link onClick={() => setMobileOpen(false)} key={child.label} to={child.to} className="text-sm text-white/65 hover:text-party-saffron">{child.label}</Link>)}</div></div>)}
            </div>
            <div className="mt-8 flex flex-col gap-3"><ButtonLink to="/join" onClick={() => setMobileOpen(false)} variant="outline" icon={undefined}>Join our Party</ButtonLink><ButtonLink to="/donate" onClick={() => setMobileOpen(false)} icon={undefined}>Donate now</ButtonLink></div>
          </nav>
        </div>
      ) : null}
    </>
  )
}
