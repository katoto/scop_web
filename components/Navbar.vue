<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
    <div class="container">
      <NuxtLink class="navbar-brand" :to="localePath('/')">
        <img src="/images/svg/logo.svg" alt="Logo" height="40">
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
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
          <button class="btn btn-link dropdown-toggle text-dark" type="button" id="languageDropdown"
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
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const route = useRoute()

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

  .nav-link {
    font-weight: 500;
    padding: 0.5rem 1rem;

    &:hover {
      color: #007bff;
    }
  }

  .dropdown-toggle {
    text-decoration: none;

    &:after {
      margin-left: 0.5rem;
    }
  }

  .dropdown-menu {
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .dropdown-item {
      padding: 0.5rem 1.5rem;

      &:hover {
        background-color: #f8f9fa;
      }
    }
  }
}
</style>