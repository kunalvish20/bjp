import { useMemo, useState } from 'react'
import { SEO } from '../components/seo/SEO.tsx'
import { PageIntro } from './PagePrimitives.tsx'
import { NewsCard } from '../components/cards/NewsCard.tsx'
import { SearchBar } from '../components/ui/SearchBar.tsx'
import { Pagination } from '../components/ui/Pagination.tsx'
import { newsItems } from '../data/newsData.ts'
import type { NewsCategory } from '../types/index.ts'

const categories: NewsCategory[] = ['All', 'Governance', 'National', 'Alliance']

export default function News() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<NewsCategory>('All')
  const [page, setPage] = useState(1)
  const filtered = useMemo(
    () =>
      newsItems.filter(
        (item) =>
          (category === 'All' || item.category === category) &&
          `${item.title} ${item.titleHi} ${item.excerpt} ${item.excerptHi}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, query],
  )
  const pageSize = 5
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize)
  return (
    <>
      <SEO
        title="News & public issues"
        description="Bilingual explainers on current political developments, governance questions, alliances, and public issues."
        path="/news"
      />
      <PageIntro
        eyebrow="News & public issues"
        title="Political explainers for public accountability."
        description="Bilingual English and Hindi explainers on governance, national debates, alliances, and the public context behind political claims."
        image="https://images.pexels.com/photos/7103000/pexels-photo-7103000.jpeg?auto=compress&cs=tinysrgb&w=1800"
      />
      <section className="bg-civic-white py-20 md:py-28">
        <div className="page-container">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <SearchBar
              value={query}
              onChange={(value) => {
                setQuery(value)
                setPage(1)
              }}
              placeholder="Search English or Hindi explainers"
              label="Search news"
            />
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => {
                    setCategory(item)
                    setPage(1)
                  }}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold ${category === item ? 'border-movement-navy bg-movement-navy text-white' : 'border-border bg-white text-slate hover:border-movement-navy'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {visible.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((item) => (
                <NewsCard key={item.id} item={item} featured={false} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-border bg-white p-12 text-center">
              <h2 className="display-heading text-3xl font-bold text-movement-navy">Nothing matched that search.</h2>
              <p className="mt-3 text-slate">Try another phrase or reset the category filter.</p>
            </div>
          )}
          <Pagination page={Math.min(page, pages)} totalPages={pages} onChange={setPage} />
        </div>
      </section>
    </>
  )
}
