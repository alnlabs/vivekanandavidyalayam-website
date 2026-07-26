/**
 * Vivekananda Vidyalayam — content aligned with Eternal Heritage / Stitch designs.
 */

export const site = {
  name: 'Vivekananda Vidyalayam',
  url: 'https://vivekanandavidyalayam.com',
  brandSubtitle: 'Arise ● Awake ● Achieve',
  description:
    'Vivekananda Vidyalayam was a school in Vangoor, Nagarkurnool district, Telangana (LKG to Class 7), inspired by Swami Vivekananda. The school has closed; its alumni community continues online.',
  keywords: [
    'Vivekananda Vidyalayam',
    'Vangoor',
    'Nagarkurnool',
    'Vivekananda Vidyalayam alumni',
    '509349',
  ],

  grades: 'LKG to Class 7',
  village: 'Vangoor',
  villageAlt: 'Vangooru',
  district: 'Nagarkurnool',
  state: 'Telangana',
  pincode: '509349',
  alumniUrl: 'https://alumni.alnlabs.com',
  locale: 'en_IN',

  geo: {
    latitude: 16.48,
    longitude: 78.32,
    region: 'IN-TG',
    locality: 'Vangoor, Nagarkurnool',
  },

  nav: [
    { label: 'History', href: '/#history' },
    { label: 'Inspiration', href: '/#inspiration' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Directory', href: '/directory' },
  ],

  hero: {
    kicker: 'Est. Vangoor, Nagarkurnool',
    title: 'Vivekananda Vidyalayam:',
    titleLine2: 'A Legacy of Light',
    lead: 'A closed legacy institution that nurtured intellect and character through the teachings of Swami Vivekananda — from LKG to Class 7 in the heart of Vangoor.',
    cta: 'Explore our journey',
  },

  history: {
    title: 'Our Roots in Vangoor',
    body: 'In Vangoor Mandal, Nagarkurnool district, the school was a beacon for village children — teaching LKG to Class 7, balancing books with discipline, prayer, and service.',
    milestones: [
      {
        title: 'The founding vision',
        body: 'A simple structure with a grand aim: holistic education for rural children, character before marks.',
      },
      {
        title: 'The morning assembly',
        body: 'Each day began under Vivekananda’s portrait — prayer, pledge, and a reminder to arise and awake.',
      },
      {
        title: 'Community that remains',
        body: 'The school has closed. Its students and teachers remain — connected now through the alumni portal.',
      },
    ],
  },

  inspiration: {
    eyebrow: 'The Eternal Mentor',
    title: "Swami Vivekananda's Vision",
    quote: 'Education is the manifestation of the perfection already in man.',
    pillars: [
      {
        title: 'Character first',
        body: 'Man-making education above technical skill alone — strength of mind and heart.',
      },
      {
        title: 'Self-reliance',
        body: 'Stand on your own feet, serve society with courage, and never stop till the goal is reached.',
      },
    ],
  },

  memories: {
    title: 'Old Memories',
    body: 'A glimpse into the golden years of our Vidyalayam — preserved as Vangoor’s educational heritage.',
    items: [
      { src: '/memories/assembly.jpg', label: 'Morning assembly', span: 'large' as const },
      { src: '/memories/bell.jpg', label: 'School bell', span: 'small' as const },
      { src: '/memories/lab.jpg', label: 'Classroom days', span: 'small' as const },
      { src: '/memories/campus-dawn.jpg', label: 'Campus dawn', span: 'wide' as const },
    ],
  },

  alumniCta: {
    title: 'Reconnect with your batchmates',
    body: 'Share stories, find classmates and teachers, and keep the Vidyalayam’s memory alive.',
    button: 'Join the Alumni Portal',
  },

  place: {
    eyebrow: 'Regional roots',
    title: 'Deeply rooted in Vangoor',
    body: 'Our home was Vangoor village, Nagarkurnool district, Telangana — PIN 509349.',
    address: 'Vivekananda Vidyalayam, Vangoor Village, Nagarkurnool District, Telangana — 509349',
  },

  gallery: [
    { title: 'Morning assembly', year: '—', category: 'Campus Life', src: '/memories/assembly.jpg' },
    { title: 'The school bell', year: '—', category: 'Campus Life', src: '/memories/bell.jpg' },
    { title: 'Classroom curiosity', year: '—', category: 'Class Portraits', src: '/memories/lab.jpg' },
    { title: 'Campus at dawn', year: '—', category: 'Campus Life', src: '/memories/campus-dawn.jpg' },
    { title: 'Swami Vivekananda', year: '1893', category: 'Spiritual Assemblies', src: '/swami-vivekananda.jpg' },
    { title: 'School emblem', year: '—', category: 'Spiritual Assemblies', src: '/logo-seal.png' },
  ],

  directory: [
    {
      name: 'Former student',
      batch: 'Batch of —',
      location: 'Vangoor / Abroad',
      role: 'Join the portal to appear here',
      quote: 'Register on the alumni portal to share your story.',
    },
  ],
} as const;

export function schoolJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    '@id': `${site.url}/#school`,
    name: site.name,
    url: site.url,
    description: site.description,
    image: `${site.url}/og-image.jpg`,
    logo: `${site.url}/logo-seal.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.village,
      addressRegion: site.state,
      postalCode: site.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${site.district} District, ${site.state}`,
    },
    sameAs: [site.alumniUrl],
  };
}
