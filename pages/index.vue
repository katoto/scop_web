<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, nextTick } from "vue";

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
    color: "linear-gradient(135deg, rgba(255, 107, 107, 0.7), rgba(255, 230, 109, 0.5))",
    animationType: "default"
  },
  {
    id: 2,
    name: "产品二",
    description:
      "这是产品二的详细介绍。这是一个革命性的产品，能够改变用户的生活方式。",
    image: "/images/pro-4.png",
    color: "linear-gradient(135deg, rgba(78, 205, 196, 0.7), rgba(85, 98, 112, 0.5))",
    animationType: "wave"
  },
  {
    id: 3,
    name: "产品三",
    description:
      "这是产品三的详细介绍。这是一个突破性的技术，能够提升用户的工作效率。",
    image: "/images/pro-2.png",
    color: "linear-gradient(135deg, rgba(168, 230, 207, 0.7), rgba(255, 211, 182, 0.5))",
    animationType: "pulse"
  },
  {
    id: 4,
    name: "产品四",
    description:
      "这是产品四的详细介绍。这是一个创新的设计，能够满足用户的多样化需求。",
    image: "/images/pro-1.png",
    color: "linear-gradient(135deg, rgba(184, 242, 230, 0.7), rgba(255, 166, 158, 0.5))",
    animationType: "float"
  },
];

const handleProductClick = async (index: number, e: MouseEvent) => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;

  const img = (e.currentTarget as HTMLElement).querySelector(
    "img"
  ) as HTMLElement;
  if (!img) return;
  const startRect = img.getBoundingClientRect();
  showProducts.value = false;
  selectedProduct.value = index;
  await nextTick();

  const detailBlock = detailImgBlockRef.value;
  if (!detailBlock) {
    isTransitioning.value = false;
    return;
  }
  const endRect = detailBlock.getBoundingClientRect();
  animatingProduct.value = {
    image: products[index].image,
    startRect,
    endRect,
    index,
    animating: true,
  };
  await nextTick();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (animatingProduct.value) {
        animatingProduct.value = {
          ...animatingProduct.value,
          startRect: animatingProduct.value.endRect,
          endRect: animatingProduct.value.endRect,
          animating: false,
        };
      }
    });
  });
};

const handleTransitionEnd = () => {
  setTimeout(() => {
    animatingProduct.value = null;
    isTransitioning.value = false;
  }, 50);
};

const handleCloseDetail = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  showProducts.value = true;
  setTimeout(() => {
    selectedProduct.value = null;
    animatingProduct.value = null;
    isTransitioning.value = false;
  }, 400);
};

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
  return isMiddle ? 0.5 : 1.2;
};

onMounted(() => {
  setTimeout(() => {
    showLogo.value = false;
    setTimeout(() => {
      showIntro.value = false;
      // 先显示中间两个色块和产品
      showBlockGreen.value = true;
      showBlockRed.value = true;
      showProducts.value = true;
      // 再显示两侧色块和产品
      setTimeout(() => {
        showBlockGold.value = true;
        showBlockOrange.value = true;
      }, 700); // 700ms后再显示两侧色块，和产品动画延迟一致
    }, 500);
  }, 1000);

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
</script>

<template>
  <div v-if="showIntro" class="intro-layer" :class="{ 'fade-out': !showLogo }">
    <div class="logo-background"></div>
    <div class="company-logo" :class="{ 'fade-out': !showLogo }">
      <img src="/images/svg/logo.svg" alt="公司logo" />
    </div>
  </div>

  <div class="contact-page">
    <div class="content-product" ref="contentDomref">
      <div class="background-wrapper" :style="{ transform: `translateX(${position.offsetX * 20}px)` }">
        <div class="background-image"></div>
        <div v-if="showBlockGreen" class="bg-breath-block green"></div>
        <div v-if="showBlockRed" class="bg-breath-block red"></div>
        <div v-if="showBlockGold" class="bg-breath-block gold"></div>
        <div v-if="showBlockOrange" class="bg-breath-block orange"></div>
      </div>
      <div class="pinzi-box-wrap" :class="{ 'detail-mode': selectedProduct !== null }">
        <StarCanvas />
        <div class="pinzi-box" v-if="selectedProduct === null && !animatingProduct">
          <div v-for="(product, index) in products" :key="product.id" class="card-wrap" :class="{
            'fade-out': selectedProduct !== null && selectedProduct !== index,
            'show-product': showProducts,
            'middle-product': index === 1 || index === 2,
            'side-product': index === 0 || index === 3
          }" :style="{
            opacity: showProducts ? 1 : 0,
            transitionDelay: `${getAnimationDelay(index)}s`
          }" @click="(e) => handleProductClick(index, e)">
            <img :src="product.image" class="pinzi" />
          </div>
        </div>
        <!-- 动画和详情共用同一个img -->
        <div v-if="selectedProduct !== null" class="product-detail-full" :class="{ 'fade-out': showProducts }">
          <button class="back-btn" @click="handleCloseDetail">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="23" stroke="#fff" stroke-width="2" fill="none" />
              <polyline points="28,16 20,24 28,32" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
          <div class="detail-img-block" ref="detailImgBlockRef">
            <img v-if="selectedProduct !== null" :src="products[selectedProduct].image" class="detail-img"
              :class="{ animating: animatingProduct }" :style="animatingProduct
                ? {
                  position: 'fixed',
                  left: animatingProduct.startRect.left + 'px',
                  top: animatingProduct.startRect.top + 'px',
                  width: animatingProduct.startRect.width + 'px',
                  height: animatingProduct.startRect.height + 'px',
                  zIndex: 1000,
                  transition: 'all 0.5s cubic-bezier(.4,1.6,.6,1)',
                }
                : {}
                " @transitionend="!animatingProduct?.animating && handleTransitionEnd()" />
          </div>
          <div class="detail-content-block" :class="{ 'hidden': animatingProduct }">
            <div class="icon-title">
              <span class="icon">🍄</span>
              <span class="title">{{ products[selectedProduct].name }}&nbsp;CP-101</span>
            </div>
            <div class="desc-list">
              <div>天然蘑菇提取物为主要活性成分</div>
              <div>增强免疫力，辅助癌症治疗</div>
              <div>抑制癌细胞增殖，促进细胞正常凋亡</div>
            </div>
            <button class="detail-btn">点击了解更多</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        left: 0;
        width: 100%;
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

      .gold {
        background: rgba(230, 255, 0);
        left: -10px;
        width: calc(25vw + 20px);
        animation-delay: 0s;
        z-index: 1;
      }

      .green {
        background: rgba(0, 220, 0);
        left: calc(25vw - 10px);
        width: calc(25vw + 20px);
        // animation-delay: 0.8s;
        z-index: 2;
      }

      .red {
        background: rgba(255, 0, 0);
        left: calc(50vw - 10px);
        width: calc(25vw + 30px);
        // animation-delay: 1.6s;
        z-index: 3;
      }

      .orange {
        background: rgba(255, 114, 0);
        left: calc(75vw - 10px);
        width: calc(25vw + 20px);
        // animation-delay: 2.2s;
        z-index: 4;
      }
    }
  }
}

