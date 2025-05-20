<script setup lang="ts">
import { ref, computed } from 'vue';
const localePath = useLocalePath()

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

const patentOptions = [
  {
    id: 1,
    title: '日本亚临界萃取专利技术',
    patentNo: '专利号：7141630',
    desc: '应用于姬松茸核心成分提取，广泛用于 CP-101 产品中。采用低温低压工艺，有效保留活性成分，显著提升吸收效率。',
    image: '/product/agaricus_cp101.jpg',
  },
  {
    id: 2,
    title: 'pH响应型肠溶缓释技术',
    patentNo: '',
    desc: '减少胃酸破坏，实现靶向肠道吸收，提升生物利用率。',
    image: '/product/longpepper_extract.jpg',
  },
  {
    id: 3,
    title: 'Livinol™专利成分',
    patentNo: '专利号：5980228',
    desc: '具备抗癌、抗氧化、抗炎、调节肠道菌群等多重功能。',
    image: '/product/agaricus_cp101.jpg',
  },
  {
    id: 4,
    title: '七重活性成分协同配方',
    patentNo: '',
    desc: '实现抗炎、抗氧化、解毒、再生、调糖、调脂一体化功效。',
    image: '/product/longpepper_extract.jpg',
  },
  {
    id: 5,
    title: '日本GMP认证 & ISO标准工厂制造',
    patentNo: '',
    desc: '全流程可追溯，符合国际出口与个性化定制标准。',
    image: '/product/agaricus_cp101.jpg',
  }
];

const activePatent = ref(patentOptions[0]);

function setActivePatent(option: typeof patentOptions[0]) {
  activePatent.value = option;
}

const features = [
  {
    title: '护肝抗癌',
    desc: 'Livinol™中的Garcinol可抑制癌细胞扩散\n姬松茸激活巨噬细胞，增强肝脏免疫抗癌能力\n萝卜硫素诱导癌细胞凋亡，激活解毒酶系统\n多重抗氧化成分降低肝癌风险',
    img: '/product/male_function.png'
  },
  {
    title: '强抗氧化，减缓肝细胞衰老',
    desc: '芽孢西兰花粉末启动Nrf2通路清除自由基\n野葡萄稳定肝细胞膜、促进微循环\n姬松茸增强抗氧环境，马利亚蓟促进肝细胞再生\nL-鸟氨酸盐酸盐减轻肝脏代谢压力',
    img: '/product/kidney_function.png'
  },
  {
    title: '解酒护肝',
    desc: 'Livinol™抵御酒精毒害，抑制炎症\nL-鸟氨酸加速酒精代谢\n马利亚蓟修复肝细胞，野葡萄促进解毒微循环',
    img: '/product/immune_system.png'
  },
  {
    title: '美白焕肤',
    desc: 'Livinol™调节肠道菌群、排毒护肤\n野葡萄促进黑色素代谢\n芽孢西兰花 & 姬松茸提升皮肤代谢、改善肤色',
    img: '/product/prostate_health.png'
  },
  {
    title: '血糖调节',
    desc: 'Livinol™通过菌群调节碳水吸收\n印度藤黄协同成分改善脂肪代谢，增强胰岛素敏感性\n姬松茸 & 芽孢西兰花提升肝脏对葡萄糖摄取和储存',
    img: '/product/male_function.png'
  },
  {
    title: '调脂抗脂肪肝',
    desc: 'Livinol™抑制脂肪积累\n印度藤黄促进脂肪酸氧化、降低血脂\n芽孢西兰花 & 马利亚蓟增强肝功能，改善脂肪浸润',
    img: '/product/kidney_function.png'
  }
];

const scienceList = [
  {
    icon: '🔬',
    title: '日本原产科研背景',
    desc: '由三重大学免疫团队研发，融合现代分子免疫学成果。'
  },
  {
    icon: '✅',
    title: 'GMP认证 × ISO国际标准',
    desc: '全线生产于日本GMP认证工厂，符合ISO质量体系标准，安全可控。'
  },
  {
    icon: '📚',
    title: '专利支持 + 实证研究背书',
    desc: '拥有多项专利技术支持，并且经过大量实证研究验证。'
  },
  {
    icon: '🔍',
    title: '原料全程可追溯',
    desc: '采用日本本土植物，来源透明，每一批次均可验证追踪。'
  }
];

