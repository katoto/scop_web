<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, nextTick } from "vue";
import NumberScroll from '@/components/NumberScroll.vue'
import { getCase } from '@/data/case'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const { caseList } = getCase(locale.value)

const sliceCaseList = caseList.slice(0, 3)

let position = reactive({
  offsetX: 0,
});

let domSize = reactive({
  width: 0,
});
let contentDomref = ref<null | HTMLElement>(null);
let selectedProduct = ref<number | null>(null);

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
    <div class="research-history-title">
      <h2>{{ $t('home.researchHistory.title') }}</h2>
    </div>
    <div class="research-history-container">
      <div v-for="(item, key) in researchList" :key="key" class="research-history-item">
        <NumberScroll :start="item.start" :end="item.end" :duration="item.duration" :decimals="item.decimals"
          :suffix="item.suffix" :color="'#C9A14D'" class="research-number" />
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

  <!-- case 案例 -->
  <section class="news-section case-section">
    <div class="news-section-title">
      <h2>{{ $t('nav.case') }}</h2>
    </div>

    <div class="case-list">
      <ul class="mc_e1_list">
        <li class="mc_e1_li case-card" v-for="news in sliceCaseList" :key="news.title">
          <a :href="news.link" target="_blank" class="mc_e1_lisbox">
            <div class="mc_e1_imgbox mc_list_imgbox">
              <img :src="news.img" alt="" class="mc_list_img" />
            </div>
            <div class="mc_e1_txtbox">
              <p class="mc_e1_txt case-card-title">{{ news.title }}</p>
              <div class="case-card-desc">{{ news.desc }}</div>
              <div class="case-card-more">{{ $t('case.more') }}</div>
            </div>
          </a>
        </li>
      </ul>
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
@import './index.less';
</style>
