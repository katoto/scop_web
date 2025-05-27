<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { getLocalizedImagePath } from '~/utils/image'

const localePath = useLocalePath()

const productImages = [
  '/product0/coprinus_comatus.jpg',
  '/product0/sterilized_lactobacillus.jpg',
  '/product0/long_pepper_extract.jpg',
  '/product0/resistant_dextrin.jpg',
  '/product0/fermented_soy_isoflavone.jpg',
  '/product0/hericium_erinaceus.jpg',

  '/product0/coprinus_comatus.jpg',
  '/product0/sterilized_lactobacillus.jpg',
  '/product0/long_pepper_extract.jpg',
  '/product0/resistant_dextrin.jpg',
  '/product0/fermented_soy_isoflavone.jpg',
  '/product0/hericium_erinaceus.jpg',
];
const productNames = [
  '鸡腿菇',
  '灭菌型乳酸菌',
  '长胡椒提取物',
  '难消化性糊精',
  '大豆异黄酮发酵粉末',
  '猴头菇'
];
const productDesc = [
  '抗氧化抗炎、免疫增强、改善皮肤状态',
  '提高防御力、缓解过敏、改善口腔与肠道健康',
  '改善代谢、血液循环、抗黑色素瘤',
  '降低血糖血脂、改善肠道环境',
  '抗癌、抗氧化',
  '增强免疫、神经保护、预防认知退化'
];

const patentOptions = [
  {
    id: 1,
    title: '低温亚临界水提取',
    patentNo: '',
    desc: '避免成分降解与溶剂残留，保留高活性',
    image: getLocalizedImagePath('/product0/subcritical_water_extraction.jpg'),
  },
  {
    id: 2,
    title: '专利支持',
    patentNo: '专利号：7141630',
    desc: '日本专利提取技术（专利号：7141630）',
    image: getLocalizedImagePath('/product0/patent_support.jpg'),
  },
  {
    id: 3,
    title: '高浓度净化',
    patentNo: '',
    desc: '确保有效成分浓度统一，品质稳定',
    image: getLocalizedImagePath('/product0/high_concentration_purification.jpg'),
  },
];

const activePatent = ref(patentOptions[0]);

function setActivePatent(option: typeof patentOptions[0]) {
  activePatent.value = option;
}

const features = [
  {
    title: '🧬 抑制免疫检查点',
    desc: '干预 PD-1 / PD-L1 通路，打破肿瘤免疫逃逸机制。通过作用于免疫检查点通路，有效阻断肿瘤细胞抑制T细胞活性，恢复机体对癌细胞的识别与攻击能力，是免疫治疗的核心机制之一。',
    img: '/product0/immune_checkpoint_inhibition.jpg'
  },
  {
    title: '🌿 激活树突状细胞与巨噬细胞',
    desc: '提升先天免疫系统反应，全面激活免疫链条。CP-101能促进树突状细胞成熟，增强抗原呈递功能，并激活巨噬细胞，提升免疫系统识别与清除异常细胞的能力。',
    img: getLocalizedImagePath('/product0/dendritic_macrophage_activation.jpg')
  },
  {
    title: '💪 辅助抗癌 · 增强体力',
    desc: '协助抑制肿瘤生长、减轻疲劳、延缓衰老过程。多糖体等活性成分具备显著的免疫调节与抗氧化作用，有助于改善体力与免疫低下状态，减轻放化疗副作用，支持癌症康复过程。',
    img: getLocalizedImagePath('/product0/cancer_support_energy.jpg')
  }
];

const scienceList = [
  {
    icon: '🔬',
    title: '诺贝尔奖研究支持',
    desc: '基于 2018 年诺贝尔奖得主本庶佑教授 PD-1 免疫机制研究',
    img: '/product0/nobel_research_support.png'
  },
  {
    icon: '✅',
    title: 'FDA 双重认证',
    desc: '姬松茸（岩出101株）及其提取物获美国 FDA 认证具免疫支持与调节功效',
    img: '/product0/fda_double_certification.png'
  },
  {
    icon: '🧠',
    title: '45年科研积累背景',
    desc: '日本岩出菌学研究所自20世纪70年代起，持续研究姬松茸101菌株，构建全球领先的抗癌真菌研究体系',
    img: '/product0/45_years_research_background.svg'
  },
  {
    icon: '📚',
    title: '全球 135+ 项科研成果',
    desc: '涵盖抗肿瘤、免疫调节、多糖活性等关键研究方向',
    img: '/product0/experimental_verification.svg'
  },
  {
    icon: '🏫',
    title: '日本三重大学科研支持',
    desc: 'CP-101由三重大学免疫团队研发提取与验证功效',
    img: '/product0/mie_university_support.png'
  },
  {
    icon: '🧬',
    title: '实验验证',
    desc: '证实可有效激活免疫细胞、增强免疫应答能力',
    img: '/product0/experimental_verification.svg'
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
    label: '核心成分',
    market: '基础成分',
    cp101: '高浓缩强化'
  },
  {
    label: '使用人群',
    market: '一般免疫调理 / 癌症辅助',
    cp101: '重症 / 术后 / 高需求者'
  }
];

