<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, nextTick } from "vue";
import NumberScroll from '@/components/NumberScroll.vue'
const switchLocalePath = useSwitchLocalePath()

let position = reactive({
  offsetX: 0,
});

let domSize = reactive({
  width: 0,
});
let domRef = ref<null | HTMLElement>(null);
let contentDomref = ref<null | HTMLElement>(null);
let selectedProduct = ref<number | null>(null);
let animatingProduct = ref<null | {
  image: string;
  startRect: DOMRect;
  endRect: DOMRect;
  index: number;
  animating: boolean;
}>(null);
let showDetail = ref(false);
let detailImgBlockRef = ref<HTMLElement | null>(null);
let showIntro = ref(true);
let showLogo = ref(true);
let showProducts = ref(false);
let isTransitioning = ref(false);
let showBlockGreen = ref(false);
let showBlockRed = ref(false);
let showBlockGold = ref(false);
let showBlockOrange = ref(false);

const products = [
  {
    id: 1,
    name: "产品一",
    description:
      "这是产品一的详细介绍。这是一个创新的解决方案，能够帮助用户更好地完成工作。",
    image: "/images/pro-3.png",
    color:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.7), rgba(255, 230, 109, 0.5))",
    animationType: "default",
  },
  {
    id: 2,
    name: "产品二",
    description:
      "这是产品二的详细介绍。这是一个革命性的产品，能够改变用户的生活方式。",
    image: "/images/pro-4.png",
    color:
      "linear-gradient(135deg, rgba(78, 205, 196, 0.7), rgba(85, 98, 112, 0.5))",
    animationType: "wave",
  },
  {
    id: 3,
    name: "产品三",
    description:
      "这是产品三的详细介绍。这是一个突破性的技术，能够提升用户的工作效率。",
    image: "/images/pro-2.png",
    color:
      "linear-gradient(135deg, rgba(168, 230, 207, 0.7), rgba(255, 211, 182, 0.5))",
    animationType: "pulse",
  },
  {
    id: 4,
    name: "产品四",
    description:
      "这是产品四的详细介绍。这是一个创新的设计，能够满足用户的多样化需求。",
    image: "/images/pro-1.png",
    color:
      "linear-gradient(135deg, rgba(184, 242, 230, 0.7), rgba(255, 166, 158, 0.5))",
    animationType: "float",
  },
];

const handleMouseMove = (e: MouseEvent) => {
  if (!contentDomref.value) return;

  const { clientX } = e;
  const { width } = domSize;

  // Calculate mouse position relative to center
  const centerX = width / 2;

  // Calculate offset (normalized between -1 and 1)
  position.offsetX = (clientX - centerX) / centerX;
};

const updateDomSize = () => {
  if (contentDomref.value) {
    domSize.width = contentDomref.value.offsetWidth;
  }
};

const getAnimationDelay = (index: number) => {
  // 对于4个产品：index 1和2先出现（延迟0.5s），index 0和3后出现（延迟1.2s）
  const isMiddle = index === 1 || index === 2;
  return isMiddle ? 0.1 : 0.5;
};

onMounted(() => {

  updateDomSize();
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", updateDomSize);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", updateDomSize);
});

let log = () => {
  console.log("jjhhh==");
};
let isShowColorBg = (num: number) => {
  if (selectedProduct.value === null) {
    return true;
  }
  return selectedProduct.value === num;
};

let isLoad = ref(false)

let handleLoad = () => {
  isLoad.value = true
}

const researchList = [
  {
    start: 0,
    end: 45,
    duration: 1200,
    label: '年科研积累',
    desc: '日本细菌学会 × 癌学会 自1980年起持续研究姬松茸及其多糖体活性',
    suffix: '',
    decimals: 0,
  },
  {
    start: 0,
    end: 135,
    duration: 1200,
    label: '项国际研究报告',
    desc: '涵盖抗肿瘤、免疫调节、糖类分子活性等多个前沿医学方向',
    suffix: '+',
    decimals: 0,
  },
  {
    start: 0,
    end: 20,
    duration: 1200,
    label: '国家科研机构参与',
    desc: '亚洲、欧美等多国机构深入验证姬松茸提取物在癌症辅助治疗中的作用',
    suffix: '+',
    decimals: 0,
  },
]

