import { LoaderCircle } from 'lucide-react'

export function RouteLoader() {
  return <div className="flex min-h-[60vh] items-center justify-center bg-civic-white text-blaze-orange"><LoaderCircle className="animate-spin" size={30} aria-label="Loading page" /></div>
}
