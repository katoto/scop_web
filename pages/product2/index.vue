<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { getLocalizedImagePath } from '~/utils/image';

const { t } = useI18n()
const localePath = useLocalePath()

const productImages = [
  '/product2/1.3.5-1_livinol.jpg',
  '/product2/1.3.5-2_broccoli.jpg',
  '/product2/1.3.5-3_thistle.jpg',
  '/product2/1.3.5-4_grape.jpg',
  '/product2/1.3.5-5_ornithine.png',
  '/product2/1.3.5-6_garcinia.jpg',
];

const productNames = computed(() => [
  t('product.product2.compounds.items.livinol.name'),
  t('product.product2.compounds.items.broccoli.name'),
  t('product.product2.compounds.items.thistle.name'),
  t('product.product2.compounds.items.grape.name'),
  t('product.product2.compounds.items.ornithine.name'),
  t('product.product2.compounds.items.garcinia.name')
]);

const productDesc = computed(() => [
  t('product.product2.compounds.items.livinol.desc'),
  t('product.product2.compounds.items.broccoli.desc'),
  t('product.product2.compounds.items.thistle.desc'),
  t('product.product2.compounds.items.grape.desc'),
  t('product.product2.compounds.items.ornithine.desc'),
  t('product.product2.compounds.items.garcinia.desc')
]);

const patentOptions = computed(() => [
  {
    id: 1,
    title: t('product.product2.patent.options.extraction.title'),
    patentNo: t('product.product2.patent.options.extraction.patentNo'),
    desc: t('product.product2.patent.options.extraction.desc'),
    image: getLocalizedImagePath('/product2/1.3.2-1_extract.jpg'),
  },
  {
    id: 2,
    title: t('product.product2.patent.options.release.title'),
    patentNo: '',
    desc: t('product.product2.patent.options.release.desc'),
    image: '/product2/1.3.2-2_release.jpg',
  },
  {
    id: 3,
    title: t('product.product2.patent.options.livinol.title'),
    patentNo: t('product.product2.patent.options.livinol.patentNo'),
    desc: t('product.product2.patent.options.livinol.desc'),
    image: '/product2/1.3.2-3_patent.jpg',
  },
  {
    id: 4,
    title: t('product.product2.patent.options.active.title'),
    patentNo: '',
    desc: t('product.product2.patent.options.active.desc'),
    image: '/product2/1.3.2-4_active.png',
  },
  {
    id: 5,
    title: t('product.product2.patent.options.cert.title'),
    patentNo: '',
    desc: t('product.product2.patent.options.cert.desc'),
    image: '/product2/1.3.2-5_cert.jpg',
  }
]);

const activePatent = ref(patentOptions.value[0]);

function setActivePatent(option: typeof patentOptions.value[0]) {
  activePatent.value = option;
}

const features = computed(() => [
  {
    title: t('product.product2.features.items.liver.title'),
    desc: t('product.product2.features.items.liver.desc'),
    img: '/product2/1.3.3-1_liver.jpg'
  },
  {
    title: t('product.product2.features.items.antioxidant.title'),
    desc: t('product.product2.features.items.antioxidant.desc'),
    img: '/product2/1.3.3-2_antioxid.jpg'
  },
  {
    title: t('product.product2.features.items.alcohol.title'),
    desc: t('product.product2.features.items.alcohol.desc'),
    img: '/product2/1.3.3-3_alcohol.jpg'
  },
  {
    title: t('product.product2.features.items.whiten.title'),
    desc: t('product.product2.features.items.whiten.desc'),
    img: '/product2/1.3.3-4_whiten.jpg'
  },
  {
    title: t('product.product2.features.items.sugar.title'),
    desc: t('product.product2.features.items.sugar.desc'),
    img: '/product2/1.3.3-5_sugar.jpg'
  },
  {
    title: t('product.product2.features.items.fatty.title'),
    desc: t('product.product2.features.items.fatty.desc'),
    img: '/product2/1.3.3-6_fatty.png'
  }
]);

