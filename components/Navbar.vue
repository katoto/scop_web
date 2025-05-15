<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" :class="{ 'hovernow': isScrolled || isHovered }"
    @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="container">
      <NuxtLink class="navbar-brand" :to="localePath('/')">
        <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1689.13 419.02">
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="209.51" x2="279.35" y2="209.51" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#9e8766" />
              <stop offset=".03" stop-color="#ae9773" />
              <stop offset=".08" stop-color="#c3ae85" />
              <stop offset=".14" stop-color="#d3be92" />
              <stop offset=".2" stop-color="#dcc899" />
              <stop offset=".29" stop-color="#dfcb9c" />
              <stop offset=".61" stop-color="#bda06c" />
              <stop offset="1" stop-color="#725639" />
            </linearGradient>
          </defs>
          <path class="logo-path-1"
            d="M242.38,206.24c-7.71-3.68-16.18-5.7-24.66-5.93l-22.29-.3h-97.19V61.95c-.49-14.25,5.74-27.9,16.59-36.33,21.6-18.53,58.42-6.25,66.02,22.56,4.44,28.92,2.9,65.76,4.64,98.24.13,2.31,1.94,4.3,4.2,4.38,2.39.07,4.39-1.88,4.46-4.38l1.36-47.19c16.6-.26,32.78-2.37,45.95,5.88,14.75,7.97,25.9,25.26,26.96,42.5.19,1.91,1.78,3.51,3.65,3.45,1.95-.07,3.48-1.78,3.41-3.81.02-10.39-4-20.25-8.82-28.83-5.14-8.7-12.42-16.05-20.98-21.18-15.91-10.07-33.9-8.31-49.93-8.49.42-14.27,2.31-27.79-1.01-44.77-4.6-18.71-18.89-34.28-36.51-40.61-17.56-6.48-38.21-3.52-53.36,8.16-15.38,11.18-24.77,31.13-24.43,50.43l-.27,27.44c-11.69.02-23.64-1.47-36.45,2.35-15.52,4.75-29.09,16.39-36.66,31.68-15.92,30.28-4.24,74.92,28.91,90.09,7.87,3.91,16.58,5.47,25.35,5.84h17.6c-.38,31.21.21,62.75.23,93.97.03,1.62.02,3.16.04,4.75-15.65.51-30.52,1.56-42.61-6.67-15.02-8.89-25.09-26.41-25.22-44.77-.06-2.32-1.88-4.27-4.12-4.29-2.29-.02-4.17,1.9-4.18,4.29-.54,21.3,10.55,42.55,28.25,53.86,8.77,5.72,19.04,9.04,29.45,9.49l18.5.34c0,10.92-.01,21.8.64,34.46,2.26,19.99,14.36,38.38,31.5,47.4,17.05,9.19,38.05,9.11,54.71-.23,16.62-9,28.41-26.65,30.62-45.77.02-.21.02-.42.04-.63,1.23-12.28-.14-23.73-.45-35.24,12.73-.02,25.12.32,39.38-2.59,16.51-5.16,29.55-17.27,37.1-32.85,16.02-31.33,1.53-74.5-30.4-88.64ZM18.45,129.21c5.3-12.47,15.74-22.72,28.4-27.44,9.73-3.83,21.46-3.51,33.21-3.14l-.13,13.6-.86,87.78h-12.44c-11.63,0-17.83-1.15-28.17-5.19-20.24-7.91-32.02-40-20.01-65.61ZM260.11,288.5c-5.29,12.1-16.09,22.23-27.85,26.2-10.59,2.53-23.71,2.73-36.32,3.08-.6-17.83-1.37-35.4-1.79-53.52-.1-2.35-1.93-4.34-4.22-4.4-2.39-.06-4.38,1.91-4.44,4.4-1.28,33.01,1.82,68.38-3.71,99.42-3.57,29.52-38.39,46.31-61.48,31.24-11.35-6.8-20.77-19.06-22.06-32.54-.52-14.33.04-32.84,0-49.06.03-31.32.39-62.65,0-93.97l52.87-.67,44.32-.57c15.41.16,29.28-2.04,40.35,3.63,23.98,9.81,36.1,42.15,24.34,66.76Z" />
          <path class="logo-path-2"
            d="M479.11,296.72c-18.12,0-32.51-4.45-42.18-14.39-1.24-1.24-1.73-2.97-1.73-4.7,0-3.97,2.48-6.73,6.45-6.73,1.73,0,3.21.52,4.21,1.76,8.94,10.18,20.09,14.12,33.24,14.12,23.58,0,36.97-15.36,36.97-31v-.48c0-20.85-14.15-32.03-38.7-44.18l-.52-.24c-26.03-12.91-38.7-24.55-38.7-47.64,0-28.03,25.82-41.42,50.61-41.42,16.39,0,27.55,3.45,36.73,10.18,2.73,1.97,5.21,5.18,5.21,8.67,0,3.97-2.73,6.7-6.7,6.7-2.24,0-4.45-1-5.97-2.97-6.7-9.18-15.12-14.15-29.51-14.15h-.24c-18.12,0-33.76,10.42-33.76,29.51v1.52c.76,16.85,14.91,24.79,38.45,38.7,23.09,13.39,39.45,25.79,39.45,51.12,0,30.51-25.79,45.88-53.33,45.64ZM749.16,275.63c-14.88,14.88-38.21,21.58-58.79,21.58-52.12,0-85.6-32.73-85.6-85.09s33.48-90.3,86.85-90.3c19.09,0,41.91,6.18,53.58,19.33,2.48,2.73,3.97,5.48,3.97,9.45,0,3.45-3.21,6.7-6.94,6.7-5.97,0-9.42-8.21-13.15-12.18-9.94-10.15-24.33-14.12-38.45-14.12-44.67,0-66.24,36.97-66.24,77.91s20.82,77.39,66.97,77.39c23.82,0,33.51-5.45,51.12-20.33,1.73-1.48,3.48-2.48,5.7-2.48,3.24,0,4.73,2.24,4.73,4.7,0,2.73-1.73,5.73-3.73,7.45ZM903.64,297.21c-51.61,0-85.85-36.7-85.85-87.82s36.24-87.57,85.85-87.57,85.6,38.7,85.6,87.57-34.24,87.82-85.6,87.82ZM903.64,131c-43.91,0-66.48,37.7-66.48,77.91s21.09,77.64,66.48,77.64,66.51-36.21,66.51-77.64-22.61-77.91-66.51-77.91ZM1163.57,203.93c-10.42,9.18-25.3,13.64-49.88,13.64h-26.3c-2.21,0-3.7,1-3.7,2.97v65.27c0,4.45-3.48,8.18-7.94,8.18s-8.21-3.73-8.21-8.18v-150.12c0-5.21,4.24-9.18,9.18-9.18h36.73c20.33,0,33.76,2.73,43.18,8.45,12.88,8.18,19.33,20.33,19.33,36.97,0,14.12-3.97,24.55-12.39,32ZM1110.24,136.21h-17.88c-5.45,0-8.67,3.21-8.67,8.67v60.06c0,1.97,1.48,2.97,3.7,2.97h22.58c32.27,0,47.64-11.42,47.64-35.73s-15.12-35.97-47.36-35.97ZM1371.86,285.81c0,4.45-3.73,8.18-8.18,8.18s-8.21-3.73-8.21-8.18v-71.97c0-2.21-1.24-2.97-3.21-2.97h-80.39c-2.21,0-3.45,1-3.45,3.24v71.7c0,4.45-3.48,8.18-7.94,8.18s-8.21-3.73-8.21-8.18v-152.33c0-4.48,3.73-8.21,8.21-8.21s7.94,3.73,7.94,8.21v64.24c0,2.24.97,3.48,3.21,3.48h80.64c1.97,0,3.21-1,3.21-2.97v-64.76c0-4.48,3.73-8.21,8.21-8.21s8.18,3.73,8.18,8.21v152.33ZM1496.28,285.81c0,4.45-3.48,8.18-7.94,8.18s-8.18-3.73-8.18-8.18v-152.6c0-4.45,3.73-7.94,8.18-7.94s7.94,3.48,7.94,7.94v152.6ZM1684.16,292.75h-47.64c-22.82,0-32-8.42-32-32.24v-127.3c0-4.45,3.73-7.94,8.18-7.94s7.94,3.48,7.94,7.94v131.27c0,12.15,6.45,18.61,18.85,18.61l44.67-.24c2.73,0,4.97,2.21,4.97,4.94s-2.24,4.97-4.97,4.97Z" />
        </svg>
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto" style="margin: 0 auto;">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              {{ $t('nav.solutions') }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" :to="localePath('/solution/passenger')">{{ $t('nav.passenger') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" :to="localePath('/solution/commercialEV')">{{ $t('nav.commercialEV') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" :to="localePath('/solution/energyStorage')">{{ $t('nav.energyStorage')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" :to="localePath('/solution/recycling')">{{ $t('nav.recycling') }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/rd')">{{ $t('nav.rd') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/news')">{{ $t('nav.news') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/brand')">{{ $t('nav.brand') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink>
          </li>
        </ul>

        <!-- Language Switcher -->
        <div class="dropdown">
          <button class="btn btn-link dropdown-toggle" type="button" id="languageDropdown"
            data-bs-toggle="dropdown">
            {{ currentLocale.name }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="locale in availableLocales" :key="locale.code">
              <NuxtLink class="dropdown-item" :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const route = useRoute()

const isScrolled = ref(false)
const isHovered = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const currentLocale = computed(() => {
  return (locales.value).find(i => i.code === locale.value)
})
</script>

<style lang="less" scoped>
.navbar {
  padding: 1rem 0;
  transition: all 0.5s ease;
  background: transparent;

  .logo-svg {
    width: 120px;
    height: auto;
    color: white;
    transition: all 0.5s ease;
  }

  .logo-path-1,
  .logo-path-2 {
    fill: currentColor;
    stroke-width: 0;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    color: white;
    transition: all 0.5s ease;

    &:hover {
      color: #007bff;
    }
  }

  .dropdown-toggle {
    text-decoration: none;
    color: white;
    transition: all 0.5s ease;

    &:after {
      margin-left: 0.5rem;
    }
  }

  .dropdown-menu {
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: transparent;
    transition: all 0.5s ease;

    .dropdown-item {
      padding: 0.5rem 1.5rem;
      color: white;
      transition: all 0.5s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  &.hovernow {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .logo-svg {
      color: transparent;
    }

    .logo-path-1,
    .logo-path-2 {
      fill: url(#logoGradient);
    }

    .nav-link {
      color: rgb(52, 58, 64);

      &:hover {
        color: #007bff;
      }
    }

    .dropdown-toggle {
      color: rgb(52, 58, 64);
    }

    .dropdown-menu {
      background: white;

      .dropdown-item {
        color: rgb(52, 58, 64);

        &:hover {
          background-color: #f8f9fa;
        }
      }
    }
  }
}
</style>