<script setup lang="ts">
</script>

<template>
    <div class="product-card-container">
        <div class="card-bg">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
.product-card-container {
    flex: 1;
    height: 100%;
    position: relative;
    overflow: hidden;
    filter: blur(80px);
}

.card-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 220, 0, 0.3);
    filter: blur(30px);
    transform: scale(1.2); // 稍微放大以避免模糊边缘
    animation: opacityPulse 3s ease-in-out infinite;
    animation-delay: 0.2s;
    opacity: 0.3;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }
}

@keyframes opacityPulse {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.5;
    }
}
</style>
