import type { ReactNode } from 'react'

export function FormField({ label, error, hint, children }: { label: string; error?: string; hint?: string; children: ReactNode }) {
  return <div><label className="mb-2 block text-sm font-bold text-movement-navy">{label}</label>{children}{hint ? <p className="mt-2 text-xs text-slate">{hint}</p> : null}{error ? <p role="alert" className="mt-2 text-xs font-semibold text-red-700">{error}</p> : null}</div>
}

export const fieldClassName = 'h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-ink placeholder:text-slate/60 focus:border-blaze-orange focus:outline-none focus:ring-4 focus:ring-blaze-orange/10'
export const textareaClassName = 'min-h-32 w-full resize-y rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-slate/60 focus:border-blaze-orange focus:outline-none focus:ring-4 focus:ring-blaze-orange/10'
