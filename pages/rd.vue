<script setup lang="ts">
import { ref, computed } from 'vue';
const localePath = useLocalePath()

const features = [
  {
    title: '💧 亚临界水提取技术（专利号 7141630）',
    desc: 'CP-101 系列采用先进的亚临界水提取技术，该方法通过低温亚临界水萃取，有效避免传统高温提取与溶剂萃取过程中造成的活性成分降解与溶剂残留问题。确保姬松茸中的有效抗癌成分保持完整性与高生物活性。',
    img: '/r_and_d/subcritical_water_extraction.png'
  },
  {
    title: '🧬 免疫检查点抑制机制（CP-101 蘑菇精）',
    desc: '作用于 PD-1 / PD-L1 通路，解除肿瘤对T细胞的抑制，恢复免疫系统识别和攻击癌细胞能力。基于 2018 年诺贝尔奖得主本庶佑教授 PD-1 免疫机制研究。',
    img: '/r_and_d/immune_checkpoint_inhibition.png'
  },
  {
    title: '🌿 树突状细胞激活路径（CP-101 蘑菇精）',
    desc: 'CP-101激活免疫系统中关键的树突状细胞和巨噬细胞，增强体内防御网络。',
    img: '/r_and_d/dendritic_cell_activation.jpg'
  },
  {
    title: '💊 科学复方 × 专利激活，重建微循环系统（CP-101固本金刚丸）',
    desc: 'CP-101固本金刚丸融合多种天然活性成分，以精准复配提升血管功能。其中关键成分——长胡椒提取物（日本专利号：6246859）可有效激活Tie2信号通路，修复毛细血管屏障，强化血流动力。通过重建微循环网络，助力营养高效输送、能量顺畅分配，为改善疲劳、冰冷、浮肿等亚健康状态提供核心支持。',
    img: '/r_and_d/microcirculation_reconstruction.jpeg'
  },
  {
    title: '🛡️ 特许成分 Livinol™（专利号：5980228）（CP-101肝源力）',
    desc: '本产品含有专利成分 Livinol™，经过多项实验验证，具有抑制肝炎、肝癌及脂肪肝的效果。同时，Livinol™还能调节肠道菌群，辅助维持血糖平衡。其活性物质 Garcinol 为肝脏健康构筑坚实屏障，助力肝脏多重防护与修复。',
    img: '/r_and_d/livinol_patent.jpg'
  }
];

