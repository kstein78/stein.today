# stein.today

Личный сайт Константина Штейна: работа, проекты, сайты, увлечения — по одной ссылке.
Статический сайт на [Astro](https://astro.build), четыре языка (RU, EN, SR латиница, DE), хостинг — свой сервер 2.28.137.150.

## Как добавить проект

1. Скопируйте `projects/_template.json` в `projects/<slug>.json` (slug — латиница, цифры, дефисы; он же адрес страницы: `/ru/<slug>/`).
2. Заполните поля:
   - `group` — раздел: `invest` (ищет инвесторов/партнёров), `site` (сайты), `hobby` (увлечения);
   - `status` — значок: `live` ● сайт работает, `seeking` ◆ ищет инвестора, `collection` ▲ увлечение, `archive` ○ архив, `planned` ◌ в планах;
   - `order` — порядок внутри раздела (меньше — выше);
   - `url` — ссылка на сайт проекта или `null`;
   - `t.ru`, `t.en`, `t.sr`, `t.de` — `title` и `summary` обязательны для всех четырёх языков; если есть `body` — у проекта появится отдельная страница; `facts` — таблица «ключ — значение».
3. Закоммитьте в `main`: GitHub соберёт и выложит сайт сам.

Сборка упадёт с понятной ошибкой, если пропущено обязательное поле или повторяется slug.

## Где что лежит

| Что | Где |
|---|---|
| Проекты, сайты, увлечения | `projects/*.json` — один файл на проект |
| Тексты интерфейса | `src/i18n/<язык>.ts` (ключи проверяются при сборке) |
| Резюме | `src/data/cv.ts` |
| Контакты, соцсети | `src/data/content.ts` |
| Дизайн | `src/styles/global.css` |
| Карта на главной | генерируется: `python3 tools/map.py > tools/map.json && python3 tools/gen_heromap.py` |
| Проверка ссылок | `node tools/check-links.mjs` (после `npm run build`) |

## Локально

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # готовый сайт в dist/
```

## Деплой

Сервер тот же, что у rakovac.rs. Ключи и секреты не нужны:

1. Push в `main` → GitHub Actions собирает сайт, проверяет ссылки и кладёт готовые файлы в ветку `live` (вместе с `version.txt` — SHA коммита).
2. Сервер раз в минуту забирает `live` и переключается на новую версию: скрипт `deploy/stein-update` в репозитории [rakovac.rs](https://github.com/kstein78/rakovac.rs), запускается cron'ом пользователя `deploy`. Настройки Caddy для stein.today лежат там же, в `deploy/Caddyfile`.
3. Job `live` ждёт, пока https://stein.today/version.txt покажет новый коммит, и краснеет, если за 10 минут этого не случилось.

На сервере, если что-то не так: `tail -50 /srv/rakovac/stein/update.log`, `cat /srv/rakovac/stein/deployed`.
