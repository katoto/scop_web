<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
    start: number;
    end: number;
    duration?: number; // ms
    prefix?: string;
    suffix?: string;
    color?: string;
    decimals?: number;
}>();

const displayNumber = ref(props.start);
let startTimestamp: number | null = null;
let animationFrame: number | null = null;
const rootRef = ref<HTMLElement | null>(null);
let hasAnimated = false;
let observer: IntersectionObserver | null = null;

function isClient() {
    return typeof window !== 'undefined' && typeof requestAnimationFrame !== 'undefined';
}

function animateNumber(timestamp: number) {
    if (startTimestamp === null) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / (props.duration || 1200), 1);
    displayNumber.value = props.start + (props.end - props.start) * progress;
    if (progress < 1) {
        animationFrame = requestAnimationFrame(animateNumber);
    } else {
        displayNumber.value = props.end;
        animationFrame = null;
    }
}

function startAnimation() {
    if (!isClient() || hasAnimated) return;
    startTimestamp = null;
    if (animationFrame) cancelAnimationFrame(animationFrame);
    displayNumber.value = props.start;
    animationFrame = requestAnimationFrame(animateNumber);
    hasAnimated = true;
}

function handleIntersect(entries: IntersectionObserverEntry[]) {
    if (entries[0].isIntersecting) {
        startAnimation();
        if (observer && rootRef.value) observer.unobserve(rootRef.value);
    }
}

onMounted(() => {
    if (isClient() && rootRef.value) {
        observer = new IntersectionObserver(handleIntersect, { threshold: 0.2 });
        observer.observe(rootRef.value);
    }
});
onUnmounted(() => {
    if (observer && rootRef.value) observer.unobserve(rootRef.value);
    if (animationFrame) cancelAnimationFrame(animationFrame);
});
</script>

<template>
    <span ref="rootRef" class="number-scroll-inline" :style="{ color: color || 'gold', fontWeight: 700 }">
        <span v-if="prefix">{{ prefix }}</span>
        <span class="number-main">{{ displayNumber.toLocaleString(undefined, {
            minimumFractionDigits: decimals || 0,
            maximumFractionDigits: decimals || 0
        }) }}</span>
        <span v-if="suffix">{{ suffix }}</span>
    </span>
</template>

<style scoped>
.number-scroll-inline {
    display: inline-flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
    font-size: inherit;
}

.number-main {
    font-size: 1em;
    font-weight: 700;
    margin: 0 2px;
}
</style>