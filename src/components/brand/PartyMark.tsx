type PartyMarkProps = {
  compact?: boolean
}

export function PartyMark({ compact = false }: PartyMarkProps) {
  return (
    <span data-bilingual-skip="true" className={`inline-flex items-center gap-2.5 ${compact ? 'scale-90 origin-left' : ''}`}>
      <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-party-saffron bg-party-cream text-center shadow-[0_2px_0_rgba(0,60,36,0.08)]">
        <span className="absolute inset-1 rounded-full border border-party-green" aria-hidden="true" />
        <span className="relative text-[0.45rem] font-black leading-[1.05] text-party-green">भारत<br />मित्र</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[0.92rem] font-bold tracking-[-0.03em] text-party-red">भारतीय मित्र पार्टी</span>
        <span className="mt-1 block text-[0.58rem] font-black uppercase tracking-[0.14em] text-party-forest">Bharatiya Mitra Party</span>
      </span>
    </span>
  )
}
