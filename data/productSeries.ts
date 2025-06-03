import { productSeries as zhProductSeries } from './productSeries.zh'
import { productSeries as enProductSeries } from './productSeries.en'
import { productSeries as jaProductSeries } from './productSeries.ja'

// Export product series data for all languages
export const productSeriesByLocale = {
  zh: zhProductSeries,
  en: enProductSeries,
  ja: jaProductSeries
}

// For backward compatibility, export Chinese product series data as default
export const defaultProductSeries = zhProductSeries

// Export a function to get product series data for the current language
export function getProductSeries(locale: string) {
  return productSeriesByLocale[locale as keyof typeof productSeriesByLocale] || zhProductSeries
} 