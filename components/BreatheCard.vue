<script setup>
// 组件逻辑

let props = defineProps(['background'])
let { background, animationDelay } = toRefs(props)
</script>
<template>

    <div class="breathe-light" :style="{
        background,
        animationDelay
    }">
    </div>
    <slot></slot>
</template>

<style lang="less" scoped>
.breathe-light {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    background: linear-gradient(45deg, orange, rgba(255, 255, 0, 0.508));
    border-radius: 100%;
    animation: breathe 2s ease-in-out infinite;
    filter: blur(40px);
}

@keyframes breathe {

    0%,
    100% {
        opacity: 0.1;
        transform: scale(0.9);
    }

    50% {
        opacity: 0.3;
        transform: scale(1.2);
    }
}
</style>