const featureRefs = ref<HTMLElement[]>([]);
const scienceRefs = ref<HTMLElement[]>([]);
const adviceRefs = ref<HTMLElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  featureRefs.value.forEach(el => {
    if (el) observer.observe(el);
  });

  scienceRefs.value.forEach(el => {
    if (el) observer.observe(el);
  });

  adviceRefs.value.forEach(el => {
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <div class="product-center-page">

    <!-- banner -->
    <section class="product-hero">
      <div class="hero-container">
        <div class="banner-content">
          <h1>蘑菇精 CP-101+ CP-101 Super</h1>
          <p class="subtitle">45年全球科研积累 + 多项国际认证 + 专利技术</p>
          <p class="desc">为免疫调节与健康支持提供坚实保障</p>
        </div>
        <div class="hero-images">
          <div class="hero-image">
            <img src="/images/pro-4.png" />
          </div>
          <div class="hero-image">
            <img src="/images/pro-2.png" />
          </div>
        </div>
      </div>

      <div class="menu-bar">
        <div class="menu-item active">
          <NuxtLink class="nav-link" :to="localePath('/product0')">CP101蘑菇精系列</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product')">CP101固本金刚丸</NuxtLink>
        </div>

        <div class="menu-item">
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
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>主要功效</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in features" :key="feature.title"
          :ref="el => { if (el) featureRefs[idx] = el as HTMLElement }"
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
      <h2>科研与权威认证</h2>
      <div class="science-blocks">
        <div v-for="(item, idx) in scienceList" :key="item.title"
          :ref="el => { if (el) scienceRefs[idx] = el as HTMLElement }" class="science-block">
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
      <h2>辅助活性成分</h2>
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
      <h2>产品对比</h2>
      <div class="market-compare-table">
        <div class="market-compare-header">
          <div>指标</div>
          <div>蘑菇精 CP-101</div>
          <div>蘑菇精 CP-101 Super</div>
        </div>
        <div v-for="item in marketCompare" :key="item.label" class="market-compare-row">
          <div class="market-compare-label">{{ item.label }}</div>
          <div class="market-compare-market">{{ item.market }}</div>
          <div class="market-compare-cp101">{{ item.cp101 }}</div>
        </div>
        <div class="market-compare-row">
          <div class="market-compare-label">预约咨询</div>
          <div class="market-compare-market">
            <NuxtLink :to="localePath('/contact')" class="consult-link">预约咨询</NuxtLink>
          </div>
          <div class="market-compare-cp101">
            <NuxtLink :to="localePath('/contact')" class="consult-link">预约咨询</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <h2>使用方法和注意事项</h2>
      <div class="advice-cards">
        <div v-for="(_, idx) in 3" :key="idx" :ref="el => { if (el) adviceRefs[idx] = el as HTMLElement }"
          class="advice-card">
          <div class="advice-title" v-if="idx === 0">每日服用</div>
          <div class="advice-title" v-else-if="idx === 1">贴心提示</div>
          <div class="advice-title" v-else>过敏人群谨慎使用</div>
          <div class="advice-divider"></div>
          <div class="advice-desc" v-if="idx === 0">
            建议每日服用一片CP-101，饭后用温水服用，具体用量可根据个人健康状况或医生建议进行调整。
          </div>
          <div class="advice-desc" v-else-if="idx === 1">
            请将产品置于儿童无法触及的地方，避免误食。如正在服用其他药物或有特殊健康状况，请在使用前咨询医生。
          </div>
          <div class="advice-desc" v-else>
            对于蘑菇类产品过敏的用户，使用CP-101时需谨慎，若出现不适应立即停止使用并寻求医疗帮助。
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>