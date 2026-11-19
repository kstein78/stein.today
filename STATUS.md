# stein.today — status
Updated: 2026-11-19

## Anchor
- **Цель:** stein.today — большая визитка «одной ссылкой»: работа + все проекты + сайты + хобби, дальше по ссылкам.
- **Готово, когда:** сайт собирается; есть разделы Работа / Проекты в поиске инвесторов / Сайты / Увлечения / Контакты; RU + EN; подробное резюме; новый проект добавляется одним файлом; есть автодеплой на 2.28.137.150.
- **Не входит (пока):** переделка stein-1.com, фотографии, сербская и немецкая версии, настройка DNS и сервера.

## Done (proved)
- Astro 7, статическая сборка: 23 страницы + sitemap + 404 — proof: `npm run build` без ошибок.
- Внутренние ссылки и якоря — proof: `node tools/check-links.mjs` → broken: 0.
- Проекты вынесены в `projects/*.json` с валидацией при сборке + `_template.json`.
- Контакты: «Написать» (Telegram, WhatsApp, Viber, Messenger) и «Профили» (LinkedIn, Facebook, X, Instagram kstein78, Google Maps Local Guide, GitHub).
- PR #1 https://github.com/kstein78/stein.today/pull/1 (ветка site-v1 → main).
- Приватное превью главной (RU): https://claude.ai/artifact/CPTgtW6D9cb7Dp7foHVyEU
- Первый экран: фото (слот public/photo.jpg, пока монограмма). Карта по реальным координатам перенесена на страницу «Краеведение» (Раковац 45.185N 19.78E, Нови-Сад, Вайска 45.417N 19.117E).
- Четыре языка: RU, EN, SR (латиница), DE — 42 страницы; редирект с корня по языку браузера (ru/uk/be/kk → ru, sr/hr/bs/mk/sl → sr, de → de, иначе en). Переводы SR/DE — машинные от Claude, Косте вычитать.
- Резюме `/<lang>/cv/` (src/data/cv.ts): данные со stein-1.com + CV Кости (Adapty EN, MichaelPage DE, Interim TPO DE) + правки 19.11: Optilife CEO и основатель (2024), Blitz «4–6,5 млн уникальных в день», Blitz Technologies LLC CEO 2022–2024 (заморожена с 2024), ADSBase 07.2025–10.2026 (начало «кажется 18.07.2025»), навыки НЕ добавлять.
- Шрифты: Piazzolla (антиква) + Onest (интерфейс), обе OFL 1.1, кириллица + latin-ext; раздаются локально (без Google Fonts, из-за DSGVO). Выбраны Костей из 4 пар 19.11.
- Workflow деплоя по rsync/SSH; без секретов выкладка пропускается с предупреждением.
- Скриншоты десктоп/мобайл проверены.

## Next step
1. ✓ Фото: главная — 30710836_…jpg (ч/б, обрезка 4:5) → public/photo.jpg; резюме — 26026059_…jpg → public/photo-cv.jpg; 404 — «Who is Constantin?» (66759481_…jpg); og.png с фото. Источник: C:\Users\kstei\Desktop\Личное\!!!Фото. Групповое GSTAR.jpg не использовать (другие люди).
2. Когда 7pro8.com выйдет — поставить url в projects/7pro8.json и убрать «скоро».
3. ADSBase: начало 07.2025 со слов Кости «кажется» — подтвердить.
4. Сервер 2.28.137.150: A-записи stein.today/www → IP, vhost по `deploy/nginx-stein.today.conf`, certbot, SSH-ключ для деплоя → секреты в GitHub.
5. Смержить PR → проверить живой сайт.
6. Добавить SR (латиница) и DE.
7. Решение по stein-1.com (рекомендация: 301-редирект на stein.today/<lang>/cv/).

## Rejected paths
- ✗ WebFetch rakovac.rs для сбора текста — нужен апрув, запрос остался без ответа — reopen if: Костя пришлёт ссылки сам или подтвердит доступ.
- ✗ Поиск доменов сайтов Вайски/Провалы через веб-поиск — выдача только Wikipedia и vojvodina.travel, доменов нет — reopen if: никогда, спросить у Кости.
- ✗ «В Вайске говорят на 5 языках» — в Wikipedia это названия села на разных языках, а не языки жителей; формулировка удалена.
- ✗ Google Fonts по CDN — проблема с DSGVO (решение суда в Мюнхене), заменено на self-host @fontsource.
- ✗ Карта мест на первом экране — Костя: «слишком локально», заменено на фото.
- ✗ Скачать фото со stein-1.com (static.tildacdn.net) — прокси среды: CONNECT 403 — reopen if: никогда, просить файл.
- ✗ Фото из Google Drive — найденные файлы не подходят (не портреты Кости) — reopen if: никогда; фото берём из C:\Users\kstei\Desktop\Личное\!!!Фото.
- ✗ Literata + Golos Text — Костя: «похоже на стандартные клод-сайты»; отклонены также Brygada 1918, Bona Nova + Ysabeau, Unbounded + Geologica.
- ✗ logartis.info как источник шрифтов — это портфолио иллюстратора (WebGL), шрифтов там нет; ссылка у Кости обрезалась — reopen if: пришлёт полную ссылку.
- ✗ GitHub Pages — Костя выбрал свой сервер 2.28.137.150 (где rakovac.rs).

## Decisions (from Kostya, 19.11)
- Вайска → https://vajska.rs, Провала → https://provala.rs (живые, проверено WebFetch 19.11).
- 7pro8.com — ещё не выложен: упоминание без ссылки, «скоро».
- Вена: 1990–1993 постоянно + несколько месяцев 1994.
- Грузинский: базовый (только в CV).
- ADSBase: только в CV (`cvOnly: true`), Chief of Account Departments, до 10.10.2026.
- solonin.org: скрыт (projects/_solonin.json), вернуть — переименовать обратно.
- Pricey: без ссылки и без отдельной страницы, только краткое описание.
- Провала: год образования «1924 или 1926» (так на provala.rs), не просто 1924.

## Open questions for the user

- Публиковать ли email? Сейчас только мессенджеры и соцсети.
