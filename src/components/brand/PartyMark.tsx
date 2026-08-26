type PartyMarkProps = {
  compact?: boolean
  size?: 'default' | 'footer'
}

export function PartyMark({ compact = false, size = 'default' }: PartyMarkProps) {
  const imageClassName = size === 'footer' ? 'h-24 sm:h-28' : compact ? 'h-14' : 'h-[4.4rem] sm:h-20 xl:h-[5.25rem]'

  return (
    <span data-bilingual-skip="true" className={`inline-flex items-center ${compact ? 'scale-90 origin-left' : ''}`}>
      <img
        src="/Logo_bmp.webp"
        alt="Bharatiya Mitra Party"
        width="180"
        height="72"
        className={`${imageClassName} w-auto object-contain`}
      />
    </span>
  )
}
