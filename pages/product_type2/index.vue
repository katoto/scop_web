<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getLocalizedImagePath } from '~/utils/image'
import { useI18n } from 'vue-i18n'
import ProductSeries from './ProductSeries.vue'
const { t } = useI18n()

const section1 = [
  {
    title: t('product_type2.section1.0.title'),
    desc: t('product_type2.section1.0.desc'),
    img: getLocalizedImagePath('/product34/1.1.png')
  },
  {
    title: t('product_type2.section1.1.title'),
    desc: t('product_type2.section1.1.desc'),
    img: '/product34/1.2.png'
  }
];

let section2 = [
  {
    title: t('product_type2.section2.0.title'),
    desc: t('product_type2.section2.0.desc'),
    img: getLocalizedImagePath('/product34/2.1.png')
  },
  {
    title: t('product_type2.section2.1.title'),
    desc: t('product_type2.section2.1.desc'),
    img: '/product34/2.2.png'
  },
  {
    title: t('product_type2.section2.2.title'),
    desc: t('product_type2.section2.2.desc'),
    img: '/product34/2.3.png'
  },
  {
    title: t('product_type2.section2.3.title'),
    desc: t('product_type2.section2.3.desc'),
    img: '/product34/2.4.png'
  },
  {
    title: t('product_type2.section2.4.title'),
    desc: t('product_type2.section2.4.desc'),
    img: '/product34/2.5.png'
  }
];

const section3 = [
  {
    title: t('product_type2.section3.0.title'),
    desc: t('product_type2.section3.0.desc'),
    img: getLocalizedImagePath('/product34/3.1.png')
  },
  {
    title: t('product_type2.section3.1.title'),
    desc: t('product_type2.section3.1.desc'),
    img: '/product34/3.2.png'
  },
  {
    title: t('product_type2.section3.2.title'),
    desc: t('product_type2.section3.2.desc'),
    img: '/product34/3.3.png'
  },
  {
    title: t('product_type2.section3.3.title'),
    desc: t('product_type2.section3.3.desc'),
    img: '/product34/3.4.png'
  },
  {
    title: t('product_type2.section3.4.title'),
    desc: t('product_type2.section3.4.desc'),
    img: '/product34/3.5.png'
  },
  {
    title: [
      t('product_type2.section3.5.title'),
      t('product_type2.section3.6.title')
    ],
    desc: [
      t('product_type2.section3.5.desc'),
      t('product_type2.section3.6.desc')
    ],
    img: '/product34/3.5.png',
    isCombined: true
  }
];

const section4 = [
  {
    title: t('product_type2.section4.0.title'),
    desc: t('product_type2.section4.0.desc'),
    img: '/product34/4.jpeg'
  }
];

const featureRefs = ref<HTMLElement[]>([]);
const feature2Refs = ref<HTMLElement[]>([]);
const feature3Refs = ref<HTMLElement[]>([]);
const feature4Refs = ref<HTMLElement[]>([]);
const adviceRefs = ref<HTMLElement[]>([]);

const adviceItems = computed(() => [
  {
    title: t('product_type2.advice.items.desc1.title'),
    desc: t('product_type2.advice.items.desc1.desc')
  },
  {
    title: t('product_type2.advice.items.desc2.title'),
    desc: t('product_type2.advice.items.desc2.desc')
  },
  {
    title: t('product_type2.advice.items.desc3.title'),
    desc: t('product_type2.advice.items.desc3.desc')
  },
  {
    title: t('product_type2.advice.items.desc4.title'),
    desc: t('product_type2.advice.items.desc4.desc')
  },
  {
    title: t('product_type2.advice.items.desc5.title'),
    desc: t('product_type2.advice.items.desc5.desc')
  },
  {
    title: t('product_type2.advice.items.desc6.title'),
    desc: t('product_type2.advice.items.desc6.desc')
  },
  {
    title: t('product_type2.advice.items.desc7.title'),
    desc: t('product_type2.advice.items.desc7.desc')
  },
  {
    title: t('product_type2.advice.items.desc8.title'),
    desc: t('product_type2.advice.items.desc8.desc')
  }
]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        setTimeout(() => {
          observer.unobserve(entry.target);
        }, 1000);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  featureRefs.value.forEach(el => {
    if (el) observer.observe(el);
  });

  feature2Refs.value.forEach(el => {
    if (el) observer.observe(el);
  });

  feature3Refs.value.forEach(el => {
    if (el) observer.observe(el);
  });

  feature4Refs.value.forEach(el => {
    if (el) observer.observe(el);
  });

  adviceRefs.value.forEach(el => {
    if (el) observer.observe(el);
  });
});

