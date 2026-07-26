# Vivekananda Vidyalayam Website

Public heritage site for **https://vivekanandavidyalayam.com**

Aligned with Stitch **Eternal Heritage** designs in `../stitch_vivekananda_vidyalayam_legacy_archive`.

**Stack:** Next.js 15 (App Router) · static export · Source Serif 4 + Work Sans

Alumni portal: https://alumni.alnlabs.com

## Pages

| Route | Design |
|-------|--------|
| `/` | Memorial homepage |
| `/gallery` | Old Memories Gallery |
| `/directory` | Alumni Directory (portal CTA) |

## Local

```bash
cd vivekanandavidyalayam-website
npm install
npm run dev
```

→ http://localhost:9201

## Build

```bash
npm run build
# → out/
```

## Production (VPS + Docker + Caddy)

Same pattern as alumni: build static site in Docker, bind nginx to loopback, Caddy for HTTPS.

**DNS:** point `vivekanandavidyalayam.com` and `www` A records to the VPS (`45.79.121.214`).

```bash
# 1) Clone
sudo mkdir -p /opt/vivekanandavidyalayam && sudo chown "$USER":"$USER" /opt/vivekanandavidyalayam
cd /opt/vivekanandavidyalayam
git clone https://github.com/alnlabs/vivekanandavidyalayam-website.git website
cd website

# 2) Run (loopback :9103)
docker compose -f docker-compose.prod.yml up -d --build

# 3) Smoke test
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:9103/
```

**Caddy** — append (do not wipe Ride Buddy / alumni blocks):

```
vivekanandavidyalayam.com, www.vivekanandavidyalayam.com {
	encode gzip
	reverse_proxy 127.0.0.1:9103
}
```

```bash
sudo systemctl reload caddy
curl -I https://vivekanandavidyalayam.com/
```
