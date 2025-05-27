<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { getLocalizedImagePath } from '~/utils/image';
const localePath = useLocalePath()

const productImages = [
  getLocalizedImagePath('/product2/1.3.5-1_livinol.jpg'),
  getLocalizedImagePath('/product2/1.3.5-2_broccoli.jpg'),
  getLocalizedImagePath('/product2/1.3.5-3_thistle.jpg'),
  getLocalizedImagePath('/product2/1.3.5-4_grape.jpg'),
  getLocalizedImagePath('/product2/1.3.5-5_ornithine.png'),
  getLocalizedImagePath('/product2/1.3.5-6_garcinia.jpg'),
];
const productNames = [
  'Livinol™（Garcinol）',
  '芽孢西兰花粉末',
  '马利亚蓟（Milk Thistle）',
  '野葡萄提取物',
  'L-鸟氨酸盐酸盐',
  '印度藤黄及协同物质'
];
const productDesc = [
  '抗炎抗氧化、肝癌防护、调菌群、稳定血糖',
  '启动抗氧化系统、解毒、改善肤色',
  '肝细胞再生、降低肝酶、抗疲劳',
  '稳定肝细胞膜、改善微循环、美白',
  '促进氨代谢、解酒、缓解肝疲劳',
  '调脂、改善代谢、辅助血糖平衡'
];

const patentOptions = [
  {
    id: 1,
    title: '日本亚临界萃取专利技术',
    patentNo: '专利号：7141630',
    desc: '应用于姬松茸核心成分提取，广泛用于 CP-101 产品中。采用低温低压工艺，有效保留活性成分，显著提升吸收效率。',
    image: getLocalizedImagePath('/product2/1.3.2-1_extract.jpg'),
  },
  {
    id: 2,
    title: 'pH响应型肠溶缓释技术',
    patentNo: '',
    desc: '减少胃酸破坏，实现靶向肠道吸收，提升生物利用率。',
    image: '/product2/1.3.2-2_release.jpg',
  },
  {
    id: 3,
    title: 'Livinol™专利成分',
    patentNo: '专利号：5980228',
    desc: '具备抗癌、抗氧化、抗炎、调节肠道菌群等多重功能。',
    image: '/product2/1.3.2-3_patent.jpg',
  },
  {
    id: 4,
    title: '七重活性成分协同配方',
    patentNo: '',
    desc: '实现抗炎、抗氧化、解毒、再生、调糖、调脂一体化功效。',
    image: '/product2/1.3.2-4_active.png',
  },
  {
    id: 5,
    title: '日本GMP认证 & ISO标准工厂制造',
    patentNo: '',
    desc: '全流程可追溯，符合国际出口与个性化定制标准。',
    image: '/product2/1.3.2-5_cert.jpg',
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
    img: '/product2/1.3.3-1_liver.jpg'
  },
  {
    title: '强抗氧化，减缓肝细胞衰老',
    desc: '芽孢西兰花粉末启动Nrf2通路清除自由基\n野葡萄稳定肝细胞膜、促进微循环\n姬松茸增强抗氧环境，马利亚蓟促进肝细胞再生\nL-鸟氨酸盐酸盐减轻肝脏代谢压力',
    img: '/product2/1.3.3-2_antioxid.jpg'
  },
  {
    title: '解酒护肝',
    desc: 'Livinol™抵御酒精毒害，抑制炎症\nL-鸟氨酸加速酒精代谢\n马利亚蓟修复肝细胞，野葡萄促进解毒微循环',
    img: '/product2/1.3.3-3_alcohol.jpg'
  },
  {
    title: '美白焕肤',
    desc: 'Livinol™调节肠道菌群、排毒护肤\n野葡萄促进黑色素代谢\n芽孢西兰花 & 姬松茸提升皮肤代谢、改善肤色',
    img: '/product2/1.3.3-4_whiten.jpg'
  },
  {
    title: '血糖调节',
    desc: 'Livinol™通过菌群调节碳水吸收\n印度藤黄协同成分改善脂肪代谢，增强胰岛素敏感性\n姬松茸 & 芽孢西兰花提升肝脏对葡萄糖摄取和储存',
    img: '/product2/1.3.3-5_sugar.jpg'
  },
  {
    title: '调脂抗脂肪肝',
    desc: 'Livinol™抑制脂肪积累\n印度藤黄促进脂肪酸氧化、降低血脂\n芽孢西兰花 & 马利亚蓟增强肝功能，改善脂肪浸润',
    img: '/product2/1.3.3-6_fatty.png'
  }
];

const scienceList = [
  {
    icon: '🔬',
    title: '双日本专利加持',
    desc: '亚临界萃取技术（专利号：7141630）\nLivinol™藤黄果成分（专利号：5980228）'
  },
  {
    icon: '✅',
    title: '日本国内原料可溯源',
    desc: '所有成分原料均来自日本国内明确产地，确保安全与高纯度'
  },
  {
    icon: '🏭',
    title: '通过GMP认证 & ISO国际标准制造',
    desc: '生产过程符合国际制药/营养品制造规范，品质稳定可控'
  },
  {
    icon: '📊',
    title: '实证研究支持功效',
    desc: '肝酶指标下降、肝功能改善、美白与血糖平衡成效明确'
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
          <h1>CP-101 肝源力</h1>
          <p class="subtitle">专为肝功能保护而生的天然营养干预方案</p>
          <p class="desc">双专利技术 + 七重成分协同，构建肝脏健康防护网</p>
        </div>
        <div class="hero-image">
          <img src="/images/pro-1.png" />
        </div>
      </div>

      <div class="menu-bar">
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product0')">CP101蘑菇精系列</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink class="nav-link" :to="localePath('/product')">CP101固本金刚丸</NuxtLink>
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
      <h2>科研与权威认证 </h2>
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
      <h2>使用方法与注意事项</h2>
      <div class="advice-cards">
        <div v-for="(_, idx) in 3" :key="idx" :ref="el => { if (el) adviceRefs[idx] = el as HTMLElement }"
          class="advice-card">
          <div class="advice-title" v-if="idx === 0">📦 每日推荐剂量</div>
          <div class="advice-title" v-else-if="idx === 1">🕒 服用周期建议</div>
          <div class="advice-title" v-else>🧾 注意事项</div>
          <div class="advice-divider"></div>
          <ul class="advice-list" v-if="idx === 0">
            <li>每日1包（2粒），建议饭后用温水服用</li>
            <li>连续服用30天以上，建立长期肝功能支持机制</li>
          </ul>
          <ul class="advice-list" v-else-if="idx === 1">
            <li>基础养护（30天）：缓解酒精与代谢压力</li>
            <li>深度调理（90天）：改善脂肪肝、稳定肝酶</li>
            <li>长期维护（6个月+）：优化肝功能与抗癌机制</li>
          </ul>
          <ul class="advice-list" v-else>
            <li>请勿置于儿童可触及处</li>
            <li>如有肝病病史请遵医嘱使用</li>
            <li>孕期及哺乳期女性请谨慎使用</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>