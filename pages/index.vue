<script setup lang="ts">
const { locales, setLocale, locale, baseUrl, defaultLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const localeRoute = useLocaleRoute();
</script>

<template>
  <div>首页</div>
  <button v-for="locale in locales">
    <NuxtLink :to="switchLocalePath(locale.code)">{{ locale.name }}</NuxtLink>
  </button>
  <h1 :style="{ color: 'red' }">{{ $t("navigation.home") }}</h1>

  <NuxtLinkLocale to="/about">{{ locale }}导航到关于页面</NuxtLinkLocale>
</template>

<style scoped lang="less"></style>
