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
                        <p v-if="item.type === 'paragraph'" v-html="item.text"></p>
                        <h2 v-else-if="item.type === 'heading'" v-html="item.text"></h2>
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
                                <a>
                                    <img src="/images/pro-3.png" alt="" class="img" />
                                    <h3 class="product-title">蘑菇精
                                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'>
                                            <path fill='#2D3648'
                                                d='M6.41.577a.833.833 0 0 1 1.18 0l5.833 5.834a.833.833 0 0 1 0 1.178l-5.834 5.833a.833.833 0 0 1-1.178-1.178l4.41-4.41H1.168a.833.833 0 1 1 0-1.667h9.655L6.41 1.756a.833.833 0 0 1 0-1.179Z' />
                                        </svg>
                                    </h3>
                                    <p class="product-text">
                                        CP-101 - 为免疫调节与健康支持提供坚实保障
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="product-li">
                            <div role="group" aria-label="product">
                                <a>
                                    <img src="/images/pro-4.png" alt="" class="img" />
                                    <h3 class="product-title">固本金刚丸
                                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'>
                                            <path fill='#2D3648'
                                                d='M6.41.577a.833.833 0 0 1 1.18 0l5.833 5.834a.833.833 0 0 1 0 1.178l-5.834 5.833a.833.833 0 0 1-1.178-1.178l4.41-4.41H1.168a.833.833 0 1 1 0-1.667h9.655L6.41 1.756a.833.833 0 0 1 0-1.179Z' />
                                        </svg>
                                    </h3>
                                    <p class="product-text">
                                        CP-101 - 永葆20岁的健康活力，从血管开始激活
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

</script>

<style lang="less" scoped>
.pointer-events-none {
    pointer-events: none
}

.case-detail {
    max-width: 1200px;
    margin: 50px auto;
    padding: 10px 10px 40px 10px;
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
            text-align: center;
            cursor: pointer;

            .img {
                max-width: 74%;
                object-fit: cover;
                object-position: center;
                scale: 1;
                background-color: #fff;
                padding: 10px 20px;
                margin-bottom: 10px;
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
                text-align: left;
                display: flex;
                align-items: center;
                gap: 4px;
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
                text-align: left;
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
    padding: 40px 0 40px 30px;
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
        max-width: 80%;
        margin: 0 auto 10px;
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

    b {
        font-weight: bold;
        color: #222;
    }

    li {
        margin: 8px 0;
        padding-left: 20px;
        position: relative;
        
        &::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #666;
        }
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