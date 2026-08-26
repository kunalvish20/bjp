import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes.tsx'

const BilingualText = lazy(() => import('./components/i18n/BilingualText.tsx').then((module) => ({ default: module.BilingualText })))

export default function App() {
  const [loadBilingualText, setLoadBilingualText] = useState(false)

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
      cancelIdleCallback?: (handle: number) => void
    }

    if (win.requestIdleCallback) {
      const handle = win.requestIdleCallback(() => setLoadBilingualText(true), { timeout: 1800 })
      return () => win.cancelIdleCallback?.(handle)
    }

    const handle = window.setTimeout(() => setLoadBilingualText(true), 900)
    return () => window.clearTimeout(handle)
  }, [])

  return (
    <BrowserRouter>
      {loadBilingualText ? <Suspense fallback={null}><BilingualText /></Suspense> : null}
      <AppRoutes />
    </BrowserRouter>
  )
}
