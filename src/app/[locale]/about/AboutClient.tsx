'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutClient() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 w-full">
        <div className="w-full px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('overview.title')}</h2>
              <p className="text-gray-600 mb-6">{t('overview.description')}</p>
              <div className="grid grid-cols-2 gap-6">
                {['mission', 'vision', 'values'].map((item) => (
                  <div key={item} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{t(`overview.${item}.title`)}</h3>
                    <p className="text-gray-600">{t(`overview.${item}.description`)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] bg-gray-200 rounded-lg"
            >
              {/* Add company image here */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t('global.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('global.description')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['manufacturing', 'rd', 'sales'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{t(`global.${item}.title`)}</h3>
                <p className="text-gray-600">{t(`global.${item}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 