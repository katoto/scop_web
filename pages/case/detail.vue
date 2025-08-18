<template>
    <div class="case-detail">
        <div class="article-header">
            <h1 class="article-title">{{ newsDetail.title }}</h1>
            <!-- <div class="article-meta">
                <span class="source" v-if="newsDetail.meta.source">{{ newsDetail.meta.source }}</span>
                <span class="date">{{ newsDetail.meta.date }}</span>
                <span class="location">{{ newsDetail.meta.location }}</span>
            </div> -->
        </div>
        <div class="case-container">
            <div class="content-section">
                <div class="article-content">
                    <template v-for="(item, index) in newsDetail.content" :key="index">
                        <p v-if="item.type === 'paragraph'" v-html="item.text"></p>
                        <h2 v-else-if="item.type === 'heading'" v-html="item.text"></h2>
                        <span v-else-if="item.type === 'image-txt'" v-html="item.text"></span>
                        <img v-else-if="item.type === 'image'" :src="item.src" :alt="item.alt || ''">
                        <hr v-else-if="item.type === 'hr'" />
                        <h6 v-else-if="item.type === 'subTitle'" v-html="item.text"></h6>
                        <div class="case-footer" v-else-if="item.type === 'caseFooter'" v-html="item.text"></div>
                    </template>
                </div>
            </div>

            <!-- Sticky Sidebar -->
            <div v-if="!isMobile" class="case-content-sticky">
                <div class="case-content-sticky-email">
                    <h2 class="title">{{ caseContact.title }}</h2>
                    <input id="k_id_name" type="text" name="name" class="input input-name" required="required"
                        :placeholder="caseContact.name">
                    <input id="k_id_email" type="email" name="email" class="input input-email" required="required"
                        :placeholder="caseContact.email" autocomplete="email">
                    <button type="button" class="button page-newsletter__submit" @click="navigateToContact">{{
                        caseContact.submit
                        }}</button>
                </div>
                <div>
                    <h2 class="title">{{ caseContact.productInfo.title }}</h2>
                    <ul class="product">
                        <template v-for="(item, index) in getRandomItems(caseContact.productInfo.list, 2)" :key="index">
                            <li class="product-li">
                                <div role="group" aria-label="product">
                                    <a>
                                        <img :src="item.img" alt="" class="img" />
                                        <h3 class="product-title">{{ item.name }}
                                            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'>
                                                <path fill='#2D3648'
                                                    d='M6.41.577a.833.833 0 0 1 1.18 0l5.833 5.834a.833.833 0 0 1 0 1.178l-5.834 5.833a.833.833 0 0 1-1.178-1.178l4.41-4.41H1.168a.833.833 0 1 1 0-1.667h9.655L6.41 1.756a.833.833 0 0 1 0-1.179Z' />
                                            </svg>
                                        </h3>
                                        <p class="product-text">
                                            {{ item.desc }}
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <!-- 产品模块移动端展示-->
            <div v-if="isMobile" class="mobile-product-section">
                <div class="mobile-contact-form">
                    <h2 class="title">{{ caseContact.title }}</h2>
                    <input id="k_id_name_mobile" type="text" name="name" class="input input-name" required="required"
                        :placeholder="caseContact.name">
                    <input id="k_id_email_mobile" type="email" name="email" class="input input-email"
                        required="required" :placeholder="caseContact.email" autocomplete="email">
                    <button type="button" class="button page-newsletter__submit" @click="navigateToContact">{{
                        caseContact.submit
                        }}</button>
                </div>
                <div class="mobile-product-info">
                    <h2 class="title">{{ caseContact.productInfo.title }}</h2>
                    <ul class="product mobile-product">
                        <template v-for="(item, index) in getRandomItems(caseContact.productInfo.list, 2)" :key="index">
                            <li class="product-li mobile-product-li">
                                <div role="group" aria-label="product">
                                    <a>
                                        <img :src="item.img" alt="" class="img" />
                                        <h3 class="product-title">{{ item.name }}
                                            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'>
                                                <path fill='#2D3648'
                                                    d='M6.41.577a.833.833 0 0 1 1.18 0l5.833 5.834a.833.833 0 0 1 0 1.178l-5.834 5.833a.833.833 0 0 1-1.178-1.178l4.41-4.41H1.168a.833.833 0 1 1 0-1.667h9.655L6.41 1.756a.833.833 0 0 1 0-1.179Z' />
                                            </svg>
                                        </h3>
                                        <p class="product-text">
                                            {{ item.desc }}
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getCaseDetail, caseContact } from '@/data/case'
import { ref, onMounted, onUnmounted } from 'vue'

