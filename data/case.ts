import { caseList as zhCaseList, navList as zhNavList, caseDetail as zhCaseDetail } from './case.zh'
import { caseList as enCaseList, navList as enNavList, caseDetail as enCaseDetail } from './case.en'
import { caseList as jaCaseList, navList as jaNavList, caseDetail as jaCaseDetail } from './case.ja'

const caseByLocale = {
  zh: {
    caseList: zhCaseList,
    navList: zhNavList,
    caseDetail: zhCaseDetail  
  },
  en: {
    caseList: enCaseList,
    navList: enNavList,
    caseDetail: enCaseDetail
  },
  ja: {
    caseList: jaCaseList,
    navList: jaNavList,
    caseDetail: jaCaseDetail
  }
}

export const getCase = (locale: string) => {
  return caseByLocale[locale as keyof typeof caseByLocale] || caseByLocale.zh
}

export const getCaseDetail = (locale: string) => {
  return caseByLocale[locale as keyof typeof caseByLocale]?.caseDetail || caseByLocale.zh.caseDetail
}

// 为了向后兼容，导出中文新闻数据作为默认值
export const caseList = zhCaseList
export const navList = zhNavList
export const caseDetail = zhCaseDetail 
