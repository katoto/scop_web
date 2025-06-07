<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getLocalizedImagePath } from "~/utils/image";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const section1 = [
  {
    title: t("product_type3.section1.0.title"),
    desc: t("product_type3.section1.0.desc"),
    img: "/product35/2-1.jpg",
  },
  {
    title: t("product_type3.section1.1.title"),
    desc: t("product_type3.section1.1.desc"),
    img: "/product35/2-2.png",
  },
  {
    title: t("product_type3.section1.1.title"),
    desc: t("product_type3.section1.1.desc"),
    img: "/product35/2-3.jpg",
  },
];

let section2 = [
  {
    title: t("product_type3.section2.0.title"),
    desc: t("product_type3.section2.0.desc"),
    img: "/product35/3-1.jpg",
  },
  {
    title: t("product_type3.section2.1.title"),
    desc: t("product_type3.section2.1.desc"),
    img: "/product35/3-2.jpg",
  },
  {
    title: t("product_type3.section2.2.title"),
    desc: t("product_type3.section2.2.desc"),
    img: "/product35/3-3.jpg",
  },
  {
    title: t("product_type3.section2.3.title"),
    desc: t("product_type3.section2.3.desc"),
    img: "/product35/3-4.png",
  },
];

const featureRefs = ref<HTMLElement[]>([]);
const feature2Refs = ref<HTMLElement[]>([]);
const feature3Refs = ref<HTMLElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          setTimeout(() => {
            observer.unobserve(entry.target);
          }, 1000);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "-50px 0px",
    }
  );

  featureRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  feature2Refs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  feature3Refs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

const marketCompare = computed(() => [
  {
    label: t("product_type3.compare.items.core.label"),
    market: t("product_type3.compare.items.core.cp101"),
  },
  {
    label: t("product_type3.compare.items.users.label"),
    market: t("product_type3.compare.items.users.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc2.label"),
    market: t("product_type3.compare.items.desc2.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc3.label"),
    market: t("product_type3.compare.items.desc3.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc4.label"),
    market: t("product_type3.compare.items.desc4.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc5.label"),
    market: t("product_type3.compare.items.desc5.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc6.label"),
    market: t("product_type3.compare.items.desc6.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc7.label"),
    market: t("product_type3.compare.items.desc7.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc8.label"),
    market: t("product_type3.compare.items.desc8.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc9.label"),
    market: t("product_type3.compare.items.desc9.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc10.label"),
    market: t("product_type3.compare.items.desc10.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc11.label"),
    market: t("product_type3.compare.items.desc11.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc12.label"),
    market: t("product_type3.compare.items.desc12.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc13.label"),
    market: t("product_type3.compare.items.desc13.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc14.label"),
    market: t("product_type3.compare.items.desc14.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc15.label"),
    market: t("product_type3.compare.items.desc15.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc16.label"),
    market: t("product_type3.compare.items.desc16.cp101"),
  },
]);
</script>

