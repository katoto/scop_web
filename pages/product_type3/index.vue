<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { getLocalizedImagePath } from '~/utils/image'

const { t } = useI18n()
const localePath = useLocalePath()

const productImages = [
  '/product0/coprinus_comatus.jpg',
  '/product0/sterilized_lactobacillus.jpg',
  '/product0/long_pepper_extract.jpg',
  '/product0/resistant_dextrin.jpg',
  '/product0/fermented_soy_isoflavone.jpg',
  '/product0/hericium_erinaceus.jpg',

  '/product0/coprinus_comatus.jpg',
  '/product0/sterilized_lactobacillus.jpg',
  '/product0/long_pepper_extract.jpg',
  '/product0/resistant_dextrin.jpg',
  '/product0/fermented_soy_isoflavone.jpg',
  '/product0/hericium_erinaceus.jpg',
];

const productNames = computed(() => [
  t('product.product0.compounds.items.coprinus.name'),
  t('product.product0.compounds.items.lactobacillus.name'),
  t('product.product0.compounds.items.pepper.name'),
  t('product.product0.compounds.items.dextrin.name'),
  t('product.product0.compounds.items.soy.name'),
  t('product.product0.compounds.items.hericium.name')
]);

const productDesc = computed(() => [
  t('product.product0.compounds.items.coprinus.desc'),
  t('product.product0.compounds.items.lactobacillus.desc'),
  t('product.product0.compounds.items.pepper.desc'),
  t('product.product0.compounds.items.dextrin.desc'),
  t('product.product0.compounds.items.soy.desc'),
  t('product.product0.compounds.items.hericium.desc')
]);

const patentOptions = computed(() => [
  {
    id: 1,
    title: t('product.product0.tech.options.extraction.title'),
    patentNo: '',
    desc: t('product.product0.tech.options.extraction.desc'),
    image: getLocalizedImagePath('/product0/subcritical_water_extraction.jpg'),
  },
  {
    id: 2,
    title: t('product.product0.tech.options.patent.title'),
    patentNo: t('product.product0.tech.options.patent.patentNo'),
    desc: t('product.product0.tech.options.patent.desc'),
    image: getLocalizedImagePath('/product0/patent_support.jpg'),
  },
  {
    id: 3,
    title: t('product.product0.tech.options.purification.title'),
    patentNo: '',
    desc: t('product.product0.tech.options.purification.desc'),
    image: getLocalizedImagePath('/product0/high_concentration_purification.jpg'),
  },
]);

const activePatent = ref(patentOptions.value[0]);

function setActivePatent(option: typeof patentOptions.value[0]) {
  activePatent.value = option;
}

const features = computed(() => [
  {
    title: t('product.product0.features.items.immune.title'),
    desc: t('product.product0.features.items.immune.desc'),
    img: '/product0/immune_checkpoint_inhibition.jpg'
  },
  {
    title: t('product.product0.features.items.dendritic.title'),
    desc: t('product.product0.features.items.dendritic.desc'),
    img: getLocalizedImagePath('/product0/dendritic_macrophage_activation.jpg')
  },
  {
    title: t('product.product0.features.items.cancer.title'),
    desc: t('product.product0.features.items.cancer.desc'),
    img: getLocalizedImagePath('/product0/cancer_support_energy.jpg')
  }
]);

const scienceList = computed(() => [
  {
    icon: t('product.product0.science.items.nobel.icon'),
    title: t('product.product0.science.items.nobel.title'),
    desc: t('product.product0.science.items.nobel.desc'),
    img: '/product0/nobel_research_support.png'
  },
  {
    icon: t('product.product0.science.items.fda.icon'),
    title: t('product.product0.science.items.fda.title'),
    desc: t('product.product0.science.items.fda.desc'),
    img: '/product0/fda_double_certification.png'
  },
  {
    icon: t('product.product0.science.items.research.icon'),
    title: t('product.product0.science.items.research.title'),
    desc: t('product.product0.science.items.research.desc'),
    img: '/product0/45_years_research_background.svg'
  },
  {
    icon: t('product.product0.science.items.results.icon'),
    title: t('product.product0.science.items.results.title'),
    desc: t('product.product0.science.items.results.desc'),
    img: '/product0/experimental_verification.svg'
  },
  {
    icon: t('product.product0.science.items.university.icon'),
    title: t('product.product0.science.items.university.title'),
    desc: t('product.product0.science.items.university.desc'),
    img: '/product0/mie_university_support.png'
  },
  {
    icon: t('product.product0.science.items.verification.icon'),
    title: t('product.product0.science.items.verification.title'),
    desc: t('product.product0.science.items.verification.desc'),
    img: '/product0/experimental_verification.svg'
  }
]);

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

