import Link from 'next/link';
import { site } from '@/lib/site';
import { VisitorCounter } from '@/components/VisitorCounter';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <img src="/logo-seal.png" alt="" width={40} height={40} className="footer-logo" />
          <p className="footer-copy">
            © {year} {site.name}. Preserving the legacy of spiritual growth and academic excellence.
          </p>
          <VisitorCounter />
          <p className="footer-credit">
            Designed and developed by{' '}
            <a href="https://alnlabs.com" rel="noopener noreferrer">
              AlnLabs
            </a>
          </p>
        </div>
        <nav aria-label="Footer">
          <a href={site.alumniUrl} target="_blank" rel="noopener noreferrer">
            Alumni Portal
          </a>
          <Link href="/gallery">Gallery</Link>
          <Link href="/directory">Directory</Link>
        </nav>
      </div>
    </footer>
  );
}
