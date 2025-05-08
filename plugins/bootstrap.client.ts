import { defineNuxtPlugin } from '#app'
import { createBootstrap } from 'bootstrap-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  const bootstrap = createBootstrap()
  nuxtApp.vueApp.use(bootstrap)
}) 