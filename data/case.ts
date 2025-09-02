import {
  caseList as zhCaseList,
  caseNameList as zhCaseNameList,
  navList as zhNavList, caseDetail as zhCaseDetail,
  caseContact as zhCaseContact
} from './case.zh'
import { caseList as enCaseList, caseNameList as enCaseNameList, navList as enNavList, caseDetail as enCaseDetail, caseContact as enCaseContact } from './case.en'
import { caseList as jaCaseList, caseNameList as jaCaseNameList, navList as jaNavList, caseDetail as jaCaseDetail, caseContact as jaCaseContact } from './case.ja'

const caseByLocale = {
  zh: {
    caseList: zhCaseList,
    navList: zhNavList,
    caseNameList: zhCaseNameList,
    caseDetail: zhCaseDetail,
    caseContact: zhCaseContact
  },
  en: {
    caseList: enCaseList,
    navList: enNavList,
    caseDetail: enCaseDetail,
    caseNameList: enCaseNameList,
    caseContact: enCaseContact
  },
  ja: {
    caseList: jaCaseList,
    navList: jaNavList,
    caseDetail: jaCaseDetail,
    caseNameList: jaCaseNameList,
    caseContact: jaCaseContact
  }
}

export const getCase = (locale: string) => {
  return caseByLocale[locale as keyof typeof caseByLocale] || caseByLocale.zh
}

export const getCaseDetail = (locale: string) => {
  return caseByLocale[locale as keyof typeof caseByLocale]?.caseDetail || caseByLocale.zh.caseDetail
}

export const getCaseContact = (locale: string) => {
  return caseByLocale[locale as keyof typeof caseByLocale]?.caseContact || caseByLocale.zh.caseContact
}

// 为了向后兼容，导出中文新闻数据作为默认值
export const caseList = zhCaseList
export const navList = zhNavList
export const caseNameList = zhCaseNameList
export const caseDetail = zhCaseDetail
export const caseContact = zhCaseContact
