import { X } from 'lucide-react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [open, onClose])

  if (!open) return null
  return createPortal(<div className="fixed inset-0 z-[100] flex items-center justify-center bg-movement-navy/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}>
    <div className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white p-6 shadow-civic md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4"><h2 className="display-heading text-2xl font-bold text-movement-navy">{title}</h2><button type="button" aria-label="Close dialog" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mist text-movement-navy hover:bg-blaze-orange hover:text-white"><X size={19} aria-hidden="true" /></button></div>
      {children}
    </div>
  </div>, document.body)
}
