<script setup lang="ts">
const productImages = [
  '/product/ashitaba.png',
  '/product/sweettea.jpg',
  '/product/cabbage.jpg',
  '/product/kale.jpg',
  '/product/beetroot.png',
  '/product/bambooleaf.jpg',
  '/product/shitake.jpg',
  '/product/burdock.jpeg',
  '/product/pumpkinseed.png',
  '/product/yeastzinc.png',
  '/product/longpepper.jpg',
  '/product/agaricus.png',
];
const productNames = [
  '明日叶', '甘茶', '卷心菜', '羽衣甘蓝', '红甜菜', '熊笹', '香菇', '牛蒡根', '南瓜籽提取物', '日本酵母锌', '长胡椒提取物', '姬松茸亚临界水提取物'
];
const productDesc = [
  '富含钾、钙与叶绿素，有助于血液净化、缓解疲劳、维持荷尔蒙平衡',
  '调节自律神经、安稳精神状态，缓解压力性性功能低下',
  '含植酸与维生素U，有助于抗氧化与肝功能维护',
  '含多种矿物质与类黄酮，支持血管健康与激素调节',
  '促进血液循环、提升氧合能力，有助于勃起质量与精力状态',
  '具天然杀菌力，改善口腔肠道微生态，降低体内炎症反应',
  '富含多糖体，增强免疫功能、抗疲劳、维持系统活性',
  '帮助排毒、提升消化代谢效率，有助于营养吸收',
  '含丰富锌元素，是前列腺维护与荷尔蒙调节关键营养素',
  '高吸收性有机锌源，支持睾酮合成与免疫系统运作',
  '改善微循环，激活毛细血管再生，提升生殖系统供血能力',
  '专利抗癌与免疫调节因子，提升抗疲劳、抗氧化与恢复力'
];
</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero">
      <div class="banner-content">
        <h1>CP-101 固本金刚丸</h1>
        <p class="subtitle">永葆20岁的健康活力，从血管开始激活</p>
        <p class="desc">日本植物精萃 × 微循环激活科技，精准修复血管与荷尔蒙系统，从源头改善疲劳、低能、冷感等男性常见困扰。黄金配方支持男性体力、免疫与性荷尔蒙，温和调养，长期见效。</p>
      </div>
    </section>

    <section class="product-section">
      <h2>两大专利成分</h2>
      <div class="patent-list">
        <div class="patent-item">
          <img src="/product/agaricus_cp101.jpg" alt="姬松茸亚临界水提取物" />
          <div>
            <h3>姬松茸亚临界水提取物 CP-101（专利号：7141630）</h3>
            <ul>
              <li>增强免疫系统，提升身体防御机制</li>
              <li>可用于前列腺癌辅助防护</li>
              <li>亚临界萃取，保留完整多糖体活性</li>
            </ul>
          </div>
        </div>
        <div class="patent-item">
          <img src="/product/longpepper_extract.jpg" alt="长胡椒提取物" />
          <div>
            <h3>长胡椒提取物（专利号：6246859）</h3>
            <ul>
              <li>激活血管Tie2受体，修复毛细血管屏障</li>
              <li>提升血流动力，改善末梢循环</li>
              <li>减轻浮肿与手脚冰冷，增强营养输送力</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>多重功能支持</h2>
      <ul class="feature-list">
        <li>改善男性性功能与精力状态</li>
        <li>调节肾功能，缓解疲劳虚弱</li>
        <li>强化免疫系统</li>
        <li>改善前列腺健康与荷尔蒙状态</li>
      </ul>
      <div class="feature-imgs">
        <img src="/product/male_function.png" alt="改善男性性功能与精力状态" />
        <img src="/product/kidney_function.png" alt="调节肾功能，缓解疲劳虚弱" />
        <img src="/product/immune_system.png" alt="强化免疫系统" />
        <img src="/product/prostate_health.png" alt="改善前列腺健康与荷尔蒙状态" />
      </div>
    </section>

    <section class="product-section">
      <h2>科研权威 × 品质保障 × 专利支持</h2>
      <div class="science-list">
        <img src="/product/japan_research.png" alt="日本原产科研背景" />
        <img src="/product/gmp_certification.png" alt="GMP认证" />
        <img src="/product/iso_standard.png" alt="ISO国际标准" />
        <img src="/product/patent.png" alt="专利" />
        <img src="/product/research_backing.png" alt="实证研究背书" />
        <img src="/product/traceable.svg" alt="原料全程可追溯" />
      </div>
    </section>

    <section class="product-section">
      <h2>黄金复方：40种植物平衡精华</h2>
      <div class="compound-list">
        <div v-for="(img, idx) in productImages" :key="img" class="compound-item">
          <img :src="img" :alt="productNames[idx]" />
          <div class="compound-info">
            <h4>{{ productNames[idx] }}</h4>
            <p>{{ productDesc[idx] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>市场对比优势</h2>
      <!-- <img class="market-img" src="/product/1.2.6-市场对比.png" alt="市场对比优势" /> -->
      <ul class="market-list">
        <li>血管调理：激活Tie2，修复毛细血管屏障</li>
        <li>循环改善：专利胡椒碱，临床验证提升血流</li>
        <li>安全性：植物提取，亚临界低温萃取</li>
        <li>长期服用：温和不刺激肠胃，适合长期调养</li>
      </ul>
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
}

.product-hero {
  text-align: left;
  padding: 180px 20px 40px 150px;
  background: url('/product/product-gbjgw-bg.png') no-repeat center center;
  background-size: cover;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 750px;
}

.banner-content {
  max-width: 50%;
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
  max-width: 1100px;
  padding: 0 20px;

  h2 {
    color: #bfa14a;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 28px;
    letter-spacing: 0.08em;
  }
}

.patent-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  .patent-item {
    display: flex;
    flex: 1 1 400px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(191, 161, 74, 0.08);
    padding: 24px;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 12px;
      margin-right: 24px;
      background: #f9f6e7;
    }

    h3 {
      color: #bfa14a;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    ul {
      color: #333;
      font-size: 1rem;
      padding-left: 18px;
      margin: 0;
    }
  }
}

