# stein.today

Личный сайт Константина Штейна: работа, проекты, сайты, увлечения — по одной ссылке.
Статический сайт на [Astro](https://astro.build), два языка (RU, EN), хостинг — свой сервер 2.28.137.150.

## Как добавить проект

1. Скопируйте `projects/_template.json` в `projects/<slug>.json` (slug — латиница, цифры, дефисы; он же адрес страницы: `/ru/<slug>/`).
2. Заполните поля:
   - `group` — раздел: `invest` (ищет инвесторов/партнёров), `site` (сайты), `hobby` (увлечения);
   - `status` — значок: `live` ● сайт работает, `seeking` ◆ ищет инвестора, `collection` ▲ увлечение, `archive` ○ архив, `planned` ◌ в планах;
   - `order` — порядок внутри раздела (меньше — выше);
   - `url` — ссылка на сайт проекта или `null`;
   - `t.ru` и `t.en` — `title` и `summary` обязательны; если есть `body` — у проекта появится отдельная страница; `facts` — таблица «ключ — значение».
3. Закоммитьте в `main`: GitHub соберёт и выложит сайт сам.

Сборка упадёт с понятной ошибкой, если пропущено обязательное поле или повторяется slug.

## Где что лежит

| Что | Где |
|---|---|
| Проекты, сайты, увлечения | `projects/*.json` — один файл на проект |
| Тексты интерфейса, резюме, контакты, соцсети | `src/data/content.ts` |
| Дизайн | `src/styles/global.css` |
| Карта на главной | генерируется: `python3 tools/map.py > tools/map.json && python3 tools/gen_heromap.py` |
| Проверка ссылок | `node tools/check-links.mjs` (после `npm run build`) |

## Локально

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # готовый сайт в dist/
```

## Деплой на сервер

Workflow `.github/workflows/deploy.yml` на каждый push в `main` собирает сайт, проверяет ссылки и выкладывает `dist/` на сервер через rsync по SSH.
Выкладка включится, когда в Settings → Secrets and variables → Actions будут заданы секреты:

| Секрет | Значение |
|---|---|
| `DEPLOY_HOST` | `2.28.137.150` |
| `DEPLOY_USER` | пользователь SSH |
| `DEPLOY_KEY` | приватный ключ (публичный — в `~/.ssh/authorized_keys` на сервере) |
| `DEPLOY_PATH` | папка сайта, например `/var/www/stein.today` |
| `DEPLOY_PORT` | порт SSH, если не 22 |

На сервере: A-запись `stein.today` и `www.stein.today` → `2.28.137.150`, виртуальный хост — пример в `deploy/nginx-stein.today.conf` (или `deploy/.htaccess.example` для Apache), сертификат — `certbot`.

Если удобнее без GitHub Actions: `npm run build` и залить содержимое `dist/` в папку сайта любым способом.
