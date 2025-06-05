<template>
  <section class="product-section">
    <h2>{{ t('product_type2.sections.section5') }}</h2>
    <section class="product-series-section">
      <div class="series-row" v-for="(row, rowIdx) in rowCount" :key="rowIdx">
        <div class="series-card" v-for="(item, idx) in productSeriesList.slice(rowIdx * 2, rowIdx * 2 + 2)"
          :key="item.title">
          <div class="series-header">
            <div class="series-title">{{ item.title }}</div>
            <div class="series-info">
              <span class="series-concentration">{{ item.concentration }}</span>
              <span class="series-detail">{{ item.detail }}</span>
            </div>
          </div>

          <!-- 疗愈效果表格 -->
          <div class="effect-table-block">
            <div class="effect-title-row">
              <span class="effect-title">{{ t('product_type2.effect.title') }}</span>
              <div class="effect-title-line"></div>
            </div>
            <div class="series-effect-table">
              <div class="effect-row" v-for="(effect, eidx) in item.effects" :key="eidx"
                :class="{ even: eidx % 2 === 0, odd: eidx % 2 === 1 }">
                <span class="effect-check">✓</span>
                <span class="effect-text">{{ effect }}</span>
              </div>
            </div>
          </div>

          <div class="series-desc">{{ item.desc }}</div>
          <div class="series-bottom">
            <div class="series-product-imgs">
              <img :src="item.bottleImg" alt="瓶子" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import { computed } from 'vue'
import { getProductSeries } from '~/data/productSeries'

const productSeriesList = computed(() => getProductSeries(locale.value))
const rowCount = computed(() => Math.ceil(productSeriesList.value.length / 2))
</script>

<style lang="less" scoped>
.product-section {
  margin: 48px auto 0 auto;
  padding: 0 20px;

  h2 {
    color: #222;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
    letter-spacing: 0.08em;
    text-align: center;
  }
}

.product-series-section {
  background-size: cover;
  padding-bottom: 60px;
  font-size: 0.92rem;

  .series-row {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 32px;
    flex-wrap: wrap;

    .series-card {
      width: 46%;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(238, 238, 238, 0.8);
      padding: 20px 14px;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease-in-out;
      transform: translateY(0);
      cursor: pointer;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 24px rgba(196, 154, 108, 0.15);

        .series-title {
          color: #7a5a2a;
        }

        .effect-title-line {
          width: 100%;
          opacity: 1;
        }

        .effect-row {
          transform: translateX(4px);

          &.odd {
            background: #f8f8f8;
          }
        }
      }

      .series-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10px;

        .series-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #c49a6c;
          line-height: 1.1;
          letter-spacing: 0.02em;

          span {
            color: #7a5a2a;
            font-weight: 700;
            margin-left: 6px;
          }
        }

        .series-info {
          text-align: right;
          font-size: 0.95rem;

          .series-concentration {
            color: #c49a6c;
            font-weight: bold;
            margin-right: 4px;
          }

          .series-detail {
            color: #444;
            font-weight: 400;
          }
        }
      }

      .effect-table-block {
        margin-top: 6px;
        padding-top: 6px;

        .effect-title-row {
          display: flex;
          align-items: center;
          margin-bottom: 4px;

          .effect-title {
            font-size: 1.1rem;
            font-weight: bold;
            color: #222;
            margin-right: 16px;
            position: relative;
            padding-left: 0;
          }

          .effect-title-line {
            flex: 1;
            height: 2px;
            background: #b98c54;
            margin-left: 8px;
            width: 80%;
            opacity: 0.8;
            transition: all 0.3s ease-in-out;
          }
        }

        .series-effect-table {
          width: 100%;

          .effect-row {
            display: flex;
            align-items: center;
            font-size: 0.98rem;
            padding: 0 10px;
            height: 28px;
            background: #c49a6c;
            color: #fff;
            transition: all 0.2s ease-in-out;
            transform: translateX(0);

            &.odd {
              background: #f5f5f5;
              color: #a97c3a;
            }

            .effect-check {
              margin-right: 10px;
              font-size: 1em;
              color: #a97c3a;
              font-weight: bold;
              min-width: 18px;
              text-align: left;
            }

            .effect-text {
              flex: 1;
              text-align: left;
              font-size: 1em;
              font-weight: 500;
              letter-spacing: 0.01em;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }

      .series-desc {
        text-align: center;
        font-size: 22px;
        margin: 30px 0;
        opacity: 0.3;
        color: #c49a6c;
      }

      .series-bottom {
        display: flex;
        align-items: center;

        .series-product-imgs img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .product-series-section {
    .series-row {
      gap: 16px;
      margin-bottom: 16px;

      .series-card {
        width: 100%;
        padding: 16px 12px;

        .series-header {
          .series-title {
            font-size: 1.2rem;
          }

          .series-info {
            font-size: 0.9rem;
          }
        }

        .effect-table-block {
          .effect-title-row {
            .effect-title {
              font-size: 1rem;
            }
          }

          .series-effect-table {
            .effect-row {
              font-size: 0.9rem;
              height: 24px;
              padding: 0 8px;
            }
          }
        }

        .series-desc {
          font-size: 18px;
          margin: 20px 0;
        }
      }
    }
  }
}
</style>