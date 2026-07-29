import { Search, SlidersHorizontal } from 'lucide-react'

export function SearchBar({ value, onChange, placeholder = 'Search', label = 'Search' }: { value: string; onChange: (value: string) => void; placeholder?: string; label?: string }) {
  return <label className="relative block"><span className="sr-only">{label}</span><Search aria-hidden="true" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate" /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-12 w-full rounded-full border border-border bg-white pl-11 pr-12 text-sm text-ink placeholder:text-slate/70 focus:border-blaze-orange focus:outline-none focus:ring-4 focus:ring-blaze-orange/10" /><SlidersHorizontal aria-hidden="true" size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate" /></label>
}
