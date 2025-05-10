<script setup lang="ts">

import { onMounted, onUnmounted, reactive, ref } from 'vue'

// 产品数据
const products = [
  {
    id: 1,
    title: '产品一',
    description: '这是产品一的详细描述。产品具有创新性的设计和卓越的性能，为用户提供优质的使用体验。',
    image: '/images/pro-3.png',
    color: 'yellow'
  },
  {
    id: 2,
    title: '产品二',
    description: '这是产品二的详细描述。采用先进技术，确保产品的可靠性和持久性，满足不同场景的应用需求。',
    image: '/images/pro-4.png',
    color: 'green'
  },
  {
    id: 3,
    title: '产品三',
    description: '这是产品三的详细描述。精心打造的功能特性，让产品在市场中脱颖而出，成为行业的标杆。',
    image: '/images/pro-2.png',
    color: 'red'
  },
  {
    id: 4,
    title: '产品四',
    description: '这是产品四的详细描述。以用户为中心的设计理念，带来卓越的使用体验和优异的性能表现。',
    image: '/images/pro-1.png',
    color: 'orange'
  }
]

let position = reactive({
  offsetX: 0
})

let domSize = reactive({
  width: 0
})

let selectedProduct = ref(null)
let animatingProduct = ref(false)

const handleProductClick = (index) => {
  selectedProduct.value = index
}

const closeDetail = () => {
  selectedProduct.value = null
}

let domRef = ref<null | HTMLElement>(null)
let contentDomref = ref<null | HTMLElement>(null)

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

const handleLearnMore = (productId: number) => {
  // 这里可以添加跳转逻辑
  console.log('了解更多：', productId)
}

</script>

<template>

  <div class="contact-page">

    <!-- 背景图 -->
    <div class="content-product" ref="contentDomref">
      <div class="background-wrapper" :style="{
        transform: `translateX(${position.offsetX * 12}px)`
      }">
        <div class="background-content"></div>
      </div>
      <div class="pinzi-box-wrap" :class="{ 'detail-mode': selectedProduct !== null }">
        <StarCanvas />
        <div class="pinzi-box" v-if="selectedProduct === null">
          <div v-for="(product, index) in products" :key="product.id" class="card-wrap"
            :class="{ 'fade-out': selectedProduct !== null && selectedProduct !== index }"
            @click="handleProductClick(index)">
            <BreatheCard :background="`linear-gradient(45deg, ${product.color}, rgba(255, 255, 255, 0.508))`"
              :animationDelay="`${index * 0.1}s`">
              <img :src="product.image" class="pinzi" />
            </BreatheCard>
          </div>
        </div>

        <!-- 产品详情 -->
        <div v-if="selectedProduct !== null" class="product-detail">
          <button class="back-btn" @click="closeDetail">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="23" stroke="#fff" stroke-width="2" fill="none" />
              <polyline points="28,16 20,24 28,32" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
          <div class="detail-content">
            <div class="detail-image">
              <BreatheCard
                :background="`linear-gradient(45deg, ${products[selectedProduct].color}, rgba(255, 255, 255, 0.508))`"
                animationDelay="0">
                <img :src="products[selectedProduct].image" class="pinzi detail-pinzi" />
              </BreatheCard>
            </div>
            <div class="detail-info">
              <h2>{{ products[selectedProduct].title }}</h2>
              <p>{{ products[selectedProduct].description }}</p>
              <button class="learn-more-btn" @click="handleLearnMore(products[selectedProduct].id)">
                了解更多
              </button>
            </div>
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
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;

      &.detail-mode {
        .pinzi-box {
          opacity: 0;
          transform: translateX(-100%);
        }
      }

      .pinzi-box {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        padding: 0 20px;
        transition: all 0.5s ease;
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

        &.fade-out {
          opacity: 0;
          transform: translateX(-100%);
        }
      }

      .pinzi {
        -webkit-box-reflect: below -6px linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));
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

      .product-detail {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.5s ease;

        .back-btn {
          position: absolute;
          top: 40px;
          left: 40px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 10;
          padding: 0;
          border-radius: 50%;
          transition: all 0.3s ease;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            transform: scale(1.1);
            background-color: rgba(255, 255, 255, 0.1);
          }

          svg {
            width: 100%;
            height: 100%;
          }
        }

        .detail-content {
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1200px;
          padding: 0 40px;
        }

        .detail-image {
          flex: 0 0 280px;

          .detail-pinzi {
            width: 100%;
            height: auto;
            transform: scale(0.85);
            transform-origin: center center;
          }
        }

        .detail-info {
          flex: 1;
          color: white;
          padding-left: 20px;

          h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
          }

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            opacity: 0.9;
            margin-bottom: 2rem;
          }

          .learn-more-btn {
            background: white;
            color: #333;
            border: none;
            padding: 12px 32px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: "PingFang SC", "Microsoft YaHei", sans-serif;

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
            }

            &:active {
              transform: translateY(0);
            }
          }
        }
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
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
