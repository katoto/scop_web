<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, nextTick } from "vue";
import NumberScroll from '@/components/NumberScroll.vue'

let position = reactive({
  offsetX: 0,
});

let domSize = reactive({
  width: 0,
});
let contentDomref = ref<null | HTMLElement>(null);
let selectedProduct = ref<number | null>(null);
let isVideoLoaded = ref(false);

// Fix ref array initialization
const observer = ref<IntersectionObserver | null>(null);

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

const handleVideoLoad = () => {
  isVideoLoaded.value = true;
};

onMounted(() => {
  updateDomSize();
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", updateDomSize);

  // Setup intersection observer for research strength columns
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('cont-fade-in');
      } else {
        entry.target.classList.remove('cont-fade-in');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  // Observe all research strength columns
  nextTick(() => {
    const cols = document.querySelectorAll('.research-strength-col');
    cols.forEach(col => {
      if (col instanceof HTMLElement) {
        observer.value?.observe(col);
      }
    });
  });
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", updateDomSize);

  // Cleanup observer
  if (observer.value) {
    observer.value.disconnect();
  }
});

let isLoad = ref(false)

let handleLoad = () => {
  isLoad.value = true
}

const researchList = {
  years: {
    start: 0,
    end: 45,
    duration: 1200,
    suffix: '',
    decimals: 0,
  },
  reports: {
    start: 0,
    end: 135,
    duration: 1200,
    suffix: '+',
    decimals: 0,
  },
  institutions: {
    start: 0,
    end: 20,
    duration: 1200,
    suffix: '+',
    decimals: 0,
  },
};

const localePath = useLocalePath()
</script>

