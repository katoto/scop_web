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

const navList = [
  { label: '全部', value: 'all' },
  { label: '实时新闻', value: 'realNew' },
  { label: '品牌资讯', value: 'brandNew' },
  { label: '业内资讯', value: 'industryNew' },
  { label: '专题活动', value: 'specialNew' }
]
const activeIdx = ref(0)

// 假数据，实际可用接口/文件导入
const newsList = ref([
  {
    img: '/news/realNew-1.jpeg',
    date: '2025-02-04',
    title: '大S发病到猝逝仅五天! 除了唏嘘，我们还能学到什么',
    desc: '据世卫组织统计，全球每年约300万-500万流感重症病例，29万-65万人因流感死亡。大S的猝然离世就是一个惨痛的教训，提醒我们绝不能对流感掉以轻心。流感是由流感病毒引起的急性呼吸道传染病，其传染性强、传播速度快，症状比普通感冒严重得多。流感患者常会出现高热、畏寒、极度乏力、头痛、肌肉酸痛等全身不适，还伴有咳嗽、流涕、咽痛等呼吸道症状。',
    type: 'realNew',
    link: 'https://mp.weixin.qq.com/s/DfhL7qjVFtxI7nGcRFwcrA'
  },
  {
    img: '/news/realNew-2.jpeg',
    date: '2025-03-01',
    title: '南师大 41 岁年轻女教授逝世揭示残酷事实:癌症盯上年轻人!',
    desc: '最近，一则令人痛心的消息在网络上引发了广泛关注：年仅41岁的南京师范大学女教授宋文文，在与癌症顽强抗争两年后，还是遗憾地离开了人世。她的离去，让人们深感惋惜，也再次将癌症这个沉重的话题在新年之初推到了大众面前。',
    type: 'realNew',
    link: 'https://mp.weixin.qq.com/s/XnJcIHE6dXIKuavgDQIkmA'
  },
  {
    img: '/news/realNew-3.jpeg',
    date: '2024.10.28',
    title: '台湾知名艺人、魔术师刘谦自曝患肺癌',
    desc: '实际上，肺癌已经成为全球最常见的癌症类型之一，无论是发病率还是死亡率都高居不下，成为所谓的“癌症第一杀手”。',
    type: 'realNew',
    link: 'https://mp.weixin.qq.com/s/1fZM1axFy8kgJ8w6mCw8pQ'
  },
  {
    img: '/news/realNew-4.jpeg',
    date: '2024.09.06',
    title: '96岁李嘉诚闯入癌症赛道?“万病之王”攻克已有答案',
    desc: '近期96 岁的李嘉诚现身香港大学李嘉诚医学院的新闻发布会，以视频连线方式见证了李嘉诚基金会向港大医学院捐赠突破性肝癌治疗新仪器 —— 超声波组织碎化技（histotripsy）医疗仪器。',
    type: 'realNew',
    link: 'https://mp.weixin.qq.com/s/cv7BzPHrsyyTKad94tkpOQ'
  },
  // zixun
  {
    img: '/news/brandNew-1.jpeg',
    date: '2024.08.15',
    title: 'SCOPHIL干细胞培养上清液，为重疾辅助治疗及人类抗老带来解决新路径！',
    desc: 'SCOPHIL集团深耕人体自然健康科学领域二十多年，一直坚持自主创新研发与他方优秀研发成果联合运用，与全日本顶级科学家和知名医疗机构建立了长期的战略合作关系。如今已服务万千患者，积累了丰富的成功治疗经验，是全球再生医疗行业的优秀领航者。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/WmMOjYTO-1gMC01j47h6dg'
  },
  {
    img: '/news/brandNew-2.jpeg',
    date: '2024.11.11',
    title: 'SCOPHIL细胞滋补定向疗法：全面滋养，精准防护，重塑健康屏障',
    desc: '在生物健康与现代医学领域的不断探索中，一种创新且极具潜力的组合疗法——【“干细胞上清液+NMN“全身滋补+**定向表达疗法】，正逐渐崭露头角。这一疗法宛如一座精心构建的健康堡垒，为我们的身体带来了平衡与精准的双重守护，开启了通往健康长寿的新征程。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/sJUqAne3_53GxlSdF_PX6g'
  },
  {
    img: '/news/brandNew-3.jpeg',
    date: '2024.09.04',
    title: 'SCOPHIL蘑菇精CP-101：通过干预免疫系统疗愈癌症，应对当代健康挑战',
    desc: '在日常生活中，我们经常会听到这样的对话：“最近换季了，不小心就感冒了，免疫力好像下降了。”“年纪大了，感觉身体再经不起折腾，免疫力没有以前那么好了。”“最近工作忙，没怎么运动，感觉身体抵抗力下降了。”',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/ixCq0zrflY4_yorC44q-Hg'
  },
  {
    img: '/news/brandNew-4.jpeg',
    date: '2024.08.20',
    title: 'Palilis：日本私护爱马仕女性真正的抗衰，做真正的自我',
    desc: '在星光璀璨的好莱坞影坛中，有这样一句流传甚广的名言：“爱自己，是所有美好的开始。”这句话如同一束温暖的阳光，照亮了女性自我关爱的道路。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/PmcR8QN4z0d-9MJhsavtBA'
  },
  {
    img: '/news/brandNew-5.jpeg',
    date: '2024.11.25',
    title: '蘑菇精CP-101：FDA认证的免疫增强剂，让癌症无路可逃',
    desc: '是一个复杂的过程，它涉及到细胞的变异与免疫系统的逃避。在正常情况下，人体的免疫系统具有监视和清除异常细胞的能力，包括那些开始变异的癌前细胞。然而，当癌细胞发展出逃避免疫系统监视的机制时，它们便可能在免疫系统的监视下“潜伏”并逐渐累积，最终形成肿瘤。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/2I4W8287WKbercRFZ6P-2w'
  },
  {
    img: '/news/brandNew-6.jpeg',
    date: '2024.12.15',
    title: '蘑菇精成功治疗前列腺癌？一探究竟！',
    desc: 'Prostate-specific antigen（简称︰PSA，前列腺特异性抗原检查）是一种由前列腺细胞（恶性及正常）产生的蛋白质，PSA测试可以测量血液中的PSA水平。 正常男性的PSA水平介于2.5至4.0ng/ML。PSA指数大于4（ng/ML）时需要警惕，做进一步的检查。当PSA大于10（ng/ML）的时候，这种水平被视为十分危险，患癌几率为50%。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/EtBeUKKN9ICkzgVCIHPmLA'
  },
  {
    img: '/news/brandNew-7.jpeg',
    date: '2024.12.25',
    title: '蘑菇精助力抗癌佳话：六旬老人重获新生！',
    desc: '淋巴瘤，就是起源于淋巴结和淋巴组织的一种恶性肿瘤，由于淋巴组织遍布全身，长在不同部位的淋巴瘤，所表现出来的症状也不一样，并且淋巴瘤的分型还特别多，因此，也被称为“千面肿瘤”。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/LWuA3bUPOW5Npyo2X5U1uw'
  },
  {
    img: '/news/brandNew-8.jpeg',
    date: '2025.01.02',
    title: '免疫疗法突破：蘑菇精CP-101成为急性非淋巴白血病的新希望？',
    desc: '白血病，如同潜伏在生命暗处的恶魔，无情地侵蚀着人体的造血系统。它导致正常血细胞的生成受阻，白细胞疯狂增殖却功能残缺，免疫力防线轰然崩塌，患者极易被细菌、病毒趁虚而入；红细胞数量锐减，身体陷入缺氧的泥沼，疲劳、乏力、气短如影随形；血小板的减少更是让出血风险飙升，皮肤瘀斑、牙龈出血、消化道出血随时可能发生，生命在不经意间悄然流逝。在白血病“家族”中，急性非淋巴白血病尤为凶险。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/cbx-3pdU0tJ90V7um5zSMQ'
  },
  {
    img: '/news/brandNew-9.jpeg',
    date: '2024.12.09',
    title: '吹爆！乳腺癌患者，这个治疗方案你必须知道！',
    desc: '乳腺癌，作为一种起源于乳腺上皮组织的恶性肿瘤，对全球女性健康构成了重大威胁。据世界卫生组织国际癌症研究机构（IARC）发布的全球癌症负担数据显示，2020年全球乳腺癌新发病例高达226万例，已超越肺癌成为全球第一大癌症，严重影响患者的生存质量和寿命。',
    type: 'brandNew',
    link: 'https://mp.weixin.qq.com/s/SGNvDZACqtu7PwDf4Rl7YQ'
  },
  // ...业内资讯
  {
    img: '/news/industryNew-1.jpeg',
    date: '2024.09.14',
    title: '衰老是种病！哈佛教授揭秘“老而不衰”的真相',
    desc: '2014年，哈佛大学医学院教授、知名长寿研究专家大卫·辛克莱尔被选为时代杂志全球最具影响力100人，因其在人类抗衰老领域几十年的持续科研成效，以及重要发现：NMN能够快速补偿体内逐渐减少的NAD+分子（辅酶I），从而有效激活“长寿蛋白”，起到延缓衰老作用。',
    type: 'industryNew',
    link: 'https://mp.weixin.qq.com/s/XNQtw3cxCHwm_DCEYCDO-g'
  },
  {
    img: '/news/industryNew-2.jpeg',
    date: '2024.09.27',
    title: '国家政策助力！干细胞落地运用加速开跑',
    desc: '2024年，随着一系列政策利好的连续推出，国内干细胞产业如同一辆科研高速列车，从低调的研发阶段迅速驶向了充满希望的前台，标志着中国细胞行业政策“春天”的到来。',
    type: 'industryNew',
    link: 'https://mp.weixin.qq.com/s/pwKgoank0OcwbSIotYl3tw'
  },
  {
    img: '/news/industryNew-3.jpeg',
    date: '2024.10.12',
    title: '2024年诺贝尔生理学医学奖揭晓！已摘四次诺奖桂冠的RNA如何影响我们的生活？',
    desc: '10月7日，瑞典卡罗林斯卡医学院宣布，将2024年诺贝尔生理学医学奖授予美国科学奖维克托·安布罗斯（Victor Ambors）和加里·鲁夫昆（Gary Ruvkun）。这是为了表彰他们发现微小核糖核酸（microRNA，简称miRNA）及其在转录后基因调控中的作用。',
    type: 'industryNew',
    link: 'https://mp.weixin.qq.com/s/f5WmGhz5OWgKduDkzamEZw'
  },
  {
    img: '/news/industryNew-4.jpeg',
    date: '2024.10.23',
    title: '告别胰岛素注射！细胞疗法为彻底治愈糖尿病带来曙光',
    desc: '新华社2024年9月26日报道，来自天津市第一中心医院、北京大学、昌平实验室等组成的研究团队，首次利用化学重编程技术诱导多能干细胞制备胰岛细胞，并将其移植给一名1型糖尿病患者，取得了临床功能性治愈的疗效。',
    type: 'industryNew',
    link: 'https://mp.weixin.qq.com/s/9iCD65RYmU3N1JMql--LuQ'
  },
  // 专题活动
  {
    img: '/news/specialNew-1.png',
    date: '2024.11.01',
    title: '「癌症互助推进研究慈善基金」发布会于日本东京顺利举行！CP-101扛起人类灭癌大旗',
    desc: '2024年10月14日，「一般社団法人癌症互助推进研究慈善基金」成立发布会于日本东京都港区虎之门Hills Forum举行。吸引了约650名与会参与者，包括政府官方代表、知名学者智库、医疗行业专家、主流新闻媒体代表，以及社会各界人士等。',
    type: 'specialNew',
    link: 'https://mp.weixin.qq.com/s/sacvMx1pB1nMHct_kyNGVQ'
  },
  {
    img: '/news/specialNew-2.png',
    date: '2024.12.20',
    title: 'CP-101闪耀亮相深圳国际营养健康产业展 共探生命健康科学前沿，引领行业新潮向！',
    desc: '12月12日，在业界满怀期待与瞩目中，应HNC深圳国际营养与健康产业展主办方的热情邀约，全球知名生命健康与抗衰领域领军企业——日本SCOPHIL再生医疗集团，重磅登场，瞬间点燃现场炽热氛围，吸引无数业内人士纷至沓来。',
    type: 'specialNew',
    link: '/news/detail'
  },


])

const filteredNews = computed(() => {
  if (navList[activeIdx.value].value === 'all') return newsList.value
  return newsList.value.filter(n => n.type === navList[activeIdx.value].value)
})
</script>


<style lang="less" scoped>
@import './index.less';
</style>