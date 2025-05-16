<script setup lang="ts">
import { toRefs, } from 'vue'

let props = defineProps(['index'])
let { index } = toRefs(props)
console.log('index', index);

const products = [
    {
        id: 1,
        name: "产品一",
        description:
            "这是产品一的详细介绍。这是一个创新的解决方案，能够帮助用户更好地完成工作。",
        image: "/images/pro-3.png",
        color:
            "linear-gradient(135deg, rgba(255, 107, 107, 0.7), rgba(255, 230, 109, 0.5))",
        animationType: "default",
    },
    {
        id: 2,
        name: "产品二",
        description:
            "这是产品二的详细介绍。这是一个革命性的产品，能够改变用户的生活方式。",
        image: "/images/pro-4.png",
        color:
            "linear-gradient(135deg, rgba(78, 205, 196, 0.7), rgba(85, 98, 112, 0.5))",
        animationType: "wave",
    },
    {
        id: 3,
        name: "产品三",
        description:
            "这是产品三的详细介绍。这是一个突破性的技术，能够提升用户的工作效率。",
        image: "/images/pro-2.png",
        color:
            "linear-gradient(135deg, rgba(168, 230, 207, 0.7), rgba(255, 211, 182, 0.5))",
        animationType: "pulse",
    },
    {
        id: 4,
        name: "产品四",
        description:
            "这是产品四的详细介绍。这是一个创新的设计，能够满足用户的多样化需求。",
        image: "/images/pro-1.png",
        color:
            "linear-gradient(135deg, rgba(184, 242, 230, 0.7), rgba(255, 166, 158, 0.5))",
        animationType: "float",
    },
];


</script>

<template>
    <div v-if="index !== null" class="pc-show">
        <div class="pc-picture">
            <img class="img-detail" :src="products[index].image" />
        </div>
        <div class="product-detail-desc">
            <div class="detail-content-block">
                <div class="icon-title">
                    <span class="icon">🍄</span>
                    <span class="title">{{ products[index].name }}&nbsp;CP-101</span>
                </div>
                <div class="desc-list">
                    <div>天然蘑菇提取物为主要活性成分</div>
                    <div>增强免疫力，辅助癌症治疗</div>
                    <div>抑制癌细胞增殖，促进细胞正常凋亡</div>
                </div>
                <button class="detail-btn">点击了解更多</button>
            </div>

        </div>
    </div>
</template>

<style scoped>
.pc-show {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: absolute;
    top: 100px;
    left: 0px;
    width: 100%;
    padding-top: 20vh;
    z-index: 1;
}

@media (max-width: 768px) {
    .pc-show {
        display: none;
    }
}

.pc-picture {

    width: 45%;
    box-sizing: border-box;
    position: relative;
    /* height: 100%; */
}

@keyframes imgFadeIn {
    from {
        bottom: -50px;
        right: 0px;
    }

    to {
        bottom: 10px;
        right: 100px;
    }
}



.img-detail {
    /* 图片 */
    position: absolute;
    bottom: 10px;
    right: 100px;
    height: 250px;
    animation: imgFadeIn 0.3s ease 1;
}

.product-detail-desc {
    width: 55%;
    padding: 0 20px;
    box-sizing: border-box;
    animation: detailFadeIn 2.3s ease 1;
}

@keyframes detailFadeIn {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.detail-content-block {
    flex: 1;
    max-width: 600px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* margin-right: 80px; */
    opacity: 1;
    transform: translateX(0);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;

    &.hidden {
        opacity: 0;
        transform: translateX(30px);
    }

    .icon-title {
        display: flex;
        align-items: center;
        font-size: 2.6rem;
        font-weight: bold;
        letter-spacing: 0.2em;
        margin-bottom: 32px;
        transform: translateY(0);
        transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

        .icon {
            font-size: 2.2rem;
            margin-right: 18px;
        }

        .title {
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 0.18em;
        }
    }

    .desc-list {
        font-size: 1.3rem;
        line-height: 2.2rem;
        margin-bottom: 36px;
        letter-spacing: 0.18em;
        transform: translateY(0);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;

        div {
            margin-bottom: 8px;
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
    }

    .detail-btn {
        background: #fff;
        color: #1a2b0d;
        border: 2px solid #fff;
        border-radius: 4px;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 8px 24px;
        cursor: pointer;
        letter-spacing: 0.18em;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 1;
        transform: translateY(0);

        &:hover {
            background: #e6f5c9;
            color: #1a2b0d;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
    }
}
</style>