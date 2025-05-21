<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
    delay?: number;
    duration?: number;
}>();

const element = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
    observer.value = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                    observer.value?.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        }
    );

    if (element.value) {
        observer.value.observe(element.value);
    }
});

onUnmounted(() => {
    if (observer.value) {
        observer.value.disconnect();
    }
});
</script>

<template>
    <div ref="element" :class="[
        'scroll-animation',
        `animation-${animation || 'fade-up'}`,
        { 'is-visible': isVisible }
    ]" :style="{
        '--animation-delay': `${delay || 0}ms`,
        '--animation-duration': `${duration || 800}ms`
    }">
        <slot></slot>
    </div>
</template>

<style scoped>
.scroll-animation {
    opacity: 0;
    will-change: transform, opacity;
}

.scroll-animation.is-visible {
    opacity: 1;
}

.animation-fade-up {
    transform: translateY(30px);
    transition: transform var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1),
        opacity var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--animation-delay);
}

.animation-fade-down {
    transform: translateY(-30px);
    transition: transform var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1),
        opacity var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--animation-delay);
}

.animation-fade-left {
    transform: translateX(30px);
    transition: transform var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1),
        opacity var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--animation-delay);
}

.animation-fade-right {
    transform: translateX(-30px);
    transition: transform var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1),
        opacity var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--animation-delay);
}

.animation-zoom-in {
    transform: scale(0.95);
    transition: transform var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1),
        opacity var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--animation-delay);
}

.is-visible.animation-fade-up,
.is-visible.animation-fade-down,
.is-visible.animation-fade-left,
.is-visible.animation-fade-right {
    transform: translate(0);
}

.is-visible.animation-zoom-in {
    transform: scale(1);
}
</style>