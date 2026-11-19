// Весь текст сайта — здесь. Правьте этот файл, чтобы поменять содержимое.
// Поля со значением null = данные ещё не подтверждены (см. STATUS.md → «Открытые вопросы»).

export type Lang = 'ru' | 'en';
export const LANGS: Lang[] = ['ru', 'en'];

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

export const ui = {
  ru: {
    name: 'Константин Штейн',
    nameAlt: 'Konstantin Stein, Константин Штајн',
    metaTitle: 'Константин Штейн — медиа, IT, проекты и увлечения',
    metaDesc: 'Константин Штейн: медиаменеджер и предприниматель из Раковца (Сербия). Работа, проекты в поиске инвесторов, сайты, куклы, антиквариат и краеведение — по одной ссылке.',
    nav: { work: 'Работа', invest: 'Проекты', sites: 'Сайты', hobby: 'Увлечения', contact: 'Связаться' },
    lead: 'Медиаменеджер и предприниматель. В медиа с 1995 года: радио, новостные сайты с миллионной аудиторией, теперь — IT-продукты с ИИ. С 2023 года живу в Раковце на Фрушка-горе, под Нови-Садом.',
    leadSecond: 'Здесь собрано всё: работа, проекты, которым нужны инвесторы и партнёры, мои сайты и то, чем мы с женой живём вне работы.',
    ctaCv: 'Подробное резюме',
    ctaContact: 'Написать мне',
    mapCaption: 'Раковац, Нови-Сад, Вайска и озеро Провала на карте',
    mapDanube: 'Дунай',
    mapFruska: 'Фрушка-гора',
    places: { rakovac: 'Раковац', novisad: 'Нови-Сад', vajska: 'Вайска и Провала' },
    legendTitle: 'Условные знаки',
    legend: {
      live: 'Работающий сайт',
      seeking: 'Ищет инвестора или партнёра',
      collection: 'Коллекция и увлечение',
      archive: 'Из архива',
      planned: 'В планах',
    },
    workTitle: 'Работа',
    workIntro: 'Тридцать лет между редакцией, эфиром и бизнесом. Собираю команды, запускаю продукты и довожу их до выручки.',
    workMore: 'Всё резюме: опыт, цифры, образование, языки',
    investTitle: 'Проекты, которые ищут инвесторов и партнёров',
    investIntro: 'Прототипы и планы готовы. Ищу людей, которые помогут довести их до рынка: деньгами, связями или экспертизой.',
    sitesTitle: 'Мои сайты',
    sitesIntro: 'Делаю сайты для мест и сообществ, которые мне дороги.',
    hobbyTitle: 'Увлечения',
    hobbyIntro: 'То, на что уходят выходные: барахолки, старые куклы, дороги и история края.',
    aboutTitle: 'Коротко о себе',
    about: [
      'Родился в Харькове, учился в Вене, жил и работал в Екатеринбурге, Одессе, Грузии и Сербии.',
      'Говорю по-русски и по-немецки как на родных, по-английски — свободно для работы, по-сербски и по-украински — разговорно.',
      'Google Maps Local Guide восьмого уровня.',
      'Езжу только на электромобиле. Дома шесть кошек и три собаки.',
    ],
    contactTitle: 'Связаться',
    contactIntro: 'Быстрее всего — в Telegram. По работе и инвестициям — LinkedIn или любой мессенджер.',
    more: 'Подробнее',
    open: 'Открыть сайт',
    soon: 'Ссылка появится скоро',
    back: 'На главную',
    footer: 'Сайт обновлён',
    langName: 'Русский',
    cv: {
      title: 'Резюме',
      metaTitle: 'Константин Штейн — резюме',
      lead: 'CEO, основатель и медиаменеджер. С 1995 года в медиа и IT, управлял бизнесом в пяти странах.',
      strengths: 'Что я умею',
      strengthsList: [
        'Быстро собираю сильные команды и веду их к цели.',
        'Соединяю деловой подход и творческое мышление.',
        'Руководил компаниями, редакциями, творческими и коммерческими отделами.',
        'Во всех текущих проектах делаю ставку на ИИ.',
      ],
      experience: 'Опыт',
      earlier: 'Раньше',
      education: 'Образование',
      languages: 'Языки',
      print: 'Распечатать или сохранить в PDF',
    },
  },
  en: {
    name: 'Konstantin Stein',
    nameAlt: 'Константин Штейн, Konstantin Štajn',
    metaTitle: 'Konstantin Stein — media, IT, projects and passions',
    metaDesc: 'Konstantin Stein: media executive and entrepreneur based in Rakovac, Serbia. Work, projects open to investors, websites, antique dolls and local history — all in one link.',
    nav: { work: 'Work', invest: 'Projects', sites: 'Websites', hobby: 'Passions', contact: 'Contact' },
    lead: 'Media executive and entrepreneur. In media since 1995: radio, news sites with audiences in the millions, and now AI-powered IT products. Since 2023 I live in Rakovac on Fruška Gora, near Novi Sad.',
    leadSecond: 'Everything is here: my work, projects that need investors and partners, my websites, and what my wife and I do outside work.',
    ctaCv: 'Full CV',
    ctaContact: 'Get in touch',
    mapCaption: 'Rakovac, Novi Sad, Vajska and Lake Provala on the map',
    mapDanube: 'Danube',
    mapFruska: 'Fruška Gora',
    places: { rakovac: 'Rakovac', novisad: 'Novi Sad', vajska: 'Vajska and Provala' },
    legendTitle: 'Map key',
    legend: {
      live: 'Live website',
      seeking: 'Looking for an investor or partner',
      collection: 'Collection and passion',
      archive: 'From the archive',
      planned: 'Planned',
    },
    workTitle: 'Work',
    workIntro: 'Thirty years between the newsroom, the studio and the boardroom. I build teams, launch products and take them to revenue.',
    workMore: 'Full CV: experience, numbers, education, languages',
    investTitle: 'Projects looking for investors and partners',
    investIntro: 'Prototypes and plans are ready. I am looking for people who can help take them to market with capital, connections or expertise.',
    sitesTitle: 'My websites',
    sitesIntro: 'I build websites for places and communities I care about.',
    hobbyTitle: 'Passions',
    hobbyIntro: 'Where the weekends go: flea markets, old dolls, the road and the history of the region.',
    aboutTitle: 'About me, briefly',
    about: [
      'Born in Kharkiv, went to school in Vienna, lived and worked in Yekaterinburg, Odesa, Georgia and Serbia.',
      'Russian and German are both native to me; English is fluent for work; Serbian and Ukrainian are conversational.',
      'Google Maps Local Guide, level 8.',
      'I drive only electric. At home: six cats and three dogs.',
    ],
    contactTitle: 'Contact',
    contactIntro: 'Telegram is the fastest. For business and investment, LinkedIn or any messenger works.',
    more: 'Read more',
    open: 'Open website',
    soon: 'Link coming soon',
    back: 'Back to home',
    footer: 'Last updated',
    langName: 'English',
    cv: {
      title: 'CV',
      metaTitle: 'Konstantin Stein — CV',
      lead: 'CEO, founder and media executive. In media and IT since 1995, with business management experience in five countries.',
      strengths: 'What I do well',
      strengthsList: [
        'I build strong teams quickly and lead them to the goal.',
        'I combine a business approach with a creative mindset.',
        'I have run companies, newsrooms, creative and sales departments.',
        'AI is at the core of every project I run today.',
      ],
      experience: 'Experience',
      earlier: 'Earlier',
      education: 'Education',
      languages: 'Languages',
      print: 'Print or save as PDF',
    },
  },
} as const;

