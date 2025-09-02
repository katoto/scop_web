// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],

  nitro: {
    preset: "netlify-static",
  },
  i18n: {
    locales: [
      { code: "zh", iso: "zh-CN", file: "zh.json", name: "中文" },
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
      // { code: "ja", iso: "ja-JP", file: "ja.json", name: "日本語" },
    ],
    defaultLocale: "zh",
    strategy: "prefix_except_default",
    langDir: "locales",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue-next/dist/bootstrap-vue-next.css",
    "@/assets/css/main.less",
  ],
  app: {
    head: {
      title: "CP-101 - Science Empowers Life Beauty | 科学赋能生命之美",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Scophil is committed to bringing excellent health solutions through cutting-edge biotechnology and rigorous scientific research. CP-101 series products include Guben Jingang Pills, Mushroom Extract Series, and Liver Power, using Japanese patented technology and GMP certified production. | Scophil致力于通过前沿生物科技与严谨科研精神，为人类带来卓越健康解决方案。CP-101系列产品包括固本金刚丸、蘑菇精系列、肝源力，采用日本专利技术，GMP认证生产。",
        },
        {
          name: "keywords",
          content: "Scophil,CP-101,Guben Jingang Pills,固本金刚丸,Mushroom Extract,蘑菇精,Liver Power,肝源力,Agaricus blazei,姬松茸,Biotechnology,生物科技,Health Products,健康产品,Immune Regulation,免疫调节,Anti-cancer,抗癌,Liver Protection,护肝,Men's Health,男性健康,Japanese Patent,日本专利,GMP Certification,GMP认证,Subcritical Water Extraction,亚临界水提取",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "CP-101 - Science Empowers Life Beauty | 科学赋能生命之美 | CP-101 Health Products",
        },
        {
          property: "og:description",
          content: "Scophil is committed to bringing excellent health solutions through cutting-edge biotechnology and rigorous scientific research. CP-101 series products include Guben Jingang Pills, Mushroom Extract Series, and Liver Power. | Scophil致力于通过前沿生物科技与严谨科研精神，为人类带来卓越健康解决方案。CP-101系列产品包括固本金刚丸、蘑菇精系列、肝源力。",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "Scophil",
        },
        {
          property: "og:locale",
          content: "zh_CN",
        },
        {
          property: "og:locale:alternate",
          content: "en_US",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Scophil - Science Empowers Life Beauty | 科学赋能生命之美 | CP-101 Health Products",
        },
        {
          name: "twitter:description",
          content: "Scophil is committed to bringing excellent health solutions through cutting-edge biotechnology. CP-101 series products include Guben Jingang Pills, Mushroom Extract Series, and Liver Power. | Scophil致力于通过前沿生物科技为人类带来卓越健康解决方案。",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          name: "language",
          content: "zh-CN,en-US",
        },
        {
          name: "content-language",
          content: "zh-CN,en-US",
        },
      ],
      script: [
        { src: "/particles.min.js", type: "text/javascript", defer: false },
      ],
    },
  },
});
