import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Old Memories Gallery',
  description: 'Archival photographs and memories from Vivekananda Vidyalayam, Vangoor.',
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="wrap page-hero">
          <h1>Old Memories Gallery</h1>
          <p>
            Photographs and moments from the Vidyalayam — campus life, classrooms, and the spirit that
            shaped a generation in Vangoor.
          </p>
        </div>

        <div className="wrap gallery-grid">
          {site.gallery.map((item) => (
            <article key={item.title} className="gallery-card">
              <img src={item.src} alt={item.title} />
              <div>
                <div className="gallery-card-top">
                  <h2>{item.title}</h2>
                  <span>{item.year}</span>
                </div>
                <p>{item.category}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="wrap submit-memory">
          <h2>Share a memory</h2>
          <p>
            Have photos from your years at the Vidyalayam? Join the alumni portal and upload them for
            the archive.
          </p>
          <a
            className="btn btn-saffron"
            href={site.alumniUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open alumni portal
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
