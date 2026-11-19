// Резюме на всех языках. Источники: stein-1.com (проверено 19.11.2026) и CV Кости (11.2026), правки Кости 19.11.2026.
import type { Lang } from './content';

export interface Job {
  /** true — только в резюме, не на главной */
  cvOnly?: boolean;
  /** Ссылки под описанием; url может быть свой для каждого языка сайта */
  links?: { label: Record<Lang, string>; url: string | Record<Lang, string> }[];
  years: string;
  org: string;
  url?: string;
  t: Record<Lang, { org?: string; role: string; text: string; numbers?: string[] }>;
}

export const jobs: Job[] = [
  {
    years: '2024 —',
    org: 'Optilife',
    url: 'https://optilife.rs',
    t: {
      ru: {
        role: 'CEO и основатель',
        text: 'IT-компания в Нови-Саде, делает продукты с ИИ. TruckNetz.de — помощь на дороге для водителей грузовиков в Германии: больше 40 локализованных сайтов за три месяца, в мае 2026 года запущено мобильное приложение для трекинга и диспетчеризации. Optilife Utility Tracker — прототип сервиса, который помогает следить за коммунальными счетами и экономить на них.',
      },
      en: {
        role: 'CEO and founder',
        text: 'An IT company in Novi Sad building AI-powered products. TruckNetz.de, roadside assistance for heavy-truck drivers in Germany: more than 40 localised websites rolled out in three months, and a mobile tracking and dispatch app launched in May 2026. Optilife Utility Tracker: a prototype service that helps people track their utility bills and save on them.',
      },
      sr: {
        role: 'CEO i osnivač',
        text: 'IT kompanija iz Novog Sada koja razvija proizvode sa veštačkom inteligencijom. TruckNetz.de — pomoć na putu za vozače kamiona u Nemačkoj: više od 40 lokalizovanih sajtova za tri meseca, a u maju 2026. pokrenuta je mobilna aplikacija za praćenje i dispečing. Optilife Utility Tracker — prototip servisa koji pomaže da pratite račune za komunalije i uštedite na njima.',
      },
      de: {
        role: 'CEO und Gründer',
        text: 'IT-Unternehmen in Novi Sad, das KI-gestützte Produkte entwickelt. TruckNetz.de, Pannenhilfe für Lkw-Fahrer in Deutschland: mehr als 40 lokalisierte Websites in drei Monaten ausgerollt, im Mai 2026 Launch der mobilen Tracking- und Dispatch-App. Optilife Utility Tracker: Prototyp eines Dienstes, mit dem man Nebenkostenabrechnungen im Blick behält und spart.',
      },
    },
    links: [
      { label: { ru: 'optilife.rs — сайт компании', en: 'optilife.rs — company website', sr: 'optilife.rs — sajt kompanije', de: 'optilife.rs — Unternehmenswebsite' }, url: 'https://optilife.rs' },
      { label: { ru: 'trucknetz.de', en: 'trucknetz.de', sr: 'trucknetz.de', de: 'trucknetz.de' }, url: 'https://trucknetz.de' },
      {
        label: { ru: 'Прототип трекера счетов', en: 'Utility tracker prototype', sr: 'Prototip praćenja računa', de: 'Prototyp des Nebenkosten-Trackers' },
        // У трекера нет немецкой версии — немецкая страница ведёт на английскую
        url: { ru: 'https://welcome.optilife.house/ru/', en: 'https://welcome.optilife.house/en', sr: 'https://welcome.optilife.house/sr_Latn/', de: 'https://welcome.optilife.house/en' },
      },
    ],
  },
  {
    cvOnly: true,
    years: '07.2025 — 10.2026',
    org: 'ADSBase',
    t: {
      ru: { role: 'Chief of Account Departments', text: 'Медиагруппа в сфере аффилиат-маркетинга.' },
      en: { role: 'Chief of Account Departments', text: 'An affiliate marketing media group.' },
      sr: { role: 'Chief of Account Departments', text: 'Medijska grupa u oblasti affiliate marketinga.' },
      de: { role: 'Chief of Account Departments', text: 'Mediengruppe im Affiliate-Marketing.' },
    },
  },
  {
    cvOnly: true,
    years: '2022 — 2024',
    org: 'Blitz Technologies LLC',
    t: {
      ru: { org: 'Blitz Technologies LLC, Ереван', role: 'CEO', text: 'Операции в Армении, странах ЕС, Сингапуре и ОАЭ, партнёрства с международными агентствами цифровых медиа и монетизации. С 2024 года компания заморожена.' },
      en: { org: 'Blitz Technologies LLC, Yerevan', role: 'CEO', text: 'Operations in Armenia, EU countries, Singapore and the UAE; partnerships with global digital media and monetisation agencies. The company has been dormant since 2024.' },
      sr: { org: 'Blitz Technologies LLC, Jerevan', role: 'CEO', text: 'Poslovanje u Jermeniji, zemljama EU, Singapuru i UAE, partnerstva sa međunarodnim agencijama za digitalne medije i monetizaciju. Kompanija miruje od 2024.' },
      de: { org: 'Blitz Technologies LLC, Jerewan', role: 'CEO', text: 'Operations in Armenien, EU-Ländern, Singapur und den VAE; Partnerschaften mit internationalen Digital-Media- und Monetarisierungsagenturen. Seit 2024 ruht die Geschäftstätigkeit.' },
    },
  },
  {
    years: '09.2020 — 01.2024',
    org: 'Traf Media / BLITZ.PLUS',
    t: {
      ru: {
        role: 'CEO и основатель',
        text: 'Сеть новостных и развлекательных сайтов (blitz.plus, blitz.style) на собственной CMS с ML-ранжированием и озвучкой текста; консалтинг онлайн-медиа (kinoafisha.info, day.ru). Выход из бизнеса — в 2023–2024 годах.',
        numbers: ['4–6,5 млн уникальных посетителей в день', 'команда до 158 человек', 'выручка больше 1,5 млн € в 2022 и 2023 годах'],
      },
      en: {
        role: 'CEO and founder',
        text: 'A network of news and entertainment websites (blitz.plus, blitz.style) on a proprietary CMS with ML ranking and text-to-speech; consulting for online media (kinoafisha.info, day.ru). I exited the business in 2023–2024.',
        numbers: ['4–6.5 million daily unique visitors', 'team of up to 158', 'revenue above €1.5 million in both 2022 and 2023'],
      },
      sr: {
        role: 'CEO i osnivač',
        text: 'Mreža informativnih i zabavnih sajtova (blitz.plus, blitz.style) na sopstvenom CMS-u sa ML rangiranjem i pretvaranjem teksta u govor; konsalting za onlajn medije (kinoafisha.info, day.ru). Izlazak iz biznisa 2023–2024.',
        numbers: ['4–6,5 miliona jedinstvenih posetilaca dnevno', 'tim do 158 ljudi', 'prihod preko 1,5 miliona € u 2022. i 2023.'],
      },
      de: {
        role: 'CEO und Gründer',
        text: 'Netzwerk von Nachrichten- und Unterhaltungsportalen (blitz.plus, blitz.style) auf einem eigenen CMS mit ML-Ranking und Text-to-Speech; Beratung von Online-Medien (kinoafisha.info, day.ru). Ausstieg aus dem Unternehmen 2023–2024.',
        numbers: ['4–6,5 Mio. Unique Visitors pro Tag', 'Team mit bis zu 158 Personen', 'Umsatz über 1,5 Mio. € in 2022 und 2023'],
      },
    },
  },
  {
    cvOnly: true,
    years: '2019',
    org: 'IVLP, U.S. Department of State',
    t: {
      ru: { role: 'Выпускник программы', text: 'Программа Edward R. Murrow для цифровых и вещательных медиа.' },
      en: { role: 'Alumnus', text: 'Edward R. Murrow Program for Digital & Broadcast Media.' },
      sr: { role: 'Alumnista programa', text: 'Program Edward R. Murrow za digitalne i elektronske medije.' },
      de: { role: 'Alumnus', text: 'Edward-R.-Murrow-Programm für digitale und Rundfunkmedien.' },
    },
  },
  {
    years: '04.2018 — 09.2020',
    org: 'KP Digital',
    t: {
      ru: {
        org: 'KP Digital, медиахолдинг «Комсомольская правда»',
        role: 'Руководитель двух развлекательных сайтов',
        text: 'teleprogramma.pro и radiokp.ru в KP Digital — одном из десяти крупнейших цифровых медиа России, больше 30 млн пользователей в месяц. Управление редакциями, техникой и SEO/SMM.',
        numbers: ['3,5 млн DAU за 9 месяцев', 'выручка до 1 млн € в год', 'до 63 сотрудников'],
      },
      en: {
        org: 'KP Digital, KP media holding',
        role: 'Head of two entertainment websites',
        text: 'teleprogramma.pro and radiokp.ru at KP Digital, one of Russia’s top ten digital media with more than 30 million monthly users. Responsible for editorial, tech and SEO/SMM teams.',
        numbers: ['3.5 million DAU within 9 months', 'annual revenue up to €1 million', 'up to 63 employees'],
      },
      sr: {
        org: 'KP Digital, medijski holding KP',
        role: 'Rukovodilac dva zabavna sajta',
        text: 'teleprogramma.pro i radiokp.ru u okviru KP Digital, jednog od deset najvećih digitalnih medija u Rusiji sa više od 30 miliona korisnika mesečno. Odgovoran za redakciju, tehniku i SEO/SMM.',
        numbers: ['3,5 miliona DAU za 9 meseci', 'prihod do 1 milion € godišnje', 'do 63 zaposlena'],
      },
      de: {
        org: 'KP Digital, Medienholding KP',
        role: 'Leiter von zwei Unterhaltungsportalen',
        text: 'teleprogramma.pro und radiokp.ru bei KP Digital, einem der zehn größten Digitalmedien Russlands mit über 30 Mio. Nutzern pro Monat. Verantwortlich für Redaktion, Technik und SEO/SMM.',
        numbers: ['3,5 Mio. DAU in 9 Monaten', 'Jahresumsatz bis 1 Mio. €', 'bis zu 63 Mitarbeitende'],
      },
    },
  },
  {
    years: '08.2015 — 04.2018',
    org: 'Silver Rain',
    t: {
      ru: { org: 'Радио «Серебряный дождь», Екатеринбург', role: 'CEO', text: 'Нанял всю команду из 23 человек, построил региональную сетку вещания, развил и продал проект.' },
      en: { org: 'Silver Rain radio, Yekaterinburg', role: 'CEO', text: 'Hired the entire team of 23, built a regional programme schedule, grew the station and sold it.' },
      sr: { org: 'Radio Silver Rain, Jekaterinburg', role: 'CEO', text: 'Zaposlio ceo tim od 23 ljudi, napravio regionalnu programsku šemu, razvio i prodao projekat.' },
      de: { org: 'Radio Silver Rain, Jekaterinburg', role: 'CEO', text: 'Gesamtes Team von 23 Personen eingestellt, regionales Programmschema aufgebaut, Sender entwickelt und verkauft.' },
    },
  },
  {
    years: '2014 — 2015',
    org: 'ZNAK.COM',
    t: {
      ru: { role: 'Коммерческий директор', text: 'Новостной портал.' },
      en: { role: 'Commercial director', text: 'News portal.' },
      sr: { role: 'Komercijalni direktor', text: 'Informativni portal.' },
      de: { role: 'Kaufmännischer Direktor', text: 'Nachrichtenportal.' },
    },
  },
];

