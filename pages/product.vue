<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
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
    image: '/product/agaricus_cp101.jpg',
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
      <div class="banner-content">
        <h1>{{ t('product.hero.title') }}</h1>
        <p class="subtitle">{{ t('product.hero.subtitle') }}</p>
        <p class="desc">{{ t('product.hero.desc') }}</p>
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
          <div>指标</div>
          <div>市面同类产品</div>
          <div>CP-101 固本金刚丸</div>
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
.product-center-page {
  // background: #fffbe8;
  // color: #1a1a1a;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  min-height: 100vh;
  padding-bottom: 60px;
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

.product-hero {
  text-align: left;
  padding: 160px 20px 40px 20px;
  background: url('/product/product-gbjgw-bg.png') no-repeat center center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 700px;
  position: relative;
}

.banner-content {
  max-width: 50%;
  align-self: flex-start;
  padding-left: 100px;
  box-sizing: border-box;
}

.menu-bar {
  display: flex;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0;
  border-radius: 30px;
  margin-top: auto;
  margin-bottom: 40px;
}

.menu-item {
  position: relative;
  padding: 0;
  overflow: hidden;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 20px;
  transition: all 0.3s;
}

.menu-item.active .nav-link,
.menu-item:hover .nav-link {
  background: rgba(191, 161, 74, 0.8);
  color: #fff;
  font-weight: 600;
}

.product-hero h1 {
  font-size: 2.8rem;
  color: white;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: 0.1em;
}

.product-hero .subtitle {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 10px;
}

.product-hero .desc {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 24px;
}

.product-hero .hero-img {
  max-width: 340px;
  width: 90vw;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(191, 161, 74, 0.12);
  margin: 0 auto;
  display: block;
}

.product-section {
  margin: 48px auto 0 auto;
  // max-width: 1100px;
  padding: 0 20px;

  h2 {
    color: #222;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 28px;
    letter-spacing: 0.08em;
    text-align: center;
  }
}

.patent-flex-box {
  display: flex;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  min-height: 380px;
}

.patent-left {
  flex: 1 1 40%;
  padding: 56px 40px 56px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
}

.patent-title {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 18px;
  line-height: 1.2;
}

.patent-no {
  font-size: 1.1rem;
  color: #bfa14a;
  margin-bottom: 18px;
}

.patent-desc {
  font-size: 1.15rem;
  color: #444;
  line-height: 1.8;
}

.patent-right {
  flex: 1 1 60%;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 380px;
  transition: background-image 0.3s;
}

.patent-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  position: relative;
  z-index: 2;
  padding: 0;
}

.patent-menu-item {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bfa14a;
  font-size: 1.15rem;
  font-weight: 500;
  border-radius: 0;
  background: none;
  margin: 0;
  cursor: pointer;
  position: relative;
  transition: color 0.25s;
  border: none;
  box-shadow: none;
  height: 100%;
}

.patent-menu-item .dot-animate {
  position: relative;
  width: 14px;
  height: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.patent-menu-item .dot-animate .dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #bfa14a;
  animation: dot-breath 0.7s infinite alternate;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0 0 8px 2px #bfa14a55;
}

.patent-menu-item .dot-animate .ripple {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(191, 161, 74, 0.35);
  animation: dot-ripple 1.2s infinite;
  pointer-events: none;
}

.patent-menu-item span {
  position: relative;
  z-index: 2;
}

.patent-menu-item.active,
.patent-menu-item:hover {
  color: #bfa14a;
  z-index: 3;
}

.patent-menu-item.active {
  font-weight: 700;
}

.patent-divider {
  width: 1px;
  height: 100%;
  background: #fff;
  align-self: stretch;
  border-radius: 1px;
  margin: 0;
  box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.18);
}

.feature-blocks {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 32px;
}

.feature-block {
  position: relative;
  width: 100%;
  background: #fff;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .feature-img {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }

  .feature-text {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }

  &.animate-in {

    .feature-img,
    .feature-text {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &.reverse {
    .feature-img {
      transform: translateX(30px);
    }

    .feature-text {
      transform: translateX(-30px);
    }
  }
}

.feature-block.gray-bg {
  background: #f7f7f7;
}

.feature-block-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 48px 0;
}

.feature-block.reverse .feature-block-inner {
  flex-direction: row-reverse;
}

.feature-img {
  flex: 0 0 380px;
  max-width: 420px;
  width: 38vw;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-img img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(191, 161, 74, 0.10);
  background: #f9f6e7;
}

.feature-text {
  flex: 1 1 0;
  min-width: 220px;
  max-width: 600px;
}

.feature-text h3 {
  font-size: 1.6rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 18px;
}

.feature-text p {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.8;
}

.science-blocks {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #fff;
}

.science-block {
  display: flex;
  align-items: center;
  padding: 48px 0 36px 0;
  position: relative;
}

.science-icon {
  flex: 0 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.science-icon span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #f4f8fc;
  color: #2563eb;
  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.06);
}

.science-text {
  flex: 1 1 0;
  padding-left: 36px;
  min-width: 0;
}

.science-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
}

.science-desc {
  font-size: 1.08rem;
  color: #444;
  line-height: 1.8;
}

.science-divider {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
}

.compound-carousel {
  width: 100%;
  background: #faf9f6;
  padding: 48px 0;
  overflow: hidden;
  position: relative;
  margin: 0;
  left: 0;
  right: 0;
}

