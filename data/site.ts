export type Weekday =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type DaySchedule = { open: string; close: string } | { mode: 'appointment' } | null;

export const openingHours: Record<Weekday, DaySchedule> = {
  Monday: null,
  Tuesday: { open: '10:00', close: '19:00' },
  Wednesday: { open: '10:00', close: '21:00' },
  Thursday: { open: '10:00', close: '20:00' },
  Friday: { open: '10:00', close: '20:00' },
  Saturday: { mode: 'appointment' },
  Sunday: { mode: 'appointment' }
};

export const holidayOverrides = [{ date: '2026-12-24', label: 'Christmas Eve', closed: true }];

export const services = [
  { category: 'Haircut', title: 'Signature Precision Cut', priceFrom: 85, duration: 75 },
  { category: 'Coloring', title: 'Luminous Balayage', priceFrom: 210, duration: 180 },
  { category: 'Treatment', title: 'Keratin Restoration Ritual', priceFrom: 140, duration: 90 },
  { category: 'Perm', title: 'Soft Wave Korean Perm', priceFrom: 230, duration: 180 },
  { category: 'Styling', title: 'Editorial Blowout', priceFrom: 95, duration: 60 },
  { category: 'Scalp Care', title: 'Scalp Detox Ceremony', priceFrom: 120, duration: 75 }
] as const;

export const stylists = [
  {
    name: 'Aiko Tanaka',
    experience: 12,
    specialties: ['Japanese precision cuts', 'Gloss coloring'],
    intro: 'Fashion-week trained stylist known for elegant movement and bespoke silhouettes.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    instagram: '#'
  },
  {
    name: 'Elena Rossi',
    experience: 9,
    specialties: ['Luxury balayage', 'Bridal styling'],
    intro: 'Creates soft dimensional color and timeless bridal hair with couture-level finishing.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    instagram: '#'
  },
  {
    name: 'Minho Park',
    experience: 10,
    specialties: ['Korean perms', 'Men transformations'],
    intro: 'Specialist in modern Korean texture work and trend-forward masculine styling.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    instagram: '#'
  }
] as const;

export const testimonials = [
  {
    name: 'Sophie L.',
    quote: 'Every detail felt couture. The color blend was flawless and lasted beautifully.',
    stars: 5
  },
  {
    name: 'Daniel K.',
    quote: 'Best men’s cut I have had in Stockholm. Refined, precise, and effortless.',
    stars: 5
  },
  {
    name: 'Mina T.',
    quote: 'The salon ambience is pure luxury and the team reads your style instantly.',
    stars: 5
  }
] as const;

export const galleryItems = [
  { id: 1, category: 'Women', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80', before: true },
  { id: 2, category: 'Men', image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1000&q=80' },
  { id: 3, category: 'Coloring', image: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=1000&q=80' },
  { id: 4, category: 'Korean Style', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80' },
  { id: 5, category: 'Japanese Style', image: 'https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?auto=format&fit=crop&w=1000&q=80' },
  { id: 6, category: 'Perm', image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1000&q=80' },
  { id: 7, category: 'Short Hair', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=80' },
  { id: 8, category: 'Long Hair', image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1000&q=80' },
  { id: 9, category: 'Wedding', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80' },
  { id: 10, category: 'Trendy Styles', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=80' }
] as const;

export const faq = [
  { q: 'How far in advance should I book?', a: 'For prime evening and weekend slots, 1-2 weeks is recommended.' },
  { q: 'What is your cancellation policy?', a: 'Changes within 24 hours may incur 50% of the booked service fee.' },
  { q: 'Do you offer consultations?', a: 'Yes, we offer personalized consultations before color and treatment services.' },
  { q: 'What payment methods do you accept?', a: 'All major cards, Apple Pay, and selected digital wallets are accepted.' }
];

export const promotions = [
  { title: 'Summer Silk Campaign', subtitle: 'Complimentary gloss upgrade with selected color rituals.' }
];
