<script setup lang="ts">
import { toRefs, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getProducts } from '@/data/products'

const { t, locale } = useI18n()
let props = defineProps<{
  index: number | null
}>()
let { index } = toRefs(props)

const productDetail = computed(() => {
  if (index.value === null) return null
  const products = getProducts(locale.value)
  const product = products[index.value]
  if (!product) return null
  return {
    image: product.image,
    name: product.name,
    subName: product.subName,
    description: product.description,
    link: product.link
  }
})

</script>

<template>
    <div v-if="productDetail" class="pc-show">
        <div class="pc-picture">
            <img class="img-detail" :src="productDetail.image" :alt="productDetail.name" />
        </div>
        <div class="product-detail-desc">
            <div class="detail-content-block">
                <div class="icon-title">
                    <!-- <span class="icon">🍄</span> -->
                    <span class="title">{{ productDetail.name }}</span>
                </div>
                <div class="desc-list">
                    <div>{{ productDetail.subName }}</div>
                    <div>{{ productDetail.description }}</div>
                </div>
                <button class="detail-btn" @click="() => {
                    if (productDetail) navigateTo(productDetail.link)
                }">{{ t('home.detail.learnMore') }}</button>
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
        /* margin-bottom: 32px; */
        margin-bottom: 16px;
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
        color: #C9A14D;
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
            color: #C9A14D;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
    }
}
</style>