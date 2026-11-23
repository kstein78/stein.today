// Аналитика и подтверждение прав в поисковиках. null = выключено.
// GA4 и Яндекс Метрика загружаются ТОЛЬКО после согласия посетителя в баннере (GDPR / ZZPL).
export const analytics = {
  /** Google Analytics 4, вида 'G-XXXXXXXXXX' */
  ga4: 'G-WETWPC8HXE' as string | null,
  /** Номер счётчика Яндекс Метрики */
  yandexMetrika: 114589526 as number | null,
  /** Содержимое мета-тега google-site-verification (Search Console, способ «Тег HTML») */
  googleVerification: 'B_nrTU04A8QQjM-fRm6DibPhihn0vBKdzdBl4XnES_M' as string | null,
  /** Содержимое мета-тега yandex-verification (Яндекс Вебмастер, способ «Метатег») */
  yandexVerification: 'f24bbc8280045e75' as string | null,
};
