type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & { wrapperClassName?: string }

export function LazyImage({ wrapperClassName = '', className = '', alt, style, ...props }: LazyImageProps) {
  return (
    <div className={`overflow-hidden bg-party-line ${wrapperClassName}`}>
      <img
        loading="lazy"
        decoding="async"
        alt={alt}
        style={{ width: '100%', height: '100%', ...style }}
        className={`h-full w-full object-cover transition duration-500 ${className}`}
        {...props}
      />
    </div>
  )
}
