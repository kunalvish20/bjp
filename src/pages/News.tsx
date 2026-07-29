import { useMemo, useState } from 'react'
import { SEO } from '../components/seo/SEO.tsx'
import { PageIntro } from './PagePrimitives.tsx'
import { NewsCard } from '../components/cards/NewsCard.tsx'
import { SearchBar } from '../components/ui/SearchBar.tsx'
import { Pagination } from '../components/ui/Pagination.tsx'
import { newsItems } from '../data/newsData.ts'
import type { NewsCategory } from '../types/index.ts'

const categories: NewsCategory[] = ['All', 'Movement', 'Policy', 'Community', 'Media']

export default function News() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<NewsCategory>('All')
  const [page, setPage] = useState(1)
  const filtered = useMemo(() => newsItems.filter((item) => (category === 'All' || item.category === category) && `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  const pageSize = 4
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize)
  return <><SEO title="News & press" description="The latest news, public issue notes, press releases, and field reports from Jan Awaaz." path="/news" /><PageIntro eyebrow="News & press" title="The work, in public." description="Field notes, public issue briefs, press releases, and the stories behind the movement." image="https://images.unsplash.com/photo-1760992004210-44a502a2872d?auto=format&fit=crop&w=1800&q=85" /><section className="bg-civic-white py-20 md:py-28"><div className="page-container"><div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center"><SearchBar value={query} onChange={(value) => { setQuery(value); setPage(1) }} placeholder="Search stories and issue notes" label="Search news" /><div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">{categories.map((item) => <button type="button" key={item} onClick={() => { setCategory(item); setPage(1) }} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold ${category === item ? 'border-movement-navy bg-movement-navy text-white' : 'border-border bg-white text-slate hover:border-movement-navy'}`}>{item}</button>)}</div></div>{visible.length > 0 ? <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((item) => <NewsCard key={item.id} item={item} featured={false} />)}</div> : <div className="mt-10 rounded-3xl border border-dashed border-border bg-white p-12 text-center"><h2 className="display-heading text-3xl font-bold text-movement-navy">Nothing matched that search.</h2><p className="mt-3 text-slate">Try another phrase or reset the category filter.</p></div>}<Pagination page={Math.min(page, pages)} totalPages={pages} onChange={setPage} /></div></section></>
}
