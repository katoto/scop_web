<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
const localePath = useLocalePath()
const { t } = useI18n()

const activeIdx = ref(0)
const navList = [
  { label: t('rdfeedback.nav.cancer'), value: 'cancer' },
  { label: t('rdfeedback.nav.other'), value: 'other' },
  { label: t('rdfeedback.nav.research'), value: 'research' },
  { label: t('rdfeedback.nav.media'), value: 'media' },
  { label: t('rdfeedback.nav.thanks'), value: 'thanks' }
]

const feedbackList = [
  {
    id: 1,
    category: 'cancer',
    title: t('rdfeedback.cases.breastCancer.title'),
    date: t('rdfeedback.cases.breastCancer.date'),
    desc: t('rdfeedback.cases.breastCancer.desc'),
    img: '/rd_feedback/4.2.1-1乳腺癌.jpg',
    link: '#'
  },
  {
    id: 2,
    category: 'cancer',
    title: t('rdfeedback.cases.lymphoma.title'),
    date: t('rdfeedback.cases.lymphoma.date'),
    desc: t('rdfeedback.cases.lymphoma.desc'),
    img: '/rd_feedback/4.2.1-2恶性淋巴癌.jpg',
    link: '#'
  },
  {
    id: 3,
    category: 'cancer',
    title: t('rdfeedback.cases.lungCancer.title'),
    date: t('rdfeedback.cases.lungCancer.date'),
    desc: t('rdfeedback.cases.lungCancer.desc'),
    img: '/rd_feedback/4.2.1-3肺癌 .jpg',
    link: '#'
  },
  {
    id: 4,
    category: 'cancer',
    title: t('rdfeedback.cases.prostateCancer.title'),
    date: t('rdfeedback.cases.prostateCancer.date'),
    desc: t('rdfeedback.cases.prostateCancer.desc'),
    img: '/rd_feedback/4.2.1-4前列腺癌.jpg',
    link: '#'
  },
  {
    id: 5,
    category: 'other',
    title: t('rdfeedback.cases.prostateEnlargement.title'),
    date: t('rdfeedback.cases.prostateEnlargement.date'),
    desc: t('rdfeedback.cases.prostateEnlargement.desc'),
    img: '/rd_feedback/4.2.1-5前列腺肥大症.jpg',
    link: '#'
  },
  {
    id: 6,
    category: 'other',
    title: t('rdfeedback.cases.lymphomaSideEffects.title'),
    date: t('rdfeedback.cases.lymphomaSideEffects.date'),
    desc: t('rdfeedback.cases.lymphomaSideEffects.desc'),
    img: '/rd_feedback/4.2.1-6抑制淋巴癌治疗副作用.jpg',
    link: '#'
  },
  {
    id: 7,
    category: 'research',
    title: t('rdfeedback.cases.hepatitisB.title'),
    date: t('rdfeedback.cases.hepatitisB.date'),
    desc: t('rdfeedback.cases.hepatitisB.desc'),
    img: '/rd_feedback/4.2.1-7慢性B型肝炎临床实验/01.jpg',
    link: '#'
  },
  {
    id: 8,
    category: 'media',
    title: t('rdfeedback.cases.cp101News.title'),
    date: t('rdfeedback.cases.cp101News.date'),
    desc: t('rdfeedback.cases.cp101News.desc'),
    img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/737391e7431436df562aed158773e784.jpg',
    link: '#',
    isMediaGallery: true,
    galleryImages: [
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/737391e7431436df562aed158773e784.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 1'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/070021de52a7237ef1bf9c39ce8bfe7a.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 2'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/8de7704fb91dac98cab8ba2c542a55c3.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 3'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/400c6e83f9eabdfb5c959d42c3c47caa.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 4'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/187f1a9ee8a284b7b4ed4d384c384866.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 5'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/22cfd018d03aac90c5755265bbe20b3f.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 6'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/09cb6bfffc1e4d9d6dfedbebb7d4a46e.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 7'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/6ba0d698a3ac8b198f6b469518ab826b.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 8'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/6a633f2ce89b1c9d50ddab04856a5131.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 9'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/4af96dfca020eb9201b9375cdb51d66a.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 10'
      },
      {
        img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/a2542fe42bb2489b8544651f720cf401.jpg',
        title: t('rdfeedback.cases.cp101News.title') + ' 11'
      }
    ]
  },
  {
    id: 9,
    category: 'thanks',
    title: t('rdfeedback.cases.thanksLetters.title'),
    date: t('rdfeedback.cases.thanksLetters.date'),
    desc: t('rdfeedback.cases.thanksLetters.desc'),
    img: '/rd_feedback/4.2.1-9患者感谢信/1-1.jpg',
    link: '#',
    isGallery: true,
    galleryImages: [
      '/rd_feedback/4.2.1-9患者感谢信/1-1.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/1-2.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/1-3.jpg',
    ]
  },
  {
    id: 10,
    category: 'thanks',
    title: t('rdfeedback.cases.thanksLetters.title'),
    date: t('rdfeedback.cases.thanksLetters.date'),
    desc: t('rdfeedback.cases.thanksLetters.desc'),
    img: '/rd_feedback/4.2.1-9患者感谢信/2-1.jpg',
    link: '#',
    isGallery: true,
    galleryImages: [
      '/rd_feedback/4.2.1-9患者感谢信/2-1.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/2-2.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/2-3.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/2-4.jpg',
    ]
  },
  {
    id: 11,
    category: 'thanks',
    title: t('rdfeedback.cases.thanksLetters.title'),
    date: t('rdfeedback.cases.thanksLetters.date'),
    desc: t('rdfeedback.cases.thanksLetters.desc'),
    img: '/rd_feedback/4.2.1-9患者感谢信/3-1.jpg',
    link: '#',
    isGallery: true,
    galleryImages: [
      '/rd_feedback/4.2.1-9患者感谢信/3-1.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/3-2.jpg'
    ]
  }
]

