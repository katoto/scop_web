<script setup lang="ts">

import { onMounted, onUnmounted, reactive, ref, nextTick } from 'vue'

let position = reactive({
  offsetX: 0
})

let domSize = reactive({
  width: 0
})
let domRef = ref<null | HTMLElement>(null)
let contentDomref = ref<null | HTMLElement>(null)
let selectedProduct = ref<number | null>(null)
let animatingProduct = ref<null | {
  image: string,
  startRect: DOMRect,
  endRect: DOMRect,
  index: number,
  animating: boolean
}>(null)
let showDetail = ref(false)
let detailImgBlockRef = ref<HTMLElement | null>(null)

const products = [
  {
    id: 1,
    name: '产品一',
    description: '这是产品一的详细介绍。这是一个创新的解决方案，能够帮助用户更好地完成工作。',
    image: '/images/pro-1.png',
    color: 'orange'
  },
  {
    id: 2,
    name: '产品二',
    description: '这是产品二的详细介绍。这是一个革命性的产品，能够改变用户的生活方式。',
    image: '/images/pro-2.png',
    color: 'red'
  },
  {
    id: 3,
    name: '产品三',
    description: '这是产品三的详细介绍。这是一个突破性的技术，能够提升用户的工作效率。',
    image: '/images/pro-3.png',
    color: 'yellow'
  },
  {
    id: 4,
    name: '产品四',
    description: '这是产品四的详细介绍。这是一个创新的设计，能够满足用户的多样化需求。',
    image: '/images/pro-4.png',
    color: 'green'
  }
]

const handleProductClick = async (index: number, e: MouseEvent) => {
  // 获取被点击图片的DOM位置
  const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLElement
  if (!img) return
  const startRect = img.getBoundingClientRect()
  // 先显示详情页（但内容不显示），以便渲染出目标容器
  selectedProduct.value = index
  await nextTick()
  // 获取详情页图片容器的实际位置和尺寸
  const detailBlock = detailImgBlockRef.value
  if (!detailBlock) return
  const endRect = detailBlock.getBoundingClientRect()
  animatingProduct.value = {
    image: products[index].image,
    startRect,
    endRect,
    index,
    animating: true
  }
  await nextTick()
  // 触发动画
  setTimeout(() => {
    if (animatingProduct.value) {
      animatingProduct.value = {
        ...animatingProduct.value,
        startRect: animatingProduct.value.endRect,
        endRect: animatingProduct.value.endRect,
        animating: false
      }
    }
  }, 20)
}

const handleTransitionEnd = () => {
  animatingProduct.value = null
}

const handleCloseDetail = () => {
  selectedProduct.value = null
  animatingProduct.value = null
}

const handleMouseMove = (e: MouseEvent) => {
  if (!contentDomref.value) return

  const { clientX } = e
  const { width } = domSize

  // Calculate mouse position relative to center
  const centerX = width / 2

  // Calculate offset (normalized between -1 and 1)
  position.offsetX = (clientX - centerX) / centerX
}

const updateDomSize = () => {
  if (contentDomref.value) {
    domSize.width = contentDomref.value.offsetWidth
  }
}

onMounted(() => {
  updateDomSize()
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', updateDomSize)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', updateDomSize)
})

let log = () => {
  console.log('jjhhh==')
}

</script>

