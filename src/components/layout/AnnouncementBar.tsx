import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-white/10 bg-party-forest px-4 text-[0.62rem] font-bold text-white">
      <div className="page-container flex min-h-7 items-center justify-between gap-3">
        <p className="truncate text-white/80">भारत के लिए, भारत के साथ — Together for Development &amp; Unity</p>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden text-white/60 sm:inline">Follow Us:</span>
          <a href="https://www.facebook.com" aria-label="Facebook" className="text-white/75 transition hover:text-party-saffron"><Facebook size={12} /></a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="text-white/75 transition hover:text-party-saffron"><Instagram size={12} /></a>
          <a href="https://www.youtube.com" aria-label="YouTube" className="text-white/75 transition hover:text-party-saffron"><Youtube size={12} /></a>
          <Link to="/contact" className="hidden border-l border-white/20 pl-3 text-white/80 hover:text-party-saffron sm:inline">हिंदी / English</Link>
        </div>
      </div>
    </div>
  )
}
