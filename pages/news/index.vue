<template>
  <div class="news-hero">
    <img class="news-bg" src="https://www.catl.com/uploads/1/image/public/202007/20200717174040_mrqkunvhd8.jpg" alt="">
    <h2 class="title">{{ $t('nav.news') }}</h2>
  </div>
  <div class="news-contain">
    <div class="news-nav">
      <ul class="mc_e1_list">
        <li v-for="(item, idx) in navList" :key="item.value" :class="['mc_e1_li', { active: idx === activeIdx }]"
          @click="activeIdx = idx">
          <span class="mc_e1_txt">{{ item.label }}</span>
        </li>
      </ul>
    </div>
    <div class="news-list">
      <ul class="mc_e1_list">
        <li class="mc_e1_li news-card" v-for="news in filteredNews" :key="news.id">
          <a :href="news.link" target="_blank" class="mc_e1_lisbox">
            <div class="mc_e1_imgbox mc_list_imgbox">
              <img :src="news.img" alt="" class="mc_list_img" />
            </div>
            <div class="mc_e1_txtbox">
              <p class="mc_e1_txt news-card-title">{{ news.title }}</p>
              <div class="mc_e1_date news-card-date">{{ news.date }}</div>
              <div class="news-card-desc">{{ news.desc }}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { getNews } from '@/data/news'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const { newsList, navList } = getNews(locale.value)

const activeIdx = ref(0)
const filteredNews = computed(() => {
  const type = navList[activeIdx.value].value
  return type === 'all' ? newsList : newsList.filter(news => news.type === type)
})

</script>


<style lang="less" scoped>
@import './index.less';
</style>