import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { footerGroups } from '../../constants/navigation.ts'
import { PartyMark } from '../brand/PartyMark.tsx'
import { Button } from '../ui/Button.tsx'
import { Toast } from '../ui/Toast.tsx'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-party-forest text-white">
      <div className="tricolor-rule" />
      <div className="page-container py-12 sm:py-16">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div><span className="eyebrow text-party-saffron">Stay connected / जुड़े रहें</span><h2 className="display-heading mt-4 max-w-md text-3xl font-bold leading-tight sm:text-4xl">Together, we can make a difference.</h2><p className="mt-4 max-w-md text-sm leading-6 text-white/65">Get updates on our work, events, and opportunities to serve your community.</p><form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }} className="mt-6 flex max-w-md gap-2"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required placeholder="Enter your email" className="h-11 min-w-0 flex-1 rounded-[0.3rem] border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/45 focus:border-party-saffron focus:outline-none" /><Button type="submit" className="shrink-0 px-4" icon={Mail}>Subscribe</Button></form></div>
          <div className="grid grid-cols-2 gap-7 lg:col-span-2 lg:pl-10">{footerGroups.map((group) => <div key={group.title}><p className="text-[0.67rem] font-black uppercase tracking-[0.17em] text-party-saffron">{group.title}</p><ul className="mt-4 space-y-2">{group.links.map((link) => <li key={link.label}><Link to={link.to} className="text-sm text-white/65 transition hover:text-white">{link.label}</Link></li>)}</ul></div>)}</div>
        </div>
        <div className="grid gap-9 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div><Link to="/" aria-label="Bharatiya Mitra Party home"><PartyMark compact /></Link><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Together for Development &amp; Unity. A party for people, by people.</p></div>
          <div><p className="text-[0.67rem] font-black uppercase tracking-[0.17em] text-white/45">Our office</p><p className="mt-3 text-sm leading-6 text-white/65">14, Jantar Mantar Road<br />New Delhi 110001</p><Link to="/contact" className="mt-3 inline-flex items-center gap-2 text-sm font-black text-white hover:text-party-saffron">Contact us <ArrowUpRight size={14} /></Link></div>
          <div><p className="text-[0.67rem] font-black uppercase tracking-[0.17em] text-white/45">Follow the work</p><div className="mt-3 flex gap-2"><a href="https://www.facebook.com" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 hover:border-party-saffron hover:text-white"><Facebook size={16} /></a><a href="https://www.instagram.com" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 hover:border-party-saffron hover:text-white"><Instagram size={16} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 hover:border-party-saffron hover:text-white"><Linkedin size={16} /></a><a href="https://www.youtube.com" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 hover:border-party-saffron hover:text-white"><Youtube size={16} /></a></div></div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/15 pt-5 text-[0.67rem] text-white/45 sm:flex-row"><p>© 2026 Bharatiya Mitra Party. All Rights Reserved.</p><div className="flex gap-4"><Link to="/contact" className="hover:text-white">Privacy Policy</Link><Link to="/contact" className="hover:text-white">Terms &amp; Conditions</Link></div></div>
      </div>
      {subscribed ? <Toast message="You are on the list. Thank you for staying involved." onClose={() => setSubscribed(false)} /> : null}
    </footer>
  )
}
