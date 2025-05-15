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
          <a :href="news.link" class="mc_e1_lisbox">
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

const navList = [
  { label: '全部', value: 'all' },
  { label: '实时新闻', value: 'company' },
  { label: '品牌资讯', value: 'special' },
  { label: '业内资讯', value: 'media' },
  { label: '专题活动', value: 'region' }
]
const activeIdx = ref(0)

// 假数据，实际可用接口/文件导入
const newsList = ref([
  {
    id: 1,
    img: 'https://www.catl.com/uploads/1/image/public/202505/20250509171703_id04ypj7pg.jpg',
    date: '2025-05-08',
    title: '宁德时代发布全球首款9MWh超大容量TENER Stack储能系统解决方案',
    desc: '宁德时代发布全球首款9MWh超大容量TENER Stack储能系统解决方案，助力储能行业迈向新高度。',
    type: 'company',
    link: '/news/8415.html'
  },
  {
    id: 1,
    img: 'https://www.catl.com/uploads/1/image/public/202504/20250430184055_1stc8rdx7t.jpg',
    date: '2025.05.15',
    title: '解码数字教育样本：神龙小学AI+教育，塑造未来学校新样态',
    desc: '5月14日至16日，以"教育发展与变革：智能时代"为主题的2025世界数字教育大会在湖北武汉举办...',
    type: 'company',
    link: '/news/8415.html'
  },
  {
    id: 1,
    img: 'https://www.catl.com/uploads/1/image/public/202505/20250509171703_id04ypj7pg.jpg',
    date: '2025.05.15',
    title: '解码数字教育样本：神龙小学AI+教育，塑造未来学校新样态',
    desc: '5月14日至16日，以"教育发展与变革：智能时代"为主题的2025世界数字教育大会在湖北武汉举办...',
    type: 'company',
    link: '/news/8415.html'
  },
  {
    id: 1,
    img: 'https://www.catl.com/uploads/1/image/public/202505/20250509171703_id04ypj7pg.jpg',
    date: '2025.05.15',
    title: '解码数字教育样本：神龙小学AI+教育，塑造未来学校新样态',
    desc: '5月14日至16日，以"教育发展与变革：智能时代"为主题的2025世界数字教育大会在湖北武汉举办...',
    type: 'company',
    link: '/news/8415.html'
  },
  // ...更多新闻
])

const filteredNews = computed(() => {
  if (navList[activeIdx.value].value === 'all') return newsList.value
  return newsList.value.filter(n => n.type === navList[activeIdx.value].value)
})
</script>


<style lang="less" scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp
}


.news-hero {
  position: relative;
  width: 100vw;
  min-height: 390px; // 你可以根据需要调整高度
  height: 40vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  .news-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    height: 390px;
  }

  .title {
    position: relative;
    z-index: 12;
    color: #fff;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
    margin: 0;
    animation: fadeInUp 1.2s;
    display: flex;
    align-items: center;
    margin-left: 70px;
    font-size: 24px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(10, 37, 114, .1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 64%;
    background: linear-gradient(180deg, rgba(10, 37, 114, .4), rgba(10, 37, 114, 0));
  }
}

.news-nav {
  // background: #f7f8fa;
  padding: 32px 0 16px 24px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 24px;

}

.news-contain {
  padding: 0 90px;
}


.news-list {
  padding: 0 24px;
}

.mc_e1_list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.mc_e1_li.news-card {
  background: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  width: 380px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 32px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 0;
    height: 1px;
    background: #001eb4;
    transition: all .36s;
  }
}

.mc_e1_lisbox {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.mc_e1_imgbox {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.mc_list_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s cubic-bezier(.4, 0, .2, 1);
}

.news-card:hover {
  box-shadow: 0 5px 47px 4px rgba(214, 211, 211, .75);

  &::after {
    width: 100%;
  }

  .mc_list_img {
    transform: scale(1.08);
  }
}

.mc_e1_txtbox {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.news-card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #222;
  line-height: 1.3;
}

.news-card-date {
  color: #bfc5ce;
  font-size: 16px;
  margin-bottom: 4px;
}

.news-card-desc {
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  margin-top: 4px;
}

@media (max-width: 1200px) {
  .mc_e1_li.news-card {
    width: 48%;
    min-width: 320px;
    max-width: 100%;
  }

  .mc_e1_list {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .mc_e1_li.news-card {
    width: 100%;
    min-width: 0;
    margin-bottom: 20px;
  }

  .mc_e1_imgbox {
    height: 180px;
  }

  .mc_e1_txtbox {
    padding: 16px;
  }
}
</style>