const section2 = [
  {
    title: t('product_type3.section2.0.title'),
    desc: t('product_type3.section2.0.desc'),
    img: getLocalizedImagePath('/r_and_d/in_vivo_experiment.jpg')
  },
  {
    title: t('product_type3.section2.1.title'),
    desc: t('product_type3.section2.1.desc'),
    img: getLocalizedImagePath('/r_and_d/in_vitro_experiment.jpg')
  },
  {
    title: t('product_type3.section2.2.title'),
    desc: t('product_type3.section2.2.desc'),
    img: getLocalizedImagePath('/r_and_d/agaricus_immune_activation.jpg')
  },
  {
    title: t('product_type3.section2.3.title'),
    desc: t('product_type3.section2.3.desc'),
    img: getLocalizedImagePath('/r_and_d/triple_immune_synergy.jpg')
  }
];

const section3 = [
  {
    title: t('product_type3.section3.0.title'),
    desc: t('product_type3.section3.0.desc'),
    img: '/r_and_d/subcritical_water_extraction.png'
  },
  {
    title: t('product_type3.section3.1.title'),
    desc: t('product_type3.section3.1.desc'),
    img: '/r_and_d/immune_checkpoint_inhibition.png'
  }
];

const feature2Refs = ref<HTMLElement[]>([]);
const feature3Refs = ref<HTMLElement[]>([]);

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
          <h1>{{ t('product.product0.hero.title') }}</h1>
          <p class="subtitle">{{ t('product.product0.hero.subtitle') }}</p>
          <p class="desc">{{ t('product.product0.hero.desc') }}</p>
        </div>
        <div class="hero-images">
          <div class="hero-image">
            <img src="/images/pro-4.png" />
          </div>
          <div class="hero-image">
            <img src="/images/pro-2.png" />
          </div>
        </div>
      </div>

      <div class="menu-bar">
        <div class="menu-item active">
          <NuxtLink class="nav-link" :to="localePath('/product0')">{{ t('product.product0.menu.mushroom') }}</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product')">{{ t('product.product0.menu.pill') }}</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product2')">{{ t('product.product0.menu.liver') }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2 class="patent-section-title">{{ t('product.product0.tech.title') }}</h2>
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
      <h2>{{ t('product.product0.features.title') }}</h2>
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
      <h2>{{ t('product.product0.science.title') }}</h2>
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
      <h2>{{ t('product.product0.compounds.title') }}</h2>
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

    <section class="product-section">
      <h2>{{ t('product.product0.advice.title') }}</h2>
      <div class="advice-cards">
        <div v-for="(_, idx) in 3" :key="idx" :ref="el => { if (el) adviceRefs[idx] = el as HTMLElement }"
          class="advice-card">
          <div class="advice-title" v-if="idx === 0">{{ t('product.product0.advice.items.daily.title') }}</div>
          <div class="advice-title" v-else-if="idx === 1">{{ t('product.product0.advice.items.tips.title') }}</div>
          <div class="advice-title" v-else>{{ t('product.product0.advice.items.allergy.title') }}</div>
          <div class="advice-divider"></div>
          <div class="advice-desc" v-if="idx === 0">{{ t('product.product0.advice.items.daily.desc') }}</div>
          <div class="advice-desc" v-else-if="idx === 1">{{ t('product.product0.advice.items.tips.desc') }}</div>
          <div class="advice-desc" v-else>{{ t('product.product0.advice.items.allergy.desc') }}</div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('product_type3.sections.section2') }}</h2>
      <div class="feature-blocks two-column">
        <div v-for="(feature, idx) in section2" :key="feature.title"
          :ref="el => { if (el) feature2Refs[idx] = el as HTMLElement }"
          class="feature-block">
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
      <h2>{{ t('product_type3.sections.section3') }}</h2>
      <div class="feature-blocks two-column">
        <div v-for="(feature, idx) in section3" :key="feature.title"
          :ref="el => { if (el) feature3Refs[idx] = el as HTMLElement }"
          class="feature-block">
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
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>