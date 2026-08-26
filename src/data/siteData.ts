import type { EventItem, Office, PolicyPillar } from '../types/index.ts'

export const heroSlides = [
  {
    id: 'listen',
    kicker: 'A new chapter for public life',
    title: 'Politics that starts by listening.',
    description: 'We are building a people-powered India where every neighbourhood has a voice and every promise has a plan.',
    image: 'https://images.unsplash.com/photo-1695290513916-8b4048b1ffaf?auto=format&fit=crop&w=1800&q=85',
    alt: 'A large crowd gathered at a peaceful evening rally',
    cta: 'Our vision',
    to: '/vision-mission',
  },
  {
    id: 'together',
    kicker: 'The work is already underway',
    title: 'Progress is a team sport.',
    description: 'From classrooms to city councils, ordinary citizens are turning shared concerns into practical action.',
    image: 'https://images.unsplash.com/photo-1780893008365-39faf050a128?auto=format&fit=crop&w=1800&q=85',
    alt: 'Volunteers meeting neighbours in a community',
    cta: 'See the movement',
    to: '/about',
  },
  {
    id: 'courage',
    kicker: 'A credible alternative',
    title: 'Courage to do the useful thing.',
    description: 'Our manifesto is a practical promise: capable institutions, shared prosperity, and dignity in everyday life.',
    image: 'https://images.unsplash.com/photo-1668701061265-94160b3c225b?auto=format&fit=crop&w=1800&q=85',
    alt: 'A speaker addressing citizens with a microphone',
    cta: 'Read the manifesto',
    to: '/manifesto',
  },
]

export const events: EventItem[] = [
  { id: 'e1', title: 'Jan Samvaad: Listening tour', date: '2026-08-05', time: '10:00 AM', location: 'Ramlila Maidan, New Delhi', type: 'Public meeting' },
  { id: 'e2', title: 'Youth policy lab', date: '2026-08-10', time: '4:00 PM', location: 'Bengaluru & online', type: 'Workshop' },
  { id: 'e3', title: 'Nagrik fellowship orientation', date: '2026-08-18', time: '11:30 AM', location: 'Pune Civic Centre', type: 'Orientation' },
]

export const policyPillars: PolicyPillar[] = [
  { id: 'p1', title: 'Dignity in every home', summary: 'Reliable public services, safe streets, and a government that treats time as precious.', icon: 'HeartHandshake', color: 'bg-orange-50 text-blaze-orange' },
  { id: 'p2', title: 'Work that moves people forward', summary: 'Small businesses, local manufacturing, and skills that turn ambition into mobility.', icon: 'BriefcaseBusiness', color: 'bg-blue-50 text-movement-navy' },
  { id: 'p3', title: 'Institutions that earn trust', summary: 'Transparent decisions, open data, and public offices that answer to the public.', icon: 'ShieldCheck', color: 'bg-emerald-50 text-civic-green' },
  { id: 'p4', title: 'A future we share', summary: 'Climate-ready neighbourhoods and infrastructure built for the next generation.', icon: 'Sparkles', color: 'bg-amber-50 text-amber-700' },
]

export const offices: Office[] = [
  { id: 'o1', name: 'National Office', type: 'National Office', region: 'Patna', address: '4th Floor, धनेश इलेक्ट्रॉनिक, बाकड़गंज, गोला रोड, पटना – 800004', phone: '9334368012', email: 'bhartiyamitrapartybmp@gmail.com' },
  { id: 'o2', name: 'Karnataka State Office', type: 'State Office', region: 'Bengaluru', address: '22, Residency Road, Bengaluru 560025', phone: '9334368012', email: 'bhartiyamitrapartybmp@gmail.com' },
  { id: 'o3', name: 'Maharashtra State Office', type: 'State Office', region: 'Pune', address: '7, Senapati Bapat Road, Pune 411016', phone: '9334368012', email: 'bhartiyamitrapartybmp@gmail.com' },
  { id: 'o4', name: 'Jaipur District Office', type: 'District Office', region: 'Jaipur', address: '4, Civil Lines Extension, Jaipur 302006', phone: '9334368012', email: 'bhartiyamitrapartybmp@gmail.com' },
]

export const faqs = [
  { question: 'Who can join Bharatiya Mitra Party?', answer: 'Any Indian citizen above 18 who believes in our values can join. There is no fee to become a member and no prior political experience is required.' },
  { question: 'How can I volunteer locally?', answer: 'Choose your city in the membership form and tell us what you care about. A local organiser will reach out with a small, practical first step.' },
  { question: 'How do you use donations?', answer: 'Donations fund community listening, volunteer training, policy research, and transparent public campaigns. Every contribution is recorded and reviewed under our public finance policy.' },
  { question: 'Can I submit a public issue?', answer: 'Yes. Use the contact form or join a local listening circle. We publish issue notes so the public can follow how ideas move from conversation to action.' },
]
