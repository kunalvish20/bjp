const responsiveWidths = [320, 480, 640, 800, 960, 1200, 1400]

const localImageSets: Record<string, string> = {
  '/Banner_image.jpg': '/Banner_image-960.jpg 960w, /Banner_image-1280.jpg 1280w, /Banner_image.jpg 1691w',
  '/Bmp.jpg': '/Bmp-640.jpg 640w, /Bmp-960.jpg 960w, /Bmp.jpg 1254w',
  '/confrence.jpg': '/confrence-640.jpg 640w, /confrence-960.jpg 960w, /confrence.jpg 1254w',
}

function getUrlWidth(url: URL) {
  const width = Number(url.searchParams.get('w'))
  return Number.isFinite(width) && width > 0 ? width : 1200
}

export function getImageSrcSet(src?: string) {
  if (!src) return undefined
  if (localImageSets[src]) return localImageSets[src]

  try {
    const url = new URL(src)
    const isSupportedRemote = url.hostname.includes('images.unsplash.com') || url.hostname.includes('images.pexels.com')
    if (!isSupportedRemote) return undefined

    const maxWidth = getUrlWidth(url)
    return responsiveWidths
      .filter((width) => width <= maxWidth)
      .concat(maxWidth)
      .filter((width, index, widths) => widths.indexOf(width) === index)
      .map((width) => {
        const nextUrl = new URL(url)
        nextUrl.searchParams.set('w', String(width))
        return `${nextUrl.toString()} ${width}w`
      })
      .join(', ')
  } catch {
    return undefined
  }
}

export const defaultImageSizes = '(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 33vw'
