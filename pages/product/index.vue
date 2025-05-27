<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { getLocalizedImagePath } from '~/utils/image';

const localePath = useLocalePath()
const { t } = useI18n()

const productImages = [
  '/product/ashitaba.png',
  '/product/sweettea.jpg',
  '/product/cabbage.jpg',
  '/product/kale.jpg',
  '/product/beetroot.png',
  '/product/bambooleaf.jpg',
  '/product/shitake.jpg',
  '/product/burdock.jpeg',
  '/product/pumpkinseed.png',
  '/product/yeastzinc.png',
  '/product/longpepper.jpg',
  '/product/agaricus.png',
];

const productNames = computed(() => [
  t('product.compound.ingredients.ashitaba.name'),
  t('product.compound.ingredients.sweettea.name'),
  t('product.compound.ingredients.cabbage.name'),
  t('product.compound.ingredients.kale.name'),
  t('product.compound.ingredients.beetroot.name'),
  t('product.compound.ingredients.bambooleaf.name'),
  t('product.compound.ingredients.shitake.name'),
  t('product.compound.ingredients.burdock.name'),
  t('product.compound.ingredients.pumpkinseed.name'),
  t('product.compound.ingredients.yeastzinc.name'),
  t('product.compound.ingredients.longpepper.name'),
  t('product.compound.ingredients.agaricus.name')
]);

const productDesc = computed(() => [
  t('product.compound.ingredients.ashitaba.desc'),
  t('product.compound.ingredients.sweettea.desc'),
  t('product.compound.ingredients.cabbage.desc'),
  t('product.compound.ingredients.kale.desc'),
  t('product.compound.ingredients.beetroot.desc'),
  t('product.compound.ingredients.bambooleaf.desc'),
  t('product.compound.ingredients.shitake.desc'),
  t('product.compound.ingredients.burdock.desc'),
  t('product.compound.ingredients.pumpkinseed.desc'),
  t('product.compound.ingredients.yeastzinc.desc'),
  t('product.compound.ingredients.longpepper.desc'),
  t('product.compound.ingredients.agaricus.desc')
]);

const patentOptions = computed(() => [
  {
    id: 1,
    title: t('product.patent.options.agaricus.title'),
    patentNo: t('product.patent.options.agaricus.patentNo'),
    desc: t('product.patent.options.agaricus.desc'),
    image: getLocalizedImagePath('/product/agaricus_cp101.jpg'),
  },
  {
    id: 2,
    title: t('product.patent.options.longpepper.title'),
    patentNo: t('product.patent.options.longpepper.patentNo'),
    desc: t('product.patent.options.longpepper.desc'),
    image: '/product/longpepper_extract.jpg',
  },
]);

const features = computed(() => [
  {
    title: t('product.features.items.male.title'),
    desc: t('product.features.items.male.desc'),
    img: '/product/male_function.png'
  },
  {
    title: t('product.features.items.kidney.title'),
    desc: t('product.features.items.kidney.desc'),
    img: '/product/kidney_function.png'
  },
  {
    title: t('product.features.items.immune.title'),
    desc: t('product.features.items.immune.desc'),
    img: '/product/immune_system.png'
  },
  {
    title: t('product.features.items.prostate.title'),
    desc: t('product.features.items.prostate.desc'),
    img: '/product/prostate_health.png'
  }
]);

const scienceList = computed(() => [
  {
    icon: '🔬',
    title: t('product.science.items.research.title'),
    desc: t('product.science.items.research.desc')
  },
  {
    icon: '✅',
    title: t('product.science.items.certification.title'),
    desc: t('product.science.items.certification.desc')
  },
  {
    icon: '📚',
    title: t('product.science.items.patent.title'),
    desc: t('product.science.items.patent.desc')
  },
  {
    icon: '🔍',
    title: t('product.science.items.traceability.title'),
    desc: t('product.science.items.traceability.desc')
  }
]);

const marketCompare = computed(() => [
  {
    label: t('product.marketCompare.items.vascular.label'),
    market: t('product.marketCompare.items.vascular.market'),
    cp101: t('product.marketCompare.items.vascular.cp101')
  },
  {
    label: t('product.marketCompare.items.circulation.label'),
    market: t('product.marketCompare.items.circulation.market'),
    cp101: t('product.marketCompare.items.circulation.cp101')
  },
  {
    label: t('product.marketCompare.items.safety.label'),
    market: t('product.marketCompare.items.safety.market'),
    cp101: t('product.marketCompare.items.safety.cp101')
  },
  {
    label: t('product.marketCompare.items.longterm.label'),
    market: t('product.marketCompare.items.longterm.market'),
    cp101: t('product.marketCompare.items.longterm.cp101')
  }
]);

const activePatent = ref(patentOptions.value[0]);

function setActivePatent(option: typeof patentOptions.value[0]) {
  activePatent.value = option;
}

const half = Math.ceil(productImages.length / 2);
const firstRow = computed(() => productImages.slice(0, half));
const secondRow = computed(() => productImages.slice(half));

const activeRow = ref<null | number>(null); // 0 或 1
const activeIdx = ref<null | number>(null);
const locked = ref(false);

function pauseRow(row: number, idx: number) {
  console.log('pauseRow==', row, idx)
  if (locked.value) return;
  activeRow.value = row;
  activeIdx.value = idx;
}
function lockRow(row: number, idx: number) {
  activeRow.value = row;
  activeIdx.value = idx;
  locked.value = true;
}
function unlockRow() {
  activeRow.value = null;
  activeIdx.value = null;
  locked.value = false;
}

