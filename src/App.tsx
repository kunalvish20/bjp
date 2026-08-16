import { BrowserRouter } from 'react-router-dom'
import { BilingualText } from './components/i18n/BilingualText.tsx'
import { AppRoutes } from './routes/AppRoutes.tsx'

export default function App() {
  return <BrowserRouter><BilingualText /><AppRoutes /></BrowserRouter>
}
