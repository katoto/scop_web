import { unstable_setRequestLocale } from 'next-intl/server';
import ResearchContent from './ResearchContent';

export default async function ResearchLayout({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  return <ResearchContent />;
}