.carousel-row {
  display: flex;
  align-items: center;
  overflow: visible;
  width: 100%;
  position: relative;
  animation: carousel-left 30s linear infinite;
  padding: 0 200px;
  margin: 0;
  left: 0;
  right: 0;
}

.carousel-row:first-child {
  margin-bottom: 50px;
}

.carousel-row.reverse {
  animation: carousel-right 30s linear infinite;
}

.carousel-row.paused {
  animation-play-state: paused !important;
}

@keyframes carousel-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes carousel-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

.compound-item {
  position: relative;
  overflow: visible;
  z-index: 1;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #fff;
  margin: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(191, 161, 74, 0.08);
  cursor: pointer;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.compound-item img {
  width: 90px;
  height: 90px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.compound-item.active {
  z-index: 10;
  transform: scale(1.25);
  box-shadow: 0 8px 32px rgba(191, 161, 74, 0.18);
  transition: all 0.3s ease;
}

.compound-item.active img {
  filter: brightness(1.1) contrast(1.1);
}

.compound-item .compound-info {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #222;
  border-radius: 100%;
  box-shadow: 0 2px 12px rgba(191, 161, 74, 0.12);
  padding: 18px 20px;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  pointer-events: none;
  opacity: 1;
  z-index: 10;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.compound-item:not(.active) .compound-info {
  opacity: 0;
  pointer-events: none;
}

.compound-item .compound-info h4 {
  font-size: 0.92rem;
  margin-bottom: 6px;
  font-weight: 700;
}

.compound-item .compound-info p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}

.market-compare-table {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 32px auto;
  border-radius: 18px;
  background: #f9f7f3;
  box-shadow: 0 2px 16px rgba(191, 161, 74, 0.08);
  overflow: hidden;
  font-size: 1.05rem;
}

.market-compare-header,
.market-compare-row {
  display: flex !important;
  flex-direction: row !important;
}

.market-compare-header {
  background: #f7ecd2;
  font-weight: 700;
  color: #bfa14a;
  font-size: 1.13rem;
  border-bottom: 1px solid #f0e9d8;

  >div {
    flex: 1 1 0;
    padding: 18px 8px;
    text-align: center;
  }
}

.market-compare-row {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #f5f5f5;
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f5f3ea;
  }

  >div {
    flex: 1 1 0;
    padding: 18px 8px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.05rem;
  }

  .market-compare-label {
    font-weight: 600;
    color: #222;
    background: #f5f5f7;
  }

  .market-compare-market {
    color: #d32f2f;
    background: #fff3f3;
    font-weight: 500;
  }

  .market-compare-cp101 {
    color: #388e3c;
    background: #f3fcf5;
    font-weight: 600;
  }
}

@media (max-width: 900px) {
  .product-hero {
    padding: 140px 20px 40px 20px;
    height: auto;
    min-height: 700px;
  }

  .banner-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .menu-bar {
    width: auto;
    margin: 40px auto;
    padding: 8px 16px;
  }

  .menu-item {
    font-size: 0.9rem;
    padding: 6px 12px;
  }

  .patent-flex-box {
    flex-direction: column;
    min-height: 0;
  }

  .patent-left {
    padding: 32px 18px 18px 18px;
    text-align: center;
  }

  .patent-right {
    min-height: 220px;
  }

  .patent-menu {
    flex-direction: column;
    height: auto;
  }

  .patent-menu-item {
    flex: 1 1 100%;
    width: 100%;
    min-height: 60px;
    border-radius: 0;
  }

  .patent-divider {
    display: none;
  }

  .product-section {
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .feature-block-inner {
    flex-direction: column !important;
    gap: 18px;
    text-align: center;
    padding: 24px 0;
  }

  .feature-img,
  .feature-text {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  .science-block {
    flex-direction: column;
    align-items: center;
    padding: 32px 0 24px 0;
    text-align: center;
  }

  .science-text {
    padding-left: 0;
    margin-top: 18px;
  }

  .science-icon {
    margin-bottom: 8px;
  }

  .compound-carousel {
    width: 100%;
    margin: 0;
    left: 0;
    right: 0;
  }

  .carousel-row {
    width: 100%;
    padding: 0 100px;
  }

  .compound-item,
  .compound-item img {
    width: 90px;
    height: 90px;
  }

  .compound-item .compound-info {
    width: 100%;
    max-width: 90vw;
    min-width: 0;
    font-size: 0.95rem;
    padding: 10px 8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .market-compare-table {
    font-size: 0.98rem;
  }

  .market-compare-header>div,
  .market-compare-row>div {
    padding: 12px 2px;
  }
}

.patent-section-title {
  color: #222 !important;
  text-align: center !important;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 28px;
  letter-spacing: 0.08em;
  width: 100%;
  display: block;
}

.advice-cards {
  display: flex;
  gap: 48px;
  justify-content: center;
  margin-top: 32px;
  background: none;
}

.advice-card {
  flex: 1 1 0;
  min-width: 260px;
  max-width: 420px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
}

.advice-title {
  color: #2563eb;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
}

.advice-divider {
  width: 100%;
  height: 1px;
  background: #e5e7eb;
  margin: 0 0 18px 0;
  border: none;
}

.advice-desc,
.advice-list {
  color: #444;
  font-size: 1.05rem;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .advice-cards {
    flex-direction: column;
    gap: 24px;
  }

  .advice-card {
    max-width: 100%;
    padding: 0 12px;
  }
}

@keyframes dot-breath {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.6);
  }
}

@keyframes dot-ripple {
  0% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }

  80% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.8);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.8);
  }
}
</style>