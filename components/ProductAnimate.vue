<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

let selectedProductIndex = ref<any>(null);
let isBack = ref(false);
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

let handleClickBack = () => {
  selectedProductIndex.value = null;
  isBack.value = true;
};
function getActiveClass(num: type) {
  if (num === selectedProductIndex.value && isBack.value) {
    return 'product-item-bg-active'
  }
  return ''
}

let domState = reactive({
  left: 0,
  top: 0,
  width: 0,
  height: 0
})

let domSizeArr = ref([]);

onMounted(() => {
  if (domRef.value) {
    let doms = domRef.value.querySelectorAll('.product-item-wrap');
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    let flag = false
    if (innerWidth <= 768) {
      flag = true
    }


    doms.forEach((dom: HTMLElement, index) => {
      domSizeArr.value[index] = {
        left: flag ? 0 : dom.offsetLeft,
        top: flag ? 0 : dom.offsetTop,
        width: flag ? innerWidth : dom.offsetWidth,
        height: flag ? innerHeight : dom.offsetHeight
      }
    });

  }

})

let domRef = ref(null)
let handleGotoDetail = (num: number) => {
  selectedProductIndex.value = num
  isBack.value = true;
  if (domRef.value) {
    let doms = domRef.value.querySelectorAll('.product-item-wrap');
    let dom: HTMLElement = doms[num]
    if (dom) {
      domState.left = dom.offsetLeft
      domState.top = dom.offsetTop;
      domState.width = dom.offsetWidth;
      domState.height = dom.offsetHeight;
    }
  }
};
</script>

<template>

  <div class="product-container-wrap">
    <button class="back-btn" @click="handleClickBack" v-if="selectedProductIndex !== null">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="23" stroke="#fff" stroke-width="2" fill="none" />
        <polyline points="28,16 20,24 28,32" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>
    <div class="product-container" ref="domRef">
      <div v-for="(product, index) in products" :key="index"
        :class="`product-item-wrap product-item-wrap-${index} ${selectedProductIndex !== null ? 'product-item-wrap-hide' : ''}`"
        @click="handleGotoDetail(index)">
        <div :class="`product-item-bg product-item-bg-${index}`" :style="isBack
          ? {
            animationDelay: '0s',
          }
          : {}
          "></div>
        <div class="product-item" :class="`fade-in-${index}`" :style="isBack
          ? {
            animationDelay: '0s',
          }
          : {}
          ">
          <img :class="{
            'product-img': true,
            'product-img-hide': selectedProductIndex !== null,
            'product-img-show': selectedProductIndex === null
          }" :src="product.image" alt="{{ product.name }}" />
        </div>
      </div>
    </div>
    <div :class="`detail-container detail-container-${domIndex}`" v-for="(domItem, domIndex) in domSizeArr" :style="selectedProductIndex === domIndex ? {
      left: 0 + 'px',
      top: 0 + 'px',
      width: '100%',
      height: '100%',
      opacity: 1,
      zIndex: '1'
    } : {
      left: domItem.left + 'px',
      top: domItem.top + 'px',
      width: domItem.width + 'px',
      height: domItem.height + 'px',
      opacity: 0,
      zIndex: '-1'

    }">
      <div :class="`product-detail-item-bg product-detail-bg-${selectedProductIndex}`">

      </div>
      <div :class="`product-detail-com product-detail-${selectedProductIndex}`">
        <div class="product-detail-com-inner">
          <img class="product-img-detail" :src="products[domIndex].image" alt="{{ product.name }}" />
        </div>
      </div>
      <div class="product-detail-desc" v-if="selectedProductIndex !== null">
        <div class="detail-content-block">
          <div class="icon-title">
            <span class="icon">🍄</span>
            <span class="title">{{ products[selectedProductIndex].name }}&nbsp;CP-101</span>
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

  <!-- <div class="product-container" v-if="selectedProductIndex !== null">

    <button class="back-btn" @click="handleClickBack">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="23" stroke="#fff" stroke-width="2" fill="none" />
        <polyline points="28,16 20,24 28,32" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>

    <div :class="`product-item-wrap product-item-wrap-${selectedProductIndex}`">
      <div :class="`product-item-bg product-item-bg-${selectedProductIndex}`"></div>
    </div>
  </div> -->
</template>

<style scoped>
.product-container-wrap {
  position: relative;
  height: 100vh;
}

.detail-container {
  position: absolute;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  flex-direction: row;
}

.product-detail-item-bg {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  filter: blur(50px);
  position: absolute;
}

.product-detail-bg-0 {
  background: rgba(230, 255, 0, 0.9);
  opacity: 0.35;
}

.product-detail-bg-1 {
  background: rgba(0, 220, 0, 0.6);
  opacity: 0.35;
}

.product-detail-bg-2 {
  background: rgba(255, 0, 0, 1);
  opacity: 0.35;
}

