import type { Metadata } from 'next';
import { Source_Serif_4, Work_Sans } from 'next/font/google';
import { schoolJsonLd, site } from '@/lib/site';
import './globals.css';

const display = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Vivekananda Vidyalayam | A Legacy of Light',
    template: '%s | Vivekananda Vidyalayam',
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-seal.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: 'Vivekananda Vidyalayam | A Legacy of Light',
    description: site.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivekananda Vidyalayam | A Legacy of Light',
    description: site.description,
    images: ['/og-image.jpg'],
  },
  other: {
    'geo.region': site.geo.region,
    'geo.placename': site.geo.locality,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = schoolJsonLd();

  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="noise" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