const { locale } = useI18n()
const localePath = useLocalePath()
const router = useRouter()
const newsDetail = getCaseDetail(locale.value)

// 响应式检测移动端
const isMobile = ref(false)

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
}

const getRandomItems = (arr, count) => {
    // 随机取其中2个
    const shuffled = arr.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

const navigateToContact = () => {
    router.push(localePath('/contact'))
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
    margin: 80px auto 40px;
    padding: 10px 10px 40px 10px;

    // margin-left: 100px;
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
            width: 100%;

            &.input-name {
                margin-bottom: 8px;
            }
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
    padding: 0px 0 40px 30px;
    border-radius: 8px;
    flex: 1;
    min-width: 0;
}

.article-header {
    margin-bottom: 30px;
    text-align: left;
    margin: 0 30px;

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
        margin: 10px auto 4px;
        max-width: 80%;
        margin: 0 auto 10px;
    }

    span {
        font-size: 14px;
        text-align: center;
        display: block;
        margin-bottom: 12px;
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

:global(.case-footer) {
    line-height: 22px;
    font-size: 15px;
}

// 移动端产品模块样式
.mobile-product-section {
    width: 100%;
    margin-top: 30px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;

    .mobile-contact-form {
        margin-bottom: 40px;
        padding-bottom: 30px;
        border-bottom: 1px solid #e5e5e5;

        .title {
            font-size: 18px;
            font-weight: 500;
            color: #0B1C30;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: .01em;
        }

        .input {
            font-size: 16px;
            background: #fff;
            border-radius: 4px;
            border: 1px solid #e5e5e5;
            color: #333;
            display: block;
            padding: 14px 16px;
            resize: none;
            transition: border-color .1s ease-in-out;
            width: 100%;
            box-sizing: border-box;

            &.input-name {
                margin-bottom: 12px;
            }

            &.input-email {
                margin-bottom: 12px;
            }

            &:focus {
                outline: none;
                border-color: #0B1C30;
            }
        }

        .button {
            font-size: 16px;
            font-weight: 600;
            line-height: 163%;
            display: inline-block;
            text-decoration: none;
            text-align: center;
            transition: all 0.15s;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            padding: 12px 24px;
            box-sizing: border-box;
            background-color: #0B1C30;
            color: #fff;
            width: 100%;

            &:hover {
                background-color: #1a2f45;
            }
        }
    }

    .mobile-product-info {
        .title {
            font-size: 18px;
            font-weight: 500;
            color: #0B1C30;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: .01em;
        }

        .mobile-product {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;

            .mobile-product-li {
                border: 1px solid #F1F4F6;
                border-radius: 12px;
                transition: .3s;
                padding: 16px;
                text-align: left;
                cursor: pointer;
                background: #fff;

                .img {
                    display: block;
                    width: 100px;
                    height: 100px;
                    object-fit: contain;
                    object-position: center;
                    background-color: #fff;
                    padding: 6px;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    border-radius: 4px;
                    border: 1px solid #f0f0f0;
                }

                .product-title {
                    font-size: 14px;
                    line-height: 150%;
                    font-weight: 500;
                    color: #0B1C30;
                    margin-bottom: 6px;
                    margin-top: 0;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .product-text {
                    font-size: 12px;
                    line-height: 1.4;
                    color: #666;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                &:hover {
                    background-color: #F8F9FA;
                    border-color: #e0e0e0;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .case-detail {
        padding: 20px 15px;

        .article-header {
            margin: 0 10px;
        }
    }

    .case-container {
        margin-top: 10px;
        flex-direction: column;
    }

    .content-section {
        padding: 0 10px;
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
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }

}
</style>