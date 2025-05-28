<template>
    <div class="news-detail">
        <!-- Content Section -->
        <div class="content-section">
            <div class="article-header">
                <h1 class="article-title">{{ newsDetail.title }}</h1>
                <div class="article-meta">
                    <span class="source">{{ newsDetail.meta.source }}</span>
                    <span class="date">{{ newsDetail.meta.date }}</span>
                    <span class="location">{{ newsDetail.meta.location }}</span>
                </div>
            </div>

            <!-- Video Module -->
            <div class="video-module" v-if="newsDetail.video">
                <video class="main-video" controls :poster="newsDetail.video.poster">
                    <source :src="newsDetail.video.src" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <div class="article-content">
                <template v-for="(item, index) in newsDetail.content" :key="index">
                    <p v-if="item.type === 'paragraph'">{{ item.text }}</p>
                    <h2 v-else-if="item.type === 'heading'">{{ item.text }}</h2>
                    <img v-else-if="item.type === 'image'" :src="item.src" :alt="item.alt || ''">
                </template>

                <div class="media-coverage" v-if="newsDetail.media">
                    <h2>{{ newsDetail.media.title }}</h2>
                    <ul class="media-list">
                        <li v-for="(media, index) in newsDetail.media.list" :key="index">
                            <a :href="media.link" target="_blank" rel="noopener noreferrer">
                                {{ media.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getNewsDetail } from '@/data/news'

const { locale } = useI18n()
const newsDetail = getNewsDetail(locale.value)
</script>

<style lang="less" scoped>
.pointer-events-none {
    pointer-events: none
}

.news-detail {
    max-width: 1200px;
    margin: 50px auto;
    padding: 40px 20px;
}

.video-module {
    width: 86%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    margin-bottom: 40px;

    .main-video {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
    }
}

.content-section {
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.article-header {
    margin-bottom: 30px;
    text-align: center;

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

.media-coverage {
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid #eee;

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 30px;
        color: #222;
    }

    .media-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        li {
            a {
                display: inline-block;
                padding: 8px 16px;
                background: #f5f5f5;
                border-radius: 4px;
                color: #333;
                text-decoration: none;
                transition: all 0.3s ease;

                &:hover {
                    background: #e0e0e0;
                    color: #007bff;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .news-detail {
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

    .media-coverage {
        margin-top: 40px;
        padding-top: 30px;

        h2 {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .media-list {
            gap: 15px;

            li a {
                padding: 6px 12px;
                font-size: 14px;
            }
        }
    }
}
</style>