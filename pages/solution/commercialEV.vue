<template>
  <div class="commercial-ev-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="container">
        <div class="row min-vh-100 align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">{{ $t('hero.title') }}</h1>
            <p class="lead mb-5">{{ $t('hero.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="advantages-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('advantages.title') }}</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(advantage, key) in advantages" :key="key">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h3 class="h5 mb-3">{{ $t(`advantages.${key}.title`) }}</h3>
                <p class="card-text">{{ $t(`advantages.${key}.desc`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="solutions-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('solutions.title') }}</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(solution, key) in solutions" :key="key">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h3 class="h5 mb-3">{{ $t(`solutions.${key}.title`) }}</h3>
                <p class="card-text">{{ $t(`solutions.${key}.desc`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const advantages = ['value', 'reliability', 'adaptability', 'service', 'intelligence']
const solutions = ['roadPassenger', 'cityDelivery', 'heavyDuty']
</script>

<style lang="less" scoped>
.commercial-ev-page {
  .hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('/images/commercial-ev-hero.jpg') center/cover no-repeat;
    color: white;
  }

  .card {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  .advantages-section,
  .solutions-section {
    .card {
      border-radius: 1rem;
      
      .card-body {
        padding: 2rem;
      }
    }
  }
}
</style> 