<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getLocalizedImagePath } from "~/utils/image";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const localePath = useLocalePath();

const section1 = [
  {
    title: t("product_type3.section1.0.title"),
    desc: t("product_type3.section1.0.desc"),
    img: "/product35/2-1.jpg",
  },
  {
    title: t("product_type3.section1.1.title"),
    desc: t("product_type3.section1.1.desc"),
    img: "/product35/2-2.png",
  },
  {
    title: t("product_type3.section1.1.title"),
    desc: t("product_type3.section1.1.desc"),
    img: "/product35/2-3.jpg",
  },
];

let section2 = [
  {
    title: t("product_type3.section2.0.title"),
    desc: t("product_type3.section2.0.desc"),
    img: "/product35/3-1.jpg",
  },
  {
    title: t("product_type3.section2.1.title"),
    desc: t("product_type3.section2.1.desc"),
    img: "/product35/3-2.jpg",
  },
  {
    title: t("product_type3.section2.2.title"),
    desc: t("product_type3.section2.2.desc"),
    img: "/product35/3-3.jpg",
  },
  {
    title: t("product_type3.section2.3.title"),
    desc: t("product_type3.section2.3.desc"),
    img: "/product35/3-4.png",
  },
];

const featureRefs = ref<HTMLElement[]>([]);
const feature2Refs = ref<HTMLElement[]>([]);
const feature3Refs = ref<HTMLElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          setTimeout(() => {
            observer.unobserve(entry.target);
          }, 1000);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "-50px 0px",
    }
  );

  featureRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  feature2Refs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  feature3Refs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

const marketCompare = computed(() => [
  {
    label: t("product_type3.compare.items.core.label"),
    market: t("product_type3.compare.items.core.cp101"),
  },
  {
    label: t("product_type3.compare.items.users.label"),
    market: t("product_type3.compare.items.users.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc2.label"),
    market: t("product_type3.compare.items.desc2.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc3.label"),
    market: t("product_type3.compare.items.desc3.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc4.label"),
    market: t("product_type3.compare.items.desc4.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc5.label"),
    market: t("product_type3.compare.items.desc5.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc6.label"),
    market: t("product_type3.compare.items.desc6.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc7.label"),
    market: t("product_type3.compare.items.desc7.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc8.label"),
    market: t("product_type3.compare.items.desc8.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc9.label"),
    market: t("product_type3.compare.items.desc9.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc10.label"),
    market: t("product_type3.compare.items.desc10.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc11.label"),
    market: t("product_type3.compare.items.desc11.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc12.label"),
    market: t("product_type3.compare.items.desc12.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc13.label"),
    market: t("product_type3.compare.items.desc13.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc14.label"),
    market: t("product_type3.compare.items.desc14.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc15.label"),
    market: t("product_type3.compare.items.desc15.cp101"),
  },
  {
    label: t("product_type3.compare.items.desc16.label"),
    market: t("product_type3.compare.items.desc16.cp101"),
  },
]);
</script>

