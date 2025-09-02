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

      <!-- 大分类按钮 -->
      <div class="menu-bar">
        <div class="menu-item" :class="{ active: activeMenuIdx === 0 }">
          <a class="nav-link" href="javascript:void(0);" @click="activeMenuIdx = 0">{{ t('case.menu.mushroom') }}</a>
        </div>
        <div class="menu-item" :class="{ active: activeMenuIdx === 1 }">
          <a class="nav-link" href="javascript:void(0);" @click="activeMenuIdx = 1">{{ t('case.menu.pill') }}</a>
        </div>
        <div class="menu-item" :class="{ active: activeMenuIdx === 2 }">
          <a class="nav-link" href="javascript:void(0);" @click="activeMenuIdx = 2">{{ t('case.menu.liver') }}</a>
        </div>
      </div>
    </section>

    <!-- Mushroom Content -->
    <div class="case-contain" v-if="activeMenuIdx === 0">
      <div class="case-nav">
        <ul class="mc_e1_list">
          <li v-for="(item, idx) in caseNameList" :key="item.value" :class="['mc_e1_li', { active: idx === activeIdx }]"
            @click="activeIdx = idx">
            <span class="mc_e1_txt">{{ item.label }}</span>
          </li>
        </ul>
      </div>

      <div class="case-list">
        <ul class="mc_e1_list" v-if="filteredNews.length > 0">
          <li class="mc_e1_li case-card" v-for="news in filteredNews" :key="news.id">
            <a :href="news.link" target="_blank" class="mc_e1_lisbox">
              <div class="mc_e1_imgbox mc_list_imgbox">
                <img :src="news.img" alt="" class="mc_list_img" />
              </div>
              <div class="mc_e1_txtbox">
                <p class="mc_e1_txt case-card-title">{{ news.title }}</p>
                <div class="case-card-desc">{{ news.desc }}</div>
                <div class="case-card-more">{{ t('case.more') }}</div>
              </div>
            </a>
          </li>
        </ul>
        
        <div class="empty-state" v-else>
          <div class="empty-content">
            <div class="empty-icon">📄</div>
            <p class="empty-text">{{ t('case.empty.pill.title') }}</p>
          </div>
        </div>

        <div class="pagination" v-if="totalPages > 1 && filteredNews.length > 0">
          <button class="pagination-btn" :class="{ disabled: currentPage === 1 }" @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1">
            {{ t('case.before_next') }}
          </button>

          <span class="pagination-numbers">
            <button v-for="page in totalPages" :key="page" class="pagination-number"
              :class="{ active: page === currentPage }" @click="changePage(page)">
              {{ page }}
            </button>
          </span>

          <button class="pagination-btn" :class="{ disabled: currentPage === totalPages }"
            @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
            {{ t('case.next') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Pill Content -->
    <div class="case-contain" v-else-if="activeMenuIdx === 1">
      <div class="case-list">
        <div class="empty-state">
          <div class="empty-content">
            <div class="empty-icon">💊</div>
            <p class="empty-text">{{ t('case.empty.pill.title') }}</p>
            <p class="empty-desc">{{ t('case.empty.pill.desc') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Liver Content -->
    <div class="case-contain" v-else-if="activeMenuIdx === 2">
      <div class="case-list">
        <div class="empty-state">
          <div class="empty-content">
            <div class="empty-icon">🫀</div>
            <p class="empty-text">{{ t('case.empty.liver.title') }}</p>
            <p class="empty-desc">{{ t('case.empty.liver.desc') }}</p>
          </div>
        </div>
      </div>
    </div>


  </div>


</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { getCase } from '@/data/case'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { locale } = useI18n()
const { caseList, caseNameList } = getCase(locale.value)

const activeMenuIdx = ref(0) // 大分类菜单索引：0-mushroom, 1-pill, 2-liver
const activeIdx = ref(0)
const currentPage = ref(1)
const pageSize = ref(9) // PC端显示3行，每行3个，共9个

// 过滤后的新闻数据
const allFilteredNews = computed(() => {
  const type = caseNameList[activeIdx.value].value
  return type === 'all' ? caseList : caseList.filter(news => news.subType === type)
})

// 分页后的新闻数据
const filteredNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return allFilteredNews.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => {
  return Math.ceil(allFilteredNews.value.length / pageSize.value)
})

// 切换页码
const changePage = (page) => {
  currentPage.value = page
  // 滚动到case-list顶部
  nextTick(() => {
    const caseListElement = document.querySelector('.case-nav')
    if (caseListElement) {
      caseListElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

</script>


<style lang="less" scoped>
@import './index.less';
</style>