export const earlier: Record<Lang, [string, string][]> = {
  ru: [
    ['2012 — 2014', 'Директор ТВ- и радиопроектов, креативный директор Издательского дома «Комсомольская правда».'],
    ['2013', 'Продюсер первой биографии политика и общественного деятеля Евгения Ройзмана.'],
    ['2010 — 2012', 'Программный директор Радио КП.'],
    ['2006 — 2010', 'Одесса: работа и учёба в брендинговом агентстве MOTTO. Запустил сайт политической ассоциации и сайт историка Марка Солонина.'],
    ['1998, 2000 — 2006', 'Радио: работал на разных должностях — от ведущего эфира, автора радиопрограмм и звукорежиссёра до руководителя продакшн-студии группы из пяти радиостанций и одного телеканала.'],
    ['1998 — 2000', 'Основал и вёл туристическое агентство.'],
    ['1995 — 1997', 'Начинал рок-диджеем в ночных клубах, потом ведущий и звукорежиссёр.'],
  ],
  en: [
    ['2012 — 2014', 'TV and radio project director, creative director at the KP Publishing House.'],
    ['2013', 'Producer of the first biography of politician and civic activist Evgeny Roizman.'],
    ['2010 — 2012', 'Programme director, Radio KP.'],
    ['2006 — 2010', 'Odesa: worked and studied at the MOTTO branding agency. Launched websites for a political association and for historian Mark Solonin.'],
    ['1998, 2000 — 2006', 'Radio: worked in many roles, from on-air host, radio programme author and sound engineer to head of the production studio for a group of five radio stations and one TV channel.'],
    ['1998 — 2000', 'Founded and ran a travel agency.'],
    ['1995 — 1997', 'Started as a rock DJ in nightclubs, then worked as a host and sound engineer.'],
  ],
  sr: [
    ['2012 — 2014', 'Direktor TV i radio projekata, kreativni direktor izdavačke kuće KP.'],
    ['2013', 'Producent prve biografije političara i javnog delatnika Jevgenija Rojzmana.'],
    ['2010 — 2012', 'Programski direktor Radija KP.'],
    ['2006 — 2010', 'Odesa: rad i učenje u agenciji za brending MOTTO. Pokrenuo sajt jedne političke asocijacije i sajt istoričara Marka Solonjina.'],
    ['1998, 2000 — 2006', 'Radio: radio na različitim pozicijama — od voditelja programa, autora radio emisija i ton-majstora do rukovodioca produkcijskog studija grupe od pet radio stanica i jednog TV kanala.'],
    ['1998 — 2000', 'Osnovao i vodio turističku agenciju.'],
    ['1995 — 1997', 'Počeo kao rok didžej u noćnim klubovima, zatim voditelj i ton-majstor.'],
  ],
  de: [
    ['2012 — 2014', 'TV- und Radio-Projektdirektor, Creative Director im Verlagshaus KP.'],
    ['2013', 'Produzent der ersten Biografie des Politikers und Bürgerrechtlers Jewgeni Roisman.'],
    ['2010 — 2012', 'Programmdirektor, Radio KP.'],
    ['2006 — 2010', 'Odessa: Arbeit und Weiterbildung in der Branding-Agentur MOTTO. Websites für eine politische Vereinigung und für den Historiker Mark Solonin gestartet.'],
    ['1998, 2000 — 2006', 'Radio: verschiedene Positionen, vom Moderator, Autor von Radiosendungen und Tontechniker bis zum Leiter des Produktionsstudios einer Gruppe von fünf Radiosendern und einem TV-Sender.'],
    ['1998 — 2000', 'Gründung und Leitung eines Reisebüros.'],
    ['1995 — 1997', 'Start als Rock-DJ in Nachtclubs, danach Moderator und Tontechniker.'],
  ],
};

