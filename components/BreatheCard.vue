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
    <div class="breathe-light" :class="animationType">
    </div>
    <slot></slot>
</template>

<style lang="less" scoped>
.breathe-light {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>