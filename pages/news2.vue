<script setup lang="ts">
</script>

<template>
  <div class="product-container">
    <ProductCard1 />
    <ProductCard2 />
    <ProductCard3 />
    <ProductCard4 />
  </div>
</template>

<style lang="less" scoped>
.product-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: url("/images/bg-line-2.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