<template>
  <div class="product-center-page">
    <!-- banner -->
    <section class="product-hero" :style="{
      background: `url(${'/product35/0.png'}) no-repeat center center`,
      backgroundSize: 'cover',
    }">
      <div class="banner-content">
        <h1>{{ t("product_type3.banner.title") }}</h1>
        <p class="desc">{{ t("product_type3.banner.description") }}</p>
      </div>
    </section>

    <!-- 生命与灵魂链接之路 -->
    <section class="product-type3-cont">
      <img src="/product35/1.png" alt="" />
      <div class="product-type3-cont-box">
        <h4>Palilis，取意于此</h4>
        <h4>寓意开启新生命灵魂与肉体的重塑！</h4>
        <h4>"通过灵魂让肉体更健康·通过肉体让灵魂解放与认知"</h4>
        <h4>一切源于palilis</h4>
      </div>
    </section>

    <section class="product-section">
      <h2>{{ t("product_type3.sections.section1") }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in section1" :key="feature.title"
          :ref="el => { if (el) featureRefs[idx] = el as HTMLElement }" :class="[
            'feature-block',
            { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 },
          ]">
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
      <h2>{{ t("product_type3.sections.section2") }}</h2>
      <div class="feature-blocks">
        <div v-for="(feature, idx) in section2" :key="feature.title"
          :ref="el => { if (el) feature2Refs[idx] = el as HTMLElement }" :class="[
            'feature-block',
            { reverse: idx % 2 === 1, 'gray-bg': idx % 2 === 1 },
          ]">
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

    <!-- 主要功效 -->
    <section class="product-effect">
      <h2>{{ t("product_type3.sections.section2") }}</h2>
      <div class="product-effect-box">
        <div class="image-container">
          <img src="/product35/4.png" alt="" />
          <div class="overlay-text">
            <h3>私处的"保养品"·私处的"化妆品"·日本私护"爱马仕"</h3>
            <h3>
              日本第一家女性私处抗衰老产品·女性独有的抗衰新概念由Palilis重新定义
            </h3>
          </div>
        </div>
        <div class="white-overlay">
          <div>
            <h3>💧修复粘膜屏障 · 提升水润紧致</h3>
            <p>
              多重植物精华深入滋养私密部位，促进糖原合成与锁水保湿，有效修护产后、术后及感染引起的粘膜屏障损伤，恢复水润弹性状态。
            </p>
          </div>

          <div>
            <h3>🛡️ 缓解炎症不适 · 抑制黑色素沉着</h3>
            <p>
              天然抑菌与抗氧化因子有效缓解瘙痒、异味、干涩，调节微生态平衡；其中大蒜发酵提取物富含SOD，可清除自由基、减少色素沉积，改善暗沉与色斑。
            </p>
          </div>

          <div>
            <h3>🌿 促进上皮细胞更新 · 增强免疫防御</h3>
            <p>
              活性肽与植物复合因子促进阴道上皮细胞增殖与修复，强化局部屏障，提高私密区域免疫功能，降低感染复发概率。
            </p>
          </div>

          <div>
            <h3>🌸 激活神经毛细血管 · 日常私密养护</h3>
            <p>
              17种天然植物精华改善血液循环，强化神经与肌层张力，提升敏感度与舒适感，适用于术后恢复、经期护理及性生活后的日常呵护。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Palilis 天然植物精华的汇聚融合 -->
    <section class="product-section product-type3-essence">
      <h2>Palilis 天然植物精华的汇聚融合</h2>
      <div class="product-type3-essence-box">
        <h4>产品精心挑选了17种有机植物可食用成分</h4>
        <h4>全力确保其天然、安全与高效性</h4>
      </div>
      <section class="product-type3-essence-cont">
        <div class="essence-title-row">
          <span>草本植萃</span>
          <span class="dot">·</span>
          <span>娇嫩呵护</span>
          <span class="dot">·</span>
          <span>源于草本</span>
        </div>
        <div class="product-type3-essence-img">
          <div class="lf">
            <span>芦荟提取物</span>
            <span>苦参提取物</span>
            <span>蔓越莓提取物</span>
            <span>薰衣草提取物</span>
            <span>大蒜提取物</span>
            <span>牛至叶子提取物</span>
            <span>迷迭香提取物</span>
            <span>石榴提取物</span>
            <span>百里香提取物</span>
          </div>
          <img src="/product35/5.png" alt="" />
          <div class="rf">
            <span>葡萄柚提取物</span>
            <span>牛角椒提取物</span>
            <span>朝鲜白头翁提取物</span>
            <span>马齿苋提取物</span>
            <span>茶叶提取物</span>
            <span>苹果提取物</span>
            <span>积雪草提取物</span>
            <span>益母草提取物</span>
          </div>
        </div>
      </section>
    </section>

    <!-- 产品对比 -->
    <section class="product-section">
      <h2>{{ t("product_type3.compare.title") }}</h2>
      <div class="market-compare-table">
        <div class="market-compare-header">
          <div>{{ t("product_type3.compare.headers.label") }}</div>
          <div>{{ t("product_type3.compare.headers.cp101") }}</div>
        </div>
        <div v-for="item in marketCompare" :key="item.label" class="market-compare-row">
          <div class="market-compare-label">{{ item.label }}</div>
          <div class="market-compare-market">{{ item.market }}</div>
        </div>
      </div>
    </section>

    <!-- 使用方法与注意事项 -->
    <section class="product-section">
      <h2>使用方法与注意事项</h2>
      <div class="product-type3-use-cont">
        <div class="product-type3-use-cont-item">
          <h3>step 1.</h3>
          <p>撕开包装取出推注器，手执注射器两端。</p>
          <img src="/product35/6-1.png" alt="">
        </div>
        <div class="product-type3-use-cont-item">
          <h3>step 2.</h3>
          <p>身体躺平，将注射器前三分之一插入阴道，推入部分产品。</p>
          <img src="/product35/6-2.png" alt="">
        </div>
        <div class="product-type3-use-cont-item">
          <h3>step 3.</h3>
          <p>再往阴道深处继续插入三分之一注射器，推入部分产品。</p>
          <img src="/product35/6-3.png" alt="">
        </div>
        <div class="product-type3-use-cont-item">
          <h3>step 4.</h3>
          <p>将注射器全部插入阴道并推入产品，让护理液均匀附着整个阴道粘膜。</p>
          <img src="/product35/6-4.png" alt="">
        </div>
      </div>

      <div class="product-type3-use-cont-desc">
        <img :src="getLocalizedImagePath('/product35/6-5.png')" alt="">
        
        <h4>使用方法</h4>
        <p>使用者应先清洁私密处，然后取适量 Palilis 私护产品均匀涂抹于私密肌肤并轻
          轻按摩直至完全吸收。通常建议每日使用一次，使用者可根据自身私密处的具
          体健康状况和个人需求，在专业人士指导下适当调整使用频率，以达到最佳护
          理效果。</p>
      </div>
      <div class="product-type3-use-cont-desc">
        <h4>注意事项</h4>
        <div class="product-type3-use-cont-warning">
          <div class="warning-item" data-index="1">请将产品放置在阴凉干燥处保存，避免阳光直射，防止因环境因素影响产品质量。</div>
          <div class="warning-item" data-index="2">如产品不慎入眼，请立即用大量清水冲洗。</div>
          <div class="warning-item" data-index="3">对产品中任何成分过敏者，请谨慎使用。</div>
          <div class="warning-item" data-index="4">如在使用过程中出现过敏等不适症状，请立即停止使用，并咨询专业医生。</div>
        </div>
      </div>

    </section>

  </div>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>