function handleMouseLeave(row: number) {
  if (!locked.value) activeRow.value = null;
}

const targetList = computed(() => {
  return [
    t('product.advice.target.list.0'),
    t('product.advice.target.list.1'),
    t('product.advice.target.list.2'),
    t('product.advice.target.list.3')
  ];
});

const featureRefs = ref<HTMLElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  featureRefs.value.forEach(el => {
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero">
      <div class="hero-container">
        <div class="banner-content">
          <h1>{{ t('product.hero.title') }}</h1>
          <p class="subtitle">{{ t('product.hero.subtitle') }}</p>
          <p class="desc">{{ t('product.hero.desc') }}</p>
        </div>
        <div class="hero-image">
          <img src="/images/pro-3.png" />
        </div>
      </div>

      <div class="menu-bar">

        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product0')">{{ t('product.menu.mushroom') }}</NuxtLink>
        </div>
        <div class="menu-item active">
          <NuxtLink class="nav-link" :to="localePath('/product')">{{ t('product.menu.cp101') }}</NuxtLink>
        </div>

        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product2')">{{ t('product.menu.liver') }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2 class="patent-section-title">{{ t('product.patent.title') }}</h2>
      <div class="patent-flex-box">
        <div class="patent-left">
          <div class="patent-title">{{ activePatent.title }}</div>
          <div class="patent-no">{{ activePatent.patentNo }}</div>
          <div class="patent-desc">{{ activePatent.desc }}</div>
        </div>
        <div class="patent-right" :style="{ backgroundImage: `url(${activePatent.image})` }">
          <div class="patent-menu">
            <div class="patent-menu-item" :class="{ active: activePatent.id === patentOptions[0].id }"
              @mouseenter="setActivePatent(patentOptions[0])" @click="setActivePatent(patentOptions[0])">
              <template v-if="activePatent.id === patentOptions[0].id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ patentOptions[0].title }}</span>
            </div>
            <div class="patent-divider"></div>
            <div class="patent-menu-item" :class="{ active: activePatent.id === patentOptions[1].id }"
              @mouseenter="setActivePatent(patentOptions[1])" @click="setActivePatent(patentOptions[1])">
              <template v-if="activePatent.id === patentOptions[1].id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ patentOptions[1].title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product.features.title') }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in features" :key="feature.title"
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
      <h2>{{ t('product.science.title') }}</h2>
      <div class="science-blocks">
        <div v-for="(item, idx) in scienceList" :key="item.title" class="science-block">
          <div class="science-icon">
            <span>{{ item.icon }}</span>
          </div>
          <div class="science-text">
            <div class="science-title">{{ item.title }}</div>
            <div class="science-desc">{{ item.desc }}</div>
          </div>
          <div v-if="idx < scienceList.length - 1" class="science-divider"></div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product.compound.title') }}</h2>
      <div class="compound-carousel">
        <div class="carousel-row" :class="{ paused: activeRow === 0 }" @mouseleave="handleMouseLeave(0)"
          @click.self="unlockRow">
          <div v-for="(img, idx) in firstRow" :key="'row1-' + idx" class="compound-item"
            :class="{ active: activeRow === 0 && activeIdx === idx }" :style="{ backgroundImage: `url(${img})` }"
            @mouseenter="pauseRow(0, idx)" @click.stop="lockRow(0, idx)">
            <div class="compound-info" v-if="activeRow === 0 && activeIdx === idx">
              <h4>{{ productNames[idx] }}</h4>
              <p>{{ productDesc[idx] }}</p>
            </div>
          </div>
        </div>
        <div class="carousel-row reverse" :class="{ paused: activeRow === 1 }" @mouseleave="handleMouseLeave(1)"
          @click.self="unlockRow">
          <div v-for="(img, idx) in secondRow" :key="'row2-' + idx" class="compound-item"
            :class="{ active: activeRow === 1 && activeIdx === idx }" :style="{ backgroundImage: `url(${img})` }"
            @mouseenter="pauseRow(1, idx)" @click.stop="lockRow(1, idx)">
            <div class="compound-info" v-if="activeRow === 1 && activeIdx === idx">
              <h4>{{ productNames[idx + firstRow.length] }}</h4>
              <p>{{ productDesc[idx + firstRow.length] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product.marketCompare.title') }}</h2>
      <div class="market-compare-table">
        <div class="market-compare-header">
          <div>{{ t('product.marketCompare.headers.label') }}</div>
          <div>{{ t('product.marketCompare.headers.market') }}</div>
          <div>{{ t('product.marketCompare.headers.cp101') }}</div>
        </div>
        <div v-for="item in marketCompare" :key="item.label" class="market-compare-row">
          <div class="market-compare-label">{{ item.label }}</div>
          <div class="market-compare-market">{{ item.market }}</div>
          <div class="market-compare-cp101">{{ item.cp101 }}</div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product.advice.title') }}</h2>
      <div class="advice-cards">
        <div class="advice-card">
          <div class="advice-title">{{ t('product.advice.dosage.title') }}</div>
          <div class="advice-divider"></div>
          <div class="advice-desc">
            {{ t('product.advice.dosage.desc') }}
          </div>
        </div>
        <div class="advice-card">
          <div class="advice-title">{{ t('product.advice.target.title') }}</div>
          <div class="advice-divider"></div>
          <ul class="advice-list">
            <li v-for="(item, index) in targetList" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>