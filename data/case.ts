import {
  caseList as zhCaseList,
  caseNameList as zhCaseNameList,
  pillCaseList as zhPillCaseList,
  pillNameList as zhPillNameList,
  liverCaseList as zhLiverCaseList,
  liverNameList as zhLiverNameList
} from './case.zh'
import {
  caseList as enCaseList,
  caseNameList as enCaseNameList,
  pillCaseList as enPillCaseList,
  pillNameList as enPillNameList,
  liverCaseList as enLiverCaseList,
  liverNameList as enLiverNameList
} from './case.en'
import {
  caseList as jaCaseList,
  caseNameList as jaCaseNameList,
  pillCaseList as jaPillCaseList,
  pillNameList as jaPillNameList,
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

import { caseDetail as zhCaseDetail4, caseContact as zhCaseContact4 } from './articles/zh/article-4'
import { caseDetail as enCaseDetail4, caseContact as enCaseContact4 } from './articles/en/article-4'
import { caseDetail as jaCaseDetail4, caseContact as jaCaseContact4 } from './articles/ja/article-4'
import { caseDetail as zhCaseDetail5, caseContact as zhCaseContact5 } from './articles/zh/article-5'
import { caseDetail as enCaseDetail5, caseContact as enCaseContact5 } from './articles/en/article-5'
import { caseDetail as jaCaseDetail5, caseContact as jaCaseContact5 } from './articles/ja/article-5'
import { caseDetail as zhCaseDetail6, caseContact as zhCaseContact6 } from './articles/zh/article-6'
import { caseDetail as enCaseDetail6, caseContact as enCaseContact6 } from './articles/en/article-6'
import { caseDetail as jaCaseDetail6, caseContact as jaCaseContact6 } from './articles/ja/article-6'
import { caseDetail as zhCaseDetail7, caseContact as zhCaseContact7 } from './articles/zh/article-7'
import { caseDetail as enCaseDetail7, caseContact as enCaseContact7 } from './articles/en/article-7'
import { caseDetail as jaCaseDetail7, caseContact as jaCaseContact7 } from './articles/ja/article-7'

import { caseDetail as zhCaseDetail8, caseContact as zhCaseContact8 } from './articles/zh/article-8'
import { caseDetail as enCaseDetail8, caseContact as enCaseContact8 } from './articles/en/article-8'
import { caseDetail as zhCaseDetail9, caseContact as zhCaseContact9 } from './articles/zh/article-9'
import { caseDetail as enCaseDetail9, caseContact as enCaseContact9 } from './articles/en/article-9'

import { caseDetail as zhCaseDetail10, caseContact as zhCaseContact10 } from './articles/zh/article-10'
import { caseDetail as enCaseDetail10, caseContact as enCaseContact10 } from './articles/en/article-10'

import { caseDetail as zhCaseDetail11, caseContact as zhCaseContact11 } from './articles/zh/article-11'
import { caseDetail as enCaseDetail11, caseContact as enCaseContact11 } from './articles/en/article-11'

import { caseDetail as zhCaseDetail12, caseContact as zhCaseContact12 } from './articles/zh/article-12'
import { caseDetail as enCaseDetail12, caseContact as enCaseContact12 } from './articles/en/article-12'

import { caseDetail as zhCaseDetail13, caseContact as zhCaseContact13 } from './articles/zh/article-13'
import { caseDetail as enCaseDetail13, caseContact as enCaseContact13 } from './articles/en/article-13'

import { caseDetail as zhCaseDetail14, caseContact as zhCaseContact14 } from './articles/zh/article-14'
import { caseDetail as enCaseDetail14, caseContact as enCaseContact14 } from './articles/en/article-14'

import { caseDetail as zhCaseDetail15, caseContact as zhCaseContact15 } from './articles/zh/article-15'
import { caseDetail as enCaseDetail15, caseContact as enCaseContact15 } from './articles/en/article-15'


// 文章详情映射
const articlesMap = {
  zh: {
    '1': zhCaseDetail1,
    '2': zhCaseDetail2,
    '3': zhCaseDetail3,
    '4': zhCaseDetail4,
    '5': zhCaseDetail5,
    '6': zhCaseDetail6,
    '7': zhCaseDetail7,
    '8': zhCaseDetail8,
    '9': zhCaseDetail9,
    '10': zhCaseDetail10,
    '11': zhCaseDetail11,
    '12': zhCaseDetail12,
    '13': zhCaseDetail13,
    '14': zhCaseDetail14,
    '15': zhCaseDetail15,
    // 可以在这里添加更多文章
  },
  en: {
    '1': enCaseDetail1,
    '2': enCaseDetail2,
    '3': enCaseDetail3,
    '4': enCaseDetail4,
    '5': enCaseDetail5,
    '6': enCaseDetail6,
    '7': enCaseDetail7,
    '8': enCaseDetail8,
    '9': enCaseDetail9,
    '10': enCaseDetail10,
    '11': enCaseDetail11,
    '12': enCaseDetail12,
    '13': enCaseDetail13,
    '14': enCaseDetail14,
    '15': enCaseDetail15,
    // 可以在这里添加更多文章
  },
  ja: {
    '1': jaCaseDetail1,
    '2': jaCaseDetail2,
    '3': jaCaseDetail3,
    '4': jaCaseDetail4,
    '5': jaCaseDetail5,
    '6': jaCaseDetail6,
    '7': jaCaseDetail7,
    '8': jaCaseDetail7,
    '9': jaCaseDetail7,
    '10': jaCaseDetail7,
    '11': jaCaseDetail7,
    '12': jaCaseDetail7,
    // 可以在这里添加更多文章
  }
}

// 文章联系信息映射
const contactMap = {
  zh: {
    '1': zhCaseContact,
    '2': zhCaseContact2,
    '3': zhCaseContact3,
    '4': zhCaseContact4,
    '5': zhCaseContact5,
    '6': zhCaseContact6,
    '7': zhCaseContact7,
    '8': zhCaseContact8,
    '9': zhCaseContact9,
    '10': zhCaseContact10,
    '11': zhCaseContact11,
    '12': zhCaseContact12,
    '13': zhCaseContact13,
    '14': zhCaseContact14
  },
  en: {
    '1': enCaseContact,
    '2': enCaseContact2,
    '3': enCaseContact3,
    '4': enCaseContact4,
    '5': enCaseContact5,
    '6': enCaseContact6,
    '7': enCaseContact7,
    '8': enCaseContact8,
    '9': enCaseContact9,
    '10': enCaseContact10,
    '11': enCaseContact11,
    '12': enCaseContact12,
    '13': enCaseContact13,
    '14': enCaseContact14
  },
  ja: {
    '1': jaCaseContact,
    '2': jaCaseContact, // article-2 没有导出 caseContact，使用默认
    '3': jaCaseContact3,
    '4': jaCaseContact4,
    '5': jaCaseContact5,
    '6': jaCaseContact6,
    '7': jaCaseContact7,
    '8': jaCaseContact7,
    '9': jaCaseContact7,
    '10': jaCaseContact7,
    '11': jaCaseContact7,
    '12': jaCaseContact7,
  }
}

const caseByLocale = {
  zh: {
    caseList: zhCaseList,
    pillCaseList: zhPillCaseList,
    caseNameList: zhCaseNameList,
    pillNameList: zhPillNameList,
    liverCaseList: zhLiverCaseList,
    liverNameList: zhLiverNameList,
    caseContact: zhCaseContact
  },
  en: {
    caseList: enCaseList,
    pillCaseList: enPillCaseList,
    caseDetail: enCaseDetail1, // 保持向后兼容
    caseNameList: enCaseNameList,
    pillNameList: enPillNameList,
    liverCaseList: enLiverCaseList,
    liverNameList: enLiverNameList,
    caseContact: enCaseContact
  },
  ja: {
    caseList: jaCaseList,
    pillCaseList: jaPillCaseList,
    caseDetail: jaCaseDetail1, // 保持向后兼容
    caseNameList: jaCaseNameList,
    pillNameList: jaPillNameList,
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
export const liverCaseList = zhLiverCaseList
export const liverNameList = zhLiverNameList
export const caseDetail = zhCaseDetail1
export const caseContact = zhCaseContact