<template>
  <div class="product-center-page">
    <!-- banner -->
    <section class="product-hero" :style="{
      background: `url(${'/product35/0.png'}) no-repeat center center`,
      backgroundSize: 'cover',
    }">
      <div class="banner-content">
        <h1 class="title">{{ t("product_type3.banner.title") }}</h1>
        <p class="desc">{{ t("product_type3.banner.description") }}</p>
      </div>
    </section>

    <!-- 生命与灵魂链接之路 -->
    <section class="product-type3-cont">
      <img src="/product35/1.png" alt="" />
      <div class="product-type3-cont-box">
        <h4>{{ t("product_type3.liftLink.title1") }}</h4>
        <h4>{{ t("product_type3.liftLink.title2") }}</h4>
        <h4>{{ t("product_type3.liftLink.title3") }}</h4>
        <h4>{{ t("product_type3.liftLink.title4") }}</h4>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t("product_type3.sections.section1") }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in section1" :key="feature.title"
          :ref="el => { if (el) featureRefs[idx] = el as HTMLElement }" :class="[
            'feature-block',
            { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 },
          ]">
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
      <h2>{{ t("product_type3.sections.section2") }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in section2" :key="feature.title"
          :ref="el => { if (el) feature2Refs[idx] = el as HTMLElement }" :class="[
            'feature-block',
            { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 },
          ]">
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

    <!-- 主要功效 -->
    <section class="product-effect">
      <h2>{{ t("product_type3.sections.section2") }}</h2>
      <div class="product-effect-box">
        <div class="image-container">
          <img src="/product35/4.png" alt="" />
          <div class="overlay-text">
            <h3>{{ t("product_type3.effect.title1") }}</h3>
            <h3>
              {{ t("product_type3.effect.title2") }}
            </h3>
          </div>
        </div>
        <div class="white-overlay">
          <div>
            <h3>{{ t("product_type3.effect.title3") }}</h3>
            <p>
              {{ t("product_type3.effect.desc1") }}
            </p>
          </div>

          <div>
            <h3>{{ t("product_type3.effect.title4") }}</h3>
            <p>
              {{ t("product_type3.effect.desc2") }}
            </p>
          </div>

          <div>
            <h3>{{ t("product_type3.effect.title5") }}</h3>
            <p>
              {{ t("product_type3.effect.desc3") }}
            </p>
          </div>

          <div>
            <h3>{{ t("product_type3.effect.title6") }}</h3>
            <p>
              {{ t("product_type3.effect.desc4") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Palilis 天然植物精华的汇聚融合 -->
    <section class="product-section product-type3-essence">
      <h2>{{ t("product_type3.essence.title") }}</h2>
      <div class="product-type3-essence-box">
        <h4>{{ t("product_type3.essence.desc1") }}</h4>
        <h4>{{ t("product_type3.essence.desc2") }}</h4>
      </div>
      <section class="product-type3-essence-cont">
        <div class="essence-title-row">
          <span>{{ t("product_type3.essence.title1") }}</span>
          <span class="dot">·</span>
          <span>{{ t("product_type3.essence.title2") }}</span>
          <span class="dot">·</span>
          <span>{{ t("product_type3.essence.title3") }}</span>
        </div>
        <div class="product-type3-essence-img">
          <div class="lf">
            <span>{{ t("product_type3.essence.label1") }}</span>
            <span>{{ t("product_type3.essence.label2") }}</span>
            <span>{{ t("product_type3.essence.label3") }}</span>
            <span>{{ t("product_type3.essence.label4") }}</span>
            <span>{{ t("product_type3.essence.label5") }}</span>
            <span>{{ t("product_type3.essence.label6") }}</span>
            <span>{{ t("product_type3.essence.label7") }}</span>
            <span>{{ t("product_type3.essence.label8") }}</span>
            <span>{{ t("product_type3.essence.label9") }}</span>
          </div>
          <img src="/product35/5.png" alt="" />
          <div class="rf">
            <span>{{ t("product_type3.essence.label10") }}</span>
            <span>{{ t("product_type3.essence.label11") }}</span>
            <span>{{ t("product_type3.essence.label12") }}</span>
            <span>{{ t("product_type3.essence.label13") }}</span>
            <span>{{ t("product_type3.essence.label14") }}</span>
            <span>{{ t("product_type3.essence.label15") }}</span>
            <span>{{ t("product_type3.essence.label16") }}</span>
            <span>{{ t("product_type3.essence.label17") }}</span>
          </div>
        </div>
      </section>
    </section>

    <!-- 产品对比 -->
    <section class="product-section">
      <h2>{{ t("product_type3.compare.title") }}</h2>
      <div class="market-compare-table">
        <div class="market-compare-header">
          <div>{{ t("product_type3.compare.headers.label") }}</div>
          <div>{{ t("product_type3.compare.headers.cp101") }}</div>
        </div>
        <div v-for="item in marketCompare" :key="item.label" class="market-compare-row">
          <div class="market-compare-label">{{ item.label }}</div>
          <div class="market-compare-market">{{ item.market }}</div>
        </div>
      </div>
    </section>

    <!-- 使用方法与注意事项 -->
    <section class="product-section">
      <h2>{{ t("product_type3.use.title") }}</h2>
      <div class="product-type3-use-cont">
        <div class="product-type3-use-cont-item">
          <h3>{{ t("product_type3.use.step1") }}</h3>
          <p>{{ t("product_type3.use.step1_desc") }}</p>
          <img src="/product35/6-1.png" alt="">
        </div>
        <div class="product-type3-use-cont-item">
          <h3>{{ t("product_type3.use.step2") }}</h3>
          <p>{{ t("product_type3.use.step2_desc") }}</p>
          <img src="/product35/6-2.png" alt="">
        </div>
        <div class="product-type3-use-cont-item">
          <h3>{{ t("product_type3.use.step3") }}</h3>
          <p>{{ t("product_type3.use.step3_desc") }}</p>
          <img src="/product35/6-3.png" alt="">
        </div>
        <div class="product-type3-use-cont-item">
          <h3>{{ t("product_type3.use.step4") }}</h3>
          <p>{{ t("product_type3.use.step4_desc") }}</p>
          <img src="/product35/6-4.png" alt="">
        </div>
      </div>

      <div class="product-type3-use-cont-desc">
        <img :src="getLocalizedImagePath('/product35/6-5.png')" alt="">

        <h4>{{ t("product_type3.use.desc1") }}</h4>
        <p>{{ t("product_type3.use.desc1_desc") }}</p>
      </div>
      <div class="product-type3-use-cont-desc">
        <h4>{{ t("product_type3.use.desc2") }}</h4>
        <div class="product-type3-use-cont-warning">
          <div class="warning-item" data-index="1">{{ t("product_type3.use.desc2_item1") }}</div>
          <div class="warning-item" data-index="2">{{ t("product_type3.use.desc2_item2") }}</div>
          <div class="warning-item" data-index="3">{{ t("product_type3.use.desc2_item3") }}</div>
          <div class="warning-item" data-index="4">{{ t("product_type3.use.desc2_item4") }}</div>
        </div>
      </div>

    </section>

  </div>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>