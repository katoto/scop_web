<script setup lang="ts">

</script>

<template>

  <div class="contact-page">

    <!-- 背景图 -->
    <div class="content-product">
      <div class="pinzi-box-wrap">
        <StarCanvas />
        <div class="pinzi-box">
          <img src="/images/pro-3.png" class="pinzi" />
          <img src="/images/pro-4.png" class="pinzi" />
          <img src="/images/pro-2.png" class="pinzi" />
          <img src="/images/pro-1.png" class="pinzi" />
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="less" scoped>
@keyframes sweep {
  0% {
    left: -100%;
  }

  100% {
    left: 200%;
  }
}

.contact-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  .page-header {
    background-color: #f8f9fa;
    margin-bottom: 2rem;
  }

  .content-product {
    background-image: url('/images/bg-line-2.png');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .pinzi-box-wrap {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      .pinzi-box {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        padding: 0 20px;

        .pinzi {
          -webkit-box-reflect: below -6px linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));
          width: clamp(100px, 15vw, 180px);
          height: auto;
          object-fit: contain;
          max-width: 100%;
          transition: transform 0.3s ease;
          margin: 0 10px;

          @media (max-width: 768px) {
            width: clamp(80px, 12vw, 140px);
          }

          @media (max-width: 576px) {
            width: clamp(60px, 10vw, 100px);
          }
        }

        .pinzi:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  .content-product::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 20%;
    height: 100%;
    background: linear-gradient(90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 100%);
    transform: skewX(54deg);
    animation: sweep 4s linear infinite;
    // z-index: 1;
  }

  .card {
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .form-control {
    &:focus {
      box-shadow: none;
      border-color: #007bff;
    }
  }

  .btn-primary {
    padding: 0.75rem 2rem;
  }
}
</style>