<template>
  <div class="contact-page">  
    <img src="/images/bg-line-2.png" @load="handleLoad" :style="{
      display: 'none'     
    }" />
    
    <video 
      class="background-video" 
      :class="{ 'video-loaded': isVideoLoaded }"
      src="/images/bg.mp4" 
      autoplay 
      loop 
      muted 
      playsinline
      @loadeddata="handleVideoLoad"
    ></video>
    <div class="content-product" ref="contentDomref">
      <div class="background-wrapper" :style="{ transform: `translateX(${position.offsetX * 20}px)` }">
        <div class="background-image" :class="{ 'fade-out': isVideoLoaded }"></div>
      </div>
      <div class="pinzi-box-wrap" :class="{ 'detail-mode': selectedProduct !== null }" v-if="isLoad">
        <!-- <StarCanvas /> -->
        <ProductAnimateWrap />
      </div>
    </div>
  </div>

  <!-- 科研历史 -->
  <section class="research-history-section">
    <div class="research-history-title">
      <h2>{{ $t('home.researchHistory.title') }}</h2>
    </div>
    <div class="research-history-container">
      <div v-for="(item, key) in researchList" :key="key" class="research-history-item">
        <NumberScroll 
          :start="item.start" 
          :end="item.end" 
          :duration="item.duration" 
          :decimals="item.decimals"
          :suffix="item.suffix" 
          :color="'#C9A14D'" 
          class="research-number" 
        />
        <div class="research-label">{{ $t(`home.researchHistory.items.${key}.label`) }}</div>
        <div class="research-desc">{{ $t(`home.researchHistory.items.${key}.desc`) }}</div>
      </div>
    </div>
  </section>

  <!-- 科研实力 -->
  <section class="research-strength-section">
    <div class="research-strength-bg">
      <div class="research-strength-row">
        <div class="research-strength-col">
          <span class="icon">🔬</span>{{ $t('home.researchStrength.items.nobel.content') }}
          <div class="strength-btn-wrap">
            <NuxtLink class="nav-link" :to="localePath('/rd')">
              <button class="strength-more-btn">{{ $t('home.researchStrength.items.nobel.button') }}</button>
            </NuxtLink>
          </div>
        </div>
        <div class="research-strength-divider"></div>
        <div class="research-strength-col">
          <span class="icon">🧬</span>{{ $t('home.researchStrength.items.patent.content') }}
          <div class="strength-btn-wrap">
            <NuxtLink class="nav-link" :to="localePath('/rd')">
              <button class="strength-more-btn">{{ $t('home.researchStrength.items.patent.button') }}</button>
            </NuxtLink>
          </div>
        </div>
        <div class="research-strength-divider"></div>
        <div class="research-strength-col">
          <span class="icon">✅</span>{{ $t('home.researchStrength.items.certification.content') }}
          <div class="strength-btn-wrap">
            <NuxtLink class="nav-link" :to="localePath('/rd')">
              <button class="strength-more-btn">{{ $t('home.researchStrength.items.certification.button') }}</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 专家团队 -->
  <section class="expert-section">
    <div class="expert-section-title">
      <h2>{{ $t('home.expertTeam.title') }}</h2>
    </div>
    <div class="expert-modules-with-btn">
      <div class="expert-modules">
        <div class="expert-card">
          <div class="expert-card-img">
            <img src="/about-Scophil/expert_honjo.jpg" :alt="$t('home.expertTeam.experts.honjo.name')" />
          </div>
          <h4>{{ $t('home.expertTeam.experts.honjo.name') }}</h4>
          <p>{{ $t('home.expertTeam.experts.honjo.title') }}</p>
        </div>
        <div class="expert-card">
          <div class="expert-card-img">
            <img src="/about-Scophil/expert_gabazza.jpg" :alt="$t('home.expertTeam.experts.gabazza.name')" />
          </div>
          <h4>{{ $t('home.expertTeam.experts.gabazza.name') }}</h4>
          <p>{{ $t('home.expertTeam.experts.gabazza.title') }}</p>
        </div>
        <div class="expert-all-btn-wrap">
          <NuxtLink class="nav-link" :to="localePath('/about#experts')">
            <button class="expert-all-btn">{{ $t('home.expertTeam.viewAll') }}</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- 新闻中心 -->
  <section class="news-section">
    <div class="news-section-title">
      <h2>{{ $t('home.news.title') }}</h2>
    </div>

    <div>
      <div class="mc_a1_bd">
        <ul class="mc_a1s1_list clearfix">
          <li class="mc_a1s1_li">
            <a href="/news/detail" class="mc_a1s1_a">
              <div class="mc_a1s1_txtbox">
                <div class="mc_a1s1_date">
                  <i class="iconfont iconshijian"></i>
                  <span>{{ $t('home.news.items.exhibition.date') }}</span>
                </div>
                <div class="mc_a1s1_txt">
                  {{ $t('home.news.items.exhibition.title') }}
                </div>
                <div class="mc_a1s1_more">
                  <div class="mc_a1s1_morebtn">{{ $t('home.news.items.exhibition.button') }}</div>
                </div>
              </div>
              <div class="mc_a1s1_imgbox mc_list_imgbox">
                <img src="/news/specialNew-2.png" alt="" class="mc_list_png">
              </div>
            </a>
          </li>
          <li class="mc_a1s1_li">
            <a href="https://mp.weixin.qq.com/s/sacvMx1pB1nMHct_kyNGVQ" class="mc_a1s1_a">
              <div class="mc_a1s1_txtbox">
                <div class="mc_a1s1_date">
                  <i class="iconfont iconshijian"></i>
                  <span>{{ $t('home.news.items.charity.date') }}</span>
                </div>
                <div class="mc_a1s1_txt">
                  {{ $t('home.news.items.charity.title') }}
                </div>
                <div class="mc_a1s1_more">
                  <div class="mc_a1s1_morebtn">{{ $t('home.news.items.charity.button') }}</div>
                </div>
              </div>
              <div class="mc_a1s1_imgbox mc_list_imgbox">
                <img src="/news/specialNew-1.png" alt="" class="mc_list_png">
              </div>
            </a>
          </li>
          <li class="mc_a1s1_li">
            <a href="https://mp.weixin.qq.com/s/XnJcIHE6dXIKuavgDQIkmA" class="mc_a1s1_a">
              <div class="mc_a1s1_txtbox">
                <div class="mc_a1s1_date">
                  <i class="iconfont iconshijian"></i>
                  <span>{{ $t('home.news.items.research.date') }}</span>
                </div>
                <div class="mc_a1s1_txt">
                  {{ $t('home.news.items.research.title') }}
                </div>
                <div class="mc_a1s1_more">
                  <div class="mc_a1s1_morebtn">{{ $t('home.news.items.research.button') }}</div>
                </div>
              </div>
              <div class="mc_a1s1_imgbox mc_list_imgbox">
                <img src="/news/realNew-2.jpeg" alt="" class="mc_list_png">
              </div>
            </a>
          </li>
        </ul>
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

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.video-loaded {
      opacity: 1;
    }
  }

  .content-product {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;

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
        transition: opacity 0.5s ease-in-out;

        &.fade-out {
          opacity: 0;
        }
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
}

