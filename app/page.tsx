import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { faqJsonLd, site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-media" aria-hidden="true">
            <img src="/hero-campus.jpg" alt="" />
            <div className="hero-shade" />
          </div>
          <div className="wrap hero-copy">
            <p className="label light">{site.hero.kicker}</p>
            <h1 id="hero-heading">
              {site.hero.title}
              <br />
              {site.hero.titleLine2}
            </h1>
            <p className="hero-lead">{site.hero.lead}</p>
            <a className="btn btn-outline-light" href="#history">
              {site.hero.cta}
              <span aria-hidden="true"> ↓</span>
            </a>
          </div>
        </section>

        <section id="history" className="section cream">
          <div className="wrap history-grid">
            <div>
              <h2 className="title-saffron">{site.history.title}</h2>
              <p className="body">{site.history.body}</p>
              <div className="rule" />
            </div>
            <ol className="timeline">
              {site.history.milestones.map((m) => (
                <li key={m.title}>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="leadership" className="section antique">
          <div className="wrap">
            <p className="label saffron">Leadership</p>
            <h2>Principal &amp; Vice Principal</h2>
            <div className="leadership-grid">
              <article>
                <p className="leadership-role">{site.leadership.principal.role}</p>
                <h3>{site.leadership.principal.name}</h3>
                <p>{site.leadership.principal.note}</p>
              </article>
              <article>
                <p className="leadership-role">{site.leadership.vicePrincipal.role}</p>
                <h3>{site.leadership.vicePrincipal.name}</h3>
                <p>{site.leadership.vicePrincipal.note}</p>
              </article>
            </div>
            <div className="teachers-note">
              <h3>{site.teachersRemembered.title}</h3>
              <p>{site.teachersRemembered.body}</p>
            </div>
          </div>
        </section>

        <section id="inspiration" className="section cream">
          <div className="wrap inspiration-grid">
            <figure className="portrait-frame">
              <img
                src="/swami-vivekananda.jpg"
                alt="Swami Vivekananda"
                width={640}
                height={800}
              />
            </figure>
            <div>
              <p className="label saffron">{site.inspiration.eyebrow}</p>
              <h2>{site.inspiration.title}</h2>
              <blockquote className="quote">
                <p>“{site.inspiration.quote}”</p>
                <cite>— Swami Vivekananda</cite>
              </blockquote>
              <div className="pillars">
                {site.inspiration.pillars.map((p) => (
                  <article key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="alumni" className="section charcoal">
          <div className="wrap">
            <div className="memories-head">
              <div>
                <h2>{site.memories.title}</h2>
                <p>{site.memories.body}</p>
              </div>
              <Link className="text-link saffron" href="/gallery">
                View archive →
              </Link>
            </div>

            <div className="bento">
              {site.memories.items.map((item) => (
                <figure key={item.src} className={`bento-item ${item.span}`}>
                  <img src={item.src} alt={item.label} />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>

            <div className="alumni-cta">
              <div>
                <h3>{site.alumniCta.title}</h3>
                <p>{site.alumniCta.body}</p>
              </div>
              <a
                className="btn btn-saffron"
                href={site.alumniUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.alumniCta.button}
              </a>
            </div>
          </div>
        </section>

        <section id="place" className="section antique">
          <div className="wrap place-grid">
            <div>
              <p className="label saffron">{site.place.eyebrow}</p>
              <h2>{site.place.title}</h2>
              <p className="body">{site.place.body}</p>
              <ul className="place-list">
                <li>
                  <strong>Address</strong>
                  <span>{site.place.address}</span>
                </li>
                <li>
                  <strong>Classes</strong>
                  <span>{site.grades}</span>
                </li>
                <li>
                  <strong>Principal</strong>
                  <span>{site.leadership.principal.name}</span>
                </li>
                <li>
                  <strong>Vice Principal</strong>
                  <span>{site.leadership.vicePrincipal.name}</span>
                </li>
                <li>
                  <strong>Alumni</strong>
                  <a href={site.alumniUrl} target="_blank" rel="noopener noreferrer">
                    {site.alumniUrl.replace('https://', '')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="map-panel" aria-label="Location">
              <p>Nagarkurnool District · Telangana</p>
              <p className="map-pin">
                {site.village} · {site.pincode}
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="section cream">
          <div className="wrap">
            <p className="label saffron">Questions</p>
            <h2 className="title-saffron">Frequently asked</h2>
            <dl className="faq-list">
              {site.faq.map((item) => (
                <div key={item.q} className="faq-item">
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
