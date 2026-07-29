import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal.tsx'

type SectionTitleProps = { eyebrow: string; title: string; description?: string; action?: { label: string; to: string }; align?: 'left' | 'center' }

export function SectionTitle({ eyebrow, title, description, action, align = 'left' }: SectionTitleProps) {
  return (
    <Reveal className={`mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between ${align === 'center' ? 'mx-auto max-w-3xl text-center md:flex-col md:items-center' : ''}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display-heading mt-4 max-w-3xl text-4xl font-bold leading-[1.04] text-movement-navy sm:text-5xl">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate">{description}</p> : null}
      </div>
      {action ? <Link to={action.to} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-movement-navy underline decoration-blaze-orange decoration-2 underline-offset-8 hover:text-blaze-orange">{action.label}<ArrowUpRight aria-hidden="true" size={16} /></Link> : null}
    </Reveal>
  )
}
