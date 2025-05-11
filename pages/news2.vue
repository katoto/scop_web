<script setup lang="ts">
</script>

<template>
  <div class="product-card-container">
    <ProductCard1></ProductCard1>
    <ProductCard2></ProductCard2>
    <ProductCard3></ProductCard3>
    <ProductCard4></ProductCard4>
  </div>
</template>

<style lang="less" scoped>
.product-card-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: url("/images/bg-line-2.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.box {
  background: rgb(255, 114, 0, 0.4);
}
</style>
