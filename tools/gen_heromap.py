# Генерирует src/components/HeroMap.astro из tools/map.json (python3 tools/map.py > tools/map.json)
import json
d=json.load(open('tools/map.json'))
W,H=d['w'],d['h']
rings="\n".join(f'    <path class="ring r{i}" d="{r}" />' for i,r in enumerate(d['rings']))
grat="\n".join([f'    <line class="grat" x1="0" y1="{y}" x2="{W}" y2="{y}" /><text class="deg" x="{W-4}" y="{y-6}" text-anchor="end">{l:.1f}°N</text>' for l,y in d['grat']['lat']]+
               [f'    <line class="grat" x1="{x}" y1="0" x2="{x}" y2="{H}" /><text class="deg" x="{x+5}" y="{H-8}">{l:.1f}°E</text>' for l,x in d['grat']['lon']])
pl=d['places']
vx,vy=pl['vajska']
rx,ry=pl['rakovac']; nx,ny=pl['novisad']
src=f'''---
// Сгенерировано tools/gen_heromap.py из реальных координат (равнопромежуточная проекция). Не править руками.
import Symbol from './Symbol.astro';
import {{ ui, type Lang }} from '../data/content';
interface Props {{ lang: Lang }}
const {{ lang }} = Astro.props;
const t = ui[lang];
---
<figure class="map">
  <svg viewBox="0 0 {W} {H}" role="img" aria-labelledby="map-cap">
{grat}
{rings}
    <path class="danube" d="{d['danube']}" />
    <text class="water" x="250" y="236" transform="rotate(-10 250 236)">{{t.mapDanube}}</text>
    <text class="relief" x="{pl['beocin'][0]-175}" y="{pl['beocin'][1]+92}">{{t.mapFruska}}</text>
    <a href={{`/${{lang}}/rakovac/`}} class="pin">
      <Symbol status="live" x={{{rx}}} y={{{ry}}} size={{22}} />
      <text x="{rx+16}" y="{ry+24}">{{t.places.rakovac}}</text>
    </a>
    <g class="town">
      <rect x="{nx-7}" y="{ny-7}" width="14" height="14" />
      <text x="{nx+14}" y="{ny-12}">{{t.places.novisad}}</text>
    </g>
    <a href={{`/${{lang}}/#vajska`}} class="pin">
      <Symbol status="live" x={{{vx}}} y={{{vy}}} size={{22}} />
      <text x="{vx+16}" y="{vy+7}">{{t.places.vajska}}</text>
    </a>
  </svg>
  <figcaption id="map-cap">{{t.mapCaption}}</figcaption>
</figure>
'''
open('src/components/HeroMap.astro','w').write(src)