// 修改图片预览状态
const showGallery = ref(false)
const currentGalleryImages = ref<Array<{ img: string, title: string }>>([])
const currentGalleryIndex = ref(0)

const handleGalleryClick = (feedback: typeof feedbackList[0], index?: number) => {
  if (feedback.isMediaGallery && feedback.galleryImages) {
    currentGalleryImages.value = feedback.galleryImages as Array<{ img: string, title: string }>
    currentGalleryIndex.value = index || 0
    showGallery.value = true
  } else if (feedback.isGallery && feedback.galleryImages) {
    currentGalleryImages.value = (feedback.galleryImages as string[]).map(img => ({ img, title: feedback.title }))
    currentGalleryIndex.value = 0
    showGallery.value = true
  }
}

const filteredFeedback = computed(() => {
  const category = navList[activeIdx.value].value
  return feedbackList.filter(item => item.category === category)
})

</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero">
      <div class="banner-content">
        <h1>{{ t('rdfeedback.title') }}</h1>
        <p class="subtitle">{{ t('rdfeedback.subtitle') }}</p>
        <p class="desc">{{ t('rdfeedback.description') }}</p>
      </div>
    </section>

    <section class="feedback-section">
      <div class="feedback-contain">
        <div class="feedback-nav">
          <ul class="mc_e1_list">
            <li v-for="(item, idx) in navList" :key="item.value" :class="['mc_e1_li', { active: idx === activeIdx }]"
              @click="activeIdx = idx">
              <span class="mc_e1_txt">{{ item.label }}</span>
            </li>
          </ul>
        </div>
        <div class="feedback-list">
          <ul class="mc_e1_list">
            <template v-for="feedback in filteredFeedback" :key="feedback.id">
              <!-- 媒体报道特殊展示 -->
              <template v-if="feedback.category === 'media' && feedback.isMediaGallery">
                <li v-for="(item, index) in (feedback.galleryImages as Array<{ img: string, title: string }>)"
                  :key="index" class="mc_e1_li feedback-card media-gallery-item"
                  @click="handleGalleryClick(feedback, index)">
                  <div class="mc_e1_imgbox mc_list_imgbox">
                    <img :src="item.img" :alt="item.title" class="mc_list_img" />
                  </div>
                  <div class="mc_e1_txtbox">
                    <p class="mc_e1_txt feedback-card-title">{{ item.title }}</p>
                    <div class="mc_e1_date feedback-card-date">{{ feedback.date }}</div>
                  </div>
                </li>
              </template>
              <!-- 其他类别正常展示 -->
              <li v-else class="mc_e1_li feedback-card">
                <a :href="feedback.isGallery ? '#' : feedback.link" :target="feedback.isGallery ? '_self' : '_blank'"
                  class="mc_e1_lisbox" @click.prevent="feedback.isGallery && handleGalleryClick(feedback)">
                  <div class="mc_e1_imgbox mc_list_imgbox">
                    <img :src="feedback.img" :alt="feedback.title" class="mc_list_img" />
                  </div>
                  <div class="mc_e1_txtbox">
                    <p class="mc_e1_txt feedback-card-title">{{ feedback.title }}</p>
                    <div class="mc_e1_date feedback-card-date">{{ feedback.date }}</div>
                    <div class="feedback-card-desc">{{ feedback.desc }}</div>
                  </div>
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </section>

    <!-- 修改图片预览组件 -->
    <Teleport to="body">
      <div v-if="showGallery" class="gallery-overlay" @click="showGallery = false">
        <div class="gallery-content" @click.stop>
          <button class="gallery-close" @click="showGallery = false">&times;</button>
          <button class="gallery-nav gallery-prev"
            @click="currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length">
            &lt;
          </button>
          <div class="gallery-image-container">
            <img :src="currentGalleryImages[currentGalleryIndex].img"
              :alt="currentGalleryImages[currentGalleryIndex].title" class="gallery-image" />
            <div class="gallery-image-title">{{ currentGalleryImages[currentGalleryIndex].title }}</div>
          </div>
          <button class="gallery-nav gallery-next"
            @click="currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length">
            &gt;
          </button>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>