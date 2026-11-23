// Аналитика и подтверждение прав в поисковиках. null = выключено.
// GA4 и Яндекс Метрика загружаются ТОЛЬКО после согласия посетителя в баннере (GDPR / ZZPL).
export const analytics = {
  /** Google Analytics 4, вида 'G-XXXXXXXXXX' */
  ga4: null as string | null,
  /** Номер счётчика Яндекс Метрики */
  yandexMetrika: null as number | null,
  /** Содержимое мета-тега google-site-verification (Search Console, способ «Тег HTML») */
  googleVerification: null as string | null,
  /** Содержимое мета-тега yandex-verification (Яндекс Вебмастер, способ «Метатег») */
  yandexVerification: null as string | null,
};