const scienceList = computed(() => [
  {
    icon: t('product.product2.science.items.patent.icon'),
    title: t('product.product2.science.items.patent.title'),
    desc: t('product.product2.science.items.patent.desc')
  },
  {
    icon: t('product.product2.science.items.source.icon'),
    title: t('product.product2.science.items.source.title'),
    desc: t('product.product2.science.items.source.desc')
  },
  {
    icon: t('product.product2.science.items.cert.icon'),
    title: t('product.product2.science.items.cert.title'),
    desc: t('product.product2.science.items.cert.desc')
  },
  {
    icon: t('product.product2.science.items.research.icon'),
    title: t('product.product2.science.items.research.title'),
    desc: t('product.product2.science.items.research.desc')
  }
]);

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

const featureRefs = ref<HTMLElement[]>([]);
const scienceRefs = ref<HTMLElement[]>([]);
const adviceRefs = ref<HTMLElement[]>([]);

const adviceLists = computed(() => ({
  dosage: {
    title: t('product.product2.advice.items.dosage.title'),
    list: [
      t('product.product2.advice.items.dosage.list.1'),
      t('product.product2.advice.items.dosage.list.2')
    ]
  },
  period: {
    title: t('product.product2.advice.items.period.title'),
    list: [
      t('product.product2.advice.items.period.list.1'),
      t('product.product2.advice.items.period.list.2'),
      t('product.product2.advice.items.period.list.3')
    ]
  },
  notice: {
    title: t('product.product2.advice.items.notice.title'),
    list: [
      t('product.product2.advice.items.notice.list.1'),
      t('product.product2.advice.items.notice.list.2'),
      t('product.product2.advice.items.notice.list.3')
    ]
  }
}));

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

  scienceRefs.value.forEach(el => {
    if (el) observer.observe(el);
  });

  adviceRefs.value.forEach(el => {
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
          <h1 class="title">{{ t('product.product2.hero.title') }}</h1>
          <p class="subtitle">{{ t('product.product2.hero.subtitle') }}</p>
          <p class="desc">{{ t('product.product2.hero.desc') }}</p>
        </div>
        <div class="hero-image">
          <img src="/images/pro-1.png" />
        </div>
      </div>

      <div class="menu-bar">
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product0')">{{ t('product.product2.menu.mushroom') }}</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product')">{{ t('product.product2.menu.pill') }}</NuxtLink>
        </div>
        <div class="menu-item active">
          <NuxtLink class="nav-link" :to="localePath('/product2')">{{ t('product.product2.menu.liver') }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2 class="patent-section-title">{{ t('product.product2.patent.title') }}</h2>
      <div class="patent-flex-box">
        <div class="patent-left">
          <div class="patent-title">{{ activePatent.title }}</div>
          <div class="patent-no">{{ activePatent.patentNo }}</div>
          <div class="patent-desc">{{ activePatent.desc }}</div>
        </div>
        <div class="patent-right" :style="{ backgroundImage: `url(${activePatent.image})` }">
          <div class="patent-menu">
            <div v-for="(option, index) in patentOptions" :key="option.id"
              class="patent-menu-item" :class="{ active: activePatent.id === option.id }"
              @mouseenter="setActivePatent(option)" @click="setActivePatent(option)">
              <template v-if="activePatent.id === option.id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ option.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product.product2.features.title') }}</h2>
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
      <h2>{{ t('product.product2.science.title') }}</h2>
      <div class="science-blocks">
        <div v-for="(item, idx) in scienceList" :key="item.title"
          :ref="el => { if (el) scienceRefs[idx] = el as HTMLElement }" class="science-block">
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
      <h2>{{ t('product.product2.compounds.title') }}</h2>
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
      <h2>{{ t('product.product2.advice.title') }}</h2>
      <div class="advice-cards">
        <div v-for="(_, idx) in 3" :key="idx" :ref="el => { if (el) adviceRefs[idx] = el as HTMLElement }"
          class="advice-card">
          <div class="advice-title" v-if="idx === 0">{{ adviceLists.dosage.title }}</div>
          <div class="advice-title" v-else-if="idx === 1">{{ adviceLists.period.title }}</div>
          <div class="advice-title" v-else>{{ adviceLists.notice.title }}</div>
          <div class="advice-divider"></div>
          <ul class="advice-list" v-if="idx === 0">
            <li v-for="(item, index) in adviceLists.dosage.list" :key="index">{{ item }}</li>
          </ul>
          <ul class="advice-list" v-else-if="idx === 1">
            <li v-for="(item, index) in adviceLists.period.list" :key="index">{{ item }}</li>
          </ul>
          <ul class="advice-list" v-else>
            <li v-for="(item, index) in adviceLists.notice.list" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>