/** Карьера. Цифры — дословно со stein-1.com (проверено 19.11.2026). */
export interface Job {
  /** true — показывать только в резюме, не на главной */
  cvOnly?: boolean;
  years: string;
  org: string;
  url?: string;
  t: Record<Lang, { years?: string; org?: string; role: string; text: string; numbers?: string[] }>;
}
export const jobs: Job[] = [
  {
    cvOnly: true,
    years: 'сейчас',
    org: 'ADSBase',
    t: {
      ru: { years: 'сейчас', role: 'в штате', text: 'Медиагруппа в сфере аффилиат-маркетинга.' },
      en: { years: 'now', role: 'staff role', text: 'An affiliate marketing media group.' },
    },
  },
  {
    years: '2024 —',
    org: 'Optilife',
    url: 'https://optilife.rs',
    t: {
      ru: {
        role: 'CEO и основатель',
        text: 'IT-компания в Нови-Саде, делает продукты с ИИ: систему помощи на дороге для водителей грузовиков в Германии (trucknetz.de) и сервис для управления коммунальными счетами для частных лиц и владельцев домов.',
      },
      en: {
        role: 'CEO and founder',
        text: 'An IT company in Novi Sad building AI-powered products: a roadside assistance system for heavy-truck drivers in Germany (trucknetz.de) and a service that manages utility bills for individuals and homeowners.',
      },
    },
  },
  {
    years: '2020 — 2024',
    org: 'BLITZ.PLUS',
    t: {
      ru: {
        role: 'CEO и основатель',
        text: 'Сеть новостных и развлекательных сайтов. Бизнес передан партнёрам в России.',
        numbers: ['4–6 млн уникальных посетителей в день', 'команда до 158 человек', 'выручка больше 1,5 млн € в 2022 и 2023 годах'],
      },
      en: {
        role: 'CEO and founder',
        text: 'A network of news and entertainment websites. The business was handed over to partners in Russia.',
        numbers: ['4–6 million daily unique visitors', 'team of up to 158', 'revenue above €1.5 million in both 2022 and 2023'],
      },
    },
  },
  {
    years: '2019',
    org: 'IVLP, U.S. Department of State',
    t: {
      ru: { role: 'Выпускник программы', text: 'Программа Edward R. Murrow для цифровых и вещательных медиа.' },
      en: { role: 'Alumnus', text: 'Edward R. Murrow Program for Digital & Broadcast Media.' },
    },
  },
  {
    years: '2018 — 2020',
    org: 'Медиахолдинг «КП»',
    t: {
      ru: {
        role: 'Руководитель двух развлекательных сайтов',
        text: 'Управление редакциями и развитие проектов в федеральном медиахолдинге.',
        numbers: ['3,5 млн DAU за 9 месяцев', 'выручка до 1 млн € в год', 'до 63 сотрудников'],
      },
      en: {
        org: 'KP media holding',
        role: 'Head of two entertainment websites',
        text: 'Editorial management and product development inside the nationwide KP media holding.',
        numbers: ['3.5 million DAU within 9 months', 'annual revenue up to €1 million', 'up to 63 employees'],
      },
    },
  },
  {
    years: '2015 — 2018',
    org: 'Радио «Серебряный дождь», Екатеринбург',
    t: {
      ru: { role: 'CEO', text: 'Нанял всю команду из 23 человек, построил региональную сетку вещания, развил и продал проект.' },
      en: { org: 'Silver Rain radio, Yekaterinburg', role: 'CEO', text: 'Hired the entire team of 23, built a regional programme schedule, grew the station and sold it.' },
    },
  },
  {
    years: '2014 — 2015',
    org: 'ZNAK.COM',
    t: {
      ru: { role: 'Коммерческий директор', text: 'Новостной портал.' },
      en: { role: 'Commercial director', text: 'News portal.' },
    },
  },
];

