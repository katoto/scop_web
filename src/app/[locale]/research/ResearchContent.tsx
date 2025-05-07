'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ResearchContent() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('research.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('research.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['innovation', 'technology', 'sustainability'].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {t(`research.areas.${area}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`research.areas.${area}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 