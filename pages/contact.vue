<template>
  <div class="contact-page">
    <!-- 修改顶部背景部分 -->
    <div class="contact-hero">
      <img class="contact-bg" src="/contact/contact_bg.png" alt="">
      <h2 class="title">{{ $t('contact.title') }}</h2>
    </div>

    <!-- qrcode -->
    <div class="qrcode-wrap">
      <div class="qrcode-item">
        <img class="qrcode" src="/contact/scophil_qr.jpg" alt="">
        <h4 class="sub-title">{{ $t('contact.title') }}</h4>
        <div class="wechat-cont"><img class="icon_wechat" src="/contact/wechat.jpeg" alt=""><span
            class="logo-name">scophil</span></div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.contact-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.contact-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;

  .contact-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center -140px;
    height: 400px;
    z-index: 1;
  }

  .title {
    position: relative;
    z-index: 12;
    color: #fff;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
    margin: 0;
    display: flex;
    align-items: center;
    margin-left: 100px;
    font-size: 2rem;
    animation: fadeInUp 1.2s;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(10, 37, 114, .1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 64%;
    background: linear-gradient(180deg, rgba(10, 37, 114, .4), rgba(10, 37, 114, 0));
  }
}

.qrcode-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;

  .qrcode-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #C9A14D;

    .sub-title {
      margin-top: 30px;
      font-size: 20px;
      margin-bottom: 2px;
      font-family: monospace;
    }

    .qrcode {
      width: 180px;
      height: 180px;
    }

    .wechat-cont {
      display: flex;
      align-items: center;

      .icon_wechat {
        width: 19px;
        height: 15px;
        display: block;
        margin-right: 3px;
      }

      .logo-name {
        font-weight: bold;
        font-family: 'Source Han Sans SC', '思源黑体', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      }
    }
  }
}

// 移动端适配
@media screen and (max-width: 768px) {
  .contact-hero {
    height: 300px;

    .contact-bg {
      height: 300px;
      object-position: center -80px;
    }

    .title {
      margin-left: 40px;
      font-size: 1.8rem;
    }
  }

  .qrcode-wrap {
    padding: 40px 0;

    .qrcode-item {
      .sub-title {
        margin-top: 24px;
        font-size: 18px;
      }

      .qrcode {
        width: 160px;
        height: 160px;
      }

      .wechat-cont {
        .icon_wechat {
          width: 17px;
          height: 13px;
        }

        .logo-name {
          font-size: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .contact-hero {
    height: 240px;

    .contact-bg {
      height: 240px;
      object-position: center -60px;
    }

    .title {
      margin-left: 20px;
      font-size: 1.5rem;
    }
  }

  .qrcode-wrap {
    padding: 30px 0;

    .qrcode-item {
      .sub-title {
        margin-top: 20px;
        font-size: 16px;
        margin-bottom: 1px;
      }

      .qrcode {
        width: 140px;
        height: 140px;
      }

      .wechat-cont {
        .icon_wechat {
          width: 15px;
          height: 11px;
        }

        .logo-name {
          font-size: 14px;
        }
      }
    }
  }
}
</style>