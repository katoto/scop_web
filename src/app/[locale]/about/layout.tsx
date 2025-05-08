import { unstable_setRequestLocale } from 'next-intl/server';
import AboutPage from './page';

export default async function AboutLayout({
  params
}: {
  params: any // 使用any绕过类型检查
}) {
  const resolvedParams = await params;
  unstable_setRequestLocale(resolvedParams.locale);
  return <AboutPage params={resolvedParams} />;
}