.feature-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 1.1rem;
  color: #bfa14a;
  font-weight: 600;
  margin-bottom: 18px;

  li {
    background: #fffbe8;
    border: 1px solid #f3e6b2;
    border-radius: 8px;
    padding: 10px 22px;
    min-width: 180px;
    text-align: center;
  }
}

.feature-imgs {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  margin-top: 18px;

  img {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    background: #f9f6e7;
    box-shadow: 0 2px 8px rgba(191, 161, 74, 0.08);
  }
}

.science-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;

  img {
    width: 120px;
    height: 80px;
    object-fit: contain;
    background: #f9f6e7;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(191, 161, 74, 0.08);
  }
}

.compound-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;

  .compound-item {
    width: 220px;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(191, 161, 74, 0.08);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 10px;
      background: #f9f6e7;
    }

    .compound-info {
      text-align: center;

      h4 {
        color: #bfa14a;
        font-size: 1.1rem;
        margin-bottom: 6px;
      }

      p {
        color: #333;
        font-size: 0.98rem;
      }
    }
  }
}

.market-img {
  width: 100%;
  max-width: 700px;
  display: block;
  margin: 0 auto 18px auto;
  border-radius: 12px;
  background: #f9f6e7;
  box-shadow: 0 2px 8px rgba(191, 161, 74, 0.08);
}

.market-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 1.1rem;
  color: #bfa14a;
  font-weight: 600;
  justify-content: center;

  li {
    background: #fffbe8;
    border: 1px solid #f3e6b2;
    border-radius: 8px;
    padding: 10px 22px;
    min-width: 180px;
    text-align: center;
  }
}

@media (max-width: 900px) {

  .patent-list,
  .science-list,
  .compound-list {
    flex-direction: column;
    align-items: center;
  }

  .product-section {
    padding: 0 6vw;
  }
}
</style>