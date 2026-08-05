import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell.tsx'
import { RouteLoader } from './RouteLoader.tsx'

const Home = lazy(() => import('../pages/Home.tsx'))
const DemoHome = lazy(() => import('../pages/demohome.jsx'))
const About = lazy(() => import('../pages/About.tsx'))
const Founder = lazy(() => import('../pages/Founder.tsx'))
const VisionMission = lazy(() => import('../pages/VisionMission.tsx'))
const History = lazy(() => import('../pages/History.tsx'))
const Leadership = lazy(() => import('../pages/Leadership.tsx'))
const Join = lazy(() => import('../pages/Join.tsx'))
const News = lazy(() => import('../pages/News.tsx'))
const NewsDetail = lazy(() => import('../pages/NewsDetail.tsx'))
const Events = lazy(() => import('../pages/Events.tsx'))
const Gallery = lazy(() => import('../pages/Gallery.tsx'))
const Manifesto = lazy(() => import('../pages/Manifesto.tsx'))
const PublicIssues = lazy(() => import('../pages/PublicIssues.tsx'))
const Donate = lazy(() => import('../pages/Donate.tsx'))
const Contact = lazy(() => import('../pages/Contact.tsx'))
const Offices = lazy(() => import('../pages/Offices.tsx'))
const MediaCentre = lazy(() => import('../pages/MediaCentre.tsx'))
const NotFound = lazy(() => import('../pages/NotFound.tsx'))

export function AppRoutes() {
  return <Suspense fallback={<RouteLoader />}><Routes><Route path="/demohome" element={<DemoHome />} /><Route element={<AppShell />}><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/founder" element={<Founder />} /><Route path="/vision-mission" element={<VisionMission />} /><Route path="/history" element={<History />} /><Route path="/leadership" element={<Leadership />} /><Route path="/join" element={<Join />} /><Route path="/news" element={<News />} /><Route path="/news/:newsId" element={<NewsDetail />} /><Route path="/events" element={<Events />} /><Route path="/gallery" element={<Gallery />} /><Route path="/manifesto" element={<Manifesto />} /><Route path="/public-issues" element={<PublicIssues />} /><Route path="/donate" element={<Donate />} /><Route path="/contact" element={<Contact />} /><Route path="/offices" element={<Offices />} /><Route path="/media-centre" element={<MediaCentre />} /><Route path="/404" element={<NotFound />} /><Route path="*" element={<Navigate to="/404" replace />} /></Route></Routes></Suspense>
}
