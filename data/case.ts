import {
  caseList as zhCaseList,
  caseNameList as zhCaseNameList,
  pillCaseList as zhPillCaseList
} from './case.zh'
import {
  caseList as enCaseList,
  caseNameList as enCaseNameList,
  pillCaseList as enPillCaseList
} from './case.en'
import {
  caseList as jaCaseList,
  caseNameList as jaCaseNameList,
  pillCaseList as jaPillCaseList,
  caseContact as jaCaseContact
} from './case.ja'

// 导入文章详情
import { caseDetail as zhCaseDetail1, caseContact as zhCaseContact } from './articles/zh/article-1'
import { caseDetail as enCaseDetail1, caseContact as enCaseContact } from './articles/en/article-1'
import { caseDetail as jaCaseDetail1 } from './articles/ja/article-1'
import { caseDetail as zhCaseDetail2, caseContact as zhCaseContact2 } from './articles/zh/article-2'
import { caseDetail as enCaseDetail2, caseContact as enCaseContact2 } from './articles/en/article-2'
import { caseDetail as jaCaseDetail2 } from './articles/ja/article-2'
import { caseDetail as zhCaseDetail3, caseContact as zhCaseContact3 } from './articles/zh/article-3'
import { caseDetail as enCaseDetail3, caseContact as enCaseContact3 } from './articles/en/article-3'
import { caseDetail as jaCaseDetail3, caseContact as jaCaseContact3 } from './articles/ja/article-3'


// 文章详情映射
const articlesMap = {
  zh: {
    '1': zhCaseDetail1,
    '2': zhCaseDetail2,
    '3': zhCaseDetail3,
    // 可以在这里添加更多文章
  },
  en: {
    '1': enCaseDetail1,
    '2': enCaseDetail2,
    '3': enCaseDetail3,
    // 可以在这里添加更多文章
  },
  ja: {
    '1': jaCaseDetail1,
    '2': jaCaseDetail2,
    '3': jaCaseDetail3,
    // 可以在这里添加更多文章
  }
}

// 文章联系信息映射
const contactMap = {
  zh: {
    '1': zhCaseContact,
    '2': zhCaseContact2,
    '3': zhCaseContact3,
  },
  en: {
    '1': enCaseContact,
    '2': enCaseContact2,
    '3': enCaseContact3,
  },
  ja: {
    '1': jaCaseContact,
    '2': jaCaseContact, // article-2 没有导出 caseContact，使用默认
    '3': jaCaseContact3,
  }
}

const caseByLocale = {
  zh: {
    caseList: zhCaseList,
    pillCaseList: zhPillCaseList,
    caseNameList: zhCaseNameList,
    caseContact: zhCaseContact
  },
  en: {
    caseList: enCaseList,
    pillCaseList: enPillCaseList,
    caseDetail: enCaseDetail1, // 保持向后兼容
    caseNameList: enCaseNameList,
    caseContact: enCaseContact
  },
  ja: {
    caseList: jaCaseList,
    pillCaseList: jaPillCaseList,
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

export const getCaseContact = (locale: string, articleId?: string) => {
  // 如果提供了 articleId，返回对应文章的联系信息
  if (articleId) {
    const contacts = contactMap[locale as keyof typeof contactMap]
    if (contacts && contacts[articleId as keyof typeof contacts]) {
      return contacts[articleId as keyof typeof contacts]
    }
  }
  // 否则返回默认的联系信息
  return caseByLocale[locale as keyof typeof caseByLocale]?.caseContact || caseByLocale.zh.caseContact
}

// 为了向后兼容，导出中文新闻数据作为默认值
export const caseList = zhCaseList
export const caseNameList = zhCaseNameList
export const caseDetail = zhCaseDetail1
export const caseContact = zhCaseContact
