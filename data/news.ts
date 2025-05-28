import { newsList as zhNewsList, navList as zhNavList } from './news.zh'
import { newsList as enNewsList, navList as enNavList } from './news.en'
import { newsList as jaNewsList, navList as jaNavList } from './news.ja'

export const newsByLocale = {
  zh: {
    newsList: zhNewsList,
    navList: zhNavList
  },
  en: {
    newsList: enNewsList,
    navList: enNavList
  },
  ja: {
    newsList: jaNewsList,
    navList: jaNavList
  }
}

export const getNews = (locale: string) => {
  return newsByLocale[locale as keyof typeof newsByLocale] || newsByLocale.zh
}

// 为了向后兼容，导出中文新闻数据作为默认值
export const newsList = zhNewsList
export const navList = zhNavList 