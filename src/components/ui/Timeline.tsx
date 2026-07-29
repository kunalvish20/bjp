import { Reveal } from './Reveal.tsx'

export function Timeline({ items }: { items: { year: string; title: string; text: string }[] }) {
  return <ol className="relative border-l border-border pl-7 md:pl-10">{items.map((item, index) => <li key={item.year} className="relative"><Reveal delay={index * 0.04} className="relative pb-10 last:pb-0"><span className="absolute -left-[2.05rem] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-civic-white bg-blaze-orange md:-left-[2.65rem]" aria-hidden="true" /><p className="text-xs font-bold uppercase tracking-[0.14em] text-blaze-orange">{item.year}</p><h3 className="display-heading mt-2 text-2xl font-bold text-movement-navy">{item.title}</h3><p className="mt-3 max-w-xl leading-7 text-slate">{item.text}</p></Reveal></li>)}</ol>
}
