<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getLocalizedImagePath } from '~/utils/image'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const localePath = useLocalePath()

const section1 = [
  {
    title: t('product_type2.section1.0.title'),
    desc: t('product_type2.section1.0.desc'),
    img: '/product34/1.1.png'
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
    img: getLocalizedImagePath('/product34/2.2.png')
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
    img: '/product34/3.1.png'
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
    title: t('product_type2.section3.5.title'),
    desc: t('product_type2.section3.5.desc'),
    img: '/r_and_d/immune_checkpoint_inhibition.png'
  },
  {
    title: t('product_type2.section3.6.title'),
    desc: t('product_type2.section3.6.desc'),
    img: '/r_and_d/subcritical_water_extraction.png'
  }
];

const featureRefs = ref<HTMLElement[]>([]);
const feature2Refs = ref<HTMLElement[]>([]);
const feature3Refs = ref<HTMLElement[]>([]);

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
});

const marketCompare = computed(() => [
  {
    label: t('product.product0.compare.items.core.label'),
    market: t('product.product0.compare.items.core.cp101'),
    cp101: t('product.product0.compare.items.core.super')
  },
  {
    label: t('product.product0.compare.items.users.label'),
    market: t('product.product0.compare.items.users.cp101'),
    cp101: t('product.product0.compare.items.users.super')
  }
]);

</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero" :style="{
      background: `url(${'/r_and_d/banner_bg2.png'}) no-repeat center center`,
      backgroundSize: 'cover'
    }">
      <div class="banner-content">
        <h1>{{ t('product_type2.banner.title') }}</h1>
        <p class="subtitle">{{ t('product_type2.banner.subtitle') }}</p>
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
      <h2>{{ t('product_type2.sections.section3') }}</h2>
      <div class="feature-blocks two-column">
        <div v-for="(feature, idx) in section3" :key="feature.title"
          :ref="el => { if (el) feature3Refs[idx] = el as HTMLElement }" class="feature-block">
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
      <h2>{{ t('product.product0.compare.title') }}</h2>
      <div class="market-compare-table">
        <div class="market-compare-header">
          <div>{{ t('product.product0.compare.headers.label') }}</div>
          <div>{{ t('product.product0.compare.headers.cp101') }}</div>
          <div>{{ t('product.product0.compare.headers.super') }}</div>
        </div>
        <div v-for="item in marketCompare" :key="item.label" class="market-compare-row">
          <div class="market-compare-label">{{ item.label }}</div>
          <div class="market-compare-market">{{ item.market }}</div>
          <div class="market-compare-cp101">{{ item.cp101 }}</div>
        </div>
        <div class="market-compare-row">
          <div class="market-compare-label">{{ t('product.product0.compare.consult.label') }}</div>
          <div class="market-compare-market">
            <NuxtLink :to="localePath('/contact')" class="consult-link">{{ t('product.product0.compare.consult.button') }}</NuxtLink>
          </div>
          <div class="market-compare-cp101">
            <NuxtLink :to="localePath('/contact')" class="consult-link">{{ t('product.product0.compare.consult.button') }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>