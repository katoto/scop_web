<template>
  <div class="about-page">
    <!-- 顶部Banner -->
    <section class="banner">
      <div class="banner-overlay"></div>
      <!-- 品牌介绍 -->
      <div class="banner-content">
        <h2>关于 Scophil</h2>
        <p>
          Scophil 源自 "Science"（科学）与 "Philosophy"（哲学）的结合，寓意「科学赋能生命之美」。我们致力于通过前沿生物科技与严谨科研精神，为人类带来卓越健康解决方案，重塑生命活力与幸福品质。
        </p>
      </div>
    </section>

    <!-- 品牌理念横排 -->
    <section class="philosophy-row-section" :style="{
      backgroundImage: activeIndex !== -1 ? `url('${philosophyList[activeIndex].bg}')` : '',
      transition: 'background-image 0.4s',
    }">
      <div class="philosophy-row">
        <div v-for="(item, idx) in philosophyList" :key="item.title" class="philosophy-card"
          :class="{ active: activeIndex === idx }" :style="{ cursor: 'pointer' }" @mouseenter="setActive(idx)"
          @mouseleave="clearActive" @click="setActive(idx)">
          <div class="philosophy-card-bg" :class="{ active: activeIndex === idx }"></div>
          <div class="philosophy-card-content">
            <span v-html="item.icon"></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 专家团队 -->
    <section class="section experts">
      <h2>专家团队</h2>
      <div class="experts-list">
        <!-- 本庶佑教授 -->
        <div class="expert-row">
          <div class="expert-img left">
            <img src="/about-Scophil/3-1专家团队-本庶佑教授.jpg" alt="本庶佑教授" />
          </div>
          <div class="expert-info right">
            <h3>本庶佑教授</h3>
            <div class="expert-desc">日本著名免疫学家，2018年诺贝尔生理学或医学奖得主。京都大学高等研究院特别教授，癌症免疫疗法开创者。</div>
          </div>
          <ul class="expert-points">
            <li>发现PD-1，揭示T细胞免疫调节机制</li>
            <li>开创免疫疗法，提出阻断PD-1/PD-L1，激活抗癌免疫反应</li>
            <li>发现AID酶，阐明抗体多样性与免疫系统适应性机制</li>
            <li>鉴定IL-4/IL-5，推进免疫与过敏反应研究</li>
          </ul>
        </div>
        <!-- Gabazza Esteban教授 -->
        <div class="expert-row reverse">
          <div class="expert-img right">
            <img src="/about-Scophil/3-2专家团队-Gabazza Esteban教授.jpg" alt="Gabazza Esteban教授" />
          </div>
          <div class="expert-info left">
            <h3>Gabazza Esteban教授</h3>
            <div class="expert-desc">日本三重大学医学研究科特任教授。免疫学与呼吸内科学专家，CP-101研发领军人。</div>
          </div>
          <ul class="expert-points">
            <li>发现姬松茸PD-1，拓展免疫研究新方向</li>
            <li>提取CP-101，开发具有抗癌功效的姬松茸提取物</li>
            <li>免疫学研究权威，发表论文千余篇，总引用超16,000次</li>
            <li>探索肺部免疫机制，推动慢性肺病与免疫相关治疗研究</li>
          </ul>
        </div>
        <!-- 后四位专家模块排版 -->
        <div class="expert-modules">
          <div class="expert-card">
            <div class="expert-avatar">
              <img src="/images/pro-3.png" alt="冈田邦彦" />
            </div>
            <h4>冈田邦彦</h4>
            <p>日本再生医疗领域权威，德岛大学硕士、名古屋大学博士，DRAQUA与REBOR等多家生医企业董事长。主导干细胞培养、骨再生与组织工程等前沿研究，推动再生医疗临床应用。</p>
          </div>
          <div class="expert-card">
            <div class="expert-avatar">
              <img src="/images/pro-4.png" alt="丁明跃" />
            </div>
            <h4>丁明跃</h4>
            <p>华中科技大学生命科学与技术学院教授、博士生导师。高端生物医学成像专家，长期致力于医疗器械与成像技术创新。</p>
          </div>
          <div class="expert-card">
            <h4>燕炜</h4>
            <p>医疗健康管理专家，内科医生。毕业于中南大学湘雅医学院与北京大学光华管理学院，拥有20余年医疗行业经验，参与多项1.1类新药临床试验。</p>
          </div>
          <div class="expert-card">
            <h4>文辉清</h4>
            <p>南方医科大学第五附属医院肝胆外科主任，岭南名医。专注肝胆结石及内镜微创治疗。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作机构 -->
    <section class="section partners">
      <h2>合作机构</h2>
      <div class="partner-list">
        <div class="partner-card">
          <h4>三重大学</h4>
          <p>
            日本国立三重大学在医学与免疫学领域享有盛誉。研究团队深度参与蘑菇精CP-101的开发，专注姬松茸活性成分的免疫调节与抗癌功效。通过先进的亚临界水提取技术，验证CP-101的有效性，为天然成分与现代科技结合提供坚实科研支持。
          </p>
        </div>
        <div class="partner-card">
          <h4>岩出菌学研究所</h4>
          <p>1963年创立，成功培育姬松茸"岩出101株"。1980年在日本癌症学会公布其显著抗癌效果，药用价值持续获多项学术验证，奠定坚实科研基础。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const philosophyList = [
  {
    title: '科学严谨',
    desc: 'Scophil 坚信严谨的科研是产品价值的基石。品牌背靠国际一流实验室与专家团队，专注于干细胞科技、多肽技术与天然草本活性物质的深度开发。',
    bg: '/about-Scophil/2-1品牌理念-科学严谨.jpg',
    icon: `<svg viewBox=\"0 0 48 48\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/><path d=\"M16 32l8-16 8 16\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/></svg>`
  },
  {
    title: '安全优先',
    desc: '全系列产品均通过严格质量检测，确保无污染、无激素、无有害添加，保障消费者使用安心。',
    bg: '/about-Scophil/2-2品牌理念-安全优先.png',
    icon: `<svg viewBox=\"0 0 48 48\"><rect x=\"10\" y=\"14\" width=\"28\" height=\"20\" rx=\"4\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/><path d=\"M24 18v12\" stroke=\"#fff\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"#fff\"/></svg>`
  },
  {
    title: '精准功效',
    desc: '结合不同人群需求，Scophil 开发出涵盖抗癌、护肝、男性机能、私护修复等多维产品线，针对性强，见效稳定。',
    bg: '/about-Scophil/2-3品牌理念-精准功效.jpg',
    icon: `<svg viewBox=\"0 0 48 48\"><rect x=\"12\" y=\"12\" width=\"24\" height=\"24\" rx=\"6\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/><path d=\"M24 18v12M18 24h12\" stroke=\"#fff\" stroke-width=\"2\"/></svg>`
  },
  {
    title: '全球视野',
    desc: '品牌布局全球，目前产品远销亚洲、欧美多个国家，致力于打造国际领先的高端生命健康品牌。',
    bg: '/about-Scophil/2-4品牌理念-全球视野.png',
    icon: `<svg viewBox=\"0 0 48 48\"><circle cx=\"24\" cy=\"24\" r=\"20\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/><path d=\"M24 4v40M4 24h40\" stroke=\"#fff\" stroke-width=\"2\" fill=\"none\"/></svg>`
  }
]

