// Типы, контакты и загрузка проектов. Тексты интерфейса — src/i18n/*.ts, резюме — src/data/cv.ts, проекты — projects/*.json.

export type Lang = 'ru' | 'en' | 'sr' | 'de';
/** Порядок = порядок в переключателе языков. Добавить язык: сюда + src/i18n/<lang>.ts + t.<lang> в проектах и cv.ts */
export const LANGS: Lang[] = ['ru', 'en', 'sr', 'de'];

/** Статус = значок на карте-легенде. Одна форма — один смысл. */
export type Status = 'live' | 'seeking' | 'collection' | 'archive' | 'planned';

export interface Link { label: string; url: string }
export interface ItemText {
  title: string;
  summary: string;
  body?: string[];
  facts?: [string, string][];
}
export interface Item {
  slug: string;
  group: 'invest' | 'site' | 'hobby';
  status: Status;
  url: string | null;
  links?: Link[];
  t: Record<Lang, ItemText>;
}

/** Контакты. «write» — мессенджеры, «profiles» — соцсети и профили. Добавить: новая строка в нужный список. */
export const contacts: { write: Link[]; profiles: Link[] } = {
  write: [
    { label: 'Telegram', url: 'https://t.me/k_stein' },
    { label: 'WhatsApp', url: 'https://wa.me/381638015320' },
    { label: 'Viber', url: 'viber://chat?number=%2B381638015320' },
    { label: 'Messenger', url: 'https://m.me/konstantin.stein' },
  ],
  profiles: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/konstantinstein/' },
    { label: 'Facebook', url: 'https://www.facebook.com/konstantin.stein' },
    { label: 'X', url: 'https://x.com/konstantinstein' },
    { label: 'Instagram', url: 'https://www.instagram.com/kstein78/' },
    { label: 'Google Maps', url: 'https://www.google.com/maps/contrib/109485321545547043572/' },
    { label: 'GitHub', url: 'https://github.com/kstein78' },
  ],
};

export { ui } from '../i18n';
export { jobs, earlier, education, languages, type Job } from './cv';

/**
 * Проекты лежат в /projects/*.json — один файл на проект.
 * Файлы, имя которых начинается с «_», игнорируются (например, _template.json).
 * Сортировка — по полю order (меньше = выше).
 */
const files = import.meta.glob<Item & { order?: number }>('../../projects/[!_]*.json', { eager: true, import: 'default' });
const GROUPS = ['invest', 'site', 'hobby'];
const STATUSES = ['live', 'seeking', 'collection', 'archive', 'planned'];
export const items: Item[] = Object.entries(files)
  .map(([path, it]) => {
    const where = `projects/${path.split('/').pop()}`;
    if (!it.slug || !/^[a-z0-9-]+$/.test(it.slug)) throw new Error(`${where}: slug должен быть латиницей, цифрами и дефисами`);
    if (!GROUPS.includes(it.group)) throw new Error(`${where}: group должен быть одним из ${GROUPS.join(', ')}`);
    if (!STATUSES.includes(it.status)) throw new Error(`${where}: status должен быть одним из ${STATUSES.join(', ')}`);
    for (const l of LANGS) if (!it.t?.[l]?.title || !it.t?.[l]?.summary) throw new Error(`${where}: нет title/summary для языка ${l}`);
    return it;
  })
  .sort((a, b) => ((a as any).order ?? 999) - ((b as any).order ?? 999));

const seen = new Set<string>();
for (const it of items) { if (seen.has(it.slug)) throw new Error(`Повторяется slug «${it.slug}»`); seen.add(it.slug); }

export const itemsBy = (group: Item['group']) => items.filter((i) => i.group === group);
/** Отдельная страница создаётся, если у проекта есть body хотя бы на одном языке. */
export const hasPage = (it: Item) => LANGS.some((l) => (it.t[l].body?.length ?? 0) > 0);