const localePath = useLocalePath()
</script>

<template>

  <div class="contact-page">
    <img src="/images/bg-line-2.png" @load="handleLoad" :style="{
      display: 'none'
    }" />
    <div class="content-product" ref="contentDomref">
      <div class="background-wrapper" :style="{ transform: `translateX(${position.offsetX * 20}px)` }">
        <div class="background-image"></div>
      </div>
      <div class="pinzi-box-wrap" :class="{ 'detail-mode': selectedProduct !== null }" v-if="isLoad">
        <StarCanvas />
        <ProductAnimateWrap />
      </div>
    </div>
  </div>

  <!-- 科研历史 -->
  <section class="research-history-section">
    <div class="research-history-title" style="text-align: center; width: 100%; margin-top: 60px;">
      <h2 style="display: inline-block; font-size: 2.5rem; font-weight: 700; margin: 0;">科研历史</h2>
    </div>
    <div class="research-history-container"
      style="padding: 60px 0; display: flex; flex-direction: column; align-items: center; gap: 80px;">
      <div v-for="item in researchList" :key="item.label"
        style="display: flex; flex-direction: row; align-items: flex-end; justify-content: center; gap: 10px; width: 100%;">
        <NumberScroll :start="item.start" :end="item.end" :duration="item.duration" :decimals="item.decimals"
          :suffix="item.suffix" :color="'#C9A14D'" style="font-size: 80px; line-height: 1;" />
        <div style="font-size: 18px; color: rgb(201, 161, 77); margin-left: 6px;">{{ item.label }}</div>
        <div style="font-size: 15px; color: #666; max-width: 600px; margin-left: 10px;">{{ item.desc }}</div>
      </div>
    </div>
  </section>

  <!-- 科研实力 -->
  <section class="research-strength-section">
    <div class="research-strength-bg">
      <div class="research-strength-row">
        <div class="research-strength-col">
          <span class="icon">🔬</span>诺贝尔奖支持机制：基于本庶佑教授提出的PD-1免疫通路干预
          <div class="strength-btn-wrap">
            <NuxtLink class="nav-link" :to="localePath('/rd')">
              <button class="strength-more-btn">了解更多</button>
            </NuxtLink>
          </div>
        </div>
        <div class="research-strength-divider"></div>
        <div class="research-strength-col">
          <span class="icon">🧬</span>日本专利提取技术：CP-101 = 姬松茸亚临界水提取物
          <div class="strength-btn-wrap">
            <NuxtLink class="nav-link" :to="localePath('/rd')">
              <button class="strength-more-btn">了解更多</button>
            </NuxtLink>
          </div>
        </div>
        <div class="research-strength-divider"></div>
        <div class="research-strength-col">
          <span class="icon">✅</span>GMP + ISO 认证生产体系：所有产品由日本本地全链路生产
          <div class="strength-btn-wrap">
            <NuxtLink class="nav-link" :to="localePath('/rd')">
              <button class="strength-more-btn">了解更多</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 专家团队 -->
  <section class="expert-section">
    <div class="expert-section-title">
      <h2>专家团队</h2>
    </div>
    <div class="expert-modules-with-btn">
      <div class="expert-modules">
        <div class="expert-card">
          <div class="expert-card-img">
            <img src="/about-Scophil/expert_honjo.jpg" alt="本庶佑教授" />
          </div>
          <h4>本庶佑教授</h4>
          <p>日本著名免疫学家，2018年诺贝尔生理学或医学奖得主。京都大学高等研究院特别教授，癌症免疫疗法开创者。</p>
        </div>
        <div class="expert-card">
          <div class="expert-card-img">
            <img src="/about-Scophil/expert_gabazza.jpg" alt="Gabazza Esteban教授" />
          </div>
          <h4>Gabazza Esteban教授</h4>
          <p>日本三重大学医学研究科特任教授。免疫学与呼吸内科学专家，CP-101研发领军人。</p>
        </div>
        <div class="expert-all-btn-wrap">
          <NuxtLink class="nav-link" :to="localePath('/about')">
            <button class="expert-all-btn">查看全部专家团队</button>
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>

</template>

<style lang="less" scoped>
@keyframes sweep {
  0% {
    left: -100%;
  }

  100% {
    left: 200%;
  }
}

