<template>
  <footer class="bg-light py-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4">
          <h5>{{ $t('footer.solutions') }}</h5>
          <ul class="list-unstyled">
            <li><NuxtLink :to="switchLocalePath('/solution/passenger')">{{ $t('nav.passenger') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/solution/commercialEV')">{{ $t('nav.commercialEV') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/solution/energyStorage')">{{ $t('nav.energyStorage') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/solution/recycling')">{{ $t('nav.recycling') }}</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-3 mb-4">
          <h5>{{ $t('footer.rd') }}</h5>
          <ul class="list-unstyled">
            <li><NuxtLink :to="switchLocalePath('/rd/innovation')">{{ $t('footer.innovation') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/rd/technology')">{{ $t('footer.technology') }}</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-3 mb-4">
          <h5>{{ $t('footer.brand') }}</h5>
          <ul class="list-unstyled">
            <li><NuxtLink :to="switchLocalePath('/brand/tech')">{{ $t('footer.techBrand') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/brand/service')">{{ $t('footer.serviceBrand') }}</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-3 mb-4">
          <h5>{{ $t('footer.about') }}</h5>
          <ul class="list-unstyled">
            <li><NuxtLink :to="switchLocalePath('/about/culture')">{{ $t('footer.culture') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/about/strategy')">{{ $t('footer.strategy') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/about/profile')">{{ $t('footer.profile') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/about/sustainability')">{{ $t('footer.sustainability') }}</NuxtLink></li>
            <li><NuxtLink :to="switchLocalePath('/about/careers')">{{ $t('footer.careers') }}</NuxtLink></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <p class="mb-0">&copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}</p>
        </div>
        <div class="col-md-6 text-md-end">
          <ul class="list-inline mb-0">
            <li class="list-inline-item"><NuxtLink :to="switchLocalePath('/privacy')">{{ $t('footer.privacy') }}</NuxtLink></li>
            <li class="list-inline-item"><NuxtLink :to="switchLocalePath('/legal')">{{ $t('footer.legal') }}</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="less" scoped>
footer {
  a {
    color: #666;
    text-decoration: none;
    
    &:hover {
      color: #007bff;
    }
  }
  
  h5 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  ul {
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  hr {
    margin: 2rem 0;
  }
  
  .list-inline-item {
    margin-left: 1rem;
    
    &:first-child {
      margin-left: 0;
    }
  }
}
</style> 