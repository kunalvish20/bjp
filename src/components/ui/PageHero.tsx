import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal.tsx'
import { getImageSrcSet } from '../../utils/imageSources.ts'

export function PageHero({ eyebrow, title, description, image, imageAlt, breadcrumbs = [] }: { eyebrow: string; title: string; description: string; image?: string; imageAlt?: string; breadcrumbs?: { label: string; to?: string }[] }) {
  const imageSrcSet = getImageSrcSet(image)

  return (
    <section className="relative overflow-hidden bg-movement-navy pb-20 pt-36 text-white md:pb-28 md:pt-44">
      {image ? <img src={image} srcSet={imageSrcSet} sizes="100vw" alt={imageAlt} loading="eager" decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover opacity-35" /> : null}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,30,58,0.98),rgba(11,30,58,0.78)_45%,rgba(11,30,58,0.35))]" />
      <div className="page-container relative">
        {breadcrumbs.length > 0 ? <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/60">{breadcrumbs.map((crumb, index) => <span key={crumb.label} className="inline-flex items-center gap-2">{index > 0 ? <span aria-hidden="true">/</span> : null}{crumb.to ? <Link to={crumb.to} className="hover:text-white">{crumb.label}</Link> : <span className="text-white">{crumb.label}</span>}</span>)}</nav> : null}
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-heading mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 text-balance drop-shadow-sm sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{description}</p>
          <ArrowDown aria-hidden="true" className="mt-12 text-blaze-orange" size={30} />
        </Reveal>
      </div>
    </section>
  )
}