.contact-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  .page-header {
    background-color: #f8f9fa;
    margin-bottom: 2rem;
  }

  .content-product {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .background-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;

      .background-image {
        position: absolute;
        top: 0;
        left: -5%;
        width: 110%;
        height: 100%;
        background-image: url("/images/bg-line-2.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        z-index: 0;
      }

      .breath-blocks {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 1;
        transition: opacity 0.6s;
      }

      .bg-breath-block {
        position: absolute;
        top: -10px;
        height: calc(100vh + 20px);
        border-radius: 48px;
        filter: blur(110px);
        animation: breathOpacity 1.6s ease-in-out infinite alternate;
        will-change: opacity;
        opacity: 0;
        transition: opacity 8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .bg-breath-block-red {
        position: absolute;
        top: -10px;
        height: calc(100vh + 20px);
        border-radius: 48px;
        filter: blur(110px);
        animation: breathOpacityRed 1.6s ease-in-out infinite alternate;
        will-change: opacity;
        opacity: 0;
        transition: opacity 8s cubic-bezier(0.4, 0, 0.2, 1);
      }



      .gold {
        background: rgba(230, 255, 0, 0.9);
        // left: -10px;
        // width: calc(25vw + 20px);
        animation-delay: 0s;
        z-index: 1;
      }

      .green {
        background: rgba(0, 220, 0, 0.6);
        // left: calc(25vw - 10px);
        // width: calc(25vw + 20px);
        // animation-delay: 0.8s;
        z-index: 2;
      }

      .red {
        background: rgba(255, 0, 0, 1);
        // left: calc(50vw - 10px);
        // width: calc(25vw + 30px);
        // animation-delay: 1.6s;
        z-index: 3;
      }

      .orange {
        background: rgba(255, 114, 0, 0.9);
        // left: calc(75vw - 10px);
        // width: calc(25vw + 20px);
        // animation-delay: 2.2s;
        z-index: 4;
      }

      .bg-breath-block-item {
        transition: all 0.3s ease-in-out;
      }

      .bg-breath-width {
        width: 100%;
        left: 0;
        animation: breathOpacityEnd 1.6s ease-in-out infinite alternate;
      }

      .bg-breath-width-green {
        width: calc(25vw + 20px);
        left: calc(25vw - 10px);
      }

      .bg-breath-width-red {
        width: 100%;
        left: calc(50vw - 10px);
      }

      .bg-breath-width-gold {
        width: 100%;
        left: calc(75vw - 10px);
      }

      .bg-breath-width-orange {
        width: 100%;
        left: calc(75vw - 10px);
      }
    }
  }
}

.pinzi-box-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  z-index: 2;
  pointer-events: auto;
}