<template>
  <div class="contact-page">
    <div class="content-product" ref="contentDomref">
      <div class="background-wrapper" :style="{
        transform: `translateX(${position.offsetX * 20}px)`
      }">
        <div class="background-content"></div>
      </div>
      <div class="pinzi-box-wrap" :class="{ 'detail-mode': selectedProduct !== null }">
        <StarCanvas />
        <div class="pinzi-box" v-if="selectedProduct === null && !animatingProduct">
          <div v-for="(product, index) in products" :key="product.id" class="card-wrap"
            :class="{ 'fade-out': selectedProduct !== null && selectedProduct !== index }"
            @click="(e) => handleProductClick(index, e)">
            <BreatheCard :background="`linear-gradient(45deg, ${product.color}, rgba(255, 255, 255, 0.508))`"
              :animationDelay="`${index * 0.1}s`">
              <img :src="product.image" class="pinzi" />
            </BreatheCard>
          </div>
        </div>
        <!-- 动画和详情共用同一个img -->
        <div v-if="selectedProduct !== null" class="product-detail-full">
          <button class="back-btn" @click="handleCloseDetail">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="23" stroke="#fff" stroke-width="2" fill="none" />
              <polyline points="28,16 20,24 28,32" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
          <div class="detail-img-block" ref="detailImgBlockRef">
            <img v-if="selectedProduct !== null" :src="products[selectedProduct].image" class="detail-img"
              :class="{ 'animating': animatingProduct }" :style="animatingProduct ? {
                position: 'fixed',
                left: animatingProduct.startRect.left + 'px',
                top: animatingProduct.startRect.top + 'px',
                width: animatingProduct.startRect.width + 'px',
                height: animatingProduct.startRect.height + 'px',
                zIndex: 1000,
                transition: 'all 0.5s cubic-bezier(.4,1.6,.6,1)'
              } : {}" @transitionend="!animatingProduct?.animating && handleTransitionEnd()" />
          </div>
          <div class="detail-content-block" v-show="!animatingProduct">
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

  // .content-product:hover {
  //   transform: translateX(-10%);
  // }

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
      transition: transform 0.1s ease-out;
      will-change: transform;
      z-index: 1;

      .background-content {
        position: absolute;
        top: 0;
        left: -50px;
        width: calc(100% + 100px);
        height: 100%;
        background-image: url('/images/bg-line-3.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
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

      &.detail-mode {
        .pinzi-box {
          transform: translateX(-30%);
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
        transition: transform 0.5s ease;
        padding-bottom: 50px;
      }

      .card-wrap {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        transition: all 0.5s ease;

        &.selected {
          transform: translateX(-50%);
        }

        &.fade-out {
          opacity: 0;
          transform: translateX(-100%);
        }
      }

      .pinzi {
        -webkit-box-reflect: below -14px linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.4) 100%);
        width: clamp(100px, 15vw, 180px);
        height: auto;
        object-fit: contain;
        max-width: 100%;
        transition: transform 0.3s ease;
        margin: 0 10px;

        @media (max-width: 768px) {
          width: clamp(80px, 12vw, 140px);
        }

        @media (max-width: 576px) {
          width: clamp(60px, 10vw, 100px);
        }
      }

      .pinzi:hover {
        transform: scale(1.05);
      }
    }
  }

  .content-product-light {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    background: linear-gradient(45deg, orange, rgba(255, 255, 0, 0.508));
    border-radius: 100%;
    animation: breathe 2s ease-in-out infinite;
    filter: blur(40px);
    border: 2px solid red;
  }

  @keyframes breathe {

    0%,
    100% {
      opacity: 0.3;
      transform: scale(0.9);
    }

    50% {
      opacity: 0.4;
      transform: scale(1.2);
    }
  }

  .content-product::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 20%;
    height: 100%;
    background: linear-gradient(90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 100%);
    transform: skewX(54deg);
    animation: sweep 4s linear infinite;
    // z-index: 1;
  }

  .card {
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .form-control {
    &:focus {
      box-shadow: none;
      border-color: #007bff;
    }
  }

  .btn-primary {
    padding: 0.75rem 2rem;
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
    animation: fadeIn 0.5s;

    .back-btn {
      position: absolute;
      top: 40px;
      left: 40px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 20;

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
        transition: all 0.5s cubic-bezier(.4, 1.6, .6, 1);
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

      .icon-title {
        display: flex;
        align-items: center;
        font-size: 2.6rem;
        font-weight: bold;
        letter-spacing: 0.2em;
        margin-bottom: 32px;

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

        div {
          margin-bottom: 8px;
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
        transition: background 0.2s, color 0.2s;

        &:hover {
          background: #e6f5c9;
          color: #1a2b0d;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .pinzi-box-wrap.detail-mode {
    .pinzi-box {
      display: none;
    }
  }

  .flying-img {
    pointer-events: none;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    -webkit-box-reflect: below -10px linear-gradient(transparent 60%, rgba(0, 0, 0, 0.15) 100%);
  }

  .product-detail-full {
    .detail-img-block {
      width: 220px;
      height: 260px;

      .detail-img {
        width: 180px;
        height: 220px;
        object-fit: contain;
        filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.18));
        -webkit-box-reflect: below -10px linear-gradient(transparent 60%, rgba(0, 0, 0, 0.15) 100%);
      }
    }
  }

  @media (max-width: 768px) {
    .product-detail-full {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: auto;
      min-height: 100vh;
      padding-top: 60px;

      .back-btn {
        top: 16px;
        left: 16px;

        svg {
          width: 36px;
          height: 36px;
        }
      }

      .detail-img-block {
        margin: 0 0 24px 0;
        width: 80vw;
        height: auto;

        .detail-img {
          width: 60vw;
          height: auto;
          max-width: 260px;
          max-height: 220px;
        }
      }

      .detail-content-block {
        margin: 0;
        max-width: 95vw;
        padding: 0 10px;

        .icon-title {
          font-size: 1.5rem;
          margin-bottom: 18px;
        }

        .desc-list {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .detail-btn {
          font-size: 1rem;
          padding: 8px 18px;
        }
      }
    }

    .pinzi-box-wrap {
      .pinzi-box {
        flex-direction: column;
        align-items: center;
        padding: 0 4vw 30px 4vw;

        .card-wrap {
          margin-bottom: 18px;
        }
      }

      .pinzi {
        width: clamp(60px, 30vw, 100px);
        margin: 0 0 10px 0;
        -webkit-box-reflect: below -8px linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.4) 100%);
      }
    }
  }
}

.detail-img-block {
  width: 220px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;

  .detail-img {
    width: 180px;
    height: 220px;
    object-fit: contain;
    filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.18));
    -webkit-box-reflect: below -10px linear-gradient(transparent 60%, rgba(0, 0, 0, 0.15) 100%);
    transition: all 0.5s cubic-bezier(.4, 1.6, .6, 1);
  }
}

.detail-img.animating {
  /* 动画时用fixed定位，样式已在:style中 */
}
</style>
