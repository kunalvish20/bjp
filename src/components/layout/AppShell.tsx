import { Outlet } from 'react-router-dom'
import { AnnouncementBar } from './AnnouncementBar.tsx'
import { FloatingActions } from './FloatingActions.tsx'
import { Footer } from './Footer.tsx'
import { Navbar } from './Navbar.tsx'
import { ScrollToTop } from './ScrollToTop.tsx'

export function AppShell() {
  return <div className="min-h-screen bg-civic-white"><ScrollToTop /><AnnouncementBar /><Navbar /><main><Outlet /></main><Footer /><FloatingActions /></div>
}
