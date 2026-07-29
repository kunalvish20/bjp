import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NewsItem } from '../../types/index.ts'
import { formatEventDate } from '../../utils/formatters.ts'
import { LazyImage } from '../ui/LazyImage.tsx'

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return <article className={`group overflow-hidden rounded-3xl border border-border bg-white ${featured ? 'md:col-span-2' : ''}`}><Link to={`/news/${item.id}`} className="block"><LazyImage src={item.image.src} alt={item.image.alt} wrapperClassName={`relative ${featured ? 'aspect-[16/8]' : 'aspect-[4/3]'}`} className="group-hover:scale-105" /><div className="p-5 sm:p-6"><div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.1em] text-slate"><span className="text-blaze-orange">{item.category}</span><span>{formatEventDate(item.date)}</span></div><h3 className={`display-heading mt-4 font-bold leading-tight text-movement-navy group-hover:text-blaze-orange ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{item.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-slate">{item.excerpt}</p><div className="mt-5 flex items-center justify-between text-sm font-bold text-movement-navy"><span className="inline-flex items-center gap-2 text-slate"><Clock3 size={15} />{item.readTime}</span><span className="inline-flex items-center gap-2">Read story <ArrowUpRight size={16} className="text-blaze-orange" /></span></div></div></Link></article>
}