const marketCompare = computed(() => [
  {
    label: t('product_type2.compare.items.core.label'),
    market: t('product_type2.compare.items.core.cp101'),
    cp101: t('product_type2.compare.items.core.super')
  },
  {
    label: t('product_type2.compare.items.users.label'),
    market: t('product_type2.compare.items.users.cp101'),
    cp101: t('product_type2.compare.items.users.super')
  },
  {
    label: t('product_type2.compare.items.desc2.label'),
    market: t('product_type2.compare.items.desc2.cp101'),
    cp101: t('product_type2.compare.items.desc2.super')
  },
  {
    label: t('product_type2.compare.items.desc3.label'),
    market: t('product_type2.compare.items.desc3.cp101'),
    cp101: t('product_type2.compare.items.desc3.super')
  },
  {
    label: t('product_type2.compare.items.desc4.label'),
    market: t('product_type2.compare.items.desc4.cp101'),
    cp101: t('product_type2.compare.items.desc4.super')
  },
  {
    label: t('product_type2.compare.items.desc5.label'),
    market: t('product_type2.compare.items.desc5.cp101'),
    cp101: t('product_type2.compare.items.desc5.super')
  }
]);

</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero" :style="{
      background: `url(${'/product34/0.png'}) no-repeat center center`,
      backgroundSize: 'cover'
    }">
      <div class="banner-content">
        <h1>{{ t('product_type2.banner.title') }}</h1>
        <p class="desc">{{ t('product_type2.banner.description') }}</p>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product_type2.sections.section1') }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in section1" :key="feature.title"
          :ref="el => { if (el) featureRefs[idx] = el as HTMLElement }"
          :class="['feature-block', { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 }]">
          <div class="feature-block-inner">
            <div class="feature-img">
              <img :src="feature.img" :alt="feature.title" />
            </div>
            <div class="feature-text">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product_type2.sections.section2') }}</h2>
      <div class="feature-blocks two-column">
        <div v-for="(feature, idx) in section2" :key="feature.title"
          :ref="el => { if (el) feature2Refs[idx] = el as HTMLElement }" class="feature-block">
          <div class="feature-block-inner">
            <div class="feature-img">
              <img style="object-fit: contain;" :src="feature.img" :alt="feature.title" />
            </div>
            <div class="feature-text">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product_type2.sections.section3') }}</h2>
      <div class="feature-blocks two-column">
        <div v-for="(feature, idx) in section3" :key="Array.isArray(feature.title) ? feature.title[0] : feature.title"
          :ref="el => { if (el) feature3Refs[idx] = el as HTMLElement }" class="feature-block">
          <div class="feature-block-inner">
            <div class="feature-img">
              <img :src="feature.img" :alt="Array.isArray(feature.title) ? feature.title[0] : feature.title" />
            </div>
            <div class="feature-text">
              <template v-if="feature.isCombined">
                <div v-for="(title, i) in feature.title" :key="title" class="combined-feature">
                  <h3>{{ title }}</h3>
                  <p>{{ feature.desc[i] }}</p>
                </div>
              </template>
              <template v-else>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.desc }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 产品对比 -->
    <section class="product-section">
      <h2>{{ t('product_type2.compare.title') }}</h2>
      <div class="market-compare-table">
        <div class="market-compare-header">
          <div>{{ t('product_type2.compare.headers.label') }}</div>
          <div>{{ t('product_type2.compare.headers.cp101') }}</div>
          <div>{{ t('product_type2.compare.headers.super') }}</div>
        </div>
        <div v-for="item in marketCompare" :key="item.label" class="market-compare-row">
          <div class="market-compare-label">{{ item.label }}</div>
          <div class="market-compare-market">{{ item.market }}</div>
          <div class="market-compare-cp101">{{ item.cp101 }}</div>
        </div>

      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product_type2.sections.section4') }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in section4" :key="feature.title"
          :ref="el => { if (el) feature4Refs[idx] = el as HTMLElement }"
          :class="['feature-block', { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 }]">
          <div class="feature-block-inner">
            <div class="feature-img">
              <img :src="feature.img" :alt="feature.title" />
            </div>
            <div class="feature-text">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用人群 -->
    <section class="product-section">
      <h2>{{ t('product_type2.advice.title') }}</h2>
      <div class="advice-cards">
        <div class="advice-row">
          <div v-for="(item, idx) in adviceItems.slice(0, 4)" :key="item.title"
            :ref="el => { if (el) adviceRefs[idx] = el as HTMLElement }" class="advice-card">
            <div class="advice-title">{{ item.title }}</div>
            <div class="advice-desc">{{ item.desc }}</div>
          </div>
        </div>
        <div class="advice-row">
          <div v-for="(item, idx) in adviceItems.slice(4)" :key="item.title"
            :ref="el => { if (el) adviceRefs[idx + 4] = el as HTMLElement }" class="advice-card">
            <div class="advice-title">{{ item.title }}</div>
            <div class="advice-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品系列 -->
    <ProductSeries />

  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.product-series-section {
  background-size: cover;
  padding-bottom: 200px; // 预留底部背景图空间
  .series-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
    .series-card {
      width: 48%;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 12px #eee;
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      .series-header { /* ... */ }
      .series-effect-table { /* ... */ }
      .series-desc { /* ... */ }
      .series-bottom {
        display: flex;
        align-items: center;
        margin-top: 24px;
        .series-product-imgs img { width: 120px; }
      }
    }
  }
}
</style>