export const education: Record<Lang, string[]> = {
  ru: [
    'Вена, Австрия, 1990–1993 и несколько месяцев 1994 года: средняя школа и иезуитский колледж Kalksburg.',
    'Уральский государственный технический университет (УПИ), Екатеринбург, 1995–1999: вычислительные машины, системы и сети, четыре курса.',
  ],
  en: [
    'Vienna, Austria, 1990–1993 and a few months of 1994: secondary school and the Jesuit college Kalksburg.',
    'Ural State Technical University (UPI), Yekaterinburg, 1995–1999: computer systems and networks, four years of study.',
  ],
  sr: [
    'Beč, Austrija, 1990–1993. i nekoliko meseci 1994: srednja škola i jezuitski koledž Kalksburg.',
    'Uralski državni tehnički univerzitet (UPI), Jekaterinburg, 1995–1999: računarski sistemi i mreže, četiri godine studija.',
  ],
  de: [
    'Wien, Österreich, 1990–1993 und einige Monate 1994: Mittelschule und Jesuitenkolleg Kalksburg.',
    'Staatliche Technische Universität des Urals (UPI), Jekaterinburg, 1995–1999: Computersysteme und Netzwerke, vier Studienjahre.',
  ],
};

export const languages: Record<Lang, [string, string][]> = {
  ru: [['Русский', 'родной'], ['Немецкий', 'второй родной'], ['Английский', 'B2, рабочий'], ['Сербский', 'разговорный'], ['Украинский', 'разговорный'], ['Грузинский', 'базовый']],
  en: [['Russian', 'native'], ['German', 'second native'], ['English', 'B2, working'], ['Serbian', 'conversational'], ['Ukrainian', 'conversational'], ['Georgian', 'basic']],
  sr: [['Ruski', 'maternji'], ['Nemački', 'drugi maternji'], ['Engleski', 'B2, poslovni'], ['Srpski', 'konverzacijski'], ['Ukrajinski', 'konverzacijski'], ['Gruzijski', 'osnovni']],
  de: [['Russisch', 'Muttersprache'], ['Deutsch', 'zweite Muttersprache'], ['Englisch', 'B2, verhandlungssicher im Beruf'], ['Serbisch', 'Konversation'], ['Ukrainisch', 'Konversation'], ['Georgisch', 'Grundkenntnisse']],
};