const activeIndex = ref(0)

function setActive(idx) {
  activeIndex.value = idx
}
function clearActive() {
  activeIndex.value = 0
}
</script>

<style scoped>
.about-page {
  color: #333;
  font-family: 'Source Han Sans SC', '思源黑体', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.banner {
  position: relative;
  height: 420px;
  background: url('/about-Scophil/1-1品牌愿景与使命-背景图-调暗版.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(40, 30, 10, 0.45);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 700px;
  margin-left: 100px;
  margin-right: auto;
  padding: 32px 24px 32px 0;
  color: #fff;
}

.banner h1 {
  font-size: 2.6rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 1.2rem;
  font-family: 'Source Han Sans SC', '思源黑体', sans-serif;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}

.slogan {
  font-size: 1.15rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}

.banner-content p {
  color: #fff;
  font-size: 1.08rem;
  line-height: 2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}

.section {
  max-width: 1100px;
  margin: 0 auto 48px auto;
  padding: 32px 16px 0 16px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.section h2 {
  color: #FFD700;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Source Han Sans SC', '思源黑体', sans-serif;
}

.intro p {
  font-size: 1.15rem;
  line-height: 2;
}

.philosophy-row-section {
  width: 100%;
  background: #fff;
  /* padding: 48px 0 32px 0; */
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  transition: background-image 0.4s;
}

.philosophy-row {
  display: flex;
  /* gap: 32px; */
  width: 100%;
  /* max-width: 1400px; */
  justify-content: center;
}

.philosophy-card {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  min-height: 700px;
  background-size: cover;
  background-position: center;
  /* border-radius: 20px; */
  overflow: hidden;
  display: flex;
  align-items: stretch;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
  transition: transform 0.2s;
}

.philosophy-card.active,
.philosophy-card:hover {
  /* transform: translateY(-8px) scale(1.03); */
  /* box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18); */
}

.philosophy-card-bg {
  position: absolute;
  inset: 0;
  background: rgba(40, 30, 10, 0.45);
  z-index: 1;
}

.philosophy-card-bg.active {
  backdrop-filter: blur(8px);
}

.philosophy-card-content {
  position: relative;
  z-index: 2;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px 32px 24px;
  height: 100%;
  text-align: center;
}

.philosophy-card-content svg {
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
}

.philosophy-card-content h3 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.22);
}

.philosophy-card-content p {
  font-size: 1.05rem;
  line-height: 1.9;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}

.section.experts {
  width: 100vw;
  max-width: none;
  margin: 0;
  padding: 0;
  background: #f8f8f8;
}

.experts-list {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0px 0;
}

.expert-row,
.expert-row.reverse {
  min-height: 420px;
}

.expert-row {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 3.5rem;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  padding: 0 64px;
}

.expert-row.reverse {
  flex-direction: row-reverse;
  background: #f5f5f5;
  padding: 0 64px;
}

.expert-img {
  flex: 0 0 320px;
  max-width: 320px;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.expert-row.reverse .expert-img {
  margin-left: 32px;
  margin-right: 0;
}

.expert-row:not(.reverse) .expert-img {
  margin-left: 0;
  margin-right: 32px;
}

.expert-img img {
  width: 100%;
  height: auto;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);
  border: none;
}

.expert-info {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.expert-info h3 {
  font-size: 2rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 1.2rem;
}

.expert-desc {
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 1.2rem;
  font-weight: 500;
}

.expert-points {
  flex: 1;
  margin: 0;
  padding-left: 1.2rem;
  color: #333;
  font-size: 1.08rem;
  line-height: 2;
  list-style: disc;
}

.expert-modules {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 1.5rem;
}

.expert-card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 24px 20px;
  flex: 1 1 220px;
  min-width: 220px;
  max-width: 260px;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 5px solid #FFD700;
  text-align: center;
}

.expert-card h4 {
  color: #FFD700;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.partners {
  margin-top: 3rem;
}

.partner-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.partner-card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 24px 20px;
  flex: 1 1 320px;
  min-width: 320px;
  max-width: 480px;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 5px solid #FFD700;
}

.partner-card h4 {
  color: #FFD700;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.expert-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 16px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #FFD700;
}

.expert-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1200px) {
  .philosophy-row {
    /* gap: 16px; */
  }
}

@media (max-width: 900px) {

  .expert-row,
  .expert-row.reverse {
    flex-direction: column;
    padding: 0 12px;
    gap: 20px;
    min-height: unset;
  }

  .expert-img,
  .expert-info,
  .expert-points {
    max-width: 100%;
    width: 100%;
  }

  .expert-modules,
  .partner-list {
    flex-direction: column;
    gap: 16px;
  }

  .banner-content {
    margin-left: 0;
    padding: 24px 8px 24px 8px;
  }

  .philosophy-row {
    flex-direction: column;
    /* gap: 24px; */
  }

  .philosophy-card {
    min-height: 260px;
  }

  .experts-list {
    padding: 24px 0;
  }

  .expert-img {
    margin: 0 0 16px 0;
  }
}

.section.experts h2 {
  color: #222;
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 2px;
  margin: 0 0 2.5rem 0;
  line-height: 1.2;
  padding-top: 2.5rem;
}
</style>