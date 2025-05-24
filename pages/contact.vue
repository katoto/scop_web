<template>
  <div class="contact-page">
    <!-- 背景图 -->
    <div class="content-product">
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
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp
}

.contact-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  .content-product {
    background-image: url('/contact/contact_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -140px;
    height: 69vh;
    display: flex;
    align-items: center;

    .title {
      position: relative;
      z-index: 12;
      color: #fff;
      text-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
      margin: 0;
      animation: fadeInUp 1.2s;
      margin-left: 70px;
      font-size: 24px;
      margin-top: -100px;
    }
  }

  .qrcode-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    .qrcode-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #faa73c;

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
          height: 16px;
          display: block;
          margin-right: 2px;
        }

        .logo-name {
          font-weight: bold;
        }
      }
    }
  }
}
</style>