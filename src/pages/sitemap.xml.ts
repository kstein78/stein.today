import { LANGS, items, hasPage, ui } from '../data/content';
// Sitemap со всеми языковыми версиями каждой страницы (hreflang) и датой сборки.
export function GET({ site }: { site: URL }) {
  const paths = ['', 'cv/', 'coat-of-arms/', 'privacy/', ...items.filter(hasPage).map((i) => `${i.slug}/`)];
  const lastmod = new Date().toISOString().slice(0, 10);
  const u = (l: string, p: string) => `${site.origin}/${l}/${p}`;
  const entries = paths.flatMap((p) => LANGS.map((l) => [
    '  <url>',
    `    <loc>${u(l, p)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    ...LANGS.map((a) => `    <xhtml:link rel="alternate" hreflang="${ui[a].htmlLang}" href="${u(a, p)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${u('en', p)}"/>`,
    '  </url>',
  ].join('\n')));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
