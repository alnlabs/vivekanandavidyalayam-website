import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Alumni Directory',
  description:
    'Find classmates and teachers from Vivekananda Vidyalayam, Vangoor, Nagarkurnool. Reconnect with your batch through the alumni portal.',
  alternates: { canonical: '/directory' },
  openGraph: {
    title: 'Alumni Directory | Vivekananda Vidyalayam',
    description:
      'Find classmates and teachers from Vivekananda Vidyalayam, Vangoor, Nagarkurnool.',
    url: `${site.url}/directory`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: site.name }],
  },
};

export default function DirectoryPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="wrap page-hero">
          <h1>Alumni Directory</h1>
          <p className="page-quote">
            “Education is the manifestation of the perfection already in man.” — Swami Vivekananda
          </p>
        </div>

        <div className="wrap directory-banner">
          <div>
            <h2>Find your batchmates</h2>
            <p>
              Profiles live on the alumni portal. Register to appear in the directory and reconnect
              with classmates and teachers.
            </p>
          </div>
          <a
            className="btn btn-saffron"
            href={site.alumniUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the registry
          </a>
        </div>

        <div className="wrap directory-grid">
          <article className="alumni-card">
            <div className="alumni-avatar" aria-hidden="true" />
            <p className="batch-chip">Your batch</p>
            <h2>Your name here</h2>
            <p className="alumni-loc">Vangoor · Nagarkurnool</p>
            <p className="alumni-quote">
              Join the portal to publish your profile, photos, and memories from the Vidyalayam.
            </p>
            <p className="alumni-role">Alumni</p>
          </article>

          <article className="motto-card">
            <p className="motto-mark" aria-hidden="true">
              “
            </p>
            <p>Arise, awake, and stop not till the goal is reached.</p>
            <img src="/logo-seal.png" alt="" width={72} height={72} />
          </article>
        </div>

        <section className="directory-cta">
          <div className="wrap directory-cta-inner">
            <div>
              <h2>Reconnect with your alma mater</h2>
              <p>
                The school buildings are quiet. The people who studied there are not. Join the living
                registry of Vivekananda Vidyalayam.
              </p>
              <div className="actions">
                <a
                  className="btn btn-saffron"
                  href={site.alumniUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the registry
                </a>
                <a className="btn btn-outline-light" href="/gallery">
                  View gallery
                </a>
              </div>
            </div>
            <img className="cta-watermark" src="/logo-seal.png" alt="" aria-hidden="true" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
