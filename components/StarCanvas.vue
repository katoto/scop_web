<template>
    <canvas ref="canvas" class="star-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationFrameId = null
let stars = []

class Star {
    constructor(x, y, size, speed) {
        this.x = x
        this.y = y
        this.size = size
        this.speed = speed
        this.opacity = Math.random()
        this.opacitySpeed = (Math.random() * 0.02) + 0.003
    }

    update() {
        this.y += this.speed
        this.opacity += this.opacitySpeed

        if (this.opacity >= 1) {
            this.opacitySpeed = -this.opacitySpeed
        } else if (this.opacity <= 0) {
            this.opacitySpeed = Math.abs(this.opacitySpeed)
        }
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
    }
}

function initCanvas() {
    const ctx = canvas.value.getContext('2d')
    const resizeCanvas = () => {
        const parent = canvas.value.parentElement
        canvas.value.width = parent.offsetWidth
        canvas.value.height = parent.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 创建星星
    const createStars = () => {
        stars = []
        const starCount = Math.floor((canvas.value.width * canvas.value.height) / 900)

        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * canvas.value.width
            const y = Math.random() * canvas.value.height
            const size = Math.random() * 1.4
            const speed = Math.random() * 0.1
            stars.push(new Star(x, y, size, speed))
        }
    }

    createStars()

    // 动画循环
    const animate = () => {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

        stars.forEach(star => {
            star.update()
            star.draw(ctx)

            // 如果星星移出画布底部，重置到顶部
            if (star.y > canvas.value.height) {
                star.y = 0
                star.x = Math.random() * canvas.value.width
            }
        })

        animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // 清理函数
    onUnmounted(() => {
        window.removeEventListener('resize', resizeCanvas)
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId)
        }
    })
}

onMounted(() => {
    initCanvas()
})
</script>

<style scoped>
.star-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}
</style>