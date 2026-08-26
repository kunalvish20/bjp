import { ArrowUp } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col gap-2">
      <a href="https://wa.me/919334368012?text=Hii%20i%20want%20to%20know%20more." target="_blank" rel="noreferrer" aria-label="Chat with Bharatiya Mitra Party on WhatsApp" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-civic-soft transition hover:-translate-y-1 hover:bg-[#1ebe5d]"><FaWhatsapp size={22} aria-hidden="true" /></a>
      {showTop ? <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-party-saffron text-white shadow-civic-soft transition hover:-translate-y-1 hover:bg-party-red"><ArrowUp size={18} /></button> : null}
      <Link to="/contact" className="sr-only">Contact Bharatiya Mitra Party</Link>
    </div>
  )
}
