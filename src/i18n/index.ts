import ru from './ru';
import en from './en';
import sr from './sr';
import de from './de';
// Тип берётся из русской версии: если в другом языке не хватает ключа, сборка упадёт.
type UI = typeof ru;
export const ui: Record<'ru' | 'en' | 'sr' | 'de', UI> = { ru, en, sr, de };

// Проверка при сборке: во всех языках те же ключи, что в ru.
const keys = (o: any, p = ''): string[] => Object.entries(o).flatMap(([k, v]) =>
  v && typeof v === 'object' && !Array.isArray(v) ? keys(v, `${p}${k}.`) : [`${p}${k}`]);
const ref = new Set(keys(ru));
for (const [l, d] of Object.entries(ui)) {
  const got = new Set(keys(d));
  const miss = [...ref].filter((k) => !got.has(k));
  if (miss.length) throw new Error(`src/i18n/${l}.ts: не хватает ключей ${miss.join(', ')}`);
}
