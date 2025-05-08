<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div>
    <h1 :style="{ color: 'red' }">{{ $t("age") }}</h1>

    <NuxtLinkLocale to="/">导航到首页</NuxtLinkLocale>
  </div>
</template>

<style scoped lang="less"></style>
