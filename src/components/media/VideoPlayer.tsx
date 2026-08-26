import { Play } from 'lucide-react'
import { useState } from 'react'
import { getImageSrcSet } from '../../utils/imageSources.ts'
import { Modal } from '../ui/Modal.tsx'

const poster = 'https://images.unsplash.com/photo-1698270723454-a2c84bfb61c0?auto=format&fit=crop&w=1200&q=76'

export function VideoPlayer() {
  const [open, setOpen] = useState(false)
  const posterSrcSet = getImageSrcSet(poster)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-movement-navy text-left">
        <img
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={poster}
          srcSet={posterSrcSet}
          sizes="(max-width: 1024px) 92vw, 66vw"
          alt="Speaker at a public gathering"
          className="h-full w-full object-cover opacity-65 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-movement-navy/90 via-movement-navy/15 to-transparent" />
        <span className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">Featured video</span>
        <span className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
          <span>
            <span className="display-heading block text-2xl font-bold text-white sm:text-4xl">A credible politics is an accountable politics</span>
            <span className="mt-2 block text-sm text-white/65">National press conference - 18 Jul 2026</span>
          </span>
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blaze-orange text-white">
            <Play fill="currentColor" size={21} className="ml-1" />
          </span>
        </span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Featured video">
        <div className="aspect-video overflow-hidden rounded-2xl bg-movement-navy">
          <video controls autoPlay preload="none" className="h-full w-full" poster={poster}>
            <source src="https://videos.pexels.com/video-files/31022068/13259705_640_360_30fps.mp4" type="video/mp4" />
          </video>
        </div>
      </Modal>
    </>
  )
}
