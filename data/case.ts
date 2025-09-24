import {
  caseList as zhCaseList,
  caseNameList as zhCaseNameList,
  navList as zhNavList
} from './case.zh'
import { caseList as enCaseList, caseNameList as enCaseNameList, navList as enNavList } from './case.en'
import { caseList as jaCaseList, caseNameList as jaCaseNameList, navList as jaNavList, caseContact as jaCaseContact } from './case.ja'

// 导入文章详情
import { caseDetail as zhCaseDetail1, caseContact as zhCaseContact } from './articles/zh/article-1'
import { caseDetail as enCaseDetail1, caseContact as enCaseContact } from './articles/en/article-1'
import { caseDetail as jaCaseDetail1 } from './articles/ja/article-1'
import { caseDetail as zhCaseDetail2, caseContact as zhCaseContact2 } from './articles/zh/article-2'
import { caseDetail as enCaseDetail2, caseContact as enCaseContact2 } from './articles/en/article-2'
import { caseDetail as jaCaseDetail2 } from './articles/ja/article-2'

// 文章详情映射
const articlesMap = {
  zh: {
    '1': zhCaseDetail1,
    '2': zhCaseDetail2,
    // 可以在这里添加更多文章
  },
  en: {
    '1': enCaseDetail1,
    '2': enCaseDetail2,
    // 可以在这里添加更多文章
  },
  ja: {
    '1': jaCaseDetail1, 
    '2': jaCaseDetail2,
    // 可以在这里添加更多文章
  }
}

const caseByLocale = {
  zh: {
    caseList: zhCaseList,
    navList: zhNavList,
    caseNameList: zhCaseNameList,
    caseContact: zhCaseContact
  },
  en: {
    caseList: enCaseList,
    navList: enNavList,
    caseDetail: enCaseDetail1, // 保持向后兼容
    caseNameList: enCaseNameList,
    caseContact: enCaseContact
  },
  ja: {
    caseList: jaCaseList,
    navList: jaNavList,
    caseDetail: jaCaseDetail1, // 保持向后兼容
    caseNameList: jaCaseNameList,
    caseContact: jaCaseContact
  }
}

export const getCase = (locale: string) => {
  return caseByLocale[locale as keyof typeof caseByLocale] || caseByLocale.zh
}

// 新的函数：根据文章ID和语言获取文章详情
export const getCaseDetailById = (locale: string, articleId: string) => {
  const articles = articlesMap[locale as keyof typeof articlesMap]
  if (articles && articles[articleId as keyof typeof articles]) {
    return articles[articleId as keyof typeof articles]
  }
  console.log('articles', articles)
  // 如果找不到对应语言的文章，尝试返回中文版本
  const zhArticles = articlesMap.zh
  return zhArticles[articleId as keyof typeof zhArticles] || zhCaseDetail1
}

// 保持向后兼容的函数
export const getCaseDetail = (locale: string) => {
  return getCaseDetailById(locale, '1') // 默认返回第一篇文章
}

export const getCaseContact = (locale: string) => {
  return caseByLocale[locale as keyof typeof caseByLocale]?.caseContact || caseByLocale.zh.caseContact
}

// 为了向后兼容，导出中文新闻数据作为默认值
export const caseList = zhCaseList
export const navList = zhNavList
export const caseNameList = zhCaseNameList
export const caseDetail = zhCaseDetail1
export const caseContact = zhCaseContact
