<template>
    <div class="about-page">
      <!-- 顶部Banner -->
      <section class="banner">
        <div class="banner-overlay"></div>
        <!-- 品牌介绍 -->
        <div class="banner-content">
          <h2 class="title">{{ $t('about.title') }}</h2>
          <p>{{ $t('about.description') }}</p>
        </div>
      </section>
  
      <!-- 品牌理念横排 -->
      <section class="philosophy-row-section" :style="{
        backgroundImage: activeIndex !== -1 ? `url('${philosophyBackgrounds[philosophyKeys[activeIndex]]}')` : '',
        transition: 'background-image 0.4s',
      }">
        <div class="philosophy-row">
          <div v-for="(key, idx) in philosophyKeys" :key="key" class="philosophy-card"
            :class="{ active: activeIndex === idx }" 
            :style="{ cursor: 'pointer' }" 
            @mouseenter="setActive(idx)"
            @mouseleave="clearActive" 
            @click="setActive(idx)">
            <div class="philosophy-card-bg" :class="{ active: activeIndex === idx }"></div>
            <div class="philosophy-card-content">
              <span v-html="getPhilosophyIcon(key)"></span>
              <h3>{{ $t(`about.philosophy.items.${key}.title`) }}</h3>
              <p>{{ $t(`about.philosophy.items.${key}.desc`) }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 专家团队 -->
      <section id="experts" class="section experts">
        <h2>{{ $t('about.experts.title') }}</h2>
        <div class="experts-list">
          <!-- 本庶佑教授 -->
          <div class="expert-row">
            <div class="expert-img left">
              <img src="/about-Scophil/expert_honjo.jpg" :alt="$t('about.experts.items.honjo.name')" />
            </div>
            <div class="expert-info right">
              <h3>{{ $t('about.experts.items.honjo.name') }}</h3>
              <div class="expert-desc">{{ $t('about.experts.items.honjo.title') }}</div>
            </div>
            <ul class="expert-points">
              <li v-for="(point, key) in expertPoints.honjo" :key="key">
                {{ point }}
              </li>
            </ul>
          </div>
          <!-- Gabazza Esteban教授 -->
          <div class="expert-row reverse">
            <div class="expert-img right">
              <img src="/about-Scophil/expert_gabazza.jpg" :alt="$t('about.experts.items.gabazza.name')" />
            </div>
            <div class="expert-info left">
              <h3>{{ $t('about.experts.items.gabazza.name') }}</h3>
              <div class="expert-desc">{{ $t('about.experts.items.gabazza.title') }}</div>
            </div>
            <ul class="expert-points">
              <li v-for="(point, key) in expertPoints.gabazza" :key="key">
                {{ point }}
              </li>
            </ul>
          </div>
          <!-- 后四位专家模块排版 -->
          <div class="expert-modules">
            <div class="expert-card">
              <div class="expert-card-img">
                <img src="/about-Scophil/expert_okada.png" :alt="$t('about.experts.items.okada.name')" />
              </div>
              <h4>{{ $t('about.experts.items.okada.name') }}</h4>
              <p>{{ $t('about.experts.items.okada.title') }}</p>
            </div>
            <div class="expert-card">
              <div class="expert-card-img">
                <img src="/about-Scophil/expert_ding.png" :alt="$t('about.experts.items.ding.name')" />
              </div>
              <h4>{{ $t('about.experts.items.ding.name') }}</h4>
              <p>{{ $t('about.experts.items.ding.title') }}</p>
            </div>
            <div class="expert-card">
              <div class="expert-card-img">
                <img src="/about-Scophil/expert_yan.png" :alt="$t('about.experts.items.yan.name')" />
              </div>
              <h4>{{ $t('about.experts.items.yan.name') }}</h4>
              <p>{{ $t('about.experts.items.yan.title') }}</p>
            </div>
            <div class="expert-card">
              <div class="expert-card-img">
                <img src="/about-Scophil/expert_wen.png" :alt="$t('about.experts.items.wen.name')" />
              </div>
              <h4>{{ $t('about.experts.items.wen.name') }}</h4>
              <p>{{ $t('about.experts.items.wen.title') }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 合作机构轮播 -->
      <section class="section partners">
        <h2>{{ $t('about.partners.title') }}</h2>
        <div class="partner-carousel">
          <button class="carousel-arrow left" @click="prevPartner"><span>&lt;</span></button>
          <div class="partner-card-carousel">
            <div class="partner-card-carousel-inner">
              <div class="partner-card-carousel-content">
                <div class="partner-card-left">
                  <div class="partner-card-title">{{ $t(`about.partners.items.${partnerKeys[partnerIndex]}.name`) }}</div>
                  <div class="partner-card-desc">{{ $t(`about.partners.items.${partnerKeys[partnerIndex]}.desc`) }}</div>
                </div>
                <div class="partner-card-right">
                  <img :src="partnerImages[partnerIndex]" :alt="$t(`about.partners.items.${partnerKeys[partnerIndex]}.name`)" />
                </div>
              </div>
            </div>
            <!-- 指示器 -->
            <div class="carousel-indicators">
              <span v-for="(key, idx) in partnerKeys" :key="key" class="carousel-dot"
                :class="{ active: partnerIndex === idx }" @click="partnerIndex = idx"></span>
            </div>
          </div>
          <button class="carousel-arrow right" @click="nextPartner"><span>&gt;</span></button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { t, locale, messages, tm } = useI18n()
  
  const philosophyKeys = ['science', 'safety', 'precision', 'global']
  const philosophyBackgrounds = {
    science: '/about-Scophil/philosophy_science.jpg',
    safety: '/about-Scophil/philosophy_safety.png',
    precision: '/about-Scophil/philosophy_precision.jpg',
    global: '/about-Scophil/philosophy_global.png'
  }
  const activeIndex = ref(0)
  
  const expertPoints = computed(() => {
    return {
      honjo: {
        point1: t('about.experts.items.honjo.points.point1'),
        point2: t('about.experts.items.honjo.points.point2'),
        point3: t('about.experts.items.honjo.points.point3'),
        point4: t('about.experts.items.honjo.points.point4')
      },
      gabazza: {
        point1: t('about.experts.items.gabazza.points.point1'),
        point2: t('about.experts.items.gabazza.points.point2'),
        point3: t('about.experts.items.gabazza.points.point3'),
        point4: t('about.experts.items.gabazza.points.point4')
      }
    }
  })
  
  function getPhilosophyIcon(key) {
    const icons = {
      science: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" stroke="#fff" stroke-width="2" fill="none"/><path d="M16 32l8-16 8 16" stroke="#fff" stroke-width="2" fill="none"/></svg>`,
      safety: `<svg viewBox="0 0 48 48"><rect x="10" y="14" width="28" height="20" rx="4" stroke="#fff" stroke-width="2" fill="none"/><path d="M24 18v12" stroke="#fff" stroke-width="2"/><circle cx="24" cy="24" r="2" fill="#fff"/></svg>`,
      precision: `<svg viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="6" stroke="#fff" stroke-width="2" fill="none"/><path d="M24 18v12M18 24h12" stroke="#fff" stroke-width="2"/></svg>`,
      global: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" stroke="#fff" stroke-width="2" fill="none"/><path d="M24 4v40M4 24h40" stroke="#fff" stroke-width="2" fill="none"/></svg>`
    }
    return icons[key]
  }
  
  function setActive(idx) {
    activeIndex.value = idx
  }
  
  function clearActive() {
    activeIndex.value = 0
  }
  
  const partnerKeys = ['mie', 'iwade']
  const partnerImages = [
    '/about-Scophil/partner_mie.jpg',
    '/about-Scophil/partner_iwade.png'
  ]
  const partnerIndex = ref(0)
  
  function prevPartner() {
    partnerIndex.value = (partnerIndex.value - 1 + partnerKeys.length) % partnerKeys.length
  }
  
  function nextPartner() {
    partnerIndex.value = (partnerIndex.value + 1) % partnerKeys.length
  }
  
  // 自动轮播
  let carouselTimer = null
  onMounted(() => {
    carouselTimer = setInterval(() => {
      nextPartner()
    }, 4000)
  })
  
  onUnmounted(() => {
    if (carouselTimer) clearInterval(carouselTimer)
  })
  </script>
  
  <style lang="less" scoped>
  @import './index.less';
  </style>