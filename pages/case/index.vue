<template>
  <div class="case-page">
    <!-- banner -->
    <section class="case-hero" :style="{
      background: `url(${'/case/topbg.png'}) no-repeat center center`,
      backgroundSize: 'cover'
    }">
      <div class="banner-content">
        <h1 class="title">{{ t('case.banner.title') }}</h1>
        <p class="subtitle">{{ t('case.banner.subtitle') }}</p>
        <p class="desc">{{ t('case.banner.description') }}</p>
      </div>
    </section>

    <!-- <div class="case-hero">
      <img class="case-bg" src="/case/topbg.png" alt="">
      <h2 class="title">{{ $t('nav.case') }}</h2>
    </div> -->
    <div class="case-contain">
      <div class="case-nav">
        <!-- <ul class="mc_e1_list">
          <li v-for="(item, idx) in navList" :key="item.value" :class="['mc_e1_li', { active: idx === activeIdx }]"
            @click="activeIdx = idx">
            <span class="mc_e1_txt">{{ item.label }}</span>
          </li>
        </ul> -->
      </div>
      <div class="case-list">
        <ul class="mc_e1_list">
          <li class="mc_e1_li case-card" v-for="news in filteredNews" :key="news.id">
            <a :href="news.link" target="_blank" class="mc_e1_lisbox">
              <div class="mc_e1_imgbox mc_list_imgbox">
                <img :src="news.img" alt="" class="mc_list_img" />
              </div>
              <div class="mc_e1_txtbox">
                <p class="mc_e1_txt case-card-title">{{ news.title }}</p>
                <div class="mc_e1_date case-card-date">{{ news.date }}</div>
                <div class="case-card-desc">{{ news.desc }}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref, computed } from 'vue'
import { getCase } from '@/data/case'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { locale } = useI18n()
const { caseList, navList } = getCase(locale.value)

const activeIdx = ref(0)
const filteredNews = computed(() => {
  const type = navList[activeIdx.value].value
  return type === 'all' ? caseList : caseList.filter(news => news.type === type)
})

</script>


<style lang="less" scoped>
@import './index.less';
</style>