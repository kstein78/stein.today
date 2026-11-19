import { LANGS, items, hasPage } from '../data/content';
export function GET({ site }: { site: URL }) {
  const paths = ['', 'cv/', ...items.filter(hasPage).map((i) => `${i.slug}/`)];
  const urls = LANGS.flatMap((l) => paths.map((p) => `${site.origin}/${l}/${p}`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
