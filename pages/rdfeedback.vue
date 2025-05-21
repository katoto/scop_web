<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
const localePath = useLocalePath()

const activeIdx = ref(0)
const navList = [
  { label: '癌症案例', value: 'cancer' },
  { label: '其他疾病', value: 'other' },
  { label: '临床研究', value: 'research' },
  { label: '媒体报道', value: 'media' },
  { label: '感谢信', value: 'thanks' }
]

const feedbackList = [
  {
    id: 1,
    category: 'cancer',
    title: '乳腺癌患者反馈',
    date: '2024年',
    desc: '一位44岁的乳腺癌患者，患癌六年后，肿块大到无法直接进行手术切除，在服用姬松茸后，肿块部分自然脱落、变小，为外科治疗创造了条件。',
    img: '/rd_feedback/4.2.1-1乳腺癌.jpg',
    link: '#'
  },
  {
    id: 2,
    category: 'cancer',
    title: '恶性淋巴癌患者反馈',
    date: '2024年',
    desc: '62岁患者因身体不适入院检查，诊断为恶性淋巴癌，预期寿命不足6个月。治疗第二周开始服用岩出101姬松茸后，患者食欲大增，炎症明显减少。10个月后顺利出院。',
    img: '/rd_feedback/4.2.1-2恶性淋巴癌.jpg',
    link: '#'
  },
  {
    id: 3,
    category: 'cancer',
    title: '肺癌患者反馈',
    date: '2024年',
    desc: '一位78岁的肺癌老人，体检中发现已经是癌症三期，通过常规治疗加上服用姬松茸，四个月后便恢复正常出院。正在癌症治疗历史中算是奇迹。',
    img: '/rd_feedback/4.2.1-3肺癌 .jpg',
    link: '#'
  },
  {
    id: 4,
    category: 'cancer',
    title: '前列腺癌患者反馈',
    date: '2024年',
    desc: '2005年11月患者被确诊时76岁，伴有癌细胞转移，全身疼痛、头痛恶心、舌头不适等症状。确诊后2个月，开始进行姬松茸的辅助治疗，食用岩出101姬松茸提取物的第二天身体不适症状变得到立马改善。在后续半年的检测治疗中，PSA值（前列腺特异性抗原）值快速下降，效果显著。',
    img: '/rd_feedback/4.2.1-4前列腺癌.jpg',
    link: '#'
  },
  {
    id: 5,
    category: 'other',
    title: '前列腺肥大症患者反馈',
    date: '2024年',
    desc: '患者1985年被诊断为前列腺肥大症，未得到有效治疗。2004年底开始食用岩出101姬松茸提取物后，排尿困难迅速缓解，半年后身体恢复正常。',
    img: '/rd_feedback/4.2.1-5前列腺肥大症.jpg',
    link: '#'
  },
  {
    id: 6,
    category: 'other',
    title: '淋巴癌治疗副作用改善案例',
    date: '2024年',
    desc: '59岁男性淋巴癌患者，治疗反应严重，身体机能受损。服用岩出101姬松茸提取物后，不良反应消失，身体机能恢复，并成功抵抗了大流感。',
    img: '/rd_feedback/4.2.1-6抑制淋巴癌治疗副作用.jpg',
    link: '#'
  },
  {
    id: 7,
    category: 'research',
    title: '慢性B型肝炎临床实验报告',
    date: '2024年',
    desc: '临床实验报告研究了姬松茸（Agaricus blazei Murrill）对慢性B型肝炎患者肝功能的影响。由中日医疗团队联合进行，研究发现姬松茸能够显著改善患者的肝功能和临床症状。治疗前后，血清铁蛋白、S-GPT、S-GOT、胆红素等多项指标显著改善，差异具有统计学意义（P值0.005-0.001）。',
    img: '/rd_feedback/4.2.1-7慢性B型肝炎临床实验/cover.jpg',
    link: '#'
  },
  {
    id: 8,
    category: 'media',
    title: 'CP-101体验者新闻报道',
    date: '2024年',
    desc: 'CP-101体验者的相关新闻报道集锦',
    img: '/rd_feedback/4.2.1-8CP-101体验者新闻报道/737391e7431436df562aed158773e784.jpg',
    link: '#',
    isGallery: true,
    galleryImages: [
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/737391e7431436df562aed158773e784.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/070021de52a7237ef1bf9c39ce8bfe7a.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/8de7704fb91dac98cab8ba2c542a55c3.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/400c6e83f9eabdfb5c959d42c3c47caa.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/187f1a9ee8a284b7b4ed4d384c384866.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/22cfd018d03aac90c5755265bbe20b3f.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/09cb6bfffc1e4d9d6dfedbebb7d4a46e.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/6ba0d698a3ac8b198f6b469518ab826b.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/6a633f2ce89b1c9d50ddab04856a5131.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/4af96dfca020eb9201b9375cdb51d66a.jpg',
      '/rd_feedback/4.2.1-8CP-101体验者新闻报道/a2542fe42bb2489b8544651f720cf401.jpg'
    ]
  },
  {
    id: 9,
    category: 'thanks',
    title: '患者感谢信',
    date: '2024年',
    desc: '来自患者的感谢信集锦',
    img: '/rd_feedback/4.2.1-9患者感谢信/1-1.jpg',
    link: '#',
    isGallery: true,
    galleryImages: [
      '/rd_feedback/4.2.1-9患者感谢信/1-1.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/1-2.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/1-3.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/2-1.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/2-2.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/2-3.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/2-4.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/3-1.jpg',
      '/rd_feedback/4.2.1-9患者感谢信/3-2.jpg'
    ]
  }
]

