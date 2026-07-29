import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `accordion-panel-${index}`
        return <div key={item.question}>
          <h3><button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-lg font-bold text-movement-navy"><span>{item.question}</span><ChevronDown size={20} aria-hidden="true" className={`shrink-0 text-blaze-orange ${isOpen ? 'rotate-180' : ''}`} /></button></h3>
          {isOpen ? <div id={panelId} role="region" className="max-w-2xl pb-5 pr-10 text-base leading-7 text-slate">{item.answer}</div> : null}
        </div>
      })}
    </div>
  )
}