.product-detail-full {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background: none;
  animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
  pointer-events: auto;

  &.fade-out {
    opacity: 0;
    transform: scale(0.98);
    pointer-events: none;
  }

  .back-btn {
    position: absolute;
    top: 40px;
    left: 40px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 20;
    transition: all 0.3s ease;
    pointer-events: auto;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
    }
  }

  .detail-img-block {
    width: 320px;
    min-width: 220px;
    max-width: 380px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 80px;
    margin-right: 60px;

    .detail-img {
      position: relative;
      top: 0;
      left: 0;
      width: 260px;
      height: 340px;
      object-fit: contain;
      filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.18));
      -webkit-box-reflect: below -10px linear-gradient(transparent 60%, rgba(0,
            0,
            0,
            0.15) 100%);
      transition: all 0.6s ease-in-out;
      opacity: 1;

      &.animating {
        position: relative;
        // opacity: 0.8;
        transition: all 0.6s ease-in-out;
      }

    }

    .detail-img-2 {
      position: relative;
      top: 20px;
      left: 20px;
      opacity: 0;
    }
  }

  .detail-content-block {
    flex: 1;
    max-width: 600px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 80px;
    opacity: 1;
    transform: translateX(0);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;

    &.hidden {
      opacity: 0;
      transform: translateX(30px);
    }

    .icon-title {
      display: flex;
      align-items: center;
      font-size: 2.6rem;
      font-weight: bold;
      letter-spacing: 0.2em;
      margin-bottom: 32px;
      transform: translateY(0);
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

      .icon {
        font-size: 2.2rem;
        margin-right: 18px;
      }

      .title {
        font-size: 2.2rem;
        font-weight: 700;
        letter-spacing: 0.18em;
      }
    }

    .desc-list {
      font-size: 1.3rem;
      line-height: 2.2rem;
      margin-bottom: 36px;
      letter-spacing: 0.18em;
      transform: translateY(0);
      transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;

      div {
        margin-bottom: 8px;
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    }

    .detail-btn {
      background: #fff;
      color: #1a2b0d;
      border: 2px solid #fff;
      border-radius: 4px;
      font-size: 1.1rem;
      font-weight: bold;
      padding: 8px 24px;
      cursor: pointer;
      letter-spacing: 0.18em;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      opacity: 1;
      transform: translateY(0);

      &:hover {
        background: #e6f5c9;
        color: #1a2b0d;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

@media (max-width: 768px) {


  // 针对不同屏幕尺寸优化背景图显示
  @media (max-width: 480px) {
    .content-product .background-wrapper .background-image {
      background-size: 250% auto;
    }
  }

  @media (orientation: landscape) and (max-width: 768px) {
    .content-product .background-wrapper .background-image {
      background-size: 150% auto;
      transform: scale(1.05);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(1.05);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes sweep {
  0% {
    left: -100%;
  }

  100% {
    left: 200%;
  }
}

.intro-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .logo-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;

    .fade-out & {
      opacity: 0;
    }
  }

  .company-logo {
    position: relative;
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: logoAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;

    &.fade-out {
      opacity: 0;
      transform: scale(0.9);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
    }
  }
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.research-strength-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: url('/r_and_d/banner_bg2.png') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.research-strength-bg {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.research-strength-row {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.research-strength-col {
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 1.25rem;
  padding: 200px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  word-break: break-all;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.research-strength-col:hover {
  transform: translateY(-10px);
}

.research-strength-divider {
  width: 1px;
  height: auto;
  align-self: stretch;
  background: #fff;
  opacity: 0.7;
}

.icon {
  font-size: 1.5em;
  margin-right: 10px;
}

.strength-btn-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 18px;
}

.strength-more-btn {
  background: rgba(255, 255, 255, 0.92);
  color: #C9A14D;
  border: none;
  border-radius: 20px;
  padding: 6px 28px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.strength-more-btn:hover {
  background: #C9A14D;
  color: #fff;
}

@media (max-width: 900px) {
  .research-strength-row {
    flex-direction: column;
  }

  .research-strength-divider {
    width: 60%;
    height: 1px;
    margin: 16px 0;
  }

  .research-strength-col {
    padding: 16px 0;
    font-size: 1rem;
  }
}

.expert-section {
  width: 100%;
  background: #f7f7f7;
  padding: 60px 0 40px 0;
}

.expert-section-title {
  text-align: center;
  width: 100%;
  padding: 40px 0;

  h2 {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
  }
}

.expert-modules-with-btn {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;

}

.expert-modules {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
}

.expert-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.06);
  flex: 1 1 0;
  min-width: 220px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 24px 24px;
  transition: box-shadow 0.2s, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.expert-card:hover {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12);
  transform: scale(1.06);
}

.expert-card-img {
  width: 100px;
  height: 100px;
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 18px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expert-card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.expert-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #333;
}

.expert-card p {
  font-size: 0.98rem;
  color: #666;
  margin: 0;
  text-align: center;
}

@media (max-width: 900px) {
  .expert-modules {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  .expert-card {
    max-width: 90vw;
    min-width: 0;
  }
}

.expert-all-btn-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
}

.expert-all-btn {
  background: #fff;
  color: #C9A14D;
  border: 2px solid #C9A14D;
  border-radius: 24px;
  padding: 12px 36px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
}

.expert-all-btn:hover {
  background: #C9A14D;
  color: #fff;
  border-color: #C9A14D;
}

@media (max-width: 900px) {
  .expert-modules-with-btn {
    flex-direction: column;
    gap: 24px;
    align-items: center;

  }

  .expert-all-btn {
    width: 90vw;
    padding: 14px 0;
    font-size: 1rem;
  }
}
</style>