let features2 = [
  {
    title: '🔬 体内实验：肺癌小鼠模型验证免疫激活作用（CP-101 蘑菇精）',
    desc: '在突变 EGFR 肺癌小鼠模型中，喂食含 2% CP-101 的实验组（F2组），相比未摄入提取物的对照组（NF组），其肺组织中 PD-L1、PD-L2 和 CTLA4 三项免疫检查点相关基因的 mRNA 表达量显著下降。\n研究表明：\n✅ CP-101 能有效抑制免疫检查点分子表达\n✅ 验证其免疫调节与抗肿瘤潜力\n（表达量以 mRNA / GAPDH 比值表示，数据为 6 周后组织检测所得平均值）',
    img: '/r_and_d/in_vivo_experiment.jpg'
  },
  {
    title: '🧪 体外实验：抑制肺癌细胞生长、降低免疫检查点表达（CP-101 蘑菇精）',
    desc: '在体外实验中，CP-101 应用于人类肺癌细胞系 A549，展现出显著的抗癌活性：\n✅ 在 10～200 μg/ml 浓度范围内，抑制癌细胞增殖，且呈浓度依赖性\n✅ 在 20 μg/ml 浓度作用下，24 小时内显著降低 PD-L1 与 PD-L2 的 mRNA 表达量\n结果证实，CP-101 不仅能直接抑制癌细胞生长，还可调节免疫检查点，增强免疫识别作用。',
    img: '/r_and_d/in_vitro_experiment.jpg'
  },
  {
    title: '🌿 姬松茸提取物对树突状细胞的免疫激活作用（CP-101 蘑菇精）',
    desc: '研究显示，姬松茸提取物可激活树突状细胞，提高其免疫激活能力：\n✅ 促进免疫共刺激因子 CD80、CD86 表达\n✅ 增强 IL-12 与 IFN-γ 分泌，激活 T 细胞反应\n✅ 呈浓度依赖性，提取物浓度越高，激活效果越显著\n通过激活树突状细胞，姬松茸可间接发挥抗肿瘤与免疫增强作用。',
    img: '/r_and_d/agaricus_immune_activation.jpg'
  },
  {
    title: '🔄 三重免疫协同机制（CP-101 蘑菇精）',
    desc: 'CP-101 × 鸡腿菇 × 乳酸杆菌复合物在实验中展现出显著免疫增强作用：\n●抑制 PD-L1 / PD-L2 / CTLA-4，激活免疫细胞\n●鸡腿菇增强抗肿瘤免疫反应\n●乳酸杆菌调节肠道微生态，支持系统性免疫\n实验验证：三者联合作用于细胞模型，协同提升免疫识别、攻击与稳定性',
    img: '/r_and_d/triple_immune_synergy.jpg'
  },
  {
    title: '💫 促进末梢循环（CP-101固本金刚丸）',
    desc: '服用 120μg 胡椒碱后，受试者手部皮肤温度显著上升，证实其有效促进血液循环，改善手脚冰冷等末梢循环问题。',
    img: '/r_and_d/peripheral_circulation.png'
  },
  {
    title: '📊 下肢浮肿指标（ECW/TBW）明显改善（CP-101固本金刚丸）',
    desc: '在临床研究中，受试者服用 CP-101 固本金刚丸后，下肢浮肿指标 ECW/TBW（细胞外水分占比）出现明显下降，显示该配方具有改善水分分布、缓解组织水肿的效果。',
    img: '/r_and_d/edema_improvement.png'
  },
  {
    title: '🔬 促进 Tie2 通路激活，稳定血管结构（CP-101固本金刚丸）',
    desc: '实验数据显示，服用 CP-101 固本金刚丸后，受试者体内的 Tie2 通路活性增强。该通路的激活有助于维持血管内皮细胞的稳定性，减少血管通透性升高所导致的液体渗漏，从而起到稳定血管结构、减少组织液漏损的作用。',
    img: '/r_and_d/tie2_pathway_activation.png'
  },
  {
    title: '👥 使用者主观反馈显示精神状态与体温感知改善（CP-101固本金刚丸）',
    desc: '根据使用者服用 CP-101 固本金刚丸后的主观反馈，大多数人在持续使用期间感受到精神状态改善，疲劳感减轻。同时，部分人反映手脚冰冷状况有所缓解，整体温感提升，精力更充沛，日常工作与生活的应对能力增强。',
    img: '/r_and_d/user_feedback.jpg'
  },
  {
    title: '📉 显著降低ALT、AST肝酶水平（CP-101肝源力）',
    desc: '在动物实验及早期干预模型中，"肝源力"连续摄入显著降低肝功能指标ALT与AST，表明其对肝脏细胞的损伤具有明显缓解作用，有助于提升整体肝脏代谢能力。',
    img: '/r_and_d/liver_enzyme_reduction.png'
  },
  {
    title: '🔍 改善非酒精性脂肪肝脂肪浸润程度（CP-101肝源力）',
    desc: '研究显示，服用"肝源力"可有效减少肝细胞中脂质沉积，改善肝脏脂肪变性程度，为非酒精性脂肪肝（NAFLD）患者提供潜在辅助改善方案。',
    img: '/r_and_d/nafld_improvement.jpg'
  }
];




</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero">
      <div class="banner-content">
        <h1>核心技术</h1>
        <p class="subtitle"></p>
        <p class="desc">Scophil 始终以严谨科研为产品核心驱动力，旗下三大产品线均建立在真实实验验证与权威认证基础之上。</p>
      </div>
    </section>

    <section class="product-section">
      <h2>核心技术介绍</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in features" :key="feature.title"
          :class="['feature-block', { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 }]">
          <div class="feature-block-inner">
            <div class="feature-img">
              <img :src="feature.img" :alt="feature.title" />
            </div>
            <div class="feature-text">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="product-section">
      <h2>临床研究成果</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in features2" :key="feature.title"
          :class="['feature-block', { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 }]">
          <div class="feature-block-inner">
            <div class="feature-img">
              <img :src="feature.img" :alt="feature.title" />
            </div>
            <div class="feature-text">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<style lang="less" scoped>
.product-center-page {
  // background: #fffbe8;
  // color: #1a1a1a;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  min-height: 100vh;
  padding-bottom: 60px;
  overflow-x: hidden;
  width: 100%;
}

.product-hero {
  text-align: left;
  padding: 160px 20px 40px 20px;
  background: url('/r_and_d/banner_bg.png') no-repeat center center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 700px;
  position: relative;
}

.banner-content {
  max-width: 50%;
  align-self: flex-start;
  padding-left: 100px;
  box-sizing: border-box;
}

.menu-bar {
  display: flex;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0px;
  border-radius: 30px;
  margin-top: auto;
  margin-bottom: 40px;
}

.menu-item {
  position: relative;
  padding: 0;
  overflow: hidden;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 20px;
  transition: all 0.3s;
}

.menu-item.active .nav-link,
.menu-item:hover .nav-link {
  background: rgba(191, 161, 74, 0.8);
  color: #fff;
  font-weight: 600;
}

