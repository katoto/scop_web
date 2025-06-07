<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getLocalizedImagePath } from '~/utils/image'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const features = [
  {
    title: t('rd.features.0.title'),
    desc: t('rd.features.0.desc'),
    img: '/r_and_d/subcritical_water_extraction.png'
  },
  {
    title: t('rd.features.1.title'),
    desc: t('rd.features.1.desc'),
    img: '/r_and_d/immune_checkpoint_inhibition.png'
  },
  {
    title: t('rd.features.2.title'),
    desc: t('rd.features.2.desc'),
    img: getLocalizedImagePath('/r_and_d/dendritic_cell_activation.jpg')
  },
  {
    title: t('rd.features.3.title'),
    desc: t('rd.features.3.desc'),
    img: '/r_and_d/gmp_iso.jpg'
  },
  {
    title: t('rd.features.4.title'),
    desc: t('rd.features.4.desc'),
    img: '/r_and_d/microcirculation_reconstruction.jpeg'
  },
  {
    title: t('rd.features.5.title'),
    desc: t('rd.features.5.desc'),
    img: '/r_and_d/livinol_patent.jpg'
  }
];

let features2 = [
  {
    title: t('rd.clinical_results.0.title'),
    desc: t('rd.clinical_results.0.desc'),
    img: getLocalizedImagePath('/r_and_d/in_vivo_experiment.jpg')
  },
  {
    title: t('rd.clinical_results.1.title'),
    desc: t('rd.clinical_results.1.desc'),
    img: getLocalizedImagePath('/r_and_d/in_vitro_experiment.jpg')
  },
  {
    title: t('rd.clinical_results.2.title'),
    desc: t('rd.clinical_results.2.desc'),
    img: getLocalizedImagePath('/r_and_d/agaricus_immune_activation.jpg')
  },
  {
    title: t('rd.clinical_results.3.title'),
    desc: t('rd.clinical_results.3.desc'),
    img: getLocalizedImagePath('/r_and_d/triple_immune_synergy.jpg')
  },
  {
    title: t('rd.clinical_results.4.title'),
    desc: t('rd.clinical_results.4.desc'),
    img: '/r_and_d/peripheral_circulation.png'
  },
  {
    title: t('rd.clinical_results.5.title'),
    desc: t('rd.clinical_results.5.desc'),
    img: '/r_and_d/edema_improvement.png'
  },
  {
    title: t('rd.clinical_results.6.title'),
    desc: t('rd.clinical_results.6.desc'),
    img: '/r_and_d/tie2_pathway_activation.png'
  },
  {
    title: t('rd.clinical_results.7.title'),
    desc: t('rd.clinical_results.7.desc'),
    img: '/r_and_d/user_feedback.jpg'
  },
  {
    title: t('rd.clinical_results.8.title'),
    desc: t('rd.clinical_results.8.desc'),
    img: '/r_and_d/liver_enzyme_reduction.png'
  },
  {
    title: t('rd.clinical_results.9.title'),
    desc: t('rd.clinical_results.9.desc'),
    img: '/r_and_d/nafld_improvement.jpg'
  }
];

const featureRefs = ref<HTMLElement[]>([]);
const feature2Refs = ref<HTMLElement[]>([]);

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
});

</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero" :style="{
      background: `url(${'/r_and_d/banner_bg2.png'}) no-repeat center center`,
      backgroundSize: 'cover'
    }">
      <div class="banner-content">
        <h1 class="title">{{ t('rd.banner.title') }}</h1>
        <p class="subtitle">{{ t('rd.banner.subtitle') }}</p>
        <p class="desc">{{ t('rd.banner.description') }}</p>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t('rd.sections.core_tech') }}</h2>
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
      <h2>{{ t('rd.sections.clinical_results') }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in features2" :key="feature.title"
          :ref="el => { if (el) feature2Refs[idx] = el as HTMLElement }"
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



  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>