const half = Math.ceil(productImages.length / 2);
const firstRow = computed(() => productImages.slice(0, half));
const secondRow = computed(() => productImages.slice(half));

const activeRow = ref<null | number>(null); // 0 或 1
const activeIdx = ref<null | number>(null);
const locked = ref(false);

function pauseRow(row: number, idx: number) {
  console.log('pauseRow==', row, idx)
  if (locked.value) return;
  activeRow.value = row;
  activeIdx.value = idx;
}
function lockRow(row: number, idx: number) {
  activeRow.value = row;
  activeIdx.value = idx;
  locked.value = true;
}
function unlockRow() {
  activeRow.value = null;
  activeIdx.value = null;
  locked.value = false;
}

function handleMouseLeave(row: number) {
  if (!locked.value) activeRow.value = null;
}

const marketCompare = [
  {
    label: '血管调理',
    market: '❌ 多为兴奋刺激型',
    cp101: '✅ 激活Tie2，修复毛细血管屏障'
  },
  {
    label: '循环改善',
    market: '❌ 成分不明，剂量低',
    cp101: '✅ 专利胡椒碱，临床验证提升血流'
  },
  {
    label: '安全性',
    market: '⚠️ 含激素/化学物质',
    cp101: '✅ 植物提取，亚临界低温萃取'
  },
  {
    label: '长期服用',
    market: '⚠️ 可能刺激肠胃',
    cp101: '✅ 温和无刺激，适合长效调养'
  }
];
</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero">
      <div class="banner-content">
        <h1>CP-101 肝源力</h1>
        <p class="subtitle">专为肝功能保护而生的天然营养干预方案</p>
        <p class="desc">双专利技术 + 七重成分协同，构建肝脏健康防护网</p>
      </div>
      <div class="menu-bar">


        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product')">CP101固本金刚丸</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product0')">CP101蘑菇精系列</NuxtLink>
        </div>
        <div class="menu-item active">
          <NuxtLink class="nav-link" :to="localePath('/product2')">CP101肝源力</NuxtLink>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2 class="patent-section-title">技术特点</h2>
      <div class="patent-flex-box">
        <div class="patent-left">
          <div class="patent-title">{{ activePatent.title }}</div>
          <div class="patent-no">{{ activePatent.patentNo }}</div>
          <div class="patent-desc">{{ activePatent.desc }}</div>
        </div>
        <div class="patent-right" :style="{ backgroundImage: `url(${activePatent.image})` }">
          <div class="patent-menu">
            <div class="patent-menu-item" :class="{ active: activePatent.id === patentOptions[0].id }"
              @mouseenter="setActivePatent(patentOptions[0])" @click="setActivePatent(patentOptions[0])">
              <template v-if="activePatent.id === patentOptions[0].id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ patentOptions[0].title }}</span>
            </div>
            <div class="patent-divider"></div>
            <div class="patent-menu-item" :class="{ active: activePatent.id === patentOptions[1].id }"
              @mouseenter="setActivePatent(patentOptions[1])" @click="setActivePatent(patentOptions[1])">
              <template v-if="activePatent.id === patentOptions[1].id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ patentOptions[1].title }}</span>
            </div>
            <!-- 3 -->
            <div class="patent-divider"></div>
            <div class="patent-menu-item" :class="{ active: activePatent.id === patentOptions[2].id }"
              @mouseenter="setActivePatent(patentOptions[2])" @click="setActivePatent(patentOptions[2])">
              <template v-if="activePatent.id === patentOptions[2].id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ patentOptions[2].title }}</span>
            </div>
            <!-- 4 -->
            <div class="patent-divider"></div>
            <div class="patent-menu-item" :class="{ active: activePatent.id === patentOptions[3].id }"
              @mouseenter="setActivePatent(patentOptions[3])" @click="setActivePatent(patentOptions[3])">
              <template v-if="activePatent.id === patentOptions[3].id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ patentOptions[3].title }}</span>
            </div>
            <!-- 5 -->
            <div class="patent-divider"></div>
            <div class="patent-menu-item" :class="{ active: activePatent.id === patentOptions[4].id }"
              @mouseenter="setActivePatent(patentOptions[4])" @click="setActivePatent(patentOptions[4])">
              <template v-if="activePatent.id === patentOptions[4].id">
                <div class="dot-animate">
                  <span class="ripple"></span>
                  <span class="dot"></span>
                </div>
              </template>
              <span>{{ patentOptions[4].title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>主要功效</h2>
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
      <h2>科研权威 × 品质保障 × 专利支持</h2>
      <div class="science-blocks">
        <div v-for="(item, idx) in scienceList" :key="item.title" class="science-block">
          <div class="science-icon">
            <span>{{ item.icon }}</span>
          </div>
          <div class="science-text">
            <div class="science-title">{{ item.title }}</div>
            <div class="science-desc">{{ item.desc }}</div>
          </div>
          <div v-if="idx < scienceList.length - 1" class="science-divider"></div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>黄金复方：40种植物平衡精华</h2>
      <div class="compound-carousel">
        <div class="carousel-row" :class="{ paused: activeRow === 0 }" @mouseleave="handleMouseLeave(0)"
          @click.self="unlockRow">
          <div v-for="(img, idx) in firstRow" :key="'row1-' + idx" class="compound-item"
            :class="{ active: activeRow === 0 && activeIdx === idx }" :style="{ backgroundImage: `url(${img})` }"
            @mouseenter="pauseRow(0, idx)" @click.stop="lockRow(0, idx)">
            <div class="compound-info" v-if="activeRow === 0 && activeIdx === idx">
              <h4>{{ productNames[idx] }}</h4>
              <p>{{ productDesc[idx] }}</p>
            </div>
          </div>
        </div>
        <div class="carousel-row reverse" :class="{ paused: activeRow === 1 }" @mouseleave="handleMouseLeave(1)"
          @click.self="unlockRow">
          <div v-for="(img, idx) in secondRow" :key="'row2-' + idx" class="compound-item"
            :class="{ active: activeRow === 1 && activeIdx === idx }" :style="{ backgroundImage: `url(${img})` }"
            @mouseenter="pauseRow(1, idx)" @click.stop="lockRow(1, idx)">
            <div class="compound-info" v-if="activeRow === 1 && activeIdx === idx">
              <h4>{{ productNames[idx + firstRow.length] }}</h4>
              <p>{{ productDesc[idx + firstRow.length] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>市场对比优势</h2>
      <div class="market-compare-table">
        <div class="market-compare-header">
          <div>指标</div>
          <div>市面同类产品</div>
          <div>CP-101 固本金刚丸</div>
        </div>
        <div v-for="item in marketCompare" :key="item.label" class="market-compare-row">
          <div class="market-compare-label">{{ item.label }}</div>
          <div class="market-compare-market">{{ item.market }}</div>
          <div class="market-compare-cp101">{{ item.cp101 }}</div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>服用建议与适用人群</h2>
      <div class="advice-cards">
        <div class="advice-card">
          <div class="advice-title">每日建议用量</div>
          <div class="advice-divider"></div>
          <div class="advice-desc">
            每日 1～2 粒，饭后服用效果最佳。可根据个人状态进行调整，不建议超量服用。
          </div>
        </div>
        <div class="advice-card">
          <div class="advice-title">推荐人群</div>
          <div class="advice-divider"></div>
          <ul class="advice-list">
            <li>经常疲劳、精力下滑的男性</li>
            <li>手脚冰冷、易浮肿人群</li>
            <li>亚健康、中年转弱男性</li>
            <li>长时间高压工作者，需持续精力支持者</li>
          </ul>
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
}

.product-hero {
  text-align: left;
  padding: 160px 20px 40px 20px;
  background: url('/product/product-gbjgw-bg.png') no-repeat center center;
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
  left: 50%;
  right: 50%;
  width: 100vw;
  transform: translateX(-50%);
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
  width: 100vw;
  background: #faf9f6;
  padding: 48px 0;
  overflow: hidden;
  position: relative;
}

.carousel-row {
  display: flex;
  align-items: center;
  overflow: visible;
  width: 100vw;
  position: relative;
  animation: carousel-left 30s linear infinite;
  padding: 0 200px;
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
    padding: 0 6vw;
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

  .compound-carousel {
    padding: 18px 0;
  }

  .compound-item,
  .compound-item img {
    width: 90px;
    height: 90px;
  }

  .compound-item .compound-info {
    width: 90vw;
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
</style>