'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const solutions = [
  {
    id: 'passenger',
    title: 'solutions.passenger.title',
    description: 'solutions.passenger.description',
    image: '/images/passenger.jpg'
  },
  {
    id: 'commercial',
    title: 'solutions.commercial.title',
    description: 'solutions.commercial.description',
    image: '/images/commercial.jpg'
  },
  {
    id: 'energy',
    title: 'solutions.energy.title',
    description: 'solutions.energy.description',
    image: '/images/energy.jpg'
  },
  {
    id: 'recycling',
    title: 'solutions.recycling.title',
    description: 'solutions.recycling.description',
    image: '/images/recycling.jpg'
  }
];

export default function SolutionsPage() {
  const t = useTranslations('solutions');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-800 w-full">
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

      {/* Solutions Grid */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={solution.image}
                    alt={t(solution.title)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    {t(solution.title)}
                  </h3>
                  <p className="text-gray-600">
                    {t(solution.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
} 