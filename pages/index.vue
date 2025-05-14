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
</script>

<template>

  <div class="contact-page">
    <div class="content-product" ref="contentDomref">
      <div class="background-wrapper" :style="{ transform: `translateX(${position.offsetX * 20}px)` }">
        <div class="background-image"></div>
      </div>
      <div class="pinzi-box-wrap" :class="{ 'detail-mode': selectedProduct !== null }">
        <StarCanvas />
        <ProductAnimateWrap />
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
</style>