.product-detail-bg-3 {
  background: rgba(255, 114, 0, 0.9);
  opacity: 0.35;
}

.product-detail-com {}

.product-container {
  display: flex;
  height: 100vh;
  position: relative;
}

.product-item-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: all 1s ease-in 1;
  opacity: 1;
}

.product-item-wrap-hide {
  transition: opacity 1s ease;
  opacity: 0;
}

.product-item-bg-active {
  opacity: 0;
}

@keyframes productFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.product-item-bg {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  filter: blur(50px);
  position: absolute;
}

.product-item-bg-0 {
  background: rgba(230, 255, 0, 0.9);
  animation: bgColorAnimate 2s ease-in-out infinite;
  animation-delay: 1.2s;
  opacity: 0;
}

.product-item-bg-1 {
  background: rgba(0, 220, 0, 0.6);
  animation: bgColorAnimate 2s ease-in-out infinite;
  animation-delay: 0.4s;
  opacity: 0;
}

.product-item-bg-2 {
  background: rgba(255, 0, 0, 1);
  animation: bgColorAnimate 2s ease-in-out infinite;
  animation-delay: 0.4s;
  opacity: 0;
}

.product-item-bg-3 {
  background: rgba(255, 114, 0, 0.9);
  animation: bgColorAnimate 2s ease-in-out infinite;
  animation-delay: 1.2s;
  opacity: 0;
}

.product-item {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  filter: blur(0px);
}

.product-detail-com-inner {
  /* width: 20vw; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-in-0 {
  animation-name: fadeIn;
  animation-delay: 1.2s;
}

.fade-in-1 {
  animation-name: fadeIn;
  animation-delay: 0.4s;
}

.fade-in-2 {
  animation-name: fadeIn;
  animation-delay: 0.4s;
}

.fade-in-3 {
  animation-name: fadeIn;
  animation-delay: 1.2s;
}


.product-img {
  /* width: 100%; */
  height: 100%;
  /* max-width: 150px; */
  -webkit-box-reflect: below -15% linear-gradient(transparent, rgba(255, 255, 255, 0.3));
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.product-img-hide {
  opacity: 0;
}

.product-img-show {
  animation: fadeInShow 1s ease-in 1;
}

@keyframes fadeInShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.product-item {
  height: 250px;
  position: relative;
}

.fade-in-0 {
  padding-top: 10px;
  left: 100px;
}

.fade-in-1 {
  left: 30px;
}

.fade-in-2 {
  right: 30px;
}

.fade-in-3 {
  padding-top: 10px;
  right: 100px;
}


@media (max-width: 768px) {
  .product-item {
    height: 30vw;
  }

  .fade-in-0 {
    padding-top: 2vw;
    left: 3vw;
  }

  .fade-in-1 {
    left: 1vw;
  }

  .fade-in-2 {
    right: 1vw;
  }

  .fade-in-3 {
    padding-top: 2vw;
    right: 3vw;
  }

}

.product-img-detail {
  width: 100%;
  max-width: 150px;
  -webkit-box-reflect: below -15% linear-gradient(transparent, rgba(255, 255, 255, 0.3));
}

.product-img:hover {
  /* transform: scale(1.05); */
}

.product-detail-desc {
  width: 60%;
  padding: 0 20px;
  padding-left: 100px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bgColorAnimate {
  0% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.3;
  }
}

.back-btn {
  position: absolute;
  top: 150px;
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


.detail-content-block {
  flex: 1;
  max-width: 600px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* margin-right: 80px; */
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

@media (min-width: 769px) {
  .detail-content-block {
    width: 600px;
  }

}

@media (max-width: 768px) {
  .detail-container {
    position: absolute;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .product-detail-desc {
    /* width: 60%; */
    /* width: 75%; */
    width: 100%;
    padding-left: 20px;
  }


  .back-btn {
    top: 100px;
    position: absolute;
    left: 16px;
    width: 36px;
    height: 36px;

    svg {
      width: 36px;
      height: 36px;
    }
  }

  .detail-btn {
    font-size: 1rem;
    padding: 12px 32px;
    width: 100%;
    max-width: 280px;
  }



  .detail-content-block {
    margin: 0;
    /* padding: 0 20px 40px; */
    padding: 0 0px 0px;
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

.detail-img-block {
  width: 320px;
  min-width: 220px;
  max-width: 380px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 80px; */
  /* margin-right: 60px; */

  .detail-img {
    position: relative;
    top: 0;
    left: 0;
    width: 260px;
    height: 340px;
    object-fit: contain;
    filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.18));
    -webkit-box-reflect: below -15% linear-gradient(transparent 60%, rgba(0,
          0,
          0,
          0.15) 100%);
    transition: all 0.6s ease-in-out;
    opacity: 1;

    &.animating {
      position: relative;
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
</style>