.pinzi-box-wrap {
  position: relative;
  width: 100%;
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: auto;

  &.detail-mode {
    pointer-events: none;

    .pinzi-box {
      opacity: 0;
      transform: scale(0.95);
      pointer-events: none;
    }
  }

  .pinzi-box {
    position: relative;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    padding: 0 20px;
    padding-bottom: 50px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center center;
  }

  .card-wrap {
    flex: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;
    pointer-events: auto;
    padding-bottom: 20px;

    &.middle-product {
      transition-duration: 0.6s;
    }

    &.side-product {
      transition-duration: 0.8s;
    }

    &.show-product {
      opacity: 1;
      transform: scale(1) translateY(0);

      .pinzi {
        filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2));
      }
    }

    &.fade-out {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
      pointer-events: none;
    }

    .pinzi {
      -webkit-box-reflect: below -14px linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.4) 100%);
      width: clamp(100px, 15vw, 180px);
      height: auto;
      object-fit: contain;
      max-width: 100%;
      transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      margin: 0 10px;
      filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
      will-change: transform, filter;
      pointer-events: auto;
      display: block;
    }

    &:hover .pinzi {
      transform: scale(1.05);
    }
  }
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
      width: 260px;
      height: 340px;
      object-fit: contain;
      filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.18));
      -webkit-box-reflect: below -10px linear-gradient(transparent 60%, rgba(0, 0, 0, 0.15) 100%);

      &.animating {
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
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
  .pinzi-box-wrap {
    .pinzi-box {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      padding: 20px 15px;
      padding-bottom: 30px;
      gap: 8px;

      &::after {
        content: none;
      }
    }

    .card-wrap {
      flex: 1;
      width: calc(25% - 6px);
      min-width: auto;
      max-width: none;
      padding: 0;
      padding-bottom: 10px;
      margin: 0;
      transform-origin: center center;
      align-items: flex-end;

      .pinzi {
        width: 100%;
        height: auto;
        max-width: 120px;
        margin: 0 auto;
        margin-bottom: 0;
        object-fit: contain;
        -webkit-box-reflect: below -10px linear-gradient(transparent 65%, rgba(0, 0, 0, 0.1) 100%);
      }

      &:hover .pinzi {
        transform: scale(1.08);
      }

      &.show-product {
        transform: scale(1) translateY(0);
      }
    }
  }

  .product-detail-full {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    min-height: 100vh;
    padding-top: 60px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    .back-btn {
      top: 16px;
      left: 16px;
      width: 36px;
      height: 36px;

      svg {
        width: 36px;
        height: 36px;
      }
    }

    .detail-img-block {
      margin: 20px 0;
      width: 90%;
      max-width: 300px;
      height: auto;
      aspect-ratio: 3/4;

      .detail-img {
        width: 100%;
        height: auto;
        max-width: 260px;
        max-height: 340px;
      }
    }

    .detail-content-block {
      margin: 0;
      padding: 0 20px 40px;
      width: 100%;
      align-items: center;
      text-align: center;

      .icon-title {
        font-size: 2rem;
        margin-bottom: 24px;
        flex-direction: column;
        gap: 12px;

        .icon {
          font-size: 2.4rem;
          margin: 0;
        }

        .title {
          font-size: 1.8rem;
        }
      }

      .desc-list {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 32px;
        width: 100%;
        max-width: 400px;
      }

      .detail-btn {
        font-size: 1rem;
        padding: 12px 32px;
        width: 100%;
        max-width: 280px;
      }
    }
  }

  .content-product {
    .background-wrapper {
      transform: none !important; // 移动端禁用背景移动效果

      .background-image {
        left: -20px;
        width: calc(100% + 40px);
        background-size: 200% auto;
        background-position: center top;
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }

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

@keyframes logoAppear {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes breathOpacity {
  0% {
    opacity: 0.3;
  }

  100% {
    opacity: 0.5;
  }
}
</style>
