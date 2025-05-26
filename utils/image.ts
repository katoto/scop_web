import { useI18n } from 'vue-i18n'

export const getLocalizedImagePath = (path: string): string => {
  const { locale } = useI18n()
  
  // 如果路径以 / 开头，去掉开头的 /
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // 如果是日本地区，添加 jp/ 前缀
  if (locale.value === 'ja') {
    return `/jp/${cleanPath}`
  }
  
  return `/${cleanPath}`
} 