import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/seo/SEO.tsx'

export function NotFoundContent() {
  return <section className="flex min-h-[70vh] items-center bg-civic-white py-28"><div className="page-container"><Compass className="text-blaze-orange" size={35} /><p className="eyebrow mt-6">404 / not found</p><h1 className="display-heading mt-5 max-w-2xl text-6xl font-bold leading-[0.95] text-movement-navy sm:text-8xl">This page took a wrong turn.</h1><p className="mt-6 max-w-lg text-lg leading-8 text-slate">The link may be old, or the page may still be finding its way into the public record.</p><Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-movement-navy underline decoration-blaze-orange decoration-2 underline-offset-8"><ArrowLeft size={16} />Back to the home page</Link></div></section>
}

export default function NotFound() {
  return <><SEO title="Page not found" description="The requested page could not be found." path="/404" /><NotFoundContent /></>
}
