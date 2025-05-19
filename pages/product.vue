<script setup lang="ts">
import { ref } from 'vue';

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
const productNames = [
  '明日叶', '甘茶', '卷心菜', '羽衣甘蓝', '红甜菜', '熊笹', '香菇', '牛蒡根', '南瓜籽提取物', '日本酵母锌', '长胡椒提取物', '姬松茸亚临界水提取物'
];
const productDesc = [
  '富含钾、钙与叶绿素，有助于血液净化、缓解疲劳、维持荷尔蒙平衡',
  '调节自律神经、安稳精神状态，缓解压力性性功能低下',
  '含植酸与维生素U，有助于抗氧化与肝功能维护',
  '含多种矿物质与类黄酮，支持血管健康与激素调节',
  '促进血液循环、提升氧合能力，有助于勃起质量与精力状态',
  '具天然杀菌力，改善口腔肠道微生态，降低体内炎症反应',
  '富含多糖体，增强免疫功能、抗疲劳、维持系统活性',
  '帮助排毒、提升消化代谢效率，有助于营养吸收',
  '含丰富锌元素，是前列腺维护与荷尔蒙调节关键营养素',
  '高吸收性有机锌源，支持睾酮合成与免疫系统运作',
  '改善微循环，激活毛细血管再生，提升生殖系统供血能力',
  '专利抗癌与免疫调节因子，提升抗疲劳、抗氧化与恢复力'
];

const patentOptions = [
  {
    id: 1,
    title: '姬松茸亚临界水提取物 CP-101',
    patentNo: '专利号：7141630',
    desc: '采用亚临界萃取技术，保留完整多糖体活性，增强免疫系统，可用于前列腺癌辅助防护。',
    image: '/product/agaricus_cp101.jpg',
  },
  {
    id: 2,
    title: '长胡椒提取物',
    patentNo: '专利号：6246859',
    desc: '激活血管Tie2受体，改善微循环，提升血流动力，有效改善末梢循环问题。',
    image: '/product/longpepper_extract.jpg',
  },
];

const activePatent = ref(patentOptions[0]);

function setActivePatent(option: typeof patentOptions[0]) {
  activePatent.value = option;
}

const features = [
  {
    title: '改善男性性功能与精力状态',
    desc: '提升精力，改善性功能，增强自信。',
    img: '/product/male_function.png'
  },
  {
    title: '调节肾功能，缓解疲劳虚弱',
    desc: '调理肾脏，缓解疲劳，恢复活力。',
    img: '/product/kidney_function.png'
  },
  {
    title: '强化免疫系统',
    desc: '增强免疫力，提升身体防御能力。',
    img: '/product/immune_system.png'
  },
  {
    title: '改善前列腺健康与荷尔蒙状态',
    desc: '维护前列腺健康，平衡荷尔蒙。',
    img: '/product/prostate_health.png'
  }
];
</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero">
      <div class="banner-content">
        <h1>CP-101 固本金刚丸</h1>
        <p class="subtitle">永葆20岁的健康活力，从血管开始激活</p>
        <p class="desc">日本植物精萃 × 微循环激活科技，精准修复血管与荷尔蒙系统，从源头改善疲劳、低能、冷感等男性常见困扰。黄金配方支持男性体力、免疫与性荷尔蒙，温和调养，长期见效。</p>
      </div>
      <div class="menu-bar">
        <div class="menu-item active">CP101固本金刚丸</div>
        <div class="menu-item">CP101蘑菇精系列</div>
        <div class="menu-item">CP101肝源力</div>
      </div>
    </section>

    <section class="product-section">
      <h2 class="patent-section-title">两大专利成分</h2>
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
      <h2>多重功能支持</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in features" :key="feature.title"
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
      <h2>科研权威 × 品质保障 × 专利支持</h2>
      <div class="science-list">
        <img src="/product/japan_research.png" alt="日本原产科研背景" />
        <img src="/product/gmp_certification.png" alt="GMP认证" />
        <img src="/product/iso_standard.png" alt="ISO国际标准" />
        <img src="/product/patent.png" alt="专利" />
        <img src="/product/research_backing.png" alt="实证研究背书" />
        <img src="/product/traceable.svg" alt="原料全程可追溯" />
      </div>
    </section>

    <section class="product-section">
      <h2>黄金复方：40种植物平衡精华</h2>
      <div class="compound-list">
        <div v-for="(img, idx) in productImages" :key="img" class="compound-item">
          <img :src="img" :alt="productNames[idx]" />
          <div class="compound-info">
            <h4>{{ productNames[idx] }}</h4>
            <p>{{ productDesc[idx] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>市场对比优势</h2>
      <!-- <img class="market-img" src="/product/1.2.6-市场对比.png" alt="市场对比优势" /> -->
      <ul class="market-list">
        <li>血管调理：激活Tie2，修复毛细血管屏障</li>
        <li>循环改善：专利胡椒碱，临床验证提升血流</li>
        <li>安全性：植物提取，亚临界低温萃取</li>
        <li>长期服用：温和不刺激肠胃，适合长期调养</li>
      </ul>
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
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: auto;
  margin-bottom: 40px;
}

.menu-item {
  color: white;
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: rgba(191, 161, 74, 0.8);
    font-weight: 600;
  }
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
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #bfa14a;
  animation: dot-breath 1.2s infinite alternate;
  position: absolute;
  left: 0;
  top: 0;
}

.patent-menu-item .dot-animate .ripple {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 32px;
  height: 32px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(191, 161, 74, 0.25);
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
  left: 50%;
  right: 50%;
  width: 100vw;
  transform: translateX(-50%);
  background: #fff;
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

.science-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;

  img {
    width: 120px;
    height: 80px;
    object-fit: contain;
    background: #f9f6e7;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(191, 161, 74, 0.08);
  }
}

.compound-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;

  .compound-item {
    width: 220px;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(191, 161, 74, 0.08);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 10px;
      background: #f9f6e7;
    }

    .compound-info {
      text-align: center;

      h4 {
        color: #bfa14a;
        font-size: 1.1rem;
        margin-bottom: 6px;
      }

      p {
        color: #333;
        font-size: 0.98rem;
      }
    }
  }
}

.market-img {
  width: 100%;
  max-width: 700px;
  display: block;
  margin: 0 auto 18px auto;
  border-radius: 12px;
  background: #f9f6e7;
  box-shadow: 0 2px 8px rgba(191, 161, 74, 0.08);
}

.market-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 1.1rem;
  color: #bfa14a;
  font-weight: 600;
  justify-content: center;

  li {
    background: #fffbe8;
    border: 1px solid #f3e6b2;
    border-radius: 8px;
    padding: 10px 22px;
    min-width: 180px;
    text-align: center;
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
    padding: 0 6vw;
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
</style>