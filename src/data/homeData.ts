import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  CalendarDays,
  Eye,
  FileText,
  Handshake,
  HeartHandshake,
  Newspaper,
  PhoneCall,
  UserPlus,
  UsersRound,
} from 'lucide-react'

export interface HomeImage {
  src: string
  alt: string
}

export interface HeroSlide {
  id: string
  kicker: string
  title: string
  highlight: string
  description: string
  image: HomeImage
}

export interface QuickAction {
  label: string
  hindi: string
  to: string
  icon: LucideIcon
}

export interface HomeUpdate {
  title: string
  hindi: string
  date: string
  type: string
  image: HomeImage
  to: string
}

export interface ExploreCard {
  title: string
  hindi: string
  image: HomeImage
  to: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'together',
    kicker: 'For India, with India',
    title: 'Together for',
    highlight: 'Development & Unity',
    description: 'Development with trust - a party for people, by people.',
    image: {
      src: 'https://images.unsplash.com/photo-1695042849689-f682ec337576?auto=format&fit=crop&w=1800&q=85',
      alt: 'Prakhar Sharma on Unsplash - Indian tricolour flags rising over a public gathering',
    },
  },
  {
    id: 'people',
    kicker: 'जनता की आवाज, देश की ताकत',
    title: 'A stronger India',
    highlight: 'starts with us.',
    description: 'We listen, we serve, and we build together in every neighbourhood.',
    image: {
      src: 'https://images.unsplash.com/photo-1632261811725-4697edf73a48?auto=format&fit=crop&w=1800&q=85',
      alt: 'Rupinder Singh on Unsplash - people carrying flags together at a public rally',
    },
  },
  {
    id: 'voice',
    kicker: 'एकता में शक्ति',
    title: 'Your voice,',
    highlight: 'our shared future.',
    description: 'Join a transparent, inclusive movement working for every Indian family.',
    image: {
      src: 'https://images.unsplash.com/photo-1660855642625-709a93302f21?auto=format&fit=crop&w=1800&q=85',
      alt: 'Graphic Gears on Unsplash - a person holding an Indian flag above a city',
    },
  },
]

export const quickActions: QuickAction[] = [
  { label: 'About Party', hindi: 'हमारे बारे में', to: '/about', icon: UsersRound },
  { label: 'Sankalp Patra', hindi: 'संकल्प पत्र', to: '/sankalp-patra', icon: FileText },
  { label: 'Vision & Mission', hindi: 'दृष्टि और मिशन', to: '/vision-mission', icon: Eye },
  { label: 'Leadership', hindi: 'नेतृत्व', to: '/leadership', icon: Handshake },
  { label: 'Join our Party', hindi: 'पार्टी से जुड़ें', to: '/join', icon: UserPlus },
  { label: 'News & Media', hindi: 'समाचार और मीडिया', to: '/media-centre', icon: Newspaper },
  { label: 'Events', hindi: 'आयोजन', to: '/events', icon: CalendarDays },
  { label: 'Contact Us', hindi: 'संपर्क करें', to: '/contact', icon: PhoneCall },
]

export const presidentImage: HomeImage = {
  src: '/Hero-image.png',
  alt: 'Bharatiya Mitra Party leader greeting with folded hands',
}

export const homeUpdates: HomeUpdate[] = [
  {
    title: 'AAP Delhi: Welfare Promise Faces Funding and Rollout Questions',
    hindi: 'AAP दिल्ली: कल्याणकारी वादे पर फंडिंग और अमल के सवाल',
    date: '2026-08-29',
    type: 'Latest News',
    image: {
      src: '/AAP Delhi Welfare.webp',
      alt: 'Illustrative image for the AAP Delhi welfare funding explainer',
    },
    to: '/news/n1',
  },
  {
    title: 'National conference on development and unity',
    hindi: 'विकास और एकता राष्ट्रीय सम्मेलन',
    date: 'May 25, 2026',
    type: 'Upcoming Event',
    image: {
      src: 'https://images.pexels.com/photos/8819342/pexels-photo-8819342.jpeg?auto=compress&cs=tinysrgb&w=900',
      alt: 'Yan Krukau on Pexels - diverse people meeting together',
    },
    to: '/events',
  },
  {
    title: 'People first: moments from the field',
    hindi: 'जनता के बीच, जनता के साथ',
    date: 'May 05, 2026',
    type: 'Photo Gallery',
    image: {
      src: 'https://images.unsplash.com/photo-1704703337823-d9165d05be13?auto=format&fit=crop&w=900&q=80',
      alt: 'Abdul Ridwan on Unsplash - a public meeting at dusk',
    },
    to: '/gallery',
  },
]

const originalLatestNewsImage: HomeImage = {
  src: '/image11.png',
  alt: 'Public gathering with a Hindi unity, progress, and public service placard',
}

export const exploreCards: ExploreCard[] = [
  {
    title: 'Join our Party',
    hindi: 'पार्टी से जुड़ें',
    image: {
      src: 'https://images.pexels.com/photos/5029923/pexels-photo-5029923.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Anna Shvets on Pexels - volunteers planting a tree together',
    },
    to: '/join',
  },
  {
    title: 'Social Activities',
    hindi: 'सामाजिक गतिविधियां',
    image: {
      src: 'https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'RDNE Stock project on Pexels - a diverse volunteer group working together',
    },
    to: '/about',
  },
  {
    title: 'Donate to Support',
    hindi: 'सहयोग करें',
    image: {
      src: 'https://images.pexels.com/photos/10905774/pexels-photo-10905774.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Atlantic Ambience on Pexels - hands holding a red heart',
    },
    to: '/donate',
  },
  {
    title: 'Our Offices',
    hindi: 'हमारे कार्यालय',
    image: {
      src: 'https://images.pexels.com/photos/36926207/pexels-photo-36926207.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Deekshith Rao on Pexels - modern civic office architecture',
    },
    to: '/offices',
  },
  {
    title: 'Achievements',
    hindi: 'उपलब्धियां',
    image: {
      src: 'https://images.pexels.com/photos/10435675/pexels-photo-10435675.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Josiah Matthew on Pexels - a golden trophy on a decorated stage',
    },
    to: '/news',
  },
  {
    title: 'Connect with Us',
    hindi: 'हमसे जुड़ें',
    image: {
      src: 'https://images.pexels.com/photos/7787287/pexels-photo-7787287.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ravi Roshan on Pexels - a person holding a smartphone with social apps',
    },
    to: '/contact',
  },
]

export const galleryImages: HomeImage[] = [
  originalLatestNewsImage,
  exploreCards[0].image,
  exploreCards[1].image,
  exploreCards[2].image,
  homeUpdates[2].image,
  exploreCards[4].image,
  exploreCards[5].image,
]

export const impactStats = [
  { value: '25+', label: 'Years of Trust', icon: HeartHandshake },
  { value: '500+', label: 'Events Organized', icon: CalendarDays },
  { value: '10+', label: 'People Connected', icon: UsersRound },
  { value: '28', label: 'States Represented', icon: Building2 },
]
