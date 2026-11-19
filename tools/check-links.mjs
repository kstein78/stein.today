// Проверка: все внутренние ссылки и якоря в dist/ ведут на существующие страницы. Внешние — выводятся списком.
import fs from 'node:fs'; import path from 'node:path';
const root = 'dist'; const pages = new Map(); const ext = new Set(); let bad = 0;
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (p.endsWith('.html')) pages.set('/' + path.relative(root, p).replace(/index\.html$/, ''), fs.readFileSync(p, 'utf8'));
});
walk(root);
const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const [url, html] of pages) {
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|viber:|mailto:|tel:)/.test(href)) { ext.add(href); continue; }
    const [p, hash] = href.split('#'); const target = p === '' ? url : p;
    if (/\.(svg|png|xml|css|js|woff2)$/.test(target)) { if (!fs.existsSync(path.join(root, target))) { console.log('MISSING asset', url, href); bad++; } continue; }
    if (!pages.has(target)) { console.log('BROKEN', url, '→', href); bad++; continue; }
    if (hash && !ids(pages.get(target)).has(hash)) { console.log('NO ANCHOR', url, '→', href); bad++; }
  }
}
console.log(`pages: ${pages.size}, broken: ${bad}`); console.log('external:\n' + [...ext].sort().join('\n'));
process.exit(bad ? 1 : 0);
