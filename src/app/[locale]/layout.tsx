import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import Navigation from '@/components/Navigation';
import '../globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ja' }];
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen flex flex-col">
        <header className="fixed w-full z-50" style={{ border: '1px solid red' }}>
          <div className="container">
            <div className="flex justify-between items-center h-16">
              <Navigation />
            </div>
          </div>
        </header>
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
} 