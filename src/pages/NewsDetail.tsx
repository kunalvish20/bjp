import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { SEO } from '../components/seo/SEO.tsx'
import { newsItems } from '../data/newsData.ts'
import { LazyImage } from '../components/ui/LazyImage.tsx'
import { formatEventDate } from '../utils/formatters.ts'
import { NotFoundContent } from './NotFound.tsx'

export default function NewsDetail() {
  const { newsId } = useParams()
  const item = newsItems.find((news) => news.id === newsId)

  if (!item) return <NotFoundContent />

  return (
    <>
      <SEO title={item.title} description={item.excerpt} path={`/news/${item.id}`} />
      <article className="bg-civic-white pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="page-container">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-movement-navy hover:text-blaze-orange"
          >
            <ArrowLeft size={16} />
            Back to newsroom
          </Link>
          <div className="mt-9 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <span className="eyebrow">{item.category}</span>
              <h1 className="display-heading mt-5 text-4xl font-bold leading-tight text-movement-navy sm:text-5xl lg:text-6xl">
                {item.title}
              </h1>
              <p lang="hi" className="mt-4 max-w-3xl text-2xl font-bold leading-snug text-movement-navy/75">
                {item.titleHi}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate">
                <span>{formatEventDate(item.date)}</span>
                <span className="h-1 w-1 rounded-full bg-blaze-orange" />
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} />
                  {item.readTime}
                </span>
              </div>
            </div>
            <div className="max-w-xl text-xl leading-8 text-slate">
              <p>{item.excerpt}</p>
              <p lang="hi" className="mt-4 text-lg leading-8 text-slate/85">
                {item.excerptHi}
              </p>
            </div>
          </div>
          <LazyImage src={item.image.src} alt={item.image.alt} wrapperClassName="mt-12 aspect-[16/8] rounded-3xl" />
        </div>

        <div className="page-container mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit rounded-3xl border border-border bg-white p-6 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate">Share this story</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://www.instagram.com/bhartiyamitraparty?igsi=aHZjYjM0NHZqOWxh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-mist px-4 py-2 text-sm font-bold text-movement-navy"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1P1ko7Hh9T/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-mist px-4 py-2 text-sm font-bold text-movement-navy"
              >
                Facebook
              </a>
              <a
                href="https://x.com/DhaneshwarBMP"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-mist px-4 py-2 text-sm font-bold text-movement-navy"
              >
                X
              </a>
              <a
                href="https://youtube.com/@bhartiyamitrapartybmp?si=7qfx77PMcBgPv7nT"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-mist px-4 py-2 text-sm font-bold text-movement-navy"
              >
                YouTube
              </a>
            </div>
          </aside>
          <div className="max-w-3xl text-slate">
            <div className="space-y-8 text-lg leading-8">
              {item.body.map((paragraph) => (
                <section key={paragraph.en} className="space-y-3">
                  <p>{paragraph.en}</p>
                  <p lang="hi" className="text-base leading-8 text-slate/85">
                    {paragraph.hi}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-7">
              <h2 className="display-heading text-2xl font-bold text-movement-navy">Sources</h2>
              <div className="mt-4 flex flex-col gap-3">
                {item.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-movement-navy underline decoration-blaze-orange decoration-2 underline-offset-8 hover:text-blaze-orange"
                  >
                    {source.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-slate">{item.image.credit}</p>
              <p className="mt-5 border-l-4 border-blaze-orange bg-white p-5 text-sm leading-6 text-slate">
                Editorial note: contested political allegations are attributed to reporting, critics, agencies, reports,
                or court records, and are not presented as proven guilt unless supported by an official finding or court
                ruling.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