.research-strength-bg {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
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
  font-weight: 500;
  padding: 200px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  word-break: break-all;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 2s ease-out, transform 1s ease-out;
  opacity: 0;
  transform: translateY(30px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &.cont-fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .icon {
    font-size: 1.8em;
    margin-right: 12px;
    font-weight: 600;
  }
}

.research-strength-col:hover {
  transform: translateY(-15px);
}

.research-strength-divider {
  width: 1px;
  height: auto;
  align-self: stretch;
  background: #fff;
  opacity: 0.7;
}

.strength-btn-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 18px;
}

.strength-more-btn {
  background: rgba(255, 255, 255, 0.95);
  color: #C9A14D;
  border: none;
  border-radius: 20px;
  padding: 8px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.strength-more-btn:hover {
  background: #C9A14D;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 900px) {
  .research-strength-row {
    flex-direction: column;
  }

  .research-strength-divider {
    width: 100%;
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
  padding: 30px 0;

  h2 {
    display: inline-block;
    font-size: 32px;
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
  width: 160px;
  height: 146px;
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
  object-fit: cover;
  border-radius: 18px;
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

.news-section {
  background: #f7f7f7;

  .news-section-title {
    text-align: center;
    width: 100%;
    padding: 30px 0;

    h2 {
      display: inline-block;
      font-size: 32px;
      font-weight: 700;
      margin: 0;
    }
  }

  .mc_a1s1_list {
    padding-bottom: 0;
    margin-bottom: 0;
    overflow: hidden;
    padding: 0 80px;
    display: flex;
    flex-wrap: wrap;
  }

  .mc_a1s1_li {
    float: none;
    width: 33.333333%;
    list-style-type: none;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .mc_a1s1_a {
    display: block;
    padding: 55px 40px 65px;
    background: #fff;
    transition: all 0.3s ease;
    height: 100%;
  }

  .mc_a1s1_a:hover {
    box-shadow: 15px 9px 14px 2px rgba(110, 117, 129, .18);
  }

  .mc_a1s1_li:not(:last-child) {
    border-right: 1px solid #e5e5e5;
  }

  .mc_a1s1_a:hover .mc_a1s1_morebtn::before {
    transform: scale(.5);
    opacity: 0;
  }

  .mc_a1s1_a:hover .mc_a1s1_morebtn::after {
    transform: scale(1);
    opacity: 1;
  }

  .mc_a1s1_a:hover .mc_a1s1_morebtn {
    color: #C9A14D;
  }

  .mc_a1s1_a:hover .mc_a1s1_imgbox::after {
    width: 100%;
  }

  .mc_a1s1_date {
    font-size: 16px;
    color: #C9A14D;
    line-height: 20px;
    margin-bottom: 25px;
  }

  .mc_a1s1_date i,
  .mc_a1s1_date em {
    font-size: 18px;
    line-height: 20px;
  }

  .mc_a1s1_txt {
    font-size: 24px;
    line-height: 34px;
    color: #C9A14D;
    height: 68px;
    overflow: hidden;
    margin-bottom: 60px;
  }

  .mc_a1s1_morebtn {
    position: relative;
    z-index: 1;
    display: inline-block;
    vertical-align: top;
    padding: 0 40px;
    line-height: 54px;
    font-size: 14px;
    font-weight: bold;
    font-family: "OPPOSans2_En_design-Heavy", "OPPOSans2_En_design-Regular", "微软雅黑", Arial, "PingFangSC-Light", "Helvetica Neue", Helvetica, "Microsoft Yahei", "Hiragino Sans GB", tahoma, SimSun, sans-serif;
    color: #fff;
  }

  .mc_a1s1_morebtn::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: #C9A14D;
    transition: all .36s;
    transform: scale(1) !important;
  }

  .mc_a1s1_morebtn::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 1px solid #C9A14D;
    opacity: 0;
    transform: scale(1);
    transition: all .36s;
  }

  .mc_list_imgbox {
    position: relative;
  }

  .mc_a1s1_imgbox {
    margin-top: 55px;
    overflow: visible;
  }

  .mc_a1s1_imgbox::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -30px;
    z-index: 1;
    width: 100%;
    height: 1px;
    background: #e5e5e5;
  }

  .mc_a1s1_imgbox::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -30px;
    z-index: 2;
    width: 0;
    height: 1px;
    background: #0028aa;
    transition: all .5s;
  }

  .mc_list_png {
    width: 100%;
    height: 210px;
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}

// 移动端适配
@media screen and (max-width: 768px) {
  .news-section {
    .news-section-title {
      padding: 20px 0;

      h2 {
        font-size: 28px;
      }
    }

    .mc_a1s1_list {
      padding: 0 20px;
      flex-direction: column;
    }

    .mc_a1s1_li {
      width: 100%;
      padding: 0;
      margin-bottom: 20px;

      &:not(:last-child) {
        border-right: none;
        border-bottom: 1px solid #e5e5e5;
      }
    }

    .mc_a1s1_a {
      padding: 30px 20px;
    }

    .mc_a1s1_txt {
      font-size: 20px;
      line-height: 28px;
      height: auto;
      min-height: 56px;
      margin-bottom: 30px;
    }

    .mc_a1s1_date {
      font-size: 14px;
      margin-bottom: 15px;
    }

    .mc_a1s1_imgbox {
      margin-top: 30px;
    }

    .mc_list_png {
      height: 180px;
    }

    .mc_a1s1_morebtn {
      padding: 0 30px;
      line-height: 44px;
      font-size: 13px;
    }
  }
}

@media screen and (max-width: 480px) {
  .news-section {
    .news-section-title h2 {
      font-size: 24px;
    }

    .mc_a1s1_list {
      padding: 0 15px;
    }

    .mc_a1s1_a {
      padding: 25px 15px;
    }

    .mc_a1s1_txt {
      font-size: 18px;
      line-height: 26px;
      min-height: 52px;
      margin-bottom: 25px;
    }

    .mc_a1s1_date {
      font-size: 13px;
      margin-bottom: 12px;
    }

    .mc_a1s1_imgbox {
      margin-top: 25px;
    }

    .mc_list_png {
      height: 160px;
    }

    .mc_a1s1_morebtn {
      padding: 0 25px;
      line-height: 40px;
      font-size: 12px;
    }
  }
}

.research-history-section {
  width: 100%;
  padding: 60px 0;
  background: #fff;

  .research-history-title {
    text-align: center;
    width: 100%;
    margin-top: 0px;

    h2 {
      display: inline-block;
      font-size: 32px;
      font-weight: 700;
      margin: 0;
    }
  }

  .research-history-container {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .research-history-item {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    width: 100%;

    .research-number {
      font-size: 80px;
      line-height: 1;
      color: #C9A14D;
    }

    .research-label {
      font-size: 18px;
      color: #C9A14D;
      margin-left: 6px;
    }

    .research-desc {
      font-size: 15px;
      color: #666;
      max-width: 600px;
      margin-left: 10px;
    }
  }
}

// 移动端适配
@media screen and (max-width: 768px) {
  .research-history-section {
    padding: 40px 0;

    .research-history-title {
      margin-top: 0px;

      h2 {
        font-size: 28px;
      }
    }

    .research-history-container {
      padding: 40px 20px;
      gap: 40px;
    }

    .research-history-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 15px;

      .research-number {
        font-size: 60px;
      }

      .research-label {
        margin-left: 0;
        font-size: 16px;
      }

      .research-desc {
        margin-left: 0;
        font-size: 14px;
        max-width: 100%;
        padding: 0 20px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .research-history-section {
    .research-history-title h2 {
      font-size: 24px;
    }

    .research-history-item {
      .research-number {
        font-size: 48px;
      }

      .research-label {
        font-size: 15px;
      }

      .research-desc {
        font-size: 13px;
        padding: 0 15px;
      }
    }
  }
}

// Add iPad specific styles
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .research-strength-section {
    .research-strength-col {
      padding: 120px 24px;
      font-size: 1.1rem;
    }
  }

  .expert-section {
    padding: 40px 0 30px 0;

    .expert-section-title h2 {
      font-size: 28px;
    }

    .expert-modules {
      gap: 24px;
      padding: 0 20px;
    }

    .expert-card {
      padding: 24px 20px 20px 20px;

      h4 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.95rem;
      }
    }
  }

  .news-section {
    .news-section-title h2 {
      font-size: 28px;
    }

    .mc_a1s1_list {
      padding: 0 40px;
    }

    .mc_a1s1_a {
      padding: 40px 30px 50px;
    }

    .mc_a1s1_txt {
      font-size: 20px;
      line-height: 30px;
      height: 60px;
      margin-bottom: 40px;
    }

    .mc_a1s1_date {
      font-size: 15px;
      margin-bottom: 20px;
    }

    .mc_list_png {
      height: 180px;
    }
  }

  .research-history-section {
    padding: 40px 0;

    .research-history-title h2 {
      font-size: 28px;
    }

    .research-history-container {
      gap: 60px;
    }

    .research-history-item {
      .research-number {
        font-size: 70px;
      }

      .research-label {
        font-size: 17px;
      }

      .research-desc {
        font-size: 14px;
      }
    }
  }
}
</style>
