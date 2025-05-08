<template>
  <div class="about-page">
    <!-- 页面标题 -->
    <div class="page-header bg-light py-5">
      <div class="container">
        <h1 class="display-4">{{ $t('about.title') }}</h1>
        <p class="lead">{{ $t('about.subtitle') }}</p>
      </div>
    </div>

    <!-- 公司概况 -->
    <section class="company-overview py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="mb-4">{{ $t('about.overview.title') }}</h2>
            <p class="mb-4">{{ $t('about.overview.description') }}</p>
            <div class="row">
              <div class="col-md-6 mb-4">
                <h5>{{ $t('about.overview.mission.title') }}</h5>
                <p>{{ $t('about.overview.mission.description') }}</p>
              </div>
              <div class="col-md-6 mb-4">
                <h5>{{ $t('about.overview.vision.title') }}</h5>
                <p>{{ $t('about.overview.vision.description') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="/images/logo.png" alt="Company" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- 全球布局 -->
    <section class="global-presence py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('about.global.title') }}</h2>
        <p class="text-center mb-5">{{ $t('about.global.description') }}</p>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">{{ $t('about.global.manufacturing.title') }}</h5>
                <p class="card-text">{{ $t('about.global.manufacturing.description') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">{{ $t('about.global.rd.title') }}</h5>
                <p class="card-text">{{ $t('about.global.rd.description') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">{{ $t('about.global.sales.title') }}</h5>
                <p class="card-text">{{ $t('about.global.sales.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section class="corporate-culture py-5">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('about.culture.title') }}</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="bi bi-lightbulb display-4 text-primary mb-3"></i>
              <h4>{{ $t('about.culture.innovation.title') }}</h4>
              <p>{{ $t('about.culture.innovation.description') }}</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="bi bi-award display-4 text-primary mb-3"></i>
              <h4>{{ $t('about.culture.quality.title') }}</h4>
              <p>{{ $t('about.culture.quality.description') }}</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="bi bi-globe display-4 text-primary mb-3"></i>
              <h4>{{ $t('about.culture.sustainability.title') }}</h4>
              <p>{{ $t('about.culture.sustainability.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style lang="less" scoped>
.about-page {
  .page-header {
    background-color: #f8f9fa;
    margin-bottom: 2rem;
  }

  .company-overview {
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .card {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  .bi {
    color: #007bff;
  }
}
</style> 