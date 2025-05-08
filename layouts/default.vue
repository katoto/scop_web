<script setup lang="ts">
</script>

<template>
  <div>
    <!-- <nuxt /> -->
    <div class="min-h-screen flex flex-col">
      <header class="fixed w-full z-50" :style="{ border: '1px solid red' }">
        <div class="container">
          <div class="flex justify-between items-center h-16">
            <ComHeader />
          </div>
        </div>
      </header>
      <main class="flex-grow pt-16">
        <slot></slot>
      </main>
      <ComFooter />
    </div>
  </div>
</template>
