import { newsList as zhNewsList, navList as zhNavList, newsDetail as zhNewsDetail } from './news.zh'
import { newsList as enNewsList, navList as enNavList, newsDetail as enNewsDetail } from './news.en'
import { newsList as jaNewsList, navList as jaNavList, newsDetail as jaNewsDetail } from './news.ja'

const newsByLocale = {
  zh: {
    newsList: zhNewsList,
    navList: zhNavList,
    newsDetail: zhNewsDetail
  },
  en: {
    newsList: enNewsList,
    navList: enNavList,
    newsDetail: enNewsDetail
  },
  ja: {
    newsList: jaNewsList,
    navList: jaNavList,
    newsDetail: jaNewsDetail
  }
}

export const getNews = (locale: string) => {
  return newsByLocale[locale as keyof typeof newsByLocale] || newsByLocale.zh
}

export const getNewsDetail = (locale: string) => {
  return newsByLocale[locale as keyof typeof newsByLocale]?.newsDetail || newsByLocale.zh.newsDetail
}

// 为了向后兼容，导出中文新闻数据作为默认值
export const newsList = zhNewsList
export const navList = zhNavList
export const newsDetail = zhNewsDetail 