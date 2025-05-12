<script setup lang="ts">
import { ref } from "vue";
import ProductAnimate from "./ProductAnimate.vue";

let showProduct = ref(false);

let handleAnimateEnd = () => {
    showProduct.value = true;
    console.log("动画结束");
};
</script>

<template>
    <ProductAnimate v-if="showProduct" />
    <div class="page-wrap" v-if="!showProduct">
        <img class="page-logo" src="/images/svg/logo.svg" @animationend="handleAnimateEnd" />
    </div>
</template>

<style scoped>
.page-wrap {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

.page-logo {
    width: 200px;
    animation: logoFadeIn 2s ease-in 1;
}

@keyframes logoFadeIn {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>