export const earlier: Record<Lang, [string, string][]> = {
  ru: [
    ['2013', 'Продюсер первой биографии политика и общественного деятеля Евгения Ройзмана.'],
    ['2006 — 2010', 'Одесса: работа и учёба в брендинговом агентстве MOTTO. Запустил сайт политической ассоциации и сайт историка Марка Солонина.'],
    ['1998 — 2018', 'Руководил радиостанциями: в 1998-м, в 2000–2007 и в 2010–2018 годах.'],
    ['1998 — 2000', 'Основал и вёл туристическое агентство.'],
    ['1995 — 1997', 'Начинал рок-диджеем в ночных клубах, потом ведущий и звукорежиссёр.'],
  ],
  en: [
    ['2013', 'Producer of the first biography of politician and civic activist Evgeny Roizman.'],
    ['2006 — 2010', 'Odesa: worked and studied at the MOTTO branding agency. Launched websites for a political association and for historian Mark Solonin.'],
    ['1998 — 2018', 'Ran radio stations in 1998, 2000–2007 and 2010–2018.'],
    ['1998 — 2000', 'Founded and ran a travel agency.'],
    ['1995 — 1997', 'Started as a rock DJ in nightclubs, then worked as a host and sound engineer.'],
  ],
};

export const education: Record<Lang, string[]> = {
  ru: [
    'Вена, Австрия, 1990–1993 и несколько месяцев 1994 года: школы, в том числе иезуитский колледж Kalksburg.',
    'Уральский государственный технический университет (УПИ): информатика.',
  ],
  en: [
    'Vienna, Austria, 1990–1993 and a few months of 1994: schools including the Jesuit college Kalksburg.',
    'Ural State Technical University (UPI): computer science.',
  ],
};

export const languages: Record<Lang, [string, string][]> = {
  ru: [
    ['Русский', 'родной'],
    ['Немецкий', 'второй родной'],
    ['Английский', 'B2, рабочий'],
    ['Сербский', 'разговорный'],
    ['Украинский', 'разговорный'],
    ['Грузинский', 'базовый'],
  ],
  en: [
    ['Russian', 'native'],
    ['German', 'second native'],
    ['English', 'B2, working'],
    ['Serbian', 'conversational'],
    ['Ukrainian', 'conversational'],
    ['Georgian', 'basic'],
  ],
};



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
