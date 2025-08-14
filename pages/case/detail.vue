<template>
    <div class="case-detail">
        <div class="article-header">
            <h1 class="article-title">{{ newsDetail.title }}</h1>
            <div class="article-meta">
                <span class="source">{{ newsDetail.meta.source }}</span>
                <span class="date">{{ newsDetail.meta.date }}</span>
                <span class="location">{{ newsDetail.meta.location }}</span>
            </div>
        </div>
        <div class="case-container">
            <!-- Main Content Section -->
            <div class="content-section">
                <!-- Video Module -->
                <div class="article-content">
                    <template v-for="(item, index) in newsDetail.content" :key="index">
                        <p v-if="item.type === 'paragraph'">{{ item.text }}</p>
                        <h2 v-else-if="item.type === 'heading'">{{ item.text }}</h2>
                        <img v-else-if="item.type === 'image'" :src="item.src" :alt="item.alt || ''">
                    </template>
                </div>
            </div>

            <!-- Sticky Sidebar -->
            <div v-if="!isMobile" class="case-content-sticky">
                <div class="case-content-sticky-email">
                    <h2 class="title">Newsletter</h2>
                    <input id="k_id_email" type="email" name="email" class="input" required="required"
                        placeholder="* Email required" autocomplete="email">
                    <button type="submit" class="button page-newsletter__submit">Sign Up</button>
                </div>

                <div>
                    <h2 class="title">Related Products</h2>
                    <ul class="product">
                        <li class="product-li">
                            <div role="group" aria-label="product">
                                <a href="/products/mosaic">
                                    <img src="//www.elysiumhealth.com/cdn/shop/files/MosaicShopAll.png?v=1752787865&amp;width=200"
                                        alt="" class="img">
                                    <h3 class="product-title">Mosaic</h3>
                                    <p class="product-text">
                                        Your skin is your largest organ, and your most visible. It faces the world and
                                        protects you
                                        from it. As you age, your skin loses elasticity and moisture–making it more
                                        susceptible to
                                        environmental ...
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="product-li">
                            <div role="group" aria-label="product">
                                <a href="/products/mosaic">
                                    <img src="//www.elysiumhealth.com/cdn/shop/files/MosaicShopAll.png?v=1752787865&amp;width=200"
                                        alt="" class="img">
                                    <h3 class="product-title">Mosaic</h3>
                                    <p class="product-text">
                                        Your skin is your largest organ, and your most visible. It faces the world and
                                        protects you
                                        from it. As you age, your skin loses elasticity and moisture–making it more
                                        susceptible to
                                        environmental ...
                                    </p>
                                </a>
                            </div>
                        </li>

                    </ul>

                </div>



            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getCaseDetail } from '@/data/case'
import { ref, onMounted, onUnmounted } from 'vue'

const { locale } = useI18n()
const newsDetail = getCaseDetail(locale.value)

// 响应式检测移动端
const isMobile = ref(false)

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})

console.log('>>>newsDetail>', newsDetail)
console.log('>>>newsDetail>', locale.value)
</script>

<style lang="less" scoped>
.pointer-events-none {
    pointer-events: none
}

.case-detail {
    max-width: 1200px;
    margin: 50px auto;
    padding: 40px 10px 40px 0;
    margin-left: 100px;
    // box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}

.case-container {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-top: 20px;

}

.case-content-sticky {
    border-top: 3px solid #222121;
    position: sticky;
    top: 70px;
    width: 220px;
    min-height: 200px;
    flex-shrink: 0;
    background: #fff;
    padding: 20px;

    .case-content-sticky-email {
        margin-bottom: 40px;


        .input {
            font-size: 14px;
            background: 0 0;
            border-radius: 0;
            border: 1px solid #e5e5e5;
            color: #fff;
            display: block;
            padding: 12px 14px;
            resize: none;
            -webkit-transition: border-color .1s ease-in-out;
            transition: border-color .1s ease-in-out;
            width: 100%
        }

        .button {
            font-size: 15px;
            font-weight: 600;
            line-height: 163%;
            display: inline-block;
            text-decoration: none;
            text-align: center;
            transition: all 0.15s;
            border: none;
            border-radius: 0;
            cursor: pointer;
            padding: 8px 24px;
            box-sizing: border-box;
            background-color: transparent;
            border: 2px solid rgb(11, 28, 48);
            border-color: rgb(11, 28, 48);
            color: rgb(11, 28, 48);
            width: 100%;
            margin-top: 8px;


            &:hover {
                background-color: #0B1C30;
                color: #fff;
                border-color: #0B1C30;
            }
        }
    }

    .product {
        .product-li {
            border: 1px solid #F1F4F6;
            border-radius: 12px;
            transition: .3s;
            padding: 24px;
            margin-bottom: 16px;

            .img {
                max-width: 100%;
                aspect-ratio: 9 / 7;
                object-fit: cover;
                object-position: center;
            }

            .product-title {
                position: relative;
                width: max-content;
                font-size: 16px;
                line-height: 150%;
                font-weight: 400;
                color: #0B1C30;
                margin-bottom: 4px;
                margin-top: 2px;
            }

            .product-text {
                font-size: 12px;
                margin-top: 4px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                margin-bottom: 0;
                color: rgb(11, 28, 48);
            }

            &:hover {
                background-color: #F1F4F6;
            }
        }
    }

    .title {
        font-size: .875rem;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: .01em;
        text-transform: uppercase;
        font-weight: 500;
        color: #0B1C30;
    }
}

.content-section {
    background: #fff;
    padding: 40px 20px 40px 40px;
    border-radius: 8px;
    flex: 1;
    min-width: 0;
}

.article-header {
    margin-bottom: 30px;
    text-align: left;
    margin: 0 40px;

    .article-title {
        font-size: 32px;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
        line-height: 1.4;
    }

    .article-meta {
        color: #666;
        font-size: 14px;

        span {
            margin: 0 10px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
}

.article-content {
    font-size: 16px;
    line-height: 1.8;
    color: #333;

    img {
        display: block;
        margin: 10px auto;
    }

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin: 40px 0 20px;
        color: #222;
    }

    p {
        margin-bottom: 20px;
        text-align: justify;
    }
}

@media (max-width: 768px) {
    .case-detail {
        padding: 20px 15px;
    }

    .content-section {
        padding: 20px;
    }

    .article-header {
        .article-title {
            font-size: 24px;
        }
    }

    .article-content {
        font-size: 15px;

        h2 {
            font-size: 20px;
        }
    }

}
</style>