import { CheckCircle2, X } from 'lucide-react'

export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return <div role="status" aria-live="polite" className="fixed bottom-6 right-5 z-[120] flex max-w-sm items-center gap-3 border border-party-line bg-white px-4 py-3 text-sm font-bold text-party-forest shadow-civic"><CheckCircle2 className="shrink-0 text-party-green" size={20} aria-hidden="true" /><span>{message}</span><button type="button" aria-label="Dismiss notification" onClick={onClose} className="ml-auto text-party-ink/55 hover:text-party-forest"><X size={17} /></button></div>
}
