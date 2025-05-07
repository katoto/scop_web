"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'solutions', href: '/solutions' },
    { key: 'research', href: '/research' },
    { key: 'about', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/zh' || pathname === '/en' || pathname === '/ja';
    }
    return pathname?.includes(href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-black/50'
    }`}>
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className={`text-2xl font-bold ${
              isScrolled ? 'text-amber-600' : 'text-amber-400'
            }`}>
              CATL
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'text-amber-500' : ''
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-amber-500 focus:outline-none`}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white fixed top-16 left-0 right-0 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`text-gray-800 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href) ? 'text-amber-500' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 