.product-hero h1 {
  font-size: 2.8rem;
  color: white;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: 0.1em;
}

.product-hero .subtitle {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 10px;
}

.product-hero .desc {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 24px;
}

.product-hero .hero-img {
  max-width: 340px;
  width: 90vw;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(191, 161, 74, 0.12);
  margin: 0 auto;
  display: block;
}

.product-section {
  margin: 48px auto 0 auto;
  // max-width: 1100px;
  padding: 0 20px;

  h2 {
    color: #222;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 28px;
    letter-spacing: 0.08em;
    text-align: center;
  }
}

.patent-flex-box {
  display: flex;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  min-height: 380px;
}

.patent-left {
  flex: 1 1 40%;
  padding: 56px 40px 56px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
}

.patent-title {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 18px;
  line-height: 1.2;
}

.patent-no {
  font-size: 1.1rem;
  color: #bfa14a;
  margin-bottom: 18px;
}

.patent-desc {
  font-size: 1.15rem;
  color: #444;
  line-height: 1.8;
}

.patent-right {
  flex: 1 1 60%;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 380px;
  transition: background-image 0.3s;
}

.patent-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  position: relative;
  z-index: 2;
  padding: 0;
}

.patent-menu-item {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bfa14a;
  font-size: 1.15rem;
  font-weight: 500;
  border-radius: 0;
  background: none;
  margin: 0;
  cursor: pointer;
  position: relative;
  transition: color 0.25s;
  border: none;
  box-shadow: none;
  height: 100%;
}

.patent-menu-item .dot-animate {
  position: relative;
  width: 14px;
  height: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.patent-menu-item .dot-animate .dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #bfa14a;
  animation: dot-breath 0.7s infinite alternate;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0 0 8px 2px #bfa14a55;
}

.patent-menu-item .dot-animate .ripple {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(191, 161, 74, 0.35);
  animation: dot-ripple 1.2s infinite;
  pointer-events: none;
}

.patent-menu-item span {
  position: relative;
  z-index: 2;
}

.patent-menu-item.active,
.patent-menu-item:hover {
  color: #bfa14a;
  z-index: 3;
}

.patent-menu-item.active {
  font-weight: 700;
}

.patent-divider {
  width: 1px;
  height: 100%;
  background: #fff;
  align-self: stretch;
  border-radius: 1px;
  margin: 0;
  box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.18);
}

.feature-blocks {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 32px;
}

.feature-block {
  position: relative;
  width: 100%;
  background: #fff;
}

.feature-block.gray-bg {
  background: #f7f7f7;
}

.feature-block-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 48px 0;
}

.feature-block.reverse .feature-block-inner {
  flex-direction: row-reverse;
}

.feature-img {
  flex: 0 0 380px;
  max-width: 420px;
  width: 38vw;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-img img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(191, 161, 74, 0.10);
  background: #f9f6e7;
}

.feature-text {
  flex: 1 1 0;
  min-width: 220px;
  max-width: 600px;
}

.feature-text h3 {
  font-size: 1.6rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 18px;
}

.feature-text p {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.8;
}

.science-blocks {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #fff;
}

.science-block {
  display: flex;
  align-items: center;
  padding: 48px 0 36px 0;
  position: relative;
}

.science-icon {
  flex: 0 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.science-icon span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #f4f8fc;
  color: #2563eb;
  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.06);
}

.science-text {
  flex: 1 1 0;
  padding-left: 36px;
  min-width: 0;
}

.science-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
}

.science-desc {
  font-size: 1.08rem;
  color: #444;
  line-height: 1.8;
}

.science-divider {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
}

.compound-carousel {
  width: 100%;
  background: #faf9f6;
  padding: 48px 0;
  overflow: hidden;
  position: relative;
}

.carousel-row {
  display: flex;
  align-items: center;
  overflow: visible;
  width: 100%;
  position: relative;
  animation: carousel-left 30s linear infinite;
  padding: 0 200px;
  box-sizing: border-box;
}

.carousel-row:first-child {
  margin-bottom: 50px;
}

.carousel-row.reverse {
  animation: carousel-right 30s linear infinite;
}

.carousel-row.paused {
  animation-play-state: paused !important;
}

@keyframes carousel-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes carousel-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

