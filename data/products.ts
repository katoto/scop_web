import { products as zhProducts } from './products.zh'
import { products as enProducts } from './products.en'
import { products as jaProducts } from './products.ja'

// 导出所有语言版本的产品数据
export const productsByLocale = {
  zh: zhProducts,
  en: enProducts,
  ja: jaProducts
}

// 为了向后兼容，导出一个默认的中文产品数据
export const defaultProducts = zhProducts

// 导出一个获取当前语言产品数据的函数
export function getProducts(locale: string) {
  return productsByLocale[locale as keyof typeof productsByLocale] || zhProducts
} 