import { useMemo, useState } from 'react'
import { SEO } from '../components/seo/SEO.tsx'
import { PageIntro } from './PagePrimitives.tsx'
import { galleryItems } from '../data/leadersData.ts'
import { ImageViewer } from '../components/media/ImageViewer.tsx'
import { LazyImage } from '../components/ui/LazyImage.tsx'
import type { GalleryItem } from '../types/index.ts'

const filters: (GalleryItem['category'] | 'All')[] = ['All', 'Movement', 'Community', 'Campaign']

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryItem['category'] | 'All'>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const filtered = useMemo(() => filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter), [filter])
  return <><SEO title="Gallery" description="See the people, places, and public work shaping the Bharatiya Mitra Party movement." path="/gallery" /><PageIntro eyebrow="Gallery" title="A movement looks like people showing up." description="Photos from the streets, rooms, workshops, and moments that make this work real." image="https://images.unsplash.com/photo-1594259345545-118e10dc972c?auto=format&fit=crop&w=1800&q=85" /><section className="bg-civic-white py-20 md:py-28"><div className="page-container"><div className="flex gap-2 overflow-x-auto pb-8">{filters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold ${filter === item ? 'border-movement-navy bg-movement-navy text-white' : 'border-border bg-white text-slate hover:border-movement-navy'}`}>{item}</button>)}</div><div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{filtered.map((item, index) => <button type="button" key={item.id} onClick={() => setActiveIndex(index)} className="group mb-4 block w-full overflow-hidden rounded-3xl bg-movement-navy text-left"><div className={`relative ${index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-[1/1]' : 'aspect-[4/3]'}`}><LazyImage src={item.image.src} alt={item.image.alt} wrapperClassName="absolute inset-0" className="group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-movement-navy/85 via-transparent to-transparent opacity-80" /><div className="absolute bottom-0 left-0 right-0 p-5"><p className="text-xs font-bold uppercase tracking-[0.12em] text-blaze-orange">{item.category}</p><p className="mt-2 text-lg font-bold text-white">{item.title}</p></div></div></button>)}</div></div></section><ImageViewer items={filtered} index={activeIndex} onChange={setActiveIndex} onClose={() => setActiveIndex(null)} /></>
}
