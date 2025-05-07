'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            {t('solutions.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            {t('solutions.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('solutions.advantages.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['value', 'reliability', 'adaptability', 'service', 'intelligence'].map((advantage, index) => (
              <motion.div
                key={advantage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {t(`solutions.advantages.${advantage}`)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 