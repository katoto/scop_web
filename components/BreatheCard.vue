<script setup>
// 组件逻辑
let props = defineProps({
    background: String,
    animationDelay: String,
    animationType: {
        type: String,
        default: 'default'
    }
})

let { background, animationDelay, animationType } = toRefs(props)
</script>

<template>
    <div class="breathe-light" :class="animationType" :style="{
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
    border-radius: 100%;
    filter: blur(40px);

    &.default {
        animation: breatheDefault 3s ease-in-out infinite;
    }

    &.wave {
        animation: breatheWave 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    &.pulse {
        animation: breathePulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    &.float {
        animation: breatheFloat 3.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    }
}

@keyframes breatheDefault {

    0%,
    100% {
        opacity: 0.1;
        transform: scale(0.3);
    }

    50% {
        opacity: 0.2;
        transform: scale(1.2);
    }
}

@keyframes breatheWave {

    0%,
    100% {
        opacity: 0.15;
        transform: scale(0.4) rotate(-5deg);
    }

    50% {
        opacity: 0.25;
        transform: scale(1.1) rotate(5deg);
    }
}

@keyframes breathePulse {

    0%,
    100% {
        opacity: 0.1;
        transform: scale(0.2);
    }

    33% {
        opacity: 0.2;
        transform: scale(0.8);
    }

    66% {
        opacity: 0.25;
        transform: scale(1.3);
    }
}

@keyframes breatheFloat {

    0%,
    100% {
        opacity: 0.15;
        transform: scale(0.3) translateY(0);
    }

    50% {
        opacity: 0.25;
        transform: scale(1.1) translateY(-10px);
    }
}
</style>