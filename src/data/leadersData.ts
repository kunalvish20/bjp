import type { GalleryItem, Leader } from '../types/index.ts'

const portraits = {
  president: { src: '/leader-image.png', alt: 'Dhaneshwar Mahto greeting with folded hands' },
  ananya: { src: 'https://images.unsplash.com/photo-1593055473884-966a01abbe03?auto=format&fit=crop&w=700&q=85', alt: 'Tandem X Visuals on Unsplash — a community advocate holding a placard' },
  kabir: { src: 'https://images.unsplash.com/photo-1561504221-3ad2c77a1c30?auto=format&fit=crop&w=700&q=85', alt: 'ALMIGHTY DUCK on Unsplash — a young organiser at a night gathering' },
  meera: { src: 'https://images.unsplash.com/photo-1773227059334-38d10a9075f2?auto=format&fit=crop&w=700&q=85', alt: 'Age Cymru on Unsplash — a smiling elder meeting a volunteer' },
}

export const leaders: Leader[] = [
  { id: 'l1', name: 'Dhaneshwar Mahto', role: 'National President & Founder', group: 'Founder', bio: 'Dhaneshwar Mahto is the founder and national president of Bharatiya Mitra Party.', image: portraits.president },
  { id: 'l2', name: 'Ananya Rao', role: 'National Convenor, Cities', group: 'National Team', bio: 'Ananya leads our urban practice, bringing together local government, design, and the everyday expertise of residents.', image: portraits.ananya },
  { id: 'l3', name: 'Kabir Khan', role: 'National Convenor, Youth', group: 'Youth Wing', bio: 'Kabir works with young people to turn frustration into a practical civic apprenticeship across campuses and neighbourhoods.', image: portraits.kabir },
  { id: 'l4', name: 'Meera Joseph', role: 'State Lead, Kerala', group: 'State Team', bio: 'Meera is a community health organiser who believes that public trust is built one reliable service at a time.', image: portraits.meera },
  { id: 'l5', name: 'Devika Nair', role: 'District Lead, Pune', group: 'District Team', bio: 'Devika coordinates local listening circles and volunteer action on safer streets and accessible public spaces.', image: portraits.ananya },
  { id: 'l6', name: 'Rishabh Sen', role: 'State Lead, Rajasthan', group: 'State Team', bio: 'Rishabh works with farmers, small businesses, and young organisers to make local economies more resilient.', image: portraits.kabir },
]

export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'A public meeting in Jaipur', category: 'Movement', image: { src: 'https://images.unsplash.com/photo-1704703337823-d9165d05be13?auto=format&fit=crop&w=1000&q=80', alt: 'Abdul Ridwan on Unsplash — a large public gathering at dusk' } },
  { id: 'g2', title: 'Listening in the lane', category: 'Community', image: { src: 'https://images.unsplash.com/photo-1783867175699-344ac981e0fd?auto=format&fit=crop&w=1000&q=80', alt: 'Tri Vo on Unsplash — neighbours meeting outdoors' } },
  { id: 'g3', title: 'A shared sign for a shared future', category: 'Campaign', image: { src: 'https://images.unsplash.com/photo-1594259345545-118e10dc972c?auto=format&fit=crop&w=1000&q=80', alt: 'Ben den Engelsen on Unsplash — diverse supporters holding signs' } },
  { id: 'g4', title: 'Hands that keep showing up', category: 'Community', image: { src: 'https://images.unsplash.com/photo-1582703193182-f52bdbc477b0?auto=format&fit=crop&w=1000&q=80', alt: 'Markus Spiske on Unsplash — hands clapping in solidarity' } },
  { id: 'g5', title: 'Youth policy lab', category: 'Movement', image: { src: 'https://images.unsplash.com/photo-1761456402495-766e23a05e21?auto=format&fit=crop&w=1000&q=80', alt: 'Hoang Bui on Unsplash — a group of people holding a sign together' } },
  { id: 'g6', title: 'A city made of citizens', category: 'Campaign', image: { src: 'https://images.unsplash.com/photo-1574936911847-adaa51549f3e?auto=format&fit=crop&w=1000&q=80', alt: 'Bagir Bahana on Unsplash — people gathered in a city street' } },
]