// 添加图片预览状态
const showGallery = ref(false)
const currentGalleryImages = ref<string[]>([])
const currentGalleryIndex = ref(0)

const handleGalleryClick = (feedback: typeof feedbackList[0]) => {
  if (feedback.isGallery && feedback.galleryImages) {
    currentGalleryImages.value = feedback.galleryImages
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
        <h1>临床应用反馈</h1>
        <p class="subtitle"></p>
        <p class="desc">多项临床与实际应用研究验证了产品的显著效果，使用者普遍反馈身体机能提升、症状改善。科学数据与真实体验相结合，充分体现了产品的安全性与有效性，助力用户重获健康活力。
        </p>
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
            <li class="mc_e1_li feedback-card" v-for="feedback in filteredFeedback" :key="feedback.id">
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
          </ul>
        </div>
      </div>
    </section>

    <!-- 添加图片预览组件 -->
    <Teleport to="body">
      <div v-if="showGallery" class="gallery-overlay" @click="showGallery = false">
        <div class="gallery-content" @click.stop>
          <button class="gallery-close" @click="showGallery = false">&times;</button>
          <button class="gallery-nav gallery-prev"
            @click="currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length">
            &lt;
          </button>
          <img :src="currentGalleryImages[currentGalleryIndex]" :alt="'Gallery image ' + (currentGalleryIndex + 1)"
            class="gallery-image" />
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
.product-center-page {
  // background: #fffbe8;
  // color: #1a1a1a;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  min-height: 100vh;
  padding-bottom: 60px;
  overflow-x: hidden;
  width: 100%;
}

.product-hero {
  text-align: left;
  padding: 160px 20px 40px 20px;
  background: url('/r_and_d/banner_bg.png') no-repeat center center;
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
  padding: 0px;
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
}

.carousel-row {
  display: flex;
  align-items: center;
  overflow: visible;
  width: 100%;
  position: relative;
  animation: carousel-left 30s linear infinite;
  padding: 0 200px;
  box-sizing: border-box;
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

  .carousel-row {
    padding: 0 20px;
  }

  .compound-item,
  .compound-item img {
    width: 90px;
    height: 90px;
  }

  .compound-item .compound-info {
    width: 100%;
    max-width: 300px;
    min-width: 0;
    font-size: 0.95rem;
    padding: 10px 8px;
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

.consult-link {
  color: #bfa14a;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #bfa14a;
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    background: #bfa14a;
    color: white;
  }
}

.feedback-section {
  padding: 48px 20px;
  background: #fff;
}

.feedback-contain {
  max-width: 1200px;
  margin: 0 auto;
}

.feedback-nav {
  margin-bottom: 32px;

  .mc_e1_list {
    display: flex;
    justify-content: center;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mc_e1_li {
    cursor: pointer;
    padding: 8px 24px;
    border-radius: 20px;
    transition: all 0.3s;

    &.active {
      background: #bfa14a;
      color: white;
    }

    &:hover:not(.active) {
      background: rgba(191, 161, 74, 0.1);
    }
  }
}

.feedback-list {
  .mc_e1_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 32px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

.feedback-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  .mc_e1_lisbox {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .mc_e1_imgbox {
    width: 100%;
    height: 240px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
  }

  &:hover .mc_e1_imgbox img {
    transform: scale(1.05);
  }

  .mc_e1_txtbox {
    padding: 20px;
  }

  .feedback-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #222;
    margin: 0 0 12px 0;
  }

  .feedback-card-date {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 12px;
  }

  .feedback-card-desc {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

@media (max-width: 768px) {
  .feedback-nav {
    .mc_e1_list {
      flex-wrap: wrap;
      gap: 12px;
    }

    .mc_e1_li {
      padding: 6px 16px;
      font-size: 0.9rem;
    }
  }

  .feedback-list {
    .mc_e1_list {
      grid-template-columns: 1fr;
    }
  }

  .feedback-card {
    .mc_e1_imgbox {
      height: 200px;
    }

    .mc_e1_txtbox {
      padding: 16px;
    }

    .feedback-card-title {
      font-size: 1.1rem;
    }
  }
}

.gallery-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.gallery-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.gallery-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 8px;
  line-height: 1;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 16px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.gallery-prev {
    left: -60px;
  }

  &.gallery-next {
    right: -60px;
  }
}

@media (max-width: 768px) {
  .gallery-nav {
    &.gallery-prev {
      left: 10px;
    }

    &.gallery-next {
      right: 10px;
    }
  }

  .gallery-close {
    top: -40px;
    right: 10px;
  }
}
</style>