<script setup lang="ts">
const localePath = useLocalePath();
let { t } = useI18n()

console.log(t("navigation.home"),)
</script>

<template>
  <div>
    <h1 :style="{ color: 'red' }">{{ $t("navigation.home") }}</h1>

    <NuxtLinkLocale to="/">导航到首页</NuxtLinkLocale>
  </div>
</template>

<style scoped lang="less"></style>