.compound-item {
  position: relative;
  overflow: visible;
  z-index: 1;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #fff;
  margin: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(191, 161, 74, 0.08);
  cursor: pointer;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.compound-item img {
  width: 90px;
  height: 90px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.compound-item.active {
  z-index: 10;
  transform: scale(1.25);
  box-shadow: 0 8px 32px rgba(191, 161, 74, 0.18);
  transition: all 0.3s ease;
}

.compound-item.active img {
  filter: brightness(1.1) contrast(1.1);
}

.compound-item .compound-info {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #222;
  border-radius: 100%;
  box-shadow: 0 2px 12px rgba(191, 161, 74, 0.12);
  padding: 18px 20px;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  pointer-events: none;
  opacity: 1;
  z-index: 10;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.compound-item:not(.active) .compound-info {
  opacity: 0;
  pointer-events: none;
}

.compound-item .compound-info h4 {
  font-size: 0.92rem;
  margin-bottom: 6px;
  font-weight: 700;
}

.compound-item .compound-info p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}

.market-compare-table {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 32px auto;
  border-radius: 18px;
  background: #f9f7f3;
  box-shadow: 0 2px 16px rgba(191, 161, 74, 0.08);
  overflow: hidden;
  font-size: 1.05rem;
}

.market-compare-header,
.market-compare-row {
  display: flex !important;
  flex-direction: row !important;
}

.market-compare-header {
  background: #f7ecd2;
  font-weight: 700;
  color: #bfa14a;
  font-size: 1.13rem;
  border-bottom: 1px solid #f0e9d8;

  >div {
    flex: 1 1 0;
    padding: 18px 8px;
    text-align: center;
  }
}

.market-compare-row {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #f5f5f5;
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f5f3ea;
  }

  >div {
    flex: 1 1 0;
    padding: 18px 8px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.05rem;
  }

  .market-compare-label {
    font-weight: 600;
    color: #222;
    background: #f5f5f7;
  }

  .market-compare-market {
    color: #d32f2f;
    background: #fff3f3;
    font-weight: 500;
  }

  .market-compare-cp101 {
    color: #388e3c;
    background: #f3fcf5;
    font-weight: 600;
  }
}

@media (max-width: 900px) {
  .product-hero {
    padding: 140px 20px 40px 20px;
    height: auto;
    min-height: 700px;
  }

  .banner-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .menu-bar {
    width: auto;
    margin: 40px auto;
    padding: 8px 16px;
  }

  .menu-item {
    font-size: 0.9rem;
    padding: 6px 12px;
  }

  .patent-flex-box {
    flex-direction: column;
    min-height: 0;
  }

  .patent-left {
    padding: 32px 18px 18px 18px;
    text-align: center;
  }

  .patent-right {
    min-height: 220px;
  }

  .patent-menu {
    flex-direction: column;
    height: auto;
  }

  .patent-menu-item {
    flex: 1 1 100%;
    width: 100%;
    min-height: 60px;
    border-radius: 0;
  }

  .patent-divider {
    display: none;
  }

  .product-section {
    padding: 0 20px;
    box-sizing: border-box;
  }

  .feature-block-inner {
    flex-direction: column !important;
    gap: 18px;
    text-align: center;
    padding: 24px 0;
  }

  .feature-img,
  .feature-text {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  .science-block {
    flex-direction: column;
    align-items: center;
    padding: 32px 0 24px 0;
    text-align: center;
  }

  .science-text {
    padding-left: 0;
    margin-top: 18px;
  }

  .science-icon {
    margin-bottom: 8px;
  }

  .carousel-row {
    padding: 0 20px;
  }

  .compound-item,
  .compound-item img {
    width: 90px;
    height: 90px;
  }

  .compound-item .compound-info {
    width: 100%;
    max-width: 300px;
    min-width: 0;
    font-size: 0.95rem;
    padding: 10px 8px;
  }

  .market-compare-table {
    font-size: 0.98rem;
  }

  .market-compare-header>div,
  .market-compare-row>div {
    padding: 12px 2px;
  }
}

.patent-section-title {
  color: #222 !important;
  text-align: center !important;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 28px;
  letter-spacing: 0.08em;
  width: 100%;
  display: block;
}

.advice-cards {
  display: flex;
  gap: 48px;
  justify-content: center;
  margin-top: 32px;
  background: none;
}

.advice-card {
  flex: 1 1 0;
  min-width: 260px;
  max-width: 420px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
}

.advice-title {
  color: #2563eb;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
}

.advice-divider {
  width: 100%;
  height: 1px;
  background: #e5e7eb;
  margin: 0 0 18px 0;
  border: none;
}

.advice-desc,
.advice-list {
  color: #444;
  font-size: 1.05rem;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .advice-cards {
    flex-direction: column;
    gap: 24px;
  }

  .advice-card {
    max-width: 100%;
    padding: 0 12px;
  }
}

@keyframes dot-breath {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.6);
  }
}

@keyframes dot-ripple {
  0% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }

  80% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.8);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.8);
  }
}

.consult-link {
  color: #bfa14a;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #bfa14a;
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    background: #bfa14a;
    color: white;
  }
}
</style>