<script setup lang="ts">

import { onMounted, onUnmounted, reactive, ref } from 'vue'

let position = reactive({
  offsetX: 0
})

let domSize = reactive({
  width: 0
})
let domRef = ref < null | HTMLElement > (null)
let contentDomref = ref < null | HTMLElement > (null)

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

    <!-- 背景图 -->
    <div class="content-product" ref="contentDomref">
      <div class="background-wrapper" :style="{
        transform: `translateX(${position.offsetX * 12}px)`
      }">
        <div class="background-content"></div>
      </div>
      <div class="pinzi-box-wrap">
        <StarCanvas />
        <div class="pinzi-box">
          <div class="card-wrap">
            <BreatheCard background="linear-gradient(45deg, yellow, rgba(255, 255, 255, 0.508))" animationDelay="0">
              <img src="/images/pro-3.png" class="pinzi" />
            </BreatheCard>
          </div>
          <div class="card-wrap">
            <BreatheCard background="linear-gradient(45deg, green, rgba(255, 255, 255, 0.508))" animationDelay="0.2s">
              <img src="/images/pro-4.png" class="pinzi" />
            </BreatheCard>
          </div>
          <div class="card-wrap">
            <BreatheCard background="linear-gradient(45deg, red, rgba(255, 255, 255, 0.508))" animationDelay="0.3s">
              <img src="/images/pro-2.png" class="pinzi" />
            </BreatheCard>
          </div>
          <div class="card-wrap">
            <BreatheCard background="linear-gradient(45deg, orange, rgba(255, 255, 255, 0.508))" animationDelay="0.4s">
              <img src="/images/pro-1.png" class="pinzi" />
            </BreatheCard>
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
      }

      .card-wrap {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
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
</style>
