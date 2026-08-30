export interface ImageAsset {
  src: string
  alt: string
  credit?: string
}

export interface NewsItem {
  id: string
  title: string
  titleHi: string
  excerpt: string
  excerptHi: string
  date: string
  category: NewsCategory
  image: ImageAsset
  readTime: string
  body: {
    en: string
    hi: string
  }[]
  sources: {
    label: string
    url: string
  }[]
}

export interface EventItem {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: string
}

export interface Leader {
  id: string
  name: string
  role: string
  group: TeamGroup
  bio: string
  image: ImageAsset
}

export interface Office {
  id: string
  name: string
  type: OfficeType
  address: string
  phone: string
  email: string
  region: string
}

export interface GalleryItem {
  id: string
  title: string
  category: 'Movement' | 'Community' | 'Campaign'
  image: ImageAsset
}

export interface PolicyPillar {
  id: string
  title: string
  summary: string
  icon: string
  color: string
}

export type NewsCategory = 'All' | 'Governance' | 'National' | 'Alliance'
export type TeamGroup = 'Founder' | 'National Team' | 'State Team' | 'District Team' | 'Youth Wing'
export type OfficeType = 'National Office' | 'State Office' | 'District Office'
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
