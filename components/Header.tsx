'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <img src="/logo-seal.png" alt="" width={48} height={48} className="brand-mark" />
          <span className="brand-text">
            <strong>{site.name}</strong>
            <span className="brand-caption">{site.brandSubtitle}</span>
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? ' open' : ''}`} aria-label="Primary">
          {site.nav.map((item) => {
            const active =
              item.href === '/gallery'
                ? pathname === '/gallery'
                : item.href === '/directory'
                  ? pathname === '/directory'
                  : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? 'active' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            className="btn btn-saffron"
            href={site.alumniUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Portal
          </a>
        </nav>
      </div>